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
  primaryCity: string;
  serviceAreas: string[];
  social: SocialLinks;
  hours?: {
    label: string;
    hours: string;
  }[];
};

/**
 * Central business config (edit this first).
 * Tip: keep `siteUrl` as your final production domain for correct canonical URLs + sitemap.
 */
export const BUSINESS: BusinessInfo = {
  siteUrl: "https://www.stoneworksinterlock.com",
  name: "Stoneworks Interlock",
  legalName: "Stoneworks Interlock",
  phone: "+1 (613) 914-6260",
  whatsappPhone: "+1 (613) 914-6260",
  // Optional: set when you confirm the correct inbox for quote requests
  email: "stoneworksinterlock@gmail.com",
  address: {
    street: "840 Montréal Rd",
    city: "Ottawa",
    region: "ON",
    postalCode: "K1K 4W3",
    country: "CA",
  },
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
};


