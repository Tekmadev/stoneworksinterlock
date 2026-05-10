"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { toTelHref, toWhatsAppHref } from "@/lib/format";
import { EASE_CINEMA } from "@/lib/motion";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappMsg = `Hi ${BUSINESS.name}, I'd like a free quote in Ottawa.`;

  return (
    <footer className="relative bg-canvas border-t border-onyx-15 pt-16 md:pt-24 pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: EASE_CINEMA }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-7">
            <Link
              href="/"
              className="inline-block"
              aria-label={`${BUSINESS.name} home`}
            >
              <span className="relative block h-16 w-[260px] sm:h-20 sm:w-[340px]">
                <Image
                  src={BUSINESS.logoPath ?? "/stonework-logo-removebg.png"}
                  alt={`${BUSINESS.name} logo`}
                  fill
                  sizes="(min-width: 640px) 340px, 260px"
                  className="object-contain object-left"
                />
              </span>
            </Link>
            <div
              className="mt-6 font-display tracking-[-0.04em] text-onyx leading-[0.88]"
              style={{ fontSize: "clamp(56px, 10vw, 168px)" }}
            >
              Stoneworks
              <span className="italic text-onyx-60"> Interlock</span>
            </div>
            <p className="mt-7 max-w-md text-[15px] leading-[1.55] text-onyx-75">
              Built in Ottawa. We work the Ottawa region all season, from spring
              site visits through late autumn installs. The quality of the base
              is the quality of the build.
            </p>
            <div className="mt-6 font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
              {BUSINESS.address?.street}, {BUSINESS.address?.city},{" "}
              {BUSINESS.address?.region} {BUSINESS.address?.postalCode}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
              Sitemap
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-onyx-75">
              <li>
                <Link href="/services/" className="hover:text-onyx underline-grow">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-onyx underline-grow">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-onyx underline-grow">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-onyx underline-grow">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-onyx underline-grow">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-onyx underline-grow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-onyx-75">
              <li>
                <a
                  href={toTelHref(BUSINESS.phone)}
                  className="hover:text-onyx underline-grow"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.email ? (
                <li>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="hover:text-onyx underline-grow"
                  >
                    {BUSINESS.email}
                  </a>
                </li>
              ) : null}
              {BUSINESS.whatsappPhone ? (
                <li>
                  <a
                    href={toWhatsAppHref(BUSINESS.whatsappPhone, whatsappMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-onyx underline-grow"
                  >
                    WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
            {BUSINESS.hours && BUSINESS.hours.length > 0 ? (
              <div className="mt-6">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
                  Hours
                </p>
                <ul className="mt-3 flex flex-col gap-1.5 text-[14px] text-onyx-75">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.label}>
                      <span className="text-onyx">{h.label}</span> · {h.hours}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </motion.div>

        <div className="mt-14 md:mt-20 border-t border-onyx-15 pt-10">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-onyx-60">
            All services in Ottawa
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-onyx-75">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                className="hover:text-onyx underline-grow"
                href={`/services/${s.slug}/`}
              >
                {s.name} Ottawa
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-onyx-15 pt-8">
          <NewsletterSignup className="max-w-md" />
        </div>

        <div className="mt-12 border-t border-onyx-15 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-onyx-45">
          <span>
            © {year} {BUSINESS.name}. Built one base at a time.
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-onyx" href="/privacy/">
              Privacy
            </Link>
            <Link className="hover:text-onyx" href="/terms/">
              Terms
            </Link>
            <Link className="hover:text-onyx" href="/faq/">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
