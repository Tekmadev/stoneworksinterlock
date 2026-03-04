import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { GENERAL_FAQS } from "@/data/faqs";
import { BUSINESS } from "@/config/business";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about interlock installation, repairs, leveling, retaining walls, staircases, patios, washing, polymeric sand, and turf.",
  path: "/faq/",
});

export default function FaqPage() {
  return (
    <div>
      <JsonLd data={faqJsonLd(GENERAL_FAQS)} />
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Quick answers about our services, timelines, and what to expect.
          </p>
        </div>
        <div className="mt-10">
          <Accordion items={GENERAL_FAQS} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <TrackedCallButton placement="faq_cta" size="md">
            Call {BUSINESS.phone}
          </TrackedCallButton>
          <Button href="/contact/" variant="secondary">Get Free Quote</Button>
        </div>
      </Section>

      {/* Internal cross-links for SEO */}
      <Section className="pt-0">
        <Card className="p-8">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
            Explore more
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            Still have questions? Browse our services for detailed breakdowns, check our gallery for
            real project photos, or read our blog for expert tips.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/services/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
              All services
            </Link>
            <Link href="/gallery/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
              Project gallery
            </Link>
            <Link href="/blog/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
              Blog &amp; tips
            </Link>
            <Link href="/about/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
              About us
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
}


