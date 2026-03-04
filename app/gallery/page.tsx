import type { Metadata } from "next";
import Link from "next/link";
import { GALLERY_ITEMS } from "@/data/gallery";
import { BUSINESS } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Explore interlock, patios, repairs, washing, polymeric sand, and turf project examples. Filter by service type.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Gallery
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Browse real projects completed by {BUSINESS.name}. Filter by service type and tap to view larger.
          </p>
        </div>

        <div className="mt-10">
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </Section>

      {/* Internal links for SEO + UX */}
      <Section className="pt-0">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
            Like what you see?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-zinc-600">
            Every project starts with a free, no-pressure quote. Call us or fill out the form and
            we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TrackedCallButton placement="gallery_cta" size="md">
              Call {BUSINESS.phone}
            </TrackedCallButton>
            <Button href="/contact/" variant="secondary">
              Get Free Quote
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link href="/services/" className="text-accent hover:text-zinc-950 hover:underline">
              View all services
            </Link>
            <span className="text-zinc-300">|</span>
            <Link href="/about/" className="text-accent hover:text-zinc-950 hover:underline">
              About us
            </Link>
            <span className="text-zinc-300">|</span>
            <Link href="/blog/" className="text-accent hover:text-zinc-950 hover:underline">
              Read our blog
            </Link>
            <span className="text-zinc-300">|</span>
            <Link href="/faq/" className="text-accent hover:text-zinc-950 hover:underline">
              FAQ
            </Link>
          </div>
        </Card>
      </Section>
    </div>
  );
}


