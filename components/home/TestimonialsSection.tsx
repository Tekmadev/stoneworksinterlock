"use client";

import { motion } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { TESTIMONIALS } from "@/data/testimonials";
import { EASE_CINEMA } from "@/lib/motion";

export function TestimonialsSection() {
  return (
    <section
      aria-label="Testimonials"
      className="relative bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
            >
              {homeCopy.testimonials.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display italic text-onyx leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 6.4vw, 100px)" }}
            >
              {homeCopy.testimonials.heading}
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
              className="text-[17px] md:text-[18px] leading-[1.55] text-onyx-75"
            >
              {homeCopy.testimonials.intro}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: 0.95,
                ease: EASE_CINEMA,
                delay: 0.05 * i,
              }}
              className="relative rounded-[var(--radius-card)] border border-onyx-10 bg-canvas-soft p-7 md:p-8"
            >
              <span
                className="absolute top-5 left-7 font-display italic text-copper leading-none"
                style={{ fontSize: "60px" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote
                className="relative mt-8 font-display tracking-[-0.015em] text-onyx leading-[1.25]"
                style={{ fontSize: "clamp(20px, 1.6vw, 26px)" }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 pt-5 border-t border-onyx-15 flex flex-col gap-1">
                <p className="text-[14px] font-medium text-onyx">{t.name}</p>
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-onyx-60">
                  {t.location} · {t.service}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
