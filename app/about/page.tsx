import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/config/business";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about our approach to premium interlock and hardscaping: strong base work, clean finishing, and clear communication.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Built like a premium brand. Delivered like a tight crew.
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              We focus on details that actually matter: base prep, slope, clean cuts, strong edges,
              and communication that keeps the project smooth.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact/">Get Free Quote</Button>
              <Button href="/gallery/" variant="secondary">
                See work
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <p className="text-sm font-semibold">Quality base work</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Proper excavation, compaction, and grading for long-term stability.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold">Clean finishing</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Straight lines, crisp cuts, tight joints, and a premium final look.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold">Honest timelines</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                We set expectations early and keep updates simple and consistent.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm font-semibold">Respect for your property</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Clean work area, careful access, and a tidy handoff.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            We keep things simple: assess, plan, execute cleanly, and deliver a finish you’re proud
            of.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">01</p>
              <p className="mt-2 text-sm font-semibold">Assess</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Measurements, access, drainage, and material options.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">02</p>
              <p className="mt-2 text-sm font-semibold">Build</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Strong base prep, clean cuts, and tidy execution.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">03</p>
              <p className="mt-2 text-sm font-semibold">Finish</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Final clean, walkthrough, and care guidance.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
          <h2 id="service-areas" className="text-2xl font-semibold tracking-tight">
            Service areas
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            We’re based in {BUSINESS.primaryCity} and serve nearby Ottawa-area neighborhoods.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {BUSINESS.serviceAreas.map((c) => (
              <span
                key={c}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}


