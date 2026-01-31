import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { getAllBlogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const metadata: Metadata = buildMetadata({
  title: `Blog`,
  description: `Practical interlock and hardscaping tips for ${BUSINESS.primaryCity}. Call ${BUSINESS.phone} for a free quote.`,
  path: "/blog/",
});

function formatBlogDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div>
      <Section className="pt-14">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-end">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Blog
            </h1>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Practical tips on interlock, repairs, and maintenance in{" "}
              {BUSINESS.primaryCity}. Simple answers, no fluff.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <TrackedCallButton placement="blog_index" size="md">
              Call for a free quote
            </TrackedCallButton>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}/`} className="group">
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-50">
                  <Image
                    src={p.cover.src}
                    alt={p.cover.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/0 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-zinc-200 bg-white/85 p-3 backdrop-blur">
                    <p className="text-xs font-semibold text-zinc-950">{p.category}</p>
                    <p className="mt-1 text-xs text-zinc-600">{formatBlogDate(p.datePublished)}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base font-semibold tracking-tight text-zinc-950">
                    {p.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

