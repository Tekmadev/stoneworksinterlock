"use client";

import { motion } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { BUSINESS } from "@/config/business";
import { EASE_CINEMA } from "@/lib/motion";

export function AreasSection() {
  return (
    <section
      aria-label="Service areas"
      className="relative bg-canvas-soft py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
            >
              {homeCopy.areas.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display text-onyx leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
            >
              {homeCopy.areas.heading}
            </motion.h2>
          </div>
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
              className="text-[17px] md:text-[18px] leading-[1.55] text-onyx-75"
            >
              {homeCopy.areas.body}
            </motion.p>
          </div>
        </div>

        <div className="mt-14 md:mt-20 flex flex-wrap gap-3 md:gap-4">
          {BUSINESS.serviceAreas.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.7,
                ease: EASE_CINEMA,
                delay: Math.min(0.03 * i, 0.5),
              }}
              className="inline-flex items-center gap-2 rounded-full border border-onyx-15 bg-canvas px-5 py-2.5 text-[14px] font-medium text-onyx"
            >
              <span className="h-1 w-1 rounded-full bg-copper" />
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
