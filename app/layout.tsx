import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BUSINESS } from "@/config/business";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
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
    default: `Interlock & Hardscaping in ${BUSINESS.primaryCity}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    `Call ${BUSINESS.phone} for a free quote. Premium interlock installation, repair, leveling, and outdoor hardscaping built for curb appeal and durability.`,
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
    title: `${BUSINESS.name} | Interlock & Hardscaping`,
    description:
      `Call ${BUSINESS.phone} for a free quote. Premium interlock installation, repairs, leveling, and outdoor hardscaping.`,
    images: [{ url: "/og-default.svg", width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Interlock & Hardscaping`,
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
  // GA4 Measurement ID (G-XXXX). If you already have Firebase measurement id,
  // you can reuse it here.
  const gaId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <SiteNav />
        <div className="min-h-[calc(100svh-4rem)]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
