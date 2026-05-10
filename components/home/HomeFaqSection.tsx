"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { homeCopy } from "@/data/home-copy";
import { GENERAL_FAQS } from "@/data/faqs";
import { EASE_CINEMA } from "@/lib/motion";

export function HomeFaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-label="Frequently asked questions"
      className="relative bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
            >
              {homeCopy.faq.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display text-onyx leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
            >
              {homeCopy.faq.heading}
            </motion.h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-onyx-15">
              {GENERAL_FAQS.map((f, i) => (
                <li key={i} className="border-b border-onyx-15">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                  >
                    <span
                      className="font-display tracking-[-0.02em] text-onyx leading-[1.15] pr-2"
                      style={{ fontSize: "clamp(20px, 2vw, 30px)" }}
                    >
                      {f.question}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: EASE_CINEMA }}
                      className="shrink-0 inline-flex items-center justify-center h-9 w-9 rounded-full border border-onyx-15 text-onyx group-hover:bg-onyx group-hover:text-canvas transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE_CINEMA }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 md:pb-8 max-w-[68ch] text-[16px] md:text-[17px] leading-[1.55] text-onyx-75">
                          {f.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
