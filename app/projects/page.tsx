import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/config/business";
import { toTelHref } from "@/lib/format";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Interlock Projects in Ottawa",
  description:
    "Before and after photos of interlock driveways, patios, repairs, and outdoor projects completed by Stoneworks Interlock across Ottawa.",
  path: "/projects/",
});

const PROJECTS = [
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (5).webp",
    alt: "Interlock project result — Ottawa driveway and patio",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (6).webp",
    alt: "Interlock installation completed in Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (7).webp",
    alt: "Stoneworks Interlock completed project — Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (8).webp",
    alt: "Ottawa interlock driveway before and after",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (9).webp",
    alt: "Patio installation result — Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (10).webp",
    alt: "Interlock repair and leveling result in Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (11).webp",
    alt: "Stoneworks Interlock — Ottawa hardscape project",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (12).webp",
    alt: "Ottawa interlock patio and walkway project",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (14).webp",
    alt: "Interlock staircase and front entrance Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (15).webp",
    alt: "Driveway interlock completed — Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (16).webp",
    alt: "Stoneworks Interlock project — Ottawa residential",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (17).webp",
    alt: "Ottawa interlock walkway and patio result",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (18).webp",
    alt: "Interlock driveway transformation Ottawa",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (20).webp",
    alt: "Stoneworks Interlock Ottawa — finished project",
  },
  {
    src: "/images/newbeforenafter/Stoneworks Interlock Ads (21).webp",
    alt: "Ottawa interlock project completed by Stoneworks",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-canvas text-onyx">
      {/* Page header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-5 md:px-10 mx-auto max-w-[1400px]">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-onyx-60 mb-6">
          Our work
        </p>
        <h1
          className="font-display text-onyx leading-[0.95] tracking-[-0.025em]"
          style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          Interlock projects
          <br />
          <em className="italic text-copper">across Ottawa.</em>
        </h1>
        <p className="mt-8 max-w-[58ch] text-[17px] md:text-[19px] leading-[1.55] text-onyx-75">
          Every project below was built by our crew in Ottawa. Driveways, patios, walkways,
          repairs, and staircases. The same base-first approach on every job.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-onyx px-7 py-4 text-[15px] font-medium text-canvas hover:bg-copper transition-colors duration-500"
          >
            Get a free quote &rarr;
          </Link>
          <a
            href={toTelHref(BUSINESS.phone)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-onyx/20 px-7 py-4 text-[15px] font-medium text-onyx hover:bg-onyx hover:text-canvas transition-colors duration-500"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-onyx-10 bg-canvas-soft">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Completed projects" },
            { value: "20+", label: "Years on the tools" },
            { value: "24h", label: "Free quote response" },
            { value: "100%", label: "Workmanship guarantee" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display text-onyx leading-none tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.18em] uppercase text-onyx-60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-onyx-10 bg-onyx-05"
            >
              <div className="relative w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24 md:pb-32">
        <div className="rounded-[var(--radius-card)] bg-onyx text-canvas p-10 md:p-16 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-canvas/60">
            Free quote
          </p>
          <h2
            className="mt-4 font-display text-canvas leading-[0.97] tracking-[-0.025em]"
            style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
          >
            Ready to upgrade your{" "}
            <em className="italic text-copper">driveway or patio?</em>
          </h2>
          <p className="mt-5 max-w-[52ch] mx-auto text-[16px] md:text-[18px] leading-[1.55] text-canvas/70">
            Tell us about your project and we will get back to you within 24 hours with a clear,
            no-pressure quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-8 py-4 text-[15px] font-medium text-canvas hover:bg-copper-deep transition-colors duration-500"
            >
              Get a free quote &rarr;
            </Link>
            <a
              href={toTelHref(BUSINESS.phone)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-canvas/25 px-8 py-4 text-[15px] font-medium text-canvas hover:bg-canvas hover:text-onyx transition-colors duration-500"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
