import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/config/business";
import { toTelHref, toWhatsAppHref } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappMsg = `Hi ${BUSINESS.name}, I'd like a free quote in Ottawa.`;

  return (
    <footer className="border-t border-zinc-200/70 bg-white">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative h-16 w-[260px] sm:h-20 sm:w-[340px]">
                <Image
                  src="/images/swil_logo-removebg.png"
                  alt={`${BUSINESS.name} logo`}
                  fill
                  sizes="(min-width: 640px) 340px, 260px"
                  className="origin-left object-contain object-left scale-[1.08]"
                />
              </span>
            </Link>
            <p className="mt-2 text-lg font-semibold tracking-tight">{BUSINESS.name}</p>
            <p className="mt-2 max-w-md text-sm text-zinc-600">
              Premium interlock and hardscaping built to last. Clean lines, strong
              base work, and details done right.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link className="hover:text-zinc-950" href="/services/">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-950" href="/about/#service-areas">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-950" href="/gallery/">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-950" href="/contact/">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a className="hover:text-zinc-950" href={toTelHref(BUSINESS.phone)}>
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.email ? (
                <li>
                  <a className="hover:text-zinc-950" href={`mailto:${BUSINESS.email}`}>
                    {BUSINESS.email}
                  </a>
                </li>
              ) : null}
              {BUSINESS.whatsappPhone ? (
                <li>
                  <a
                    className="hover:text-zinc-950"
                    href={toWhatsAppHref(BUSINESS.whatsappPhone, whatsappMsg)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200/70 pt-8">
          <NewsletterSignup className="max-w-md" />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-zinc-950" href="/privacy/">
              Privacy
            </Link>
            <Link className="hover:text-zinc-950" href="/faq/">
              FAQ
            </Link>
            <Link className="hover:text-zinc-950" href="/about/">
              About
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


