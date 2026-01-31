import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { Suspense } from "react";
import { BUSINESS } from "@/config/business";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { toTelHref, toWhatsAppHref } from "@/lib/format";
import { JsonLd } from "@/components/JsonLd";
import { ContactQuoteForm } from "@/components/ContactQuoteForm";
import { ContactQueryCtas } from "@/components/ContactQueryCtas";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Free Quote",
  description:
    "Request a free quote for interlock installation, repairs, leveling, washing, polymeric sand, patios, or turf. Fast response.",
  path: "/contact/",
});

export default function ContactPage() {
  const a = BUSINESS.address ?? {};
  const addressText = [a.street, a.city, a.region, a.postalCode].filter(Boolean).join(", ");
  const mapQuery = encodeURIComponent(addressText || `${BUSINESS.primaryCity}, ${a.region || ""}`);

  return (
    <div>
      <JsonLd data={localBusinessJsonLd()} />

      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Contact & free quote
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
              Fill out the form with details and photos for the fastest quote. Prefer to talk?
              Call or WhatsApp.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Button href={toTelHref(BUSINESS.phone)} variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" />
                Click to call
              </Button>
              {BUSINESS.whatsappPhone ? (
                <Suspense
                  fallback={
                    <Button variant="secondary" className="gap-2" disabled>
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  }
                >
                  <ContactQueryCtas />
                </Suspense>
              ) : null}
            </div>

            <div className="mt-8 grid gap-4">
              <Card className="p-6">
                <p className="text-sm font-semibold">What to include for the fastest quote</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  <li>City + postal code</li>
                  <li>Approximate size (sq ft or rough dimensions)</li>
                  <li>Photos of the area (optional but recommended)</li>
                  <li>Timeline and any urgency</li>
                </ul>
              </Card>

              <Card className="p-6">
                <p className="text-sm font-semibold">Business details</p>
                <p className="mt-2 text-sm text-zinc-600">{BUSINESS.name}</p>
                <p className="mt-1 text-sm text-zinc-600">
                  <a className="hover:text-zinc-950" href={toTelHref(BUSINESS.phone)}>
                    {BUSINESS.phone}
                  </a>
                </p>
                {BUSINESS.email ? (
                  <p className="mt-1 text-sm text-zinc-600">
                    <a className="hover:text-zinc-950" href={`mailto:${BUSINESS.email}`}>
                      {BUSINESS.email}
                    </a>
                  </p>
                ) : null}
                {addressText ? (
                  <p className="mt-1 text-sm text-zinc-600">{addressText}</p>
                ) : (
                  <p className="mt-1 text-sm text-zinc-600">
                    Service-based business. No public storefront.
                  </p>
                )}
              </Card>
            </div>
          </div>

          <div>
            <Suspense fallback={<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">Loading form…</div>}>
              <ContactQuoteForm />
            </Suspense>

            <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm shadow-black/5">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <iframe
                  title="Map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                />
              </div>
              <p className="p-4 text-xs text-zinc-500">
                Serving Ottawa and surrounding areas. Visit by appointment only.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
