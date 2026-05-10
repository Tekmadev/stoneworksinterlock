"use client";

import { motion } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { EASE_CINEMA } from "@/lib/motion";

export function ProcessSection() {
  return (
    <section
      aria-label={homeCopy.process.eyebrow}
      className="relative py-28 md:py-40 bg-canvas-soft"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.9, ease: EASE_CINEMA }}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
        >
          {homeCopy.process.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
          className="mt-5 font-display text-onyx leading-[0.95] tracking-[-0.03em] max-w-[20ch]"
          style={{ fontSize: "clamp(40px, 6.4vw, 104px)" }}
        >
          {homeCopy.process.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
          className="mt-6 max-w-[60ch] text-[17px] md:text-[19px] leading-[1.55] text-onyx-75"
        >
          {homeCopy.process.body}
        </motion.p>

        <div className="mt-16 md:mt-24 flex flex-col gap-12 md:gap-20">
          {homeCopy.process.steps.map((step, i) => (
            <Step key={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
}: {
  step: (typeof homeCopy.process.steps)[number];
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 1, ease: EASE_CINEMA }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-onyx-15 pt-8 md:pt-12"
    >
      <div className="md:col-span-3 font-mono text-[11px] tracking-[0.18em] uppercase text-onyx-60">
        {step.kicker}
      </div>
      <div className="md:col-span-9">
        <h3
          className="font-display tracking-[-0.025em] text-onyx leading-[1.04]"
          style={{ fontSize: "clamp(28px, 3.6vw, 54px)" }}
        >
          {step.title}
        </h3>
        <p className="mt-5 max-w-[60ch] text-[17px] md:text-[19px] leading-[1.55] text-onyx-75">
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}
