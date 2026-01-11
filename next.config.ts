import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Firebase Hosting (static) friendly config:
  // - output: "export" emits `out/` for static hosting
  // - trailingSlash ensures folders like `/services/` map to `/services/index.html`
  // - images.unoptimized is required for static export with `next/image`
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
