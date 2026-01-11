import type { Metadata } from "next";
import { BUSINESS } from "@/config/business";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path: string) {
  const base = BUSINESS.siteUrl.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const image = seo.image ? absoluteUrl(seo.image) : absoluteUrl("/og-default.svg");

  return {
    metadataBase: new URL(BUSINESS.siteUrl),
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    robots: seo.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: BUSINESS.name,
      title: seo.title,
      description: seo.description,
      images: [{ url: image, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [image],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function localBusinessJsonLd() {
  const a = BUSINESS.address ?? {};
  const street = a.street?.trim();
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressCountry: a.country || "CA",
  };
  if (street) address.streetAddress = street;
  if (a.city) address.addressLocality = a.city;
  if (a.region) address.addressRegion = a.region;
  if (a.postalCode) address.postalCode = a.postalCode;

  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.legalName ?? BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    areaServed: BUSINESS.serviceAreas,
    address,
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
  };
  if (BUSINESS.email) json.email = BUSINESS.email;
  return json;
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
  areaServed: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.legalName ?? BUSINESS.name,
      url: BUSINESS.siteUrl,
      telephone: BUSINESS.phone,
    },
    areaServed: input.areaServed,
    url: input.url,
  };
}


