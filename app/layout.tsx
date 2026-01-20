import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/config/business";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} - Interlock & Hardscaping in ${BUSINESS.primaryCity}`,
    template: `%s - ${BUSINESS.name}`,
  },
  description:
    "Premium interlock installation, repair, leveling, and outdoor hardscaping built for curb appeal and durability. Get a fast, honest quote.",
  alternates: { canonical: BUSINESS.siteUrl },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} - Interlock & Hardscaping`,
    description:
      "Premium interlock installation, repairs, leveling, and outdoor hardscaping. Request a free quote today.",
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} - Interlock & Hardscaping`,
    images: ["/og-default.svg"],
  },
  verification: BUSINESS.googleSiteVerification
    ? { google: BUSINESS.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteNav />
        <div className="min-h-[calc(100svh-4rem)]">{children}</div>
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
