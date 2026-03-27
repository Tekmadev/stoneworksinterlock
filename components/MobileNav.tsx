"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { TrackedCallButton } from "@/components/TrackedCallButton";

const LINKS = [
  { href: "/services/", label: "Services", hasDropdown: true },
  { href: "/gallery/", label: "Gallery" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
] as const;

function MobileNavList({ activeHref }: { activeHref: string }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <ul className="space-y-2">
      {LINKS.map((l) => {
        const hasDropdown = "hasDropdown" in l && l.hasDropdown;

        if (hasDropdown) {
          return (
            <li key={l.href}>
              <div className="flex overflow-hidden rounded-2xl border border-zinc-200 shadow-sm shadow-black/5">
                <Link
                  href={l.href}
                  className={cn(
                    "flex-1 bg-white/80 px-4 py-3 text-base font-semibold text-zinc-950 backdrop-blur hover:bg-white",
                    activeHref === l.href && "border-zinc-300 bg-white",
                  )}
                >
                  {l.label}
                </Link>
                <button
                  type="button"
                  aria-label={servicesExpanded ? "Collapse services" : "Expand services"}
                  aria-expanded={servicesExpanded}
                  onClick={() => setServicesExpanded((v) => !v)}
                  className="flex items-center justify-center border-l border-zinc-200 bg-white/80 px-3 backdrop-blur hover:bg-white"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-zinc-500 transition-transform duration-200",
                      servicesExpanded && "rotate-180",
                    )}
                  />
                </button>
              </div>
              <AnimatePresence>
                {servicesExpanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 mt-1 space-y-1 border-l-2 border-zinc-200 pl-3">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}/`}
                            className="block rounded-xl px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                          >
                            {s.name} Ottawa
                          </Link>
                        </li>
                      ))}
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        }

        return (
          <li key={l.href}>
            <Link
              href={l.href}
              className={cn(
                "block rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-base font-semibold text-zinc-950 shadow-sm shadow-black/5 backdrop-blur",
                "hover:bg-white",
                activeHref === l.href && "border-zinc-300 bg-white",
              )}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const sheetRef = useRef<HTMLDivElement | null>(null);

  const activeHref = useMemo(() => {
    const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
    const found = LINKS.find((l) => p === l.href || p.startsWith(l.href));
    return found?.href ?? "";
  }, [pathname]);

  useEffect(() => {
    // Close on route changes
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    // Prevent background scroll when the menu is open.
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    // Reliable outside-press handler (works even when backdrops fail to receive taps).
    if (!open) return;

    const onPointerDownCapture = (e: PointerEvent) => {
      const el = sheetRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setOpen(false);
    };

    const onTouchStartCapture = (e: TouchEvent) => {
      const el = sheetRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDownCapture, true);
    document.addEventListener("touchstart", onTouchStartCapture, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDownCapture, true);
      document.removeEventListener("touchstart", onTouchStartCapture, true);
    };
  }, [open]);

  return (
    <div className={cn("md:hidden", className)}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/80 text-zinc-950 backdrop-blur hover:bg-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            className="fixed inset-0 z-60"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.18, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.28, ease: "easeInOut" } }}
          >
            {/* Frosted backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/30 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.18, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.28, ease: "easeInOut" } }}
            />

            {/* Centered dropdown sheet */}
            <div className="absolute inset-0 flex items-start justify-center px-4 pt-4">
              <motion.div
                ref={sheetRef}
                className="w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200 bg-white/85 shadow-2xl shadow-black/20 backdrop-blur-xl"
                initial={{ y: -12, scale: 0.98, opacity: 0 }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.18, ease: "easeOut" },
                }}
                exit={{
                  y: -12,
                  scale: 0.98,
                  opacity: 0,
                  transition: { duration: 0.28, ease: "easeInOut" },
                }}
              >
                <div className="flex items-center justify-between border-b border-zinc-200/70 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/swil_logo-removebg.png"
                      alt={`${BUSINESS.name} logo`}
                      width={160}
                      height={40}
                      className="h-10 w-auto object-contain"
                      priority
                    />
                  </div>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white/70 text-zinc-950 backdrop-blur hover:bg-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
                    Browse
                  </p>
                  <nav className="mt-3">
                    <MobileNavList activeHref={activeHref} />
                  </nav>

                  <div className="mt-5 grid gap-2">
                    <TrackedCallButton placement="mobile_menu" size="lg">
                      Call {BUSINESS.phone}
                    </TrackedCallButton>
                    <Button href="/contact/" variant="secondary" size="lg">
                      Get Free Quote (Form)
                    </Button>
                  </div>
                </div>

                <div className="border-t border-zinc-200/70 px-4 py-3">
                  <p className="text-center text-xs text-zinc-600">
                    Fast response. Serving Ottawa and surrounding areas.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

