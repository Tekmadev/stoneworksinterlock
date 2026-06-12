"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { getFirebaseDb, hasFirebaseConfig } from "@/lib/firebase";

// ── Types ──────────────────────────────────────────────────────────

type FsTimestamp = { seconds: number; nanoseconds: number };

type Lead = {
  id: string;
  fullName?: string;
  phone?: string;
  email?: string;
  postalCode?: string;
  city?: string;
  address?: string;
  preferredContactMethod?: string;
  serviceSelected?: string;
  serviceName?: string;
  message?: string;
  submittedAt?: string;
  issueType?: string;
  approxArea?: string;
  urgency?: string;
  lastServiceDate?: string;
  weedIssue?: string;
  petFriendly?: string;
  drainageIssues?: string;
  photoUrls?: string[];
  status?: string;
  createdAt?: FsTimestamp;
};

type NewsletterSub = {
  id: string;
  email?: string;
  isSubscribed?: boolean;
  status?: string;
  created_at?: FsTimestamp;
};

type ClickEvent = {
  id: string;
  event?: string;
  placement?: string;
  page?: string;
  createdAt?: FsTimestamp;
};

// ── Constants ──────────────────────────────────────────────────────

const SESSION_KEY = "sw_admin_v1";
const PW = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "stoneworks2024";

const SERVICE_LABELS: Record<string, string> = {
  "interlock-installation": "Interlock Install",
  "patio-installation": "Patio",
  "interlock-repair": "Repair",
  "pressure-washing-resanding": "Pressure Wash",
  "retaining-walls": "Retaining Walls",
  staircases: "Staircases",
};

const STATUS_STYLE: Record<string, string> = {
  new: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  contacted: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  quoted: "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  closed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  lost: "bg-zinc-100 text-zinc-500",
};

// ── Helpers ────────────────────────────────────────────────────────

function tsToMs(ts?: FsTimestamp | null): number {
  return ts?.seconds ? ts.seconds * 1000 : 0;
}

function formatDate(ts?: FsTimestamp | null): string {
  const ms = tsToMs(ts);
  if (!ms) return "—";
  return new Date(ms).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCsv(leads: Lead[]) {
  const headers = [
    "Date", "Name", "Phone", "Email", "Postal", "City", "Address",
    "Service", "Contact Pref", "Status", "Approx Area", "Urgency",
    "Issue Type", "Last Service", "Weed Issue", "Pet Friendly",
    "Drainage", "Message", "Photo Count",
  ];
  const rows = leads.map((l) => [
    formatDate(l.createdAt),
    l.fullName ?? "",
    l.phone ?? "",
    l.email ?? "",
    l.postalCode ?? "",
    l.city ?? "",
    l.address ?? "",
    l.serviceName ?? l.serviceSelected ?? "",
    l.preferredContactMethod ?? "",
    l.status ?? "new",
    l.approxArea ?? "",
    l.urgency ?? "",
    l.issueType ?? "",
    l.lastServiceDate ?? "",
    l.weedIssue ?? "",
    l.petFriendly ?? "",
    l.drainageIssues ?? "",
    (l.message ?? "").replace(/"/g, "'"),
    String(l.photoUrls?.length ?? 0),
  ]);
  const csv = [headers, ...rows]
    .map((r) => r.map((v) => `"${v}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Sub-components ─────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: number | string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm ${highlight ? "border-blue-200 bg-blue-50" : "border-zinc-200 bg-white"}`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">{label}</p>
      <p
        className={`mt-1 text-3xl font-bold ${highlight ? "text-blue-700" : "text-zinc-900"}`}
      >
        {value}
      </p>
      {sub && <p className="mt-0.5 text-[11px] text-zinc-400">{sub}</p>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────

export function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [subs, setSubs] = useState<NewsletterSub[]>([]);
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState(false);
  const [search, setSearch] = useState("");
  const [filterService, setFilterService] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"leads" | "subscribers" | "clicks">("leads");
  const [clickEvents, setClickEvents] = useState<ClickEvent[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    if (!hasFirebaseConfig()) {
      setFirebaseError(true);
      return;
    }
    const db = getFirebaseDb();
    if (!db) {
      setFirebaseError(true);
      return;
    }
    setLoading(true);
    const q = query(collection(db, "contact_data"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setLeads(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Lead, "id">) })));
        setLoading(false);
      },
      () => {
        setFirebaseError(true);
        setLoading(false);
      },
    );
    getDocs(collection(db, "newsletter_emails"))
      .then((snap) =>
        setSubs(
          snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<NewsletterSub, "id">) })),
        ),
      )
      .catch(() => {});

    const clickQ = query(collection(db, "click_events"), orderBy("createdAt", "desc"));
    const unsubClicks = onSnapshot(
      clickQ,
      (snap) => setClickEvents(snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<ClickEvent, "id">) }))),
      () => {},
    );

    return () => { unsub(); unsubClicks(); };
  }, [authed]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pwInput === PW) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
      setPwInput("");
    }
  }

  async function setLeadStatus(id: string, status: string) {
    const db = getFirebaseDb();
    if (!db) return;
    await updateDoc(doc(db, "contact_data", id), { status });
  }

  // ── Date anchors (stable per render cycle) ───────────────────────

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const weekStart = todayStart - now.getDay() * 86_400_000;
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  // ── Stats ────────────────────────────────────────────────────────

  const stats = useMemo(() => {
    const after = (ms: number) => leads.filter((l) => tsToMs(l.createdAt) >= ms).length;
    return {
      total: leads.length,
      today: after(todayStart),
      week: after(weekStart),
      month: after(monthStart),
      uncontacted: leads.filter((l) => !l.status || l.status === "new").length,
      activeSubs: subs.filter((s) => s.isSubscribed !== false).length,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads, subs]);

  // ── Service breakdown ────────────────────────────────────────────

  const serviceBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) {
      const k = l.serviceSelected ?? "other";
      map[k] = (map[k] ?? 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [leads]);

  // ── Monthly trend (last 6 months) ────────────────────────────────

  const monthlyTrend = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const offset = 5 - i;
      const from = new Date(now.getFullYear(), now.getMonth() - offset, 1).getTime();
      const to = new Date(now.getFullYear(), now.getMonth() - offset + 1, 1).getTime();
      const label = new Date(from).toLocaleDateString("en-CA", { month: "short" });
      const count = leads.filter((l) => {
        const ms = tsToMs(l.createdAt);
        return ms >= from && ms < to;
      }).length;
      return { label, count };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leads]);

  const maxMonth = Math.max(...monthlyTrend.map((m) => m.count), 1);
  const maxService = serviceBreakdown[0]?.[1] ?? 1;

  // ── Contact method breakdown ─────────────────────────────────────

  const contactBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) {
      const k = l.preferredContactMethod ?? "unspecified";
      map[k] = (map[k] ?? 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [leads]);

  // ── Status breakdown ─────────────────────────────────────────────

  const statusBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) {
      const k = l.status ?? "new";
      map[k] = (map[k] ?? 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [leads]);

  // ── Top cities ───────────────────────────────────────────────────

  const cityBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    for (const l of leads) {
      const k = l.city?.trim() || l.postalCode?.slice(0, 3) || "Unknown";
      map[k] = (map[k] ?? 0) + 1;
    }
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [leads]);

  // ── Average per week ─────────────────────────────────────────────

  const avgPerWeek = useMemo(() => {
    if (leads.length < 2) return "—";
    const oldest = Math.min(...leads.map((l) => tsToMs(l.createdAt)).filter(Boolean));
    const weeks = Math.max((Date.now() - oldest) / (7 * 86_400_000), 1);
    return (leads.length / weeks).toFixed(1);
  }, [leads]);

  // ── Click event breakdowns ───────────────────────────────────────

  const sevenDaysAgo = Date.now() - 7 * 86_400_000;
  const thirtyDaysAgo = Date.now() - 30 * 86_400_000;

  const clickStats = useMemo(() => {
    const recent = clickEvents.filter((e) => tsToMs(e.createdAt) >= thirtyDaysAgo);
    const byEvent: Record<string, number> = {};
    const byPlacement: Record<string, number> = {};
    const byPage: Record<string, number> = {};
    for (const e of recent) {
      const ev = e.event ?? "unknown";
      byEvent[ev] = (byEvent[ev] ?? 0) + 1;
      const pl = e.placement ?? "unknown";
      byPlacement[pl] = (byPlacement[pl] ?? 0) + 1;
      if (e.page) byPage[e.page] = (byPage[e.page] ?? 0) + 1;
    }
    return {
      total7d: clickEvents.filter((e) => tsToMs(e.createdAt) >= sevenDaysAgo).length,
      total30d: recent.length,
      byEvent: Object.entries(byEvent).sort((a, b) => b[1] - a[1]),
      byPlacement: Object.entries(byPlacement).sort((a, b) => b[1] - a[1]),
      byPage: Object.entries(byPage).sort((a, b) => b[1] - a[1]).slice(0, 8),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickEvents]);

  const EVENT_LABELS: Record<string, string> = {
    phone_call_click: "Phone Call",
    cta_click: "Get a Quote",
    whatsapp_click: "WhatsApp",
  };

  const PLACEMENT_LABELS: Record<string, string> = {
    nav: "Nav bar",
    hero: "Hero section",
    sticky: "Sticky bar (mobile)",
    footer: "Footer",
    promo_banner: "Promo banner",
    promo_modal: "Promo modal",
    contact_page: "Contact page",
  };

  // ── Filtered leads ───────────────────────────────────────────────

  const filtered = useMemo(() => {
    let list = [...leads];
    if (search.trim()) {
      const s = search.toLowerCase();
      list = list.filter((l) =>
        [l.fullName, l.email, l.phone, l.city, l.postalCode, l.serviceName, l.serviceSelected].some(
          (v) => v?.toLowerCase().includes(s),
        ),
      );
    }
    if (filterService !== "all") list = list.filter((l) => l.serviceSelected === filterService);
    if (filterStatus !== "all")
      list = list.filter((l) => (l.status ?? "new") === filterStatus);
    if (sort === "oldest") list.reverse();
    return list;
  }, [leads, search, filterService, filterStatus, sort]);

  // ── Login ────────────────────────────────────────────────────────

  if (!authed) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-50 p-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b8612c] text-2xl font-bold text-white">
              S
            </div>
            <h1 className="text-xl font-semibold text-zinc-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-zinc-400">Stoneworks Interlock</p>
          </div>
          <form
            onSubmit={login}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-3">
              <label className="text-xs font-semibold text-zinc-700">Password</label>
              <input
                type="password"
                value={pwInput}
                onChange={(e) => {
                  setPwInput(e.target.value);
                  setPwError(false);
                }}
                className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#b8612c]"
                placeholder="Enter password"
                autoFocus
              />
              {pwError && (
                <p className="text-xs text-red-600">Incorrect password. Try again.</p>
              )}
              <button
                type="submit"
                className="h-11 w-full rounded-xl bg-[#b8612c] text-sm font-semibold text-white transition-colors hover:bg-[#934b1f]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ── Dashboard ────────────────────────────────────────────────────

  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-zinc-50 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8612c] text-sm font-bold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">Stoneworks Admin</p>
              <p className="text-[11px] text-zinc-400">
                {loading
                  ? "Loading…"
                  : firebaseError
                    ? "Firebase error — check config"
                    : `Live · ${leads.length} total leads`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => exportCsv(filtered)}
              className="h-8 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
            >
              Export CSV ({filtered.length})
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem(SESSION_KEY);
                setAuthed(false);
              }}
              className="h-8 rounded-lg border border-zinc-200 bg-white px-3 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-50"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-5 px-4 py-6 pb-16">

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard label="Total Leads" value={stats.total} />
          <StatCard label="Today" value={stats.today} />
          <StatCard label="This Week" value={stats.week} />
          <StatCard label="This Month" value={stats.month} />
          <StatCard
            label="Uncontacted"
            value={stats.uncontacted}
            sub="status: new"
            highlight={stats.uncontacted > 0}
          />
          <StatCard label="Newsletter Subs" value={stats.activeSubs} />
        </div>

        {/* ── Charts row ── */}
        <div className="grid gap-4 md:grid-cols-2">

          {/* Monthly trend */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Monthly Leads</p>
            <p className="mb-4 text-[11px] text-zinc-400">
              Last 6 months · avg {avgPerWeek}/week
            </p>
            <div className="flex h-32 items-end gap-2">
              {monthlyTrend.map((m) => (
                <div key={m.label} className="flex flex-1 flex-col items-center gap-1.5">
                  <span className="text-[11px] font-medium text-zinc-500">
                    {m.count || ""}
                  </span>
                  <div
                    className="w-full rounded-t-lg bg-[#b8612c] transition-all"
                    style={{
                      height: `${Math.max((m.count / maxMonth) * 88, m.count ? 4 : 0)}px`,
                    }}
                  />
                  <span className="text-[11px] text-zinc-400">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service breakdown */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-zinc-900">By Service</p>
            {serviceBreakdown.length === 0 ? (
              <p className="text-xs text-zinc-400">No data yet.</p>
            ) : (
              <div className="space-y-2.5">
                {serviceBreakdown.map(([slug, count]) => (
                  <div key={slug}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-zinc-600">
                        {SERVICE_LABELS[slug] ?? slug}
                      </span>
                      <span className="font-semibold text-zinc-900">
                        {count}
                        <span className="ml-1 font-normal text-zinc-400">
                          ({leads.length ? Math.round((count / leads.length) * 100) : 0}%)
                        </span>
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full bg-[#b8612c] transition-all"
                        style={{ width: `${(count / maxService) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Contact / Status / Cities ── */}
        <div className="grid gap-4 md:grid-cols-3">

          {/* Contact method */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-zinc-900">Preferred Contact</p>
            <div className="space-y-3">
              {contactBreakdown.map(([method, count]) => (
                <div key={method} className="flex items-center justify-between">
                  <span className="text-sm capitalize text-zinc-600">{method}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-bold text-zinc-900">{count}</span>
                    <span className="text-[11px] text-zinc-400">
                      {leads.length ? Math.round((count / leads.length) * 100) : 0}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status breakdown */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-zinc-900">Lead Status</p>
            <div className="space-y-2">
              {statusBreakdown.map(([status, count]) => (
                <div key={status} className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLE[status] ?? "bg-zinc-100 text-zinc-600"}`}
                  >
                    {status}
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">{count}</span>
                </div>
              ))}
              {statusBreakdown.length === 0 && (
                <p className="text-xs text-zinc-400">No data yet.</p>
              )}
            </div>
          </div>

          {/* Top cities */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-zinc-900">Top Locations</p>
            <div className="space-y-2">
              {cityBreakdown.map(([city, count]) => (
                <div key={city} className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">{city}</span>
                  <span className="text-sm font-semibold text-zinc-900">{count}</span>
                </div>
              ))}
              {cityBreakdown.length === 0 && (
                <p className="text-xs text-zinc-400">No data yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-1 rounded-xl border border-zinc-200 bg-white p-1 shadow-sm w-fit">
          {(["leads", "clicks", "subscribers"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {tab === "leads"
                ? `Leads (${filtered.length})`
                : tab === "clicks"
                  ? `Clicks (${clickStats.total30d})`
                  : `Newsletter (${subs.length})`}
            </button>
          ))}
        </div>

        {activeTab === "leads" ? (
          <>
            {/* ── Filters ── */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
              <input
                type="search"
                placeholder="Search name, email, phone, city…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 min-w-48 flex-1 rounded-xl border border-zinc-200 px-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#b8612c]"
              />
              <select
                value={filterService}
                onChange={(e) => setFilterService(e.target.value)}
                className="h-9 rounded-xl border border-zinc-200 px-2 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#b8612c]"
              >
                <option value="all">All services</option>
                {Object.entries(SERVICE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-9 rounded-xl border border-zinc-200 px-2 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#b8612c]"
              >
                <option value="all">All statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="quoted">Quoted</option>
                <option value="closed">Closed</option>
                <option value="lost">Lost</option>
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
                className="h-9 rounded-xl border border-zinc-200 px-2 text-sm text-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#b8612c]"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>

            {/* ── Leads table ── */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              {loading ? (
                <div className="py-16 text-center text-sm text-zinc-400">Loading leads…</div>
              ) : firebaseError ? (
                <div className="py-16 text-center text-sm text-red-500">
                  Could not connect to Firebase. Check your environment variables.
                </div>
              ) : filtered.length === 0 ? (
                <div className="py-16 text-center text-sm text-zinc-400">
                  {leads.length === 0 ? "No leads yet." : "No leads match your filters."}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-100 bg-zinc-50 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Contact</th>
                        <th className="px-4 py-3">Service</th>
                        <th className="px-4 py-3">Location</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3" />
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((lead) => (
                        <Fragment key={lead.id}>
                          <tr
                            className="cursor-pointer border-b border-zinc-100 transition-colors hover:bg-zinc-50"
                            onClick={() =>
                              setExpanded(expanded === lead.id ? null : lead.id)
                            }
                          >
                            <td className="whitespace-nowrap px-4 py-3 text-xs text-zinc-500">
                              {formatDate(lead.createdAt)}
                            </td>
                            <td className="px-4 py-3 font-medium text-zinc-900">
                              {lead.fullName ?? "—"}
                            </td>
                            <td className="px-4 py-3">
                              <p className="text-xs font-medium text-zinc-700">{lead.phone}</p>
                              <p className="text-xs text-zinc-400">{lead.email}</p>
                              {lead.preferredContactMethod && (
                                <p className="text-[11px] capitalize text-zinc-400">
                                  via {lead.preferredContactMethod}
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-3 text-xs text-zinc-600">
                              {SERVICE_LABELS[lead.serviceSelected ?? ""] ??
                                lead.serviceName ??
                                "—"}
                            </td>
                            <td className="px-4 py-3">
                              <p className="text-xs text-zinc-700">{lead.city ?? "—"}</p>
                              <p className="text-[11px] text-zinc-400">{lead.postalCode}</p>
                            </td>
                            <td
                              className="px-4 py-3"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <select
                                value={lead.status ?? "new"}
                                onChange={(e) => setLeadStatus(lead.id, e.target.value)}
                                className={`cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#b8612c] ${STATUS_STYLE[lead.status ?? "new"] ?? "bg-zinc-100 text-zinc-600"}`}
                              >
                                <option value="new">new</option>
                                <option value="contacted">contacted</option>
                                <option value="quoted">quoted</option>
                                <option value="closed">closed</option>
                                <option value="lost">lost</option>
                              </select>
                            </td>
                            <td className="px-4 py-3 text-xs text-zinc-400">
                              {(lead.photoUrls?.length ?? 0) > 0 && (
                                <span className="mr-2 rounded-full bg-zinc-100 px-2 py-0.5 text-[11px]">
                                  {lead.photoUrls!.length}{" "}
                                  {lead.photoUrls!.length === 1 ? "photo" : "photos"}
                                </span>
                              )}
                              <span className="text-[11px]">
                                {expanded === lead.id ? "▲" : "▼"}
                              </span>
                            </td>
                          </tr>

                          {expanded === lead.id && (
                            <tr className="border-b border-zinc-100 bg-zinc-50/60">
                              <td colSpan={7} className="px-6 py-5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:grid-cols-3 md:grid-cols-5">
                                  {(
                                    [
                                      ["Address", lead.address],
                                      ["Approx Area", lead.approxArea],
                                      ["Urgency", lead.urgency],
                                      ["Issue Type", lead.issueType],
                                      ["Last Service", lead.lastServiceDate],
                                      ["Weed Issue", lead.weedIssue],
                                      ["Drainage", lead.drainageIssues],
                                      ["Pet Friendly", lead.petFriendly],
                                      ["Submitted At", lead.submittedAt],
                                    ] as [string, string | undefined][]
                                  )
                                    .filter(([, v]) => v)
                                    .map(([label, value]) => (
                                      <div key={label}>
                                        <span className="block text-[11px] text-zinc-400">
                                          {label}
                                        </span>
                                        <span className="font-medium text-zinc-800">
                                          {value}
                                        </span>
                                      </div>
                                    ))}
                                </div>
                                {lead.message && (
                                  <div className="mt-4 text-xs">
                                    <span className="block text-[11px] text-zinc-400">
                                      Message
                                    </span>
                                    <p className="mt-1 max-w-2xl text-zinc-800">
                                      {lead.message}
                                    </p>
                                  </div>
                                )}
                                {lead.photoUrls && lead.photoUrls.length > 0 && (
                                  <div className="mt-4 text-xs">
                                    <span className="block text-[11px] text-zinc-400">
                                      Photos
                                    </span>
                                    <div className="mt-1 flex flex-wrap gap-2">
                                      {lead.photoUrls.map((url, i) => (
                                        <a
                                          key={i}
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={(e) => e.stopPropagation()}
                                          className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-[#b8612c] transition-colors hover:bg-zinc-50"
                                        >
                                          Photo {i + 1}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : activeTab === "clicks" ? (
          /* ── Clicks tab ── */
          <div className="space-y-4">
            {/* Click summary cards */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard label="Clicks (7 days)" value={clickStats.total7d} />
              <StatCard label="Clicks (30 days)" value={clickStats.total30d} />
              <StatCard
                label="Call Clicks (30d)"
                value={clickStats.byEvent.find(([e]) => e === "phone_call_click")?.[1] ?? 0}
              />
              <StatCard
                label="Quote Clicks (30d)"
                value={clickStats.byEvent.find(([e]) => e === "cta_click")?.[1] ?? 0}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* By event type */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-sm font-semibold text-zinc-900">By Button Type (last 30 days)</p>
                {clickStats.byEvent.length === 0 ? (
                  <p className="text-xs text-zinc-400">No click data yet. It will appear here once visitors start clicking buttons.</p>
                ) : (
                  <div className="space-y-3">
                    {clickStats.byEvent.map(([event, count]) => (
                      <div key={event}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-zinc-600">{EVENT_LABELS[event] ?? event}</span>
                          <span className="font-semibold text-zinc-900">
                            {count}
                            <span className="ml-1 font-normal text-zinc-400">
                              ({clickStats.total30d ? Math.round((count / clickStats.total30d) * 100) : 0}%)
                            </span>
                          </span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                          <div
                            className="h-full rounded-full bg-[#b8612c]"
                            style={{ width: `${clickStats.total30d ? (count / clickStats.total30d) * 100 : 0}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* By placement */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-sm font-semibold text-zinc-900">By Location on Site (last 30 days)</p>
                {clickStats.byPlacement.length === 0 ? (
                  <p className="text-xs text-zinc-400">No data yet.</p>
                ) : (
                  <div className="space-y-2">
                    {clickStats.byPlacement.map(([placement, count]) => (
                      <div key={placement} className="flex items-center justify-between">
                        <span className="text-sm text-zinc-600">{PLACEMENT_LABELS[placement] ?? placement}</span>
                        <span className="text-sm font-semibold text-zinc-900">{count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* By page */}
            {clickStats.byPage.length > 0 && (
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-sm font-semibold text-zinc-900">Top Pages Where Buttons Are Clicked</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {clickStats.byPage.map(([page, count]) => (
                    <div key={page} className="rounded-xl bg-zinc-50 px-3 py-2.5">
                      <p className="text-[11px] text-zinc-400 truncate">{page || "/"}</p>
                      <p className="text-lg font-bold text-zinc-900">{count}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent click log */}
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="border-b border-zinc-100 bg-zinc-50 px-4 py-3">
                <p className="text-sm font-semibold text-zinc-900">Recent Clicks</p>
              </div>
              {clickEvents.length === 0 ? (
                <div className="py-12 text-center text-sm text-zinc-400">No clicks recorded yet.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-100 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        <th className="px-4 py-3">Time</th>
                        <th className="px-4 py-3">Button</th>
                        <th className="px-4 py-3">Where</th>
                        <th className="px-4 py-3">Page</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clickEvents.slice(0, 100).map((e) => (
                        <tr key={e.id} className="border-b border-zinc-100">
                          <td className="whitespace-nowrap px-4 py-2.5 text-xs text-zinc-500">{formatDate(e.createdAt)}</td>
                          <td className="px-4 py-2.5 text-xs font-medium text-zinc-700">{EVENT_LABELS[e.event ?? ""] ?? e.event ?? "—"}</td>
                          <td className="px-4 py-2.5 text-xs text-zinc-500">{PLACEMENT_LABELS[e.placement ?? ""] ?? e.placement ?? "—"}</td>
                          <td className="px-4 py-2.5 text-xs text-zinc-400">{e.page || "/"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ── Newsletter subscribers tab ── */
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            {subs.length === 0 ? (
              <div className="py-16 text-center text-sm text-zinc-400">
                No subscribers yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100 bg-zinc-50 text-left text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      <th className="px-4 py-3">Email</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3">Subscribed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subs.map((sub) => (
                      <tr key={sub.id} className="border-b border-zinc-100">
                        <td className="px-4 py-3 text-sm text-zinc-800">
                          {sub.email ?? sub.id}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              sub.isSubscribed !== false
                                ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                                : "bg-zinc-100 text-zinc-500"
                            }`}
                          >
                            {sub.isSubscribed !== false ? "active" : sub.status ?? "inactive"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-zinc-400">
                          {formatDate(sub.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
