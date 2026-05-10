import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { LOCATION_CITIES, getCityBySlug } from "@/data/locations";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATION_CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return buildMetadata({
    title: `Interlock & Stonework in ${city.name}, ${city.region}`,
    description: `${BUSINESS.name} serves ${city.name} for interlock installation, patio builds, retaining walls, repairs, and more. Free quotes. Fast response.`,
    path: `/locations/${city.slug}/`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Locations", item: absoluteUrl("/locations/") },
    { name: city.name, item: absoluteUrl(`/locations/${city.slug}/`) },
  ]);

  // City-specific LocalBusiness override — same business but areaServed narrowed to this city
  const localBizLd = {
    ...localBusinessJsonLd(),
    areaServed: city.name,
    description: city.description,
  };

  const featuredServices = SERVICES.slice(0, 6);
  const remainingServices = SERVICES.slice(6);

  return (
    <div>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={localBizLd} />

      {/* Hero */}
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Serving {city.name}, {city.region}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Interlock and Stonework in {city.name}
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{city.description}</p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              We handle everything from new interlock driveways and backyard patios to retaining walls,
              staircase builds, leveling, pressure washing, and polymeric sand. Every job gets a proper
              base and a clean finish built to handle Ottawa winters.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedCallButton placement={`city_hero_${city.slug}`} className="gap-2">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </TrackedCallButton>
              <Button href="/contact/" variant="secondary">
                Get a Free Quote
              </Button>
            </div>
          </div>

          <Card className="p-6">
            <p className="text-sm font-semibold">Why homeowners in {city.name} choose us</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-4 text-amber-700">✓</span>
                Free, no-pressure estimates
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-4 text-amber-700">✓</span>
                Proper base prep — not just surface work
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-4 text-amber-700">✓</span>
                Work that holds through freeze-thaw cycles
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-4 text-amber-700">✓</span>
                Responsive — we get back to you fast
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-amber-100 text-center text-xs font-bold leading-4 text-amber-700">✓</span>
                Clean site, clear timeline, no surprises
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Services grid */}
      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">
          Services we offer in {city.name}
        </h2>
        <p className="mt-2 text-sm leading-7 text-zinc-600">
          We cover the full range of interlock and outdoor stonework. Click any service to learn more.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold text-zinc-950">{s.name} in {city.name}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500 line-clamp-2">{s.short}</p>
              <p className="mt-3 text-xs font-semibold text-accent">Learn more &rarr;</p>
            </Link>
          ))}
        </div>
        {remainingServices.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {remainingServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
              >
                <p className="text-sm font-semibold text-zinc-950">{s.name} in {city.name}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500 line-clamp-2">{s.short}</p>
                <p className="mt-3 text-xs font-semibold text-accent">Learn more &rarr;</p>
              </Link>
            ))}
          </div>
        )}
      </Section>

      {/* CTA banner */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(201,161,59,0.14),transparent_60%)] p-8 shadow-sm shadow-black/5 sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Get a free quote for your {city.name} project
            </h2>
            <p className="max-w-lg text-sm leading-7 text-zinc-600">
              Send us photos and a rough description and we will get back to you fast. No obligation,
              no pressure.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedCallButton placement={`city_cta_${city.slug}`} size="lg" className="gap-2">
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone}
              </TrackedCallButton>
              <Button href="/contact/" variant="secondary" size="lg">
                Request a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Other areas */}
      <Section className="pt-0">
        <h2 className="text-xl font-semibold tracking-tight">Other areas we serve</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {LOCATION_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}/`}
              className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
