import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/config/business";
import { toTelHref } from "@/lib/format";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Stoneworks Interlock: premium interlock and hardscaping in Ottawa. Strong base work, clean finishing, honest timelines, and clear communication.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">About us</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Built like a premium brand. Delivered like a tight crew.
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-600">
              Stoneworks Interlock is an Ottawa-based hardscaping company that specializes in
              interlock driveways, patios, walkways, repairs, leveling, pressure washing, polymeric
              sand, turf installation, retaining walls, staircases, and sealant applications. We
              focus on the details that actually matter: proper base preparation, accurate grading,
              clean cuts, strong edge restraints, and communication that keeps the project smooth
              from start to finish.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Whether you&apos;re upgrading your front entrance, fixing a sinking walkway, or building a
              backyard patio from scratch, we bring the same standard of care to every job, big or
              small. We&apos;re not the biggest crew in town, and that&apos;s by design. It means the people
              quoting your project are the same people building it.
            </p>
            {BUSINESS.hours && BUSINESS.hours.length > 0 ? (
              <p className="mt-3 text-sm font-medium text-zinc-700">
                Hours: {BUSINESS.hours.map((h) => `${h.label} ${h.hours}`).join(" • ")}
              </p>
            ) : null}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={toTelHref(BUSINESS.phone)}>
                <Phone className="h-4 w-4" />
                Call for Free Quote
              </Button>
              <Button href="/gallery/" variant="secondary">
                See our work
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm shadow-black/5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src="/images/workexample/work1done.jpeg"
                alt="Stoneworks Interlock completed project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* What sets us apart */}
      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">What sets us apart</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
          There are plenty of contractors in Ottawa. Here&apos;s why homeowners choose us and keep
          coming back.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <p className="text-2xl font-bold text-accent">01</p>
            <p className="mt-3 text-sm font-semibold">Quality base work</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              Every project starts below the surface. We excavate to the right depth, use the
              correct granular material, and compact in proper lifts. This is what prevents
              sinking, shifting, and cracking years down the line, and it&apos;s where most shortcuts
              happen in this industry.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-2xl font-bold text-accent">02</p>
            <p className="mt-3 text-sm font-semibold">Clean finishing</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We cut clean edges, set tight joints, and make sure every transition looks
              intentional. Curves, borders, steps, and tie-ins to existing structures are all
              handled with care. The finishing is what people see, and we take it seriously.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-2xl font-bold text-accent">03</p>
            <p className="mt-3 text-sm font-semibold">Honest timelines</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We don&apos;t overpromise on start dates or rush through projects. We&apos;ll give you a
              realistic schedule upfront, communicate any changes early, and keep the job moving
              without cutting corners. You&apos;ll always know where things stand.
            </p>
          </Card>
          <Card className="p-6">
            <p className="text-2xl font-bold text-accent">04</p>
            <p className="mt-3 text-sm font-semibold">Respect for your property</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We protect landscaping, driveways, and anything adjacent to the work area. Equipment
              is placed carefully, materials are stored neatly, and the site is cleaned up before
              we leave. You shouldn&apos;t have to clean up after your contractor.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our story */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Our story</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
            <p>
              Stoneworks Interlock started with a simple idea: do the work right, treat people well,
              and let the results speak for themselves. We&apos;ve seen too many projects where corners
              were cut on the base, edges were left rough, or homeowners were left guessing about
              timelines and costs. We wanted to be different.
            </p>
            <p>
              We&apos;re a small, focused crew based in Ottawa. That means the person who gives you the
              quote is the same person who oversees the build. There&apos;s no sales team handing you off
              to a random subcontractor. You deal with us directly, start to finish.
            </p>
            <p>
              Our work covers the full range of interlock and hardscaping services: installation,
              repair, leveling, pressure washing, polymeric sand, turf, and sealant. We&apos;ve built
              driveways in Kanata, patios in Barrhaven, repaired walkways in Orleans, and washed and
              resanded surfaces across the city. Every project gets the same attention to detail,
              regardless of size.
            </p>
            <p>
              We&apos;re proud of the reputation we&apos;re building, one job at a time. If you&apos;re looking for
              a contractor who shows up, communicates clearly, and delivers a clean result, give us a
              call.
            </p>
          </div>
        </div>
      </Section>

      {/* Our process */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Our process</h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            We keep things straightforward. Every project follows the same proven steps so nothing
            gets missed and you always know what&apos;s happening.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">Step 1</p>
              <p className="mt-2 text-sm font-semibold">Free consultation</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Call us or fill out the quote form. Share your address, what you need, and any
                photos. We&apos;ll review everything, visit if needed, and give you an honest quote with
                no pressure.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">Step 2</p>
              <p className="mt-2 text-sm font-semibold">Plan &amp; prep</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                We confirm the scope, materials, layout, and timeline. We handle permits if needed,
                mark utilities, and schedule the work. You&apos;ll know exactly what&apos;s happening and
                when.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">Step 3</p>
              <p className="mt-2 text-sm font-semibold">Build</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                We excavate, grade, compact, and build from the base up. Pavers are laid with
                precision, edges are cut clean, and joints are filled properly. We keep the site
                tidy throughout.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-semibold text-zinc-500">Step 4</p>
              <p className="mt-2 text-sm font-semibold">Walkthrough &amp; handoff</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                We clean up, walk you through the finished work, and share care and maintenance
                tips. If anything needs adjusting, we handle it on the spot. You get a clean result
                and peace of mind.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why homeowners trust us */}
      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight">Why homeowners trust us</h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
          Real reasons people choose Stoneworks Interlock over other contractors.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "We do the work ourselves",
              text: "No subcontractors, no middlemen. The crew that shows up is our crew. You're not handed off to someone you've never met.",
            },
            {
              title: "Transparent pricing",
              text: "You'll get a clear, itemized quote before any work starts. No hidden fees, no surprise add-ons. The price we agree on is the price you pay.",
            },
            {
              title: "We stand behind our work",
              text: "Every project comes with a workmanship warranty. If something isn't right, we come back and fix it. No questions, no runaround.",
            },
            {
              title: "Local knowledge",
              text: "We know Ottawa's soil, frost lines, drainage patterns, and permit requirements. That local experience translates to better results and fewer surprises.",
            },
            {
              title: "Responsive communication",
              text: "We answer calls, reply to messages, and keep you updated throughout the project. You'll never be left wondering what's happening with your job.",
            },
            {
              title: "Clean, safe job sites",
              text: "We protect your lawn, gardens, and surrounding areas. Tools and materials are organized, and we clean up daily. Your property is treated with care.",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Business hours */}
      {BUSINESS.hours && BUSINESS.hours.length > 0 ? (
        <Section className="pt-0">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight">Business hours</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We&apos;re available during the following hours. For the fastest response, give us a call.
            </p>
            <div className="mt-6 space-y-3">
              {BUSINESS.hours.map((h) => (
                <div key={h.label} className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-3">
                  <p className="text-sm font-semibold text-zinc-800">{h.label}</p>
                  <p className="text-sm text-zinc-600">{h.hours}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href={toTelHref(BUSINESS.phone)} variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </Button>
            </div>
          </div>
        </Section>
      ) : null}

      {/* Service areas */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-black/5 sm:p-10">
          <h2 id="service-areas" className="text-2xl font-semibold tracking-tight">
            Service areas
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            We&apos;re based in {BUSINESS.primaryCity} and proudly serve homeowners across the
            Ottawa region. Not sure if we cover your area? Call us or submit a quote request with
            your postal code and we&apos;ll confirm.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {BUSINESS.serviceAreas.map((c) => (
              <span
                key={c}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold text-zinc-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="pt-0">
        <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-zinc-600">
            Whether you need a new driveway, a patio repair, or just want to freshen up your
            interlock with a wash and resand, we&apos;re here to help. Call us for a free, no-pressure
            quote.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href={toTelHref(BUSINESS.phone)} size="lg">
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </Button>
            <Button href="/contact/" variant="secondary" size="lg">
              Get Free Quote (Form)
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
