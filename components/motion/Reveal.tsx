"use client";

import { motion, type Variants } from "framer-motion";
import { EASE_CINEMA } from "@/lib/motion";

type RevealProps = React.PropsWithChildren<{
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "section" | "article" | "li" | "p" | "span";
}>;

const baseVariants = (y: number, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASE_CINEMA,
    },
  },
});

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.95,
  className,
  once = true,
  as = "div",
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={baseVariants(y, duration, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-15% 0px" }}
    >
      {children}
    </Comp>
  );
}
