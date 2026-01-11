"use client";

import { useMemo, useState } from "react";
import { Loader2, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { cn } from "@/lib/cn";
import { sendQuoteLead } from "@/lib/emailjs";
import { getFirebaseStorage, hasFirebaseConfig } from "@/lib/firebase";
import { BUSINESS } from "@/config/business";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage";

type QuoteFormVariant = "short" | "full";

type QuoteFormProps = {
  variant?: QuoteFormVariant;
  className?: string;
  initial?: {
    serviceSelected?: ServiceSlug;
    postalCode?: string;
  };
};

export function QuoteForm({ variant = "full", className, initial }: QuoteFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [step, setStep] = useState<1 | 2 | 3>(variant === "short" ? 1 : 1);

  // Basic fields
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState(() =>
    initial?.postalCode ? initial.postalCode.toUpperCase().trim() : "",
  );
  const [city, setCity] = useState(BUSINESS.primaryCity);
  const [address, setAddress] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState<
    "call" | "text" | "email"
  >("call");
  const [serviceSelected, setServiceSelected] = useState<ServiceSlug>(
    initial?.serviceSelected ?? "interlock-installation",
  );
  const [message, setMessage] = useState("");

  // Honeypot
  const [company, setCompany] = useState("");

  // Optional photos (full form only)
  const [photos, setPhotos] = useState<File[]>([]);

  const rules = useMemo(
    () => SERVICES.find((s) => s.slug === serviceSelected)?.formRules ?? {},
    [serviceSelected],
  );

  // Conditional fields (stored even if hidden)
  const [approxSqFt, setApproxSqFt] = useState("");
  const [stylePreference, setStylePreference] = useState<"modern" | "classic" | "">("");
  const [timeline, setTimeline] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [issueType, setIssueType] = useState("");
  const [approxArea, setApproxArea] = useState("");
  const [urgency, setUrgency] = useState("");
  const [lastServiceDate, setLastServiceDate] = useState("");
  const [weedIssue, setWeedIssue] = useState<"yes" | "no" | "">("");
  const [petFriendly, setPetFriendly] = useState<"yes" | "no" | "">("");
  const [drainageIssues, setDrainageIssues] = useState<"yes" | "no" | "">("");

  function normalizeCanadianPostalCode(input: string) {
    const raw = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (raw.length <= 3) return raw;
    return `${raw.slice(0, 3)} ${raw.slice(3, 6)}`.trim();
  }

  function isValidCanadianPostalCode(input: string) {
    // Canadian postal code format: A1A 1A1 (letters exclude D, F, I, O, Q, U)
    return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
      input.trim(),
    );
  }

  function normalizeNorthAmericanPhone(input: string) {
    // Keep digits and leading +
    const trimmed = input.trim();
    const hasPlus = trimmed.startsWith("+");
    const digitsOnly = trimmed.replace(/[^\d]/g, "");
    const digits = hasPlus ? `+${digitsOnly}` : digitsOnly;

    // Basic formatting for 10-digit numbers
    const ten =
      digitsOnly.length === 11 && digitsOnly.startsWith("1")
        ? digitsOnly.slice(1)
        : digitsOnly.length === 10
          ? digitsOnly
          : "";

    if (ten) {
      return `(${ten.slice(0, 3)}) ${ten.slice(3, 6)}-${ten.slice(6)}`;
    }

    return digits;
  }

  function isValidNorthAmericanPhone(input: string) {
    const digits = input.replace(/[^\d]/g, "");
    if (digits.length === 10) return true;
    if (digits.length === 11 && digits.startsWith("1")) return true;
    return false;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (company.trim()) {
      // spam bot
      setStatus("sent");
      return;
    }

    const isFull = variant === "full";

    const cooldownKey = "quote_cooldown_until";
    const now = Date.now();
    const cooldownUntil = Number(localStorage.getItem(cooldownKey) || "0");
    if (cooldownUntil && now < cooldownUntil) {
      const secondsLeft = Math.ceil((cooldownUntil - now) / 1000);
      setStatus("error");
      setError(`Please wait ${secondsLeft}s before submitting again.`);
      return;
    }

    if (!isValidCanadianPostalCode(postalCode)) {
      setStatus("error");
      setError("Please enter a valid Canadian postal code (example: K1K 4W3).");
      return;
    }

    if (!isValidNorthAmericanPhone(phone)) {
      setStatus("error");
      setError("Please enter a valid phone number (10 digits).");
      return;
    }

    if (!fullName.trim() || !phone.trim() || !email.trim() || !postalCode.trim() || !city.trim()) {
      setStatus("error");
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("sending");

      // client-side cooldown (basic rate limiting)
      const COOLDOWN_MS = 30_000;
      localStorage.setItem(cooldownKey, String(Date.now() + COOLDOWN_MS));

      let photoUrls: string[] = [];
      if (isFull && photos.length > 0) {
        if (!hasFirebaseConfig()) {
          // If Firebase isn't configured, we just skip uploads (and still send the lead).
          photoUrls = [];
        } else {
          const storage = getFirebaseStorage();
          if (storage) {
            const maxFiles = 5;
            const limited = photos.slice(0, maxFiles);
            const uploaded: string[] = [];

            for (const file of limited) {
              const safeName = file.name.replace(/[^\w.\-]+/g, "_");
              const path = `leads/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}_${safeName}`;
              const r = storageRef(storage, path);
              await uploadBytes(r, file, { contentType: file.type || "application/octet-stream" });
              uploaded.push(await getDownloadURL(r));
            }

            photoUrls = uploaded;
          }
        }
      }

      await sendQuoteLead({
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        postalCode: postalCode.trim(),
        city: city.trim(),
        address: address.trim() || undefined,
        preferredContactMethod,
        serviceSelected,
        message: message.trim(),

        approxSqFt: approxSqFt.trim() || undefined,
        stylePreference: stylePreference || undefined,
        timeline: timeline.trim() || undefined,
        budgetRange: budgetRange.trim() || undefined,
        issueType: issueType.trim() || undefined,
        approxArea: approxArea.trim() || undefined,
        urgency: urgency.trim() || undefined,
        lastServiceDate: lastServiceDate.trim() || undefined,
        weedIssue: weedIssue || undefined,
        petFriendly: petFriendly || undefined,
        drainageIssues: drainageIssues || undefined,
        photoUrls,
      });

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us or try again in a minute.");
    }
  }

  const inputBase =
    "h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]";

  const labelCls = "text-xs font-semibold text-zinc-700";

  return (
    <Card className={cn("p-6", className)}>
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <p className="text-sm font-semibold">Get a free quote</p>
          <p className="text-sm text-zinc-600">
            Serving Ottawa homeowners • Response within 24 hours • No pressure estimates
          </p>
          {variant === "full" ? (
            <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  step >= 1 ? "bg-[color:var(--accent)]" : "bg-zinc-300",
                )}
              />
              <span className={step === 1 ? "text-zinc-900" : ""}>Service</span>
              <span className="text-zinc-300">/</span>
              <span className={step === 2 ? "text-zinc-900" : ""}>Contact</span>
              <span className="text-zinc-300">/</span>
              <span className={step === 3 ? "text-zinc-900" : ""}>Details</span>
            </div>
          ) : null}
        </div>

        {/* Honeypot */}
        <div className="hidden">
          <label className={labelCls} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputBase}
          />
        </div>

        {/* STEP 1: Service + postal code */}
        {step === 1 ? (
          <div className="grid gap-3">
            <div className="grid gap-1.5">
              <label className={labelCls} htmlFor="service">
                Service *
              </label>
              <select
                id="service"
                className={inputBase}
                value={serviceSelected}
                onChange={(e) => setServiceSelected(e.target.value as ServiceSlug)}
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className={labelCls} htmlFor="postalCode">
                Postal code *
              </label>
              <input
                id="postalCode"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(normalizeCanadianPostalCode(e.target.value))}
                className={inputBase}
                placeholder="K1K 4W3"
              inputMode="text"
              autoComplete="postal-code"
              />
            <p className="text-xs text-zinc-500">Canadian format: A1A 1A1</p>
            </div>

            {variant === "short" ? (
              <Button
                type="button"
                onClick={() => {
                  const q = new URLSearchParams();
                  q.set("service", serviceSelected);
                  if (postalCode.trim()) q.set("postal", postalCode.trim());
                  router.push(`/contact/?${q.toString()}`);
                }}
              >
                Continue
              </Button>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="button"
                  onClick={() => {
                    if (!postalCode.trim()) {
                      setStatus("error");
                      setError("Please enter your postal code.");
                      return;
                    }
                    if (!isValidCanadianPostalCode(postalCode)) {
                      setStatus("error");
                      setError("Please enter a valid Canadian postal code (example: K1K 4W3).");
                      return;
                    }
                    setStatus("idle");
                    setError("");
                    setStep(2);
                  }}
                >
                  Next
                </Button>
                <p className="text-xs text-zinc-500">Step 1 of 3</p>
              </div>
            )}
          </div>
        ) : null}

        {/* STEP 2: Contact */}
        {variant === "full" && step === 2 ? (
          <div className="grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="fullName">
                  Full name *
                </label>
                <input
                  id="fullName"
                  name="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={inputBase}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="phone">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="tel"
                  value={phone}
                  onChange={(e) => setPhone(normalizeNorthAmericanPhone(e.target.value))}
                  className={inputBase}
                  placeholder="(613) 850-8158"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputBase}
                  placeholder="you@email.com"
                  inputMode="email"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="preferredContact">
                  Preferred contact
                </label>
                <select
                  id="preferredContact"
                  name="preferredContactMethod"
                  className={inputBase}
                  value={preferredContactMethod}
                  onChange={(e) =>
                    setPreferredContactMethod(e.target.value as "call" | "text" | "email")
                  }
                >
                  <option value="call">Call</option>
                  <option value="text">Text</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={inputBase}
                  placeholder="Ottawa"
                  autoComplete="address-level2"
                />
              </div>
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="address">
                  Address (optional)
                </label>
                <input
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={inputBase}
                  placeholder="Street address"
                  autoComplete="street-address"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Back
              </Button>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <p className="text-xs text-zinc-500 sm:mr-2">Step 2 of 3</p>
                <Button
                  type="button"
                  onClick={() => {
                    if (!fullName.trim() || !phone.trim() || !email.trim() || !city.trim()) {
                      setStatus("error");
                      setError("Please fill in your contact details.");
                      return;
                    }
                    if (!isValidNorthAmericanPhone(phone)) {
                      setStatus("error");
                      setError("Please enter a valid phone number (10 digits).");
                      return;
                    }
                    setStatus("idle");
                    setError("");
                    setStep(3);
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Conditional fields */}
        {(rules.showApproxSqFt || rules.showApproxArea) && variant === "full" && step === 3 ? (
          <div className="grid gap-3 md:grid-cols-3">
            {rules.showApproxSqFt ? (
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="approxSqFt">
                  Approx sq ft
                </label>
                <input
                  id="approxSqFt"
                  value={approxSqFt}
                  onChange={(e) => setApproxSqFt(e.target.value)}
                  className={inputBase}
                  placeholder="e.g. 350"
                />
              </div>
            ) : null}
            {rules.showApproxArea ? (
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="approxArea">
                  Approx area
                </label>
                <input
                  id="approxArea"
                  value={approxArea}
                  onChange={(e) => setApproxArea(e.target.value)}
                  className={inputBase}
                  placeholder="e.g. 10x12 section"
                />
              </div>
            ) : null}
            {rules.showUrgency ? (
              <div className="grid gap-1.5">
                <label className={labelCls} htmlFor="urgency">
                  Urgency
                </label>
                <input
                  id="urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className={inputBase}
                  placeholder="ASAP / this month / flexible"
                />
              </div>
            ) : null}
          </div>
        ) : null}

        {rules.showStylePreference && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="stylePreference">
              Style preference
            </label>
            <select
              id="stylePreference"
              className={inputBase}
              value={stylePreference}
              onChange={(e) => setStylePreference(e.target.value as "modern" | "classic" | "")}
            >
              <option value="">Select…</option>
              <option value="modern">Modern</option>
              <option value="classic">Classic</option>
            </select>
          </div>
        ) : null}

        {rules.showTimeline && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="timeline">
              Timeline
            </label>
            <input
              id="timeline"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={inputBase}
              placeholder="e.g. Next 2-4 weeks"
            />
          </div>
        ) : null}

        {rules.showBudgetRange && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="budgetRange">
              Budget range
            </label>
            <input
              id="budgetRange"
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className={inputBase}
              placeholder="e.g. $5k-$10k"
            />
          </div>
        ) : null}

        {rules.showIssueType && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="issueType">
              Issue type
            </label>
            <input
              id="issueType"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className={inputBase}
              placeholder="Sinking / pooling / loose border / etc."
            />
          </div>
        ) : null}

        {rules.showLastServiceDate && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="lastServiceDate">
              Last service date
            </label>
            <input
              id="lastServiceDate"
              value={lastServiceDate}
              onChange={(e) => setLastServiceDate(e.target.value)}
              className={inputBase}
              placeholder="e.g. Summer 2023"
            />
          </div>
        ) : null}

        {rules.showWeedIssue && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="weedIssue">
              Weed issue?
            </label>
            <select
              id="weedIssue"
              className={inputBase}
              value={weedIssue}
              onChange={(e) => setWeedIssue(e.target.value as "yes" | "no" | "")}
            >
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        ) : null}

        {rules.showPetFriendly && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="petFriendly">
              Pet friendly?
            </label>
            <select
              id="petFriendly"
              className={inputBase}
              value={petFriendly}
              onChange={(e) => setPetFriendly(e.target.value as "yes" | "no" | "")}
            >
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        ) : null}

        {rules.showDrainageIssues && variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="drainageIssues">
              Drainage issues?
            </label>
            <select
              id="drainageIssues"
              className={inputBase}
              value={drainageIssues}
              onChange={(e) => setDrainageIssues(e.target.value as "yes" | "no" | "")}
            >
              <option value="">Select…</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        ) : null}

        {variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="message">
              Message (optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={cn(inputBase, "h-28 py-2.5")}
              placeholder="Any details that help us quote faster (size, issues, timeline)"
            />
          </div>
        ) : null}

        {variant === "full" && step === 3 ? (
          <div className="grid gap-1.5">
            <label className={labelCls} htmlFor="photos">
              Photos (optional)
            </label>
            <input
              id="photos"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files ?? []);
                const maxFiles = 5;
                const maxBytes = 6 * 1024 * 1024;
                const filtered = files.filter((f) => f.size <= maxBytes).slice(0, maxFiles);
                setPhotos(filtered);
              }}
              className={cn(
                "block w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-zinc-900 hover:file:bg-zinc-200",
              )}
            />
            <p className="text-xs text-zinc-500">
              Up to 5 images. If Firebase Storage isn’t configured yet, photos won’t upload.
            </p>
          </div>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : null}
        {status === "sent" ? (
          <p className="text-sm text-emerald-700">
            Thanks. We received your request. We will reply shortly.
          </p>
        ) : null}

        {variant === "full" && step === 3 ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button type="submit" disabled={status === "sending"} className="sm:w-auto">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Request Quote"
                )}
              </Button>
            </div>
            <p className="text-xs text-zinc-500">Step 3 of 3</p>
          </div>
        ) : null}

        {variant === "full" ? (
          <div className="mt-2 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm shadow-black/5 sm:hidden">
            <a
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200"
              href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
            >
              <Phone className="h-4 w-4" />
              Prefer to call? Tap to call
            </a>
          </div>
        ) : null}
      </form>
    </Card>
  );
}


