export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  googleBusinessProfile?: string;
  tiktok?: string;
  youtube?: string;
};

export type BusinessInfo = {
  siteUrl: string;
  name: string;
  legalName?: string;
  phone: string;
  /**
   * Optional. Leave blank until you confirm the correct inbox.
   * The UI will hide the email link if this is empty.
   */
  email?: string;
  whatsappPhone?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  /**
   * Optional: used to enrich Local SEO (JSON-LD).
   * If you don't know this yet, leave it blank.
   */
  geo?: {
    latitude: number;
    longitude: number;
  };
  primaryCity: string;
  serviceAreas: string[];
  social: SocialLinks;
  hours?: {
    label: string;
    hours: string;
  }[];
  /**
   * Optional SEO fields.
   * - googleSiteVerification: Google Search Console HTML meta value (NOT the whole meta tag)
   * - schemaLocalBusinessType: a more specific schema.org type than "LocalBusiness"
   * - logoPath/defaultImagePath: paths under /public (ex: "/images/logo.png")
   * - priceRange: ex "$$", "$$$"
   * - googleMapsUrl: preferred stable Maps URL (GBP "Directions" link or Place URL)
   */
  googleSiteVerification?: string;
  schemaLocalBusinessType?: string;
  logoPath?: string;
  defaultImagePath?: string;
  priceRange?: string;
  googleMapsUrl?: string;
};

/**
 * Central business config (edit this first).
 * Tip: keep `siteUrl` as your final production domain for correct canonical URLs + sitemap.
 */
export const BUSINESS: BusinessInfo = {
  siteUrl: "https://www.stoneworksinterlock.com",
  name: "Stoneworks Interlock",
  legalName: "Stoneworks Interlock",
  phone: "+1 (613) 850-8158",
  whatsappPhone: "+1 (613) 850-8158",
  // Optional: set when you confirm the correct inbox for quote requests
  email: "stoneworksinterlock@gmail.com",
  address: {
    street: "840 Montréal Rd",
    city: "Ottawa",
    region: "ON",
    postalCode: "K1K 4W3",
    country: "CA",
  },
  // Optional: add precise coordinates for stronger LocalBusiness schema
  // geo: { latitude: 45.4215, longitude: -75.6972 },
  primaryCity: "Ottawa",
  serviceAreas: [
    "Ottawa",
    "Kanata",
    "Nepean",
    "Barrhaven",
    "Orleans",
    "Stittsville",
    "Gloucester",
    "Manotick",
  ],
  social: {
    instagram: "",
    facebook: "",
    googleBusinessProfile: "",
  },
  hours: [
    { label: "Mon-Sat", hours: "8:00 AM - 6:00 PM" },
    { label: "Sunday", hours: "Closed" },
  ],
  // Optional: fill these for stronger SEO + rich results
  googleSiteVerification: "",
  schemaLocalBusinessType: "PavingContractor",
  logoPath: "/images/swil_logo-removebg.png",
  defaultImagePath: "/images/hero.png",
  priceRange: "$$",
  googleMapsUrl: "",
};


