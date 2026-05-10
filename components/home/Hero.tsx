"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";
import { homeCopy } from "@/data/home-copy";
import { BUSINESS } from "@/config/business";
import { EASE_CINEMA } from "@/lib/motion";
import { trackGaEvent } from "@/lib/ga";
import { LineMaskReveal } from "@/components/motion/LineMaskReveal";

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex items-center pt-28 md:pt-36 pb-20"
      aria-label="Stoneworks Interlock — Ottawa hardscape contractor"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/images/workexample/work2done.jpeg"
          alt="Finished interlock driveway in Ottawa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(237,229,211,0.45) 0%, rgba(237,229,211,0.55) 35%, rgba(237,229,211,0.92) 95%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="col-span-1 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_CINEMA, delay: 0.1 }}
            className="font-mono text-[11px] tracking-[0.18em] uppercase text-onyx-60 mb-6 md:mb-8 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-onyx-30" />
            {homeCopy.hero.eyebrow}
          </motion.div>

          <h1
            className="font-display text-onyx leading-[0.92] tracking-[-0.025em]"
            style={{ fontSize: "clamp(56px, 9.5vw, 152px)" }}
          >
            <LineMaskReveal delay={0.05}>{homeCopy.hero.line1}</LineMaskReveal>
            <LineMaskReveal delay={0.22}>
              {homeCopy.hero.line2Pre}
              <em className="italic text-copper">
                {homeCopy.hero.line2Italic}
              </em>
              {homeCopy.hero.line2Post}
            </LineMaskReveal>
            <LineMaskReveal delay={0.4}>{homeCopy.hero.line3}</LineMaskReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: EASE_CINEMA }}
            className="mt-9 max-w-[58ch] text-[17px] md:text-[19px] leading-[1.55] text-onyx-75"
          >
            {homeCopy.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.95, ease: EASE_CINEMA }}
            className="mt-9 md:mt-11 flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <Link
                href="/contact/"
                onClick={() =>
                  trackGaEvent("hero_quote_click", { placement: "hero_primary" })
                }
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-onyx px-7 py-4 text-[15px] font-medium text-canvas hover:bg-copper transition-colors duration-500 ease-cinema"
              >
                <span>{homeCopy.hero.primaryCta}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-500 ease-cinema group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <a
                href={toTelHref(BUSINESS.phone)}
                onClick={() =>
                  trackGaEvent("phone_call_click", {
                    placement: "hero_secondary",
                    phone: BUSINESS.phone,
                  })
                }
                className="group inline-flex items-center justify-center gap-2 text-[15px] font-medium text-onyx underline-grow"
              >
                <Phone className="h-4 w-4" />
                <span>
                  {homeCopy.hero.secondaryCta}{" "}
                  <span className="text-onyx-60">{BUSINESS.phone}</span>
                </span>
              </a>
            </div>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-onyx-60 max-w-[60ch]">
              {homeCopy.hero.note}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease: EASE_CINEMA }}
          className="hidden lg:flex lg:col-span-3 flex-col gap-5 self-end pb-2"
        >
          <ProofItem label="Years on the tools" value="20+" />
          <ProofItem label="Completed projects" value="500+" />
          <ProofItem label="Quote response" value="24h" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute left-1/2 bottom-6 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-onyx-60">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-onyx-15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/3 bg-onyx"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.4,
            }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function ProofItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-onyx-15 pt-4">
      <div
        className="font-display text-onyx leading-none"
        style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
      >
        {value}
      </div>
      <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-onyx-60">
        {label}
      </div>
    </div>
  );
}
