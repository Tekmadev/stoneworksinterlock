import type { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { GENERAL_FAQS } from "@/data/faqs";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about interlock installation, repairs, leveling, patios, washing, polymeric sand, and turf.",
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
        <div className="mt-10 flex justify-center">
          <Button href="/contact/">Get Free Quote</Button>
        </div>
      </Section>
    </div>
  );
}


