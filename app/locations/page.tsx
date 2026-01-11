import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description:
    "View service areas for interlock installation, repairs, leveling, washing, polymeric sand, patios, and turf.",
  path: "/locations/",
});

export default function LocationsIndexPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Service Areas
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Select your city to see local service info, FAQs, and a quick path to a quote.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}/`} className="group">
              <Card className="p-6 transition-colors group-hover:bg-zinc-50">
                <p className="text-sm font-semibold">{l.name}</p>
                <p className="mt-2 text-sm text-zinc-600">
                  Interlock installation & repair, patios, washing, and more.
                </p>
                <p className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
                  View city page
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}


