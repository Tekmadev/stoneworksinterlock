import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/config/business";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { absoluteUrl, blogPostingJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.cover.src,
  });
}

function formatBlogDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = absoluteUrl(`/blog/${post.slug}/`);
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Blog", item: absoluteUrl("/blog/") },
    { name: post.title, item: url },
  ]);

  const blogLd = blogPostingJsonLd({
    headline: post.title,
    description: post.description,
    url,
    image: post.cover.src,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authorName: BUSINESS.name,
  });

  return (
    <div>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={blogLd} />

      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {post.category} • {formatBlogDate(post.datePublished)}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-600">{post.description}</p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm shadow-black/5">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
                <Image
                  src={post.cover.src}
                  alt={post.cover.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover opacity-95"
                />
              </div>
            </div>

            <div className="mt-10 space-y-8">
              {post.content.intro.map((p) => (
                <p key={p} className="text-base leading-8 text-zinc-800">
                  {p}
                </p>
              ))}

              {post.content.sections.map((s) => (
                <div key={s.heading} className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-8 text-zinc-800">
                      {p}
                    </p>
                  ))}
                  {s.bullets?.length ? (
                    <ul className="ml-5 list-disc space-y-2 text-base leading-8 text-zinc-800">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              <Card className="p-6">
                <p className="text-sm font-semibold text-zinc-950">Quick next step</p>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {post.content.outroCta}
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <TrackedCallButton placement="blog_post" size="md">
                    Call {BUSINESS.phone}
                  </TrackedCallButton>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                  >
                    Get Free Quote (Form)
                  </Link>
                </div>
              </Card>

              <div className="pt-2">
                <Link className="text-sm font-semibold text-accent hover:text-zinc-950" href="/blog/">
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <Card className="p-6">
              <p className="text-sm font-semibold text-zinc-950">More help</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Looking for pricing or timelines? Call and we’ll give you a quick, honest answer.
              </p>
              <div className="mt-4 grid gap-2">
                <TrackedCallButton placement="blog_sidebar" size="md">
                  Call {BUSINESS.phone}
                </TrackedCallButton>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                >
                  View all services
                </Link>
              </div>
            </Card>

            {/* Related services - internal links */}
            {post.relatedServices && post.relatedServices.length > 0 && (
              <Card className="p-6">
                <p className="text-sm font-semibold text-zinc-950">Related services</p>
                <ul className="mt-3 space-y-2">
                  {post.relatedServices.map((serviceSlug) => {
                    const svc = getServiceBySlug(serviceSlug);
                    if (!svc) return null;
                    return (
                      <li key={serviceSlug}>
                        <Link
                          href={`/services/${svc.slug}/`}
                          className="text-sm text-accent hover:text-zinc-950 hover:underline"
                        >
                          {svc.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            )}

            {/* More from the blog - internal links */}
            {(() => {
              const otherPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug).slice(0, 3);
              if (otherPosts.length === 0) return null;
              return (
                <Card className="p-6">
                  <p className="text-sm font-semibold text-zinc-950">More from the blog</p>
                  <ul className="mt-3 space-y-2">
                    {otherPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}/`}
                          className="text-sm text-accent hover:text-zinc-950 hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })()}

            {/* FAQ link */}
            <Card className="p-6">
              <p className="text-sm font-semibold text-zinc-950">Have questions?</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                Check our FAQ for answers about our services.
              </p>
              <Link
                href="/faq/"
                className="mt-3 inline-block text-sm font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                View FAQ &rarr;
              </Link>
            </Card>
          </aside>
        </div>
      </Section>
    </div>
  );
}

