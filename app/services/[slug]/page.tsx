import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/config/business";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}/`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Services", item: absoluteUrl("/services/") },
    { name: service.name, item: absoluteUrl(`/services/${service.slug}/`) },
  ]);

  const faqLd = faqJsonLd(service.faqs);
  const serviceLd = serviceJsonLd({
    name: service.name,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    areaServed: BUSINESS.serviceAreas,
  });

  return (
    <div>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />

      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Badge>Service</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {service.name} in {BUSINESS.primaryCity}
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              {service.hero.subheadline}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Get Free Quote</Button>
              <Button href="/services/" variant="secondary">
                View all services
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <Card key={b.title} className="p-5">
                  <p className="text-sm font-semibold">{b.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{b.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm shadow-black/5">
            <div className="grid gap-2 sm:grid-cols-2">
              {service.gallery.slice(0, 2).map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90"
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src={service.gallery[2]?.src ?? service.gallery[0]?.src ?? "/placeholders/interlock-1.svg"}
                alt={service.gallery[2]?.alt ?? service.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              A clean finish starts with the steps you do not see. We build from the base up.
            </p>
            <div className="mt-6 grid gap-4">
              {service.process.map((step, idx) => (
                <Card key={step.title} className="p-6">
                  <p className="text-xs font-semibold text-zinc-500">Step {idx + 1}</p>
                  <p className="mt-2 text-sm font-semibold">{step.title}</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Pricing factors</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Exact pricing depends on the project. These are the main drivers:
            </p>
            <div className="mt-6 space-y-3">
              {service.pricingFactors.map((f) => (
                <div key={f} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5">
                  <p className="text-sm text-zinc-700">{f}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm font-semibold">Want a fast quote?</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Share your address/city, photos, and approximate size. We will respond quickly.
              </p>
              <Button className="mt-5 w-full" href="/contact/">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">
          Project examples (placeholders for now). Swap in real photos anytime.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.gallery.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-black/5">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover opacity-90"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">
          Common questions about {service.name.toLowerCase()}.
        </p>
        <div className="mt-6">
          <Accordion items={service.faqs} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/contact/">Get Free Quote</Button>
        </div>
      </Section>
    </div>
  );
}


