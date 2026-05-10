import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BUSINESS } from "@/config/business";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} — Ottawa Interlock, Patios & Hardscaping`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `Ottawa interlock contractors who build it once and build it right. Driveways, patios, repairs, paver leveling, retaining walls, staircases. Free quote. Call ${BUSINESS.phone}.`,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.legalName ?? BUSINESS.name }],
  creator: BUSINESS.legalName ?? BUSINESS.name,
  publisher: BUSINESS.legalName ?? BUSINESS.name,
  category: "Home Services",
  keywords: [
    "Ottawa interlock",
    "interlock Ottawa",
    "interlock installation Ottawa",
    "interlock contractor Ottawa",
    "Ottawa paver installation",
    "patio installation Ottawa",
    "Ottawa driveway pavers",
    "interlock repair Ottawa",
    "uneven pavers Ottawa",
    "paver leveling Ottawa",
    "retaining walls Ottawa",
    "interlock staircase Ottawa",
    "polymeric sand Ottawa",
    "pressure washing pavers Ottawa",
    "turf installation Ottawa",
    "interlock sealant Ottawa",
    "wet look sealant Ottawa",
    "Kanata interlock",
    "Nepean interlock",
    "Barrhaven interlock",
    "Orleans interlock",
    "Stittsville interlock",
    "Manotick interlock",
    "Stoneworks Interlock",
  ],
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
    locale: "en_CA",
    title: `${BUSINESS.name} — Ottawa Interlock, Patios & Hardscaping`,
    description: `Ottawa interlock contractors building driveways, patios and repairs that hold up through every freeze and thaw. Free quote in 24 hours.`,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: BUSINESS.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} — Ottawa Interlock, Patios & Hardscaping`,
    description: `Ottawa interlock done once, done right. Free quote in 24 hours.`,
    images: ["/og-default.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: true, email: true, address: true },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": `${BUSINESS.primaryCity}, Ontario, Canada`,
  },
  verification: BUSINESS.googleSiteVerification
    ? { google: BUSINESS.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#ede5d3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  return (
    <html
      lang="en-CA"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="bg-canvas text-onyx antialiased">
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
        <LenisProvider>
          <SiteNav />
          <main className="relative">{children}</main>
          <SiteFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
