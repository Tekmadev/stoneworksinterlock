import { BUSINESS } from "@/config/business";
import { slugify } from "@/lib/slug";

export type Location = {
  name: string; // City name
  slug: string; // URL slug
  nearby?: string[];
};

export const LOCATIONS: Location[] = BUSINESS.serviceAreas.map((city) => ({
  name: city,
  slug: slugify(city),
}));

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}


