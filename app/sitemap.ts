import type { MetadataRoute } from "next";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  const now = new Date();

  const routes = [
    "/",
    "/services/",
    "/gallery/",
    "/blog/",
    "/about/",
    "/privacy/",
    "/contact/",
    "/faq/",
    "/locations/",
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}/`);
  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}/`);

  return [...routes, ...serviceRoutes, ...blogRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}


