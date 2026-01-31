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

function toE164Maybe(phone: string) {
  // Keep leading +, strip everything else.
  const cleaned = phone.trim().replace(/[^\d+]/g, "");
  return cleaned.startsWith("+") ? cleaned : cleaned;
}

function isTruthyString(x: unknown): x is string {
  return typeof x === "string" && x.trim().length > 0;
}

function withBusinessTitle(title: string) {
  const t = title.trim();
  if (!t) return BUSINESS.name;
  const nameLower = BUSINESS.name.toLowerCase();
  const tLower = t.toLowerCase();
  return tLower.includes(nameLower) ? t : `${t} | ${BUSINESS.name}`;
}

function buildMapsQueryUrl() {
  const a = BUSINESS.address ?? {};
  const addressText = [a.street, a.city, a.region, a.postalCode, a.country]
    .filter(Boolean)
    .join(", ");
  if (!addressText) return "";
  return `https://www.google.com/maps?q=${encodeURIComponent(addressText)}`;
}

function openingHoursFromLabel(label: string, hours: string) {
  // Supports simple cases like:
  // - "Mon-Sat" + "8:00 AM - 6:00 PM" => "Mo-Sa 08:00-18:00"
  // - "Sunday" + "Closed" => omitted
  const h = hours.trim().toLowerCase();
  if (h === "closed") return "";

  const timeMatch = hours.match(
    /(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i,
  );
  if (!timeMatch) return "";

  const to24 = (hh: string, mm: string, ampm: string) => {
    let hNum = Number.parseInt(hh, 10);
    const mNum = Number.parseInt(mm, 10);
    const ap = ampm.toUpperCase();
    if (ap === "AM" && hNum === 12) hNum = 0;
    if (ap === "PM" && hNum !== 12) hNum += 12;
    return `${String(hNum).padStart(2, "0")}:${String(mNum).padStart(2, "0")}`;
  };

  const open = to24(timeMatch[1], timeMatch[2], timeMatch[3]);
  const close = to24(timeMatch[4], timeMatch[5], timeMatch[6]);

  const mapDay = (d: string) => {
    const s = d.trim().toLowerCase();
    if (s.startsWith("mon")) return "Mo";
    if (s.startsWith("tue")) return "Tu";
    if (s.startsWith("wed")) return "We";
    if (s.startsWith("thu")) return "Th";
    if (s.startsWith("fri")) return "Fr";
    if (s.startsWith("sat")) return "Sa";
    if (s.startsWith("sun")) return "Su";
    return "";
  };

  const normalized = label.replace(/\s+/g, " ").trim();
  const rangeMatch = normalized.match(
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*-\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)$/i,
  );
  const singleMatch = normalized.match(/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)(day)?$/i);

  const dayPart = rangeMatch
    ? `${mapDay(rangeMatch[1])}-${mapDay(rangeMatch[2])}`
    : singleMatch
      ? mapDay(singleMatch[1])
      : "";

  if (!dayPart) return "";
  return `${dayPart} ${open}-${close}`;
}

export function buildMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const image = seo.image ? absoluteUrl(seo.image) : absoluteUrl("/og-default.svg");
  const socialTitle = withBusinessTitle(seo.title);

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
      title: socialTitle,
      description: seo.description,
      images: [{ url: image, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
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

  const type = BUSINESS.schemaLocalBusinessType?.trim() || "LocalBusiness";
  const logo = BUSINESS.logoPath ? absoluteUrl(BUSINESS.logoPath) : "";
  const image = BUSINESS.defaultImagePath ? absoluteUrl(BUSINESS.defaultImagePath) : "";
  const mapsUrl = BUSINESS.googleMapsUrl?.trim() || buildMapsQueryUrl();
  const openingHours =
    BUSINESS.hours
      ?.map((h) => openingHoursFromLabel(h.label, h.hours))
      .filter(isTruthyString) ?? [];

  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl("/#localbusiness"),
    name: BUSINESS.legalName ?? BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: toE164Maybe(BUSINESS.phone),
    areaServed: BUSINESS.serviceAreas,
    address,
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
  };
  // Make "call to get a quote" explicit for SEO.
  json.contactPoint = [
    {
      "@type": "ContactPoint",
      telephone: toE164Maybe(BUSINESS.phone),
      contactType: "customer service",
      areaServed: BUSINESS.serviceAreas,
      availableLanguage: ["en"],
    },
  ];
  if (BUSINESS.email) json.email = BUSINESS.email;
  if (logo) json.logo = logo;
  if (image) json.image = image;
  if (mapsUrl) json.hasMap = mapsUrl;
  if (openingHours.length) json.openingHours = openingHours;
  if (BUSINESS.priceRange) json.priceRange = BUSINESS.priceRange;
  if (BUSINESS.geo) {
    json.geo = {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    };
  }
  return json;
}

export function organizationJsonLd() {
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

  const logo = BUSINESS.logoPath ? absoluteUrl(BUSINESS.logoPath) : "";
  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: BUSINESS.legalName ?? BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: toE164Maybe(BUSINESS.phone),
    sameAs: Object.values(BUSINESS.social).filter(Boolean),
  };
  if (logo) json.logo = logo;
  if (BUSINESS.email) json.email = BUSINESS.email;
  if (street || a.city || a.region || a.postalCode) json.address = address;
  return json;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: BUSINESS.siteUrl,
    name: BUSINESS.name,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
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
      "@id": absoluteUrl("/#localbusiness"),
    },
    areaServed: input.areaServed,
    url: input.url,
  };
}

export function blogPostingJsonLd(input: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string; // ISO date
  dateModified?: string; // ISO date
  authorName?: string;
}) {
  const img = input.image ? absoluteUrl(input.image) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
    headline: input.headline,
    description: input.description,
    image: img ? [img] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Organization",
      name: input.authorName || BUSINESS.name,
      "@id": absoluteUrl("/#organization"),
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      "@id": absoluteUrl("/#organization"),
    },
  };
}


