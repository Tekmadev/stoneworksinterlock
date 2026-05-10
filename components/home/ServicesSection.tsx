"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeCopy } from "@/data/home-copy";
import { SERVICES } from "@/data/services";
import { EASE_CINEMA } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section
      aria-label="Services"
      className="relative py-28 md:py-40 bg-canvas"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, ease: EASE_CINEMA }}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60"
            >
              {homeCopy.servicesSection.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.1 }}
              className="mt-5 font-display text-onyx leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
            >
              {homeCopy.servicesSection.heading}
            </motion.h2>
          </div>
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 1, ease: EASE_CINEMA, delay: 0.2 }}
              className="text-[17px] md:text-[18px] leading-[1.55] text-onyx-75"
            >
              {homeCopy.servicesSection.body}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.9,
        ease: EASE_CINEMA,
        delay: Math.min(0.05 * index, 0.4),
      }}
    >
      <Link
        href={`/services/${service.slug}/`}
        className="group block relative overflow-hidden rounded-[var(--radius-card)] border border-onyx-10 bg-canvas-soft hover:border-onyx-30 transition-colors duration-500 ease-cinema"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-canvas-warm">
          <Image
            src={service.gallery[0]?.src ?? "/images/hero.png"}
            alt={service.gallery[0]?.alt ?? service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.06]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,20,15,0) 50%, rgba(20,20,15,0.65) 100%)",
            }}
          />
          <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-canvas/85">
            0{index + 1}
          </div>
        </div>
        <div className="p-6 md:p-7">
          <h3
            className="font-display text-onyx leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
          >
            {service.name}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.55] text-onyx-75 line-clamp-3">
            {service.short}
          </p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-onyx group-hover:text-copper transition-colors duration-500 ease-cinema">
            <span className="underline-grow">View service</span>
            <span
              aria-hidden
              className="transition-transform duration-500 ease-cinema group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
