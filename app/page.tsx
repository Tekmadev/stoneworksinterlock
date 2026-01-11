import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hammer, Layers, Zap } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { TESTIMONIALS } from "@/data/testimonials";
import { WORK_ITEMS } from "@/data/work";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { WorkMasonry } from "@/components/WorkMasonry";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: `${BUSINESS.name} - Interlock & Hardscaping in ${BUSINESS.primaryCity}`,
  description:
    "High-end interlock installation, repair, leveling, pressure washing/resanding, polymeric sand, patios, and turf. Fast quotes, premium finish.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <JsonLd data={localBusinessJsonLd()} />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_30%_0%,rgba(201,161,59,0.20),transparent_60%),radial-gradient(55%_55%_at_85%_15%,rgba(37,99,235,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.70),transparent_35%,rgba(250,250,250,0.95))]" />

        <main className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                Premium interlock & stonework for Ottawa homes.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                Interlock installation in Ottawa, repairs, and leveling. Built
                for clean lines and freeze/thaw durability by Ottawa interlock
                contractors homeowners trust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact/" size="lg">
                  Get Free Quote
                </Button>
                <Button
                  href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
                  variant="secondary"
                  size="lg"
                >
                  Call Now
                </Button>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm shadow-black/5">
              <div className="relative aspect-16/11 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <Image
                  src="/placeholders/interlock-1.svg"
                  alt="Recent interlock project in Ottawa (placeholder)"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-zinc-200 bg-white/85 p-4 backdrop-blur">
                  <p className="text-sm font-semibold text-zinc-950">
                    Recent Interlock Project in Ottawa
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">
                    Kanata • Placeholder image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Section>
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Our work speaks for itself
            </h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              A quick look at recent-style projects (placeholders for now).
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8">
            <WorkMasonry items={WORK_ITEMS} />
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Before / after
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                A quick visual of what proper leveling and finishing can do.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button href="/contact/" size="md">
                Get Free Quote
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8">
            <BeforeAfterSlider
              beforeSrc="/images/img-service/before.webp"
              afterSrc="/images/img-service/after.webp"
              alt="Uneven pavers leveled"
            />
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                Why homeowners choose us
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Three things that matter most for Ottawa interlock.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <Layers className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">Strong base work</p>
                      <p className="mt-1 text-sm text-zinc-600">
                        Built for Ottawa freeze/thaw.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <Hammer className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">
                        Clean leveling + finish
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        Crisp edges, tight joints.
                      </p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold">
                        Fast, clear quoting
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        Response within 24 hours.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm shadow-black/5">
              <p className="text-sm font-semibold">Serving Ottawa</p>
              <p className="mt-2 text-sm text-zinc-600">
                Ottawa homeowners • No pressure estimates
              </p>
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
              <div className="mt-6 flex flex-col gap-2">
                <Button href="/contact/">Get Free Quote</Button>
                <Button href="/locations/" variant="secondary">
                  View locations
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Services
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Quick scan: pick your service and get a quote.
              </p>
            </div>
            <Link
              className="hidden text-sm font-semibold text-accent hover:text-zinc-950 sm:inline"
              href="/services/"
            >
              View all
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight">
            Testimonials
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="p-6">
                <p className="text-sm leading-7 text-zinc-800">“{t.quote}”</p>
                <div className="mt-4 text-xs text-zinc-500">
                  <p className="font-semibold text-zinc-900">{t.name}</p>
                  <p>
                    {t.location} • {t.service}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-[radial-gradient(80%_60%_at_20%_0%,rgba(201,161,59,0.14),transparent_60%),radial-gradient(60%_50%_at_90%_30%,rgba(37,99,235,0.10),transparent_60%)] p-8 shadow-sm shadow-black/5 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Get a free quote
              </h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Serving Ottawa homeowners • Response within 24 hours • No
                pressure estimates
              </p>
              <div className="mt-6">
                <Button href="/contact/" variant="secondary">
                  Full quote form + photo upload
                </Button>
              </div>
            </div>
            <QuoteForm variant="short" className="lg:mt-0" />
          </div>
        </div>
      </Section>
    </div>
  );
}
