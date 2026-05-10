"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { EASE_CINEMA } from "@/lib/motion";

export function BeforeAfterSection() {
  const id = "ba-slider-home";
  const [value, setValue] = useState(50);

  return (
    <section
      aria-label="Before and after"
      className="relative bg-canvas-soft py-28 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
            >
              {homeCopy.beforeAfter.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display text-onyx leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
            >
              {homeCopy.beforeAfter.heading}
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
              {homeCopy.beforeAfter.body}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 rounded-full bg-onyx px-6 py-3 text-[14px] font-medium text-canvas hover:bg-copper transition-colors duration-500 ease-cinema"
              >
                {homeCopy.beforeAfter.primary}
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease: EASE_CINEMA }}
          className="rounded-[var(--radius-card)] overflow-hidden border border-onyx-10 bg-canvas shadow-[0_30px_60px_-30px_rgba(20,20,15,0.3)]"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-canvas-warm">
            <Image
              src="/images/img-service/after.webp"
              alt="Uneven pavers before leveling"
              fill
              sizes="(max-width: 1280px) 100vw, 80vw"
              className="object-cover"
            />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
            >
              <Image
                src="/images/img-service/before.webp"
                alt="Pavers after leveling"
                fill
                sizes="(max-width: 1280px) 100vw, 80vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-0 top-4 px-4 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase rounded-full border border-canvas/40 bg-onyx/60 backdrop-blur-md px-3 py-1.5 text-canvas">
                Before
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase rounded-full border border-canvas/40 bg-onyx/60 backdrop-blur-md px-3 py-1.5 text-canvas">
                After
              </span>
            </div>

            <div
              className="absolute inset-y-0"
              style={{ left: `${value}%`, transform: "translateX(-1px)" }}
            >
              <div className="h-full w-[2px] bg-canvas" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-canvas/60 bg-onyx/40 backdrop-blur-md flex items-center justify-center">
                <span className="text-canvas text-base">⇄</span>
              </div>
            </div>
          </div>

          <div className="px-5 md:px-7 py-5">
            <label htmlFor={id} className="sr-only">
              Before and after slider
            </label>
            <input
              id={id}
              type="range"
              min={5}
              max={95}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full accent-copper"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
