import type { Metadata } from "next";
import { GALLERY_ITEMS } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Section } from "@/components/ui/Section";

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
            Image-first: filter by service type and tap to view larger.
          </p>
        </div>

        <div className="mt-10">
          <GalleryGrid items={GALLERY_ITEMS} />
        </div>
      </Section>
    </div>
  );
}


