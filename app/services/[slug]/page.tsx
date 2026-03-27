import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { getAllBlogPosts } from "@/data/blog";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
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
            <div className="mt-7 flex flex-col gap-3 md:flex-row">
              <TrackedCallButton placement="service_hero" className="gap-2">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </TrackedCallButton>
              <Button href={`/contact/?service=${service.slug}`} variant="secondary">
                Get Free Quote
              </Button>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                What is {service.name.toLowerCase()}?
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {service.description}
              </p>
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
                Call us directly or send us photos and details through the form. We respond quickly.
              </p>
              <TrackedCallButton placement="service_sidebar" className="mt-5 w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </TrackedCallButton>
              <Button className="mt-2 w-full" variant="secondary" href={`/contact/?service=${service.slug}`}>
                Request Quote (Form)
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">
          Project examples from recent-style work.
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
        <div className="rounded-3xl border border-zinc-200 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(201,161,59,0.14),transparent_60%)] p-8 shadow-sm shadow-black/5 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to get started on your {service.name.toLowerCase()} project?
            </h2>
            <p className="max-w-lg text-sm leading-7 text-zinc-600">
              Call us today for a free estimate. We serve {BUSINESS.primaryCity} and surrounding areas including {BUSINESS.serviceAreas.slice(1, 5).join(", ")}, and more.
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <TrackedCallButton placement="service_cta_banner" size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </TrackedCallButton>
              <Button href={`/contact/?service=${service.slug}`} variant="secondary" size="lg">
                Get Free Quote
              </Button>
            </div>
          </div>
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
        <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center">
          <TrackedCallButton placement="service_faq_bottom" className="gap-2">
            <Phone className="h-4 w-4" />
            Call {BUSINESS.phone}
          </TrackedCallButton>
          <Button href={`/contact/?service=${service.slug}`} variant="secondary">
            Get Free Quote for {service.name}
          </Button>
        </div>
      </Section>

      {/* Related services - internal cross-links for SEO */}
      {(() => {
        const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
        return (
          <Section className="pt-0">
            <h2 className="text-2xl font-semibold tracking-tight">Other services</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Explore our full range of interlock and outdoor services in {BUSINESS.primaryCity}.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-zinc-950">{s.name}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 line-clamp-2">{s.short}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/services/"
                className="text-sm font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                View all services &rarr;
              </Link>
            </div>
          </Section>
        );
      })()}

      {/* Related blog posts - internal links */}
      {(() => {
        const relatedPosts = getAllBlogPosts()
          .filter((p) => p.relatedServices?.includes(service.slug))
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <Section className="pt-0">
            <h2 className="text-2xl font-semibold tracking-tight">Related articles</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Tips and expert advice related to {service.name.toLowerCase()}.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase text-zinc-500">{p.category}</p>
                  <p className="mt-2 text-sm font-semibold text-zinc-950 line-clamp-2">{p.title}</p>
                  <p className="mt-1 text-xs leading-5 text-zinc-500 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/blog/"
                className="text-sm font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                Read more on our blog &rarr;
              </Link>
            </div>
          </Section>
        );
      })()}

      {/* Cross-page links */}
      <Section className="pt-0">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          <Link href="/gallery/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
            View gallery
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/faq/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
            FAQ
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/about/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
            About us
          </Link>
          <span className="text-zinc-300">|</span>
          <Link href="/blog/" className="font-semibold text-accent hover:text-zinc-950 hover:underline">
            Blog
          </Link>
        </div>
      </Section>
    </div>
  );
}


