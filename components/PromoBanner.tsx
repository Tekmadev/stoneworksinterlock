"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "sw_promo_banner_v1";

export function PromoBanner() {
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
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -44, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -44, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 inset-x-0 z-50 bg-copper text-canvas"
          role="banner"
          aria-label="Promotional offer"
        >
          <div className="mx-auto max-w-[1400px] px-4 md:px-10 h-11 flex items-center justify-between gap-3">
            <div className="flex-1 text-center">
              <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase leading-none">
                <span className="font-semibold">Limited time:</span>{" "}
                20% off select interlock services in Ottawa{" "}
                <Link
                  href="/contact/"
                  onClick={() => setVisible(false)}
                  className="font-semibold underline underline-offset-2 hover:text-canvas/80 transition-colors ml-1.5"
                >
                  Book now &rarr;
                </Link>
              </p>
            </div>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss offer"
              className="shrink-0 p-1 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
