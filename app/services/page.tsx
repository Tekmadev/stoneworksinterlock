import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore our interlock and hardscaping services including installation, repairs, leveling, washing, polymeric sand, and turf.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Services
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Premium exterior work done with strong base prep, clean finishing, and
            thoughtful details.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>
    </div>
  );
}


