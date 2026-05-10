import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { LOCATION_CITIES } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description: `${BUSINESS.name} serves Ottawa and surrounding areas including Kanata, Nepean, Barrhaven, Orleans, Gloucester, and more. Free quotes for interlock and stonework.`,
  path: "/locations/",
});

export default function LocationsPage() {
  return (
    <div>
      <Section className="pt-14">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Areas we serve
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
            We serve Ottawa and the surrounding region for interlock installation, patio builds,
            retaining walls, repairs, and more. Click your city to see what we offer in your area.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATION_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}/`}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-black/5 transition-shadow hover:shadow-md"
            >
              <p className="text-sm font-semibold text-zinc-950">
                {city.name}
                <span className="ml-1.5 text-xs font-normal text-zinc-400">{city.region}</span>
              </p>
              <p className="mt-1.5 text-xs leading-5 text-zinc-500 line-clamp-2">
                {city.description}
              </p>
              <p className="mt-3 text-xs font-semibold text-accent">See services &rarr;</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
