import type { MetadataRoute } from "next";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  const now = new Date();

  const routes = [
    "/",
    "/services/",
    "/locations/",
    "/gallery/",
    "/about/",
    "/contact/",
    "/faq/",
  ];

  const serviceRoutes = SERVICES.map((s) => `/services/${s.slug}/`);
  const locationRoutes = LOCATIONS.map((l) => `/locations/${l.slug}/`);

  return [...routes, ...serviceRoutes, ...locationRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}


