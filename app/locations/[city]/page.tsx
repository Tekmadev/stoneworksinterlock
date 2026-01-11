import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/config/business";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const loc = getLocationBySlug(params.city);
  if (!loc) return {};
  return buildMetadata({
    title: `Interlock Installation and Repair in ${loc.name}`,
    description: `Premium interlock installation, repair, leveling, and hardscaping services in ${loc.name}. Get a fast, honest quote.`,
    path: `/locations/${loc.slug}/`,
  });
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocationBySlug(params.city);
  if (!loc) notFound();

  const faqs = [
    {
      question: `Do you service ${loc.name}?`,
      answer: `Yes. We service ${loc.name} and nearby areas. Share your postal code and we will confirm scheduling and access.`,
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer interlock installation, patio installation, repairs, leveling, pressure washing/resanding, polymeric sand, and turf installation.",
    },
    {
      question: "How fast can I get a quote?",
      answer:
        "Send your details and photos and we typically respond quickly with next steps and a timeline.",
    },
    {
      question: "Can you fix pooling water?",
      answer:
        "Often yes. We can adjust grading, slope, and drainage so water moves away from structures and trouble spots.",
    },
    {
      question: "Do you handle removal/disposal?",
      answer:
        "Yes. We can remove old concrete/pavers and dispose of material as part of the project scope.",
    },
    {
      question: "Do you offer repairs instead of full replacement?",
      answer:
        "Yes. If the pavers are in good shape, re-leveling and joint refresh can be the best value solution.",
    },
  ];

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Locations", item: absoluteUrl("/locations/") },
    { name: loc.name, item: absoluteUrl(`/locations/${loc.slug}/`) },
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqJsonLd(faqs)} />

      <Section className="pt-14">
        <p className="text-xs font-semibold text-zinc-500">
          Serving {loc.name} • {BUSINESS.primaryCity} + surrounding areas
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Interlock installation and repair in {loc.name}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600">
          Looking for premium hardscaping in {loc.name}? We build and repair interlock with
          proper base prep, clean cuts, and crisp finishing details.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/">Get Free Quote</Button>
          <Button href="/services/" variant="secondary">
            View services
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">Popular services in {loc.name}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              These are the most requested services we do in {loc.name}.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}/`} className="group">
                  <Card className="p-6 transition-colors group-hover:bg-zinc-50">
                    <p className="text-sm font-semibold">{s.name}</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">{s.short}</p>
                    <p className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
                      Learn more
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm font-semibold">Request a quote</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Share your project details and photos for the fastest response.
              </p>
              <Button className="mt-5 w-full" href="/contact/">
                Start Quote
              </Button>
              <p className="mt-3 text-xs text-zinc-500">
                Tip: include approximate size and any drainage/leveling issues.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">FAQs</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">
          Quick answers for {loc.name}.
        </p>
        <div className="mt-6">
          <Accordion items={faqs} />
        </div>
      </Section>
    </div>
  );
}


