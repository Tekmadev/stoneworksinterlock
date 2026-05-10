export type LocationCity = {
  slug: string;
  name: string;
  region: string;
  description: string;
};

export const LOCATION_CITIES: LocationCity[] = [
  {
    slug: "ottawa",
    name: "Ottawa",
    region: "ON",
    description:
      "We serve homeowners across Ottawa for interlock installation, patio builds, repairs, retaining walls, and more. Fast response and free quotes.",
  },
  {
    slug: "gatineau",
    name: "Gatineau",
    region: "QC",
    description:
      "Serving Gatineau homeowners for interlock driveways, patios, retaining walls, and repair work. Free quotes with fast turnaround.",
  },
  {
    slug: "kanata",
    name: "Kanata",
    region: "ON",
    description:
      "Interlock and stonework services in Kanata. Driveways, patios, retaining walls, and repairs for Kanata homeowners.",
  },
  {
    slug: "nepean",
    name: "Nepean",
    region: "ON",
    description:
      "We work in Nepean neighbourhoods regularly. Interlock installation, leveling, retaining walls, pressure washing, and more.",
  },
  {
    slug: "barrhaven",
    name: "Barrhaven",
    region: "ON",
    description:
      "Barrhaven homeowners trust us for interlock driveways, backyard patios, retaining walls, and repair work done right.",
  },
  {
    slug: "orleans",
    name: "Orleans",
    region: "ON",
    description:
      "Serving Orleans for interlock installation, patio work, retaining walls, and all stonework services. Free estimates.",
  },
  {
    slug: "stittsville",
    name: "Stittsville",
    region: "ON",
    description:
      "Stittsville homeowners get the same quality work — proper base, clean finish, and a job done to last Ottawa winters.",
  },
  {
    slug: "gloucester",
    name: "Gloucester",
    region: "ON",
    description:
      "Based in Gloucester and serving the surrounding area. Interlock installation, repairs, retaining walls, and patios.",
  },
  {
    slug: "vanier",
    name: "Vanier",
    region: "ON",
    description:
      "Interlock and outdoor stonework services in Vanier. We handle installs, repairs, leveling, and pressure washing.",
  },
  {
    slug: "centretown",
    name: "Centretown",
    region: "ON",
    description:
      "Working in Centretown for interlock, patios, retaining walls, and repair projects. Free no-pressure quotes.",
  },
  {
    slug: "navan",
    name: "Navan",
    region: "ON",
    description:
      "We serve Navan and the rural east end of Ottawa for interlock driveways, patios, retaining walls, and more.",
  },
  {
    slug: "carleton-place",
    name: "Carleton Place",
    region: "ON",
    description:
      "Interlock and stonework services extending to Carleton Place. Get a free quote for your driveway, patio, or retaining wall.",
  },
  {
    slug: "rockland",
    name: "Rockland",
    region: "ON",
    description:
      "Serving Rockland homeowners for interlock installation, patio builds, retaining walls, and repair work.",
  },
  {
    slug: "manotick",
    name: "Manotick",
    region: "ON",
    description:
      "Manotick homeowners looking for quality interlock work — driveways, patios, retaining walls, staircases, and repairs.",
  },
  {
    slug: "chapel-hill-south",
    name: "Chapel Hill South",
    region: "ON",
    description:
      "Serving Chapel Hill South for interlock driveways, backyard patios, retaining walls, and stonework repairs.",
  },
];

export function getCityBySlug(slug: string): LocationCity | undefined {
  return LOCATION_CITIES.find((c) => c.slug === slug);
}
