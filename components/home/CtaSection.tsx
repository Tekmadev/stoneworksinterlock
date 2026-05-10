"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { homeCopy } from "@/data/home-copy";
import { BUSINESS } from "@/config/business";
import { EASE_CINEMA } from "@/lib/motion";
import { trackGaEvent } from "@/lib/ga";
import { QuoteForm } from "@/components/QuoteForm";

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function CtaSection() {
  return (
    <section
      id="cta"
      aria-label={homeCopy.cta.eyebrow}
      className="relative bg-onyx text-canvas py-28 md:py-40 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-copper) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 w-[640px] h-[640px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-moss) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-14 items-start">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-canvas/60"
            >
              {homeCopy.cta.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display text-canvas leading-[0.97] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 6.4vw, 104px)" }}
            >
              {homeCopy.cta.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
              className="mt-6 max-w-[60ch] text-[17px] md:text-[19px] leading-[1.55] text-canvas/75"
            >
              {homeCopy.cta.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.3 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={toTelHref(BUSINESS.phone)}
                onClick={() =>
                  trackGaEvent("phone_call_click", {
                    placement: "cta_section",
                    phone: BUSINESS.phone,
                  })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-4 text-[15px] font-medium text-canvas hover:bg-copper-deep transition-colors duration-500 ease-cinema"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS.phone}</span>
              </a>
              <Link
                href="/contact/"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-canvas/25 px-7 py-4 text-[15px] font-medium text-canvas hover:bg-canvas hover:text-onyx transition-colors duration-500 ease-cinema"
              >
                Full quote form
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-cinema group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1.05, ease: EASE_CINEMA, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[var(--radius-card)] border border-canvas/20 bg-canvas p-1 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
              <QuoteForm variant="short" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
