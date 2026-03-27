import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = buildMetadata({
  title: "Interlock & Hardscaping Services in Ottawa",
  description:
    "Ottawa interlock and hardscaping services: driveway installation, patio installation, interlock repair, paver leveling, pressure washing, polymeric sand, turf, retaining walls, staircases, and sealant application.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Interlock &amp; Hardscaping Services in Ottawa
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Professional interlock and hardscaping services for Ottawa homeowners. Driveways, patios, repairs, retaining walls, staircases, and more, all done with strong base prep and clean finishing.
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


