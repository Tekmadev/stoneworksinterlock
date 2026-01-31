import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Service Areas",
  description: `Service areas for ${BUSINESS.name}. Serving Ottawa and nearby areas.`,
  path: "/locations/",
});

export default function LocationsPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Service areas
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              We serve Ottawa and surrounding areas. See the full list on our About page.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/about/#service-areas"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
            >
              View service areas
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Card className="p-6">
            <p className="text-sm font-semibold">Quick list</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

