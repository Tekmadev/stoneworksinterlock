import type { MetadataRoute } from "next";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";
import { LOCATION_CITIES } from "@/data/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services/", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/contact/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/locations/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gallery/", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/blog/", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about/", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq/", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const locationEntries: MetadataRoute.Sitemap = LOCATION_CITIES.map((c) => ({
    url: `${base}/locations/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  return [...staticEntries, ...serviceEntries, ...locationEntries, ...blogEntries];
}


