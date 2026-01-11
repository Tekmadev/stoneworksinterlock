import type { MetadataRoute } from "next";
import { BUSINESS } from "@/config/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}


