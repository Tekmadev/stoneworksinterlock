"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { EASE_CINEMA } from "@/lib/motion";

const PHASES = homeCopy.phases.phases;

export function PhasesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      aria-label={homeCopy.phases.intro}
      className="relative bg-canvas"
      style={{ height: `${PHASES.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 max-w-[1400px] mx-auto px-5 md:px-10 items-center">
          {/* Side text column */}
          <div className="relative col-span-1 lg:col-span-5 z-10 order-2 lg:order-1">
            <div className="mb-6 md:mb-10">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60">
                From the first walk-through to the handoff
              </p>
              <h2
                className="mt-3 font-display text-onyx leading-[0.95] tracking-[-0.025em]"
                style={{ fontSize: "clamp(32px, 4.4vw, 64px)" }}
              >
                {homeCopy.phases.intro}
              </h2>
            </div>

            <SideText scrollYProgress={scrollYProgress} />
          </div>

          {/* Image column */}
          <div className="relative col-span-1 lg:col-span-7 h-[52svh] md:h-[60svh] lg:h-[78vh] order-1 lg:order-2">
            <div className="relative w-full h-full rounded-[var(--radius-card)] overflow-hidden border border-onyx-10 shadow-[0_30px_60px_-30px_rgba(20,20,15,0.35)]">
              {PHASES.map((p, i) => (
                <PhaseImage
                  key={i}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={PHASES.length}
                  src={p.image}
                  alt={p.imageAlt}
                />
              ))}
              <FrameBadge scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>

        <ProgressRail scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function SideText({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div className="relative h-[42vh] md:h-[44vh] lg:h-[60vh]">
      <div className="relative w-full h-full">
        {PHASES.map((p, i) => (
          <PhraseLayer
            key={i}
            scrollYProgress={scrollYProgress}
            index={i}
            total={PHASES.length}
            text={p.sideText}
            body={p.body}
            kicker={`${homeCopy.phases.eyebrow} 0${i + 1} / 0${PHASES.length}  ·  ${p.kickerLabel}`}
          />
        ))}
      </div>
    </div>
  );
}

function PhraseLayer({
  scrollYProgress,
  index,
  total,
  text,
  body,
  kicker,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  text: string;
  body: string;
  kicker: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.06;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const opacity = useTransform(scrollYProgress, (p) => {
    if (isFirst && p < start + fade) return 1;
    if (isLast && p > end - fade) return 1;
    const sFadeStart = Math.max(0, start - 0.02);
    const sFull = start + fade;
    const eFull = end - fade;
    const eFadeEnd = Math.min(1, end + 0.02);
    if (p <= sFadeStart) return 0;
    if (p < sFull) return (p - sFadeStart) / Math.max(0.0001, sFull - sFadeStart);
    if (p <= eFull) return 1;
    if (p < eFadeEnd) return 1 - (p - eFull) / Math.max(0.0001, eFadeEnd - eFull);
    return 0;
  });
  const y = useTransform(scrollYProgress, (p) => {
    if (isFirst && p < start) return 0;
    if (isLast && p > end) return 0;
    if (p <= start) return 28;
    if (p >= end) return -28;
    return 28 - ((p - start) / (end - start)) * 56;
  });

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60 mb-5">
        {kicker}
      </div>
      <p
        className="font-display tracking-[-0.025em] text-onyx leading-[1.02]"
        style={{ fontSize: "clamp(28px, 4.2vw, 56px)" }}
      >
        {text}
      </p>
      <p className="mt-5 max-w-[52ch] text-[16px] md:text-[17px] leading-[1.55] text-onyx-75">
        {body}
      </p>
    </motion.div>
  );
}

function PhaseImage({
  scrollYProgress,
  index,
  total,
  src,
  alt,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  src: string;
  alt: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const fade = 0.06;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const opacity = useTransform(scrollYProgress, (p) => {
    if (isFirst && p < start + fade) return 1;
    if (isLast && p > end - fade) return 1;
    const sFadeStart = Math.max(0, start - 0.04);
    const sFull = start + fade;
    const eFull = end - fade;
    const eFadeEnd = Math.min(1, end + 0.04);
    if (p <= sFadeStart) return 0;
    if (p < sFull) return (p - sFadeStart) / Math.max(0.0001, sFull - sFadeStart);
    if (p <= eFull) return 1;
    if (p < eFadeEnd) return 1 - (p - eFull) / Math.max(0.0001, eFadeEnd - eFull);
    return 0;
  });
  const scale = useTransform(scrollYProgress, (p) => {
    const center = (start + end) / 2;
    const dist = Math.abs(p - center) * 4;
    return 1.06 - Math.min(0.06, dist * 0.06);
  });

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,20,15,0) 60%, rgba(20,20,15,0.18) 100%)",
        }}
      />
    </motion.div>
  );
}

function FrameBadge({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const total = PHASES.length;
  const phaseIndex = useTransform(scrollYProgress, (p) =>
    Math.min(total - 1, Math.max(0, Math.floor(p * total))),
  );
  const label = useTransform(phaseIndex, (i) =>
    `0${Number(i) + 1} / 0${total}`,
  );

  return (
    <div className="absolute top-4 left-4 md:top-5 md:left-5 z-10 flex items-center gap-2 rounded-full border border-canvas/40 bg-onyx/60 backdrop-blur-md px-3.5 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-copper-soft" />
      <motion.span className="font-mono text-[10px] tracking-[0.18em] uppercase text-canvas">
        {label}
      </motion.span>
    </div>
  );
}

function ProgressRail({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      aria-hidden
      className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 h-[40vh] w-px bg-onyx-15"
    >
      <motion.div style={{ height }} className="block w-px bg-onyx" />
    </div>
  );
}
