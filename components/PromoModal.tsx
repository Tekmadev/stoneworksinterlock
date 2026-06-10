"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/config/business";
import { toTelHref } from "@/lib/format";

const STORAGE_KEY = "sw_promo_modal_v1";

export function PromoModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    const t = setTimeout(() => {
      setVisible(true);
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  const close = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-onyx/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Limited time offer"
            className="fixed inset-x-4 bottom-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[80] w-auto md:w-full md:max-w-[520px] rounded-t-[28px] md:rounded-[28px] bg-canvas overflow-hidden shadow-[0_40px_80px_-20px_rgba(20,20,15,0.55)]"
          >
            <div className="h-[3px] bg-copper w-full" />

            <button
              onClick={close}
              aria-label="Close offer"
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-onyx/8 transition-colors"
            >
              <X className="h-4.5 w-4.5 text-onyx-60" />
            </button>

            <div className="px-7 md:px-9 pt-7 pb-8">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-copper">
                Limited time offer — Ottawa
              </p>

              <h2
                className="mt-3 font-display text-onyx leading-[0.97] tracking-[-0.025em]"
                style={{ fontSize: "clamp(32px, 5vw, 46px)" }}
              >
                20% Off Select<br />
                <em className="italic text-copper">Interlock Services</em>
              </h2>

              <p className="mt-4 text-[15px] leading-[1.55] text-onyx-75">
                Book your interlock project this season and save. Ottawa homeowners only.
                Free quote included — no pressure.
              </p>

              <ul className="mt-4 space-y-2.5">
                {[
                  "Interlock driveway installation",
                  "Patio installation",
                  "Repair and leveling",
                  "Pressure washing and sealing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-onyx-75">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact/"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-onyx px-6 py-3.5 text-[14px] font-medium text-canvas hover:bg-copper transition-colors duration-300"
                >
                  Get a free quote &rarr;
                </Link>
                <a
                  href={toTelHref(BUSINESS.phone)}
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-onyx/20 px-6 py-3.5 text-[14px] font-medium text-onyx hover:bg-onyx hover:text-canvas transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </div>

              <p className="mt-4 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-onyx-40">
                Offer valid on select services. Contact us for details.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
