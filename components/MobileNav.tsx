"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";

const LINKS = [
  { href: "/services/", label: "Services", hasDropdown: true },
  { href: "/gallery/", label: "Gallery" },
  { href: "/blog/", label: "Journal" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
] as const;

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function MobileNavList({ activeHref }: { activeHref: string }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <ul className="space-y-2">
      {LINKS.map((l) => {
        const hasDropdown = "hasDropdown" in l && l.hasDropdown;

        if (hasDropdown) {
          return (
            <li key={l.href}>
              <div className="flex overflow-hidden rounded-2xl border border-onyx-15 bg-canvas-soft">
                <Link
                  href={l.href}
                  className={cn(
                    "flex-1 px-4 py-3 text-base font-medium text-onyx",
                    activeHref === l.href && "bg-onyx-05",
                  )}
                >
                  {l.label}
                </Link>
                <button
                  type="button"
                  aria-label={
                    servicesExpanded ? "Collapse services" : "Expand services"
                  }
                  aria-expanded={servicesExpanded}
                  onClick={() => setServicesExpanded((v) => !v)}
                  className="flex items-center justify-center border-l border-onyx-15 px-4 hover:bg-onyx-05"
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-onyx-60 transition-transform duration-300",
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
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="ml-3 mt-1 space-y-1 border-l border-onyx-15 pl-3">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}/`}
                            className="block rounded-xl px-3 py-2 text-sm text-onyx-75 hover:bg-onyx-05 hover:text-onyx"
                          >
                            {s.name}
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
                "block rounded-2xl border border-onyx-15 bg-canvas-soft px-4 py-3 text-base font-medium text-onyx",
                activeHref === l.href && "bg-onyx-05",
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
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDownCapture = (e: PointerEvent) => {
      const el = sheetRef.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDownCapture, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDownCapture, true);
    };
  }, [open]);

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-onyx-15 bg-canvas-soft text-onyx hover:bg-onyx hover:text-canvas transition-colors duration-300 ease-cinema"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence mode="wait">
        {open ? (
          <motion.div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="absolute inset-0 bg-canvas/85 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            />

            <div className="absolute inset-0 flex items-start justify-center px-4 pt-4">
              <motion.div
                ref={sheetRef}
                className="w-full max-w-md overflow-hidden rounded-3xl border border-onyx-15 bg-canvas-soft/95 shadow-2xl shadow-onyx/20 backdrop-blur-xl"
                initial={{ y: -16, scale: 0.98, opacity: 0 }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                }}
                exit={{
                  y: -16,
                  scale: 0.98,
                  opacity: 0,
                  transition: { duration: 0.25, ease: "easeInOut" },
                }}
              >
                <div className="flex items-center justify-between border-b border-onyx-10 px-5 py-4">
                  <Link
                    href="/"
                    className="inline-flex items-center"
                    aria-label={`${BUSINESS.name} home`}
                  >
                    <span className="relative h-10 w-[180px]">
                      <Image
                        src={
                          BUSINESS.logoPath ??
                          "/stonework-logo-removebg.png"
                        }
                        alt={`${BUSINESS.name} logo`}
                        fill
                        sizes="180px"
                        className="object-contain object-left"
                      />
                    </span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-onyx-15 text-onyx hover:bg-onyx hover:text-canvas transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-5 py-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
                    Browse
                  </p>
                  <nav className="mt-3">
                    <MobileNavList activeHref={activeHref} />
                  </nav>

                  <div className="mt-5 grid gap-2">
                    <a
                      href={toTelHref(BUSINESS.phone)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-onyx px-5 py-3 text-sm font-medium text-canvas hover:bg-copper transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call {BUSINESS.phone}
                    </a>
                    <Link
                      href="/contact/"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-onyx-15 bg-canvas px-5 py-3 text-sm font-medium text-onyx hover:bg-canvas-warm transition-colors"
                    >
                      Get free quote
                    </Link>
                  </div>
                </div>

                <div className="border-t border-onyx-10 px-5 py-3">
                  <p className="text-center text-xs text-onyx-60">
                    Free quote in 24 hours. Ottawa and surrounding cities.
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
