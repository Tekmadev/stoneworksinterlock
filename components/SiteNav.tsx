"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { EASE_CINEMA } from "@/lib/motion";
import { trackGaEvent } from "@/lib/ga";
import { MobileNav } from "@/components/MobileNav";

const NAV_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Journal" },
  { href: "/contact/", label: "Contact" },
];

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function SiteNav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.15 }}
      className="fixed top-0 inset-x-0 z-40"
    >
      <div
        className={`transition-all duration-500 ease-cinema ${
          solid
            ? "bg-[rgba(237,229,211,0.85)] backdrop-blur-[14px] border-b border-onyx-10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex h-full items-center leading-none"
            aria-label={`${BUSINESS.name} home`}
          >
            <span className="relative h-full w-[210px] sm:w-[260px] md:w-[300px] py-2">
              <Image
                src={BUSINESS.logoPath ?? "/stonework-logo-removebg.png"}
                alt={`${BUSINESS.name} logo`}
                fill
                priority
                sizes="(min-width: 768px) 300px, (min-width: 640px) 260px, 210px"
                className="object-contain object-left"
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium tracking-[-0.005em] text-onyx-75 hover:text-onyx transition-colors underline-grow"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={toTelHref(BUSINESS.phone)}
              onClick={() =>
                trackGaEvent("phone_call_click", {
                  placement: "nav",
                  phone: BUSINESS.phone,
                })
              }
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-onyx/15 bg-canvas-soft px-4 py-2 text-[13px] font-medium text-onyx hover:bg-onyx hover:text-canvas transition-all duration-300 ease-cinema"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{BUSINESS.phone}</span>
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 rounded-full bg-onyx px-4 md:px-5 py-2 text-[13px] font-medium text-canvas hover:bg-copper transition-colors duration-300 ease-cinema"
            >
              <span>Free quote</span>
              <span aria-hidden>→</span>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
