"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "sw_promo_banner_v1";
const BANNER_H = 44;

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

  // Push the nav down by setting a CSS variable on the root element.
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--banner-h",
      visible ? `${BANNER_H}px` : "0px",
    );
    return () => {
      document.documentElement.style.setProperty("--banner-h", "0px");
    };
  }, [visible]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: BANNER_H, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 inset-x-0 z-50 bg-copper text-canvas overflow-hidden"
          role="banner"
          aria-label="Promotional offer"
        >
          <div
            className="mx-auto max-w-[1400px] px-4 md:px-10 flex items-center justify-between gap-3"
            style={{ height: BANNER_H }}
          >
            <div className="flex-1 text-center">
              <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase leading-none">
                <span className="font-semibold">Limited time:</span>{" "}
                20% off select interlock services in Ottawa{" "}
                <Link
                  href="/contact/"
                  onClick={dismiss}
                  className="font-semibold underline underline-offset-2 hover:text-canvas/80 transition-colors ml-1.5"
                >
                  Book now &rarr;
                </Link>
              </p>
            </div>
            <button
              onClick={dismiss}
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
