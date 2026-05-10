"use client";

import { motion } from "framer-motion";
import { EASE_CINEMA } from "@/lib/motion";

type LineMaskRevealProps = React.PropsWithChildren<{
  delay?: number;
  duration?: number;
  className?: string;
}>;

export function LineMaskReveal({
  children,
  delay = 0,
  duration = 1.3,
  className,
}: LineMaskRevealProps) {
  return (
    <span className={`line-mask ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration, ease: EASE_CINEMA, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
