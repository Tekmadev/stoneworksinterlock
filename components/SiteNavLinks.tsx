"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SERVICES } from "@/data/services";

const NAV_LINKS = [
  { href: "/services/", label: "Services", hasDropdown: true },
  { href: "/gallery/", label: "Gallery" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
] as const;

function isActivePath(pathname: string, href: string) {
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const h = href.endsWith("/") ? href : `${href}/`;
  return p === h || (h !== "/" && p.startsWith(h));
}

function ServicesDropdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2"
    >
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg shadow-black/8">
        <div className="px-3 pb-1 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
            Our services
          </p>
        </div>
        <ul className="px-1.5 pb-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}/`}
                className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-zinc-100 px-3 py-2.5">
          <Link
            href="/services/"
            className="text-xs font-semibold text-accent hover:text-zinc-950"
          >
            View all services &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function SiteNavLinks({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <nav className={cn("hidden items-center gap-1 md:flex", className)}>
      {NAV_LINKS.map((l) => {
        const active = isActivePath(pathname, l.href);
        const hasDropdown = "hasDropdown" in l && l.hasDropdown;

        return (
          <div
            key={l.href}
            className="relative"
            onMouseEnter={hasDropdown ? openDropdown : undefined}
            onMouseLeave={hasDropdown ? closeDropdown : undefined}
          >
            <Link
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative z-10 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                active && "text-zinc-950",
              )}
            >
              <span className="relative">
                {l.label}
                {hasDropdown && (
                  <svg
                    className="ml-1 -mr-0.5 inline h-3 w-3 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {active ? (
                  <motion.span
                    layoutId="site-nav-active-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-zinc-900/90"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                ) : null}
              </span>
            </Link>

            <motion.span
              className="absolute inset-0 rounded-md bg-zinc-100"
              initial={false}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />

            {hasDropdown && (
              <AnimatePresence>
                {dropdownOpen && <ServicesDropdown />}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </nav>
  );
}
