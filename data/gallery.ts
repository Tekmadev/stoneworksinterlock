export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category:
    | "interlock"
    | "patio"
    | "repair"
    | "washing"
    | "turf";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/img-service/interlock-installation.webp",
    alt: "Interlock installation project",
    category: "interlock",
  },
  {
    id: "g2",
    src: "/images/img-service/cleaned-paver.webp",
    alt: "Clean interlock pavers",
    category: "interlock",
  },
  {
    id: "g3",
    src: "/images/img-service/patio-install.webp",
    alt: "Backyard patio installation",
    category: "patio",
  },
  {
    id: "g4",
    src: "/images/img-service/patio-install2.webp",
    alt: "Patio project with lighting",
    category: "patio",
  },
  {
    id: "g5",
    src: "/images/img-service/int-repair.webp",
    alt: "Interlock repair project",
    category: "repair",
  },
  {
    id: "g6",
    src: "/images/img-service/leveling.webp",
    alt: "Paver leveling and base correction",
    category: "repair",
  },
  {
    id: "g7",
    src: "/images/B-A-polimetric-sanding.jpg",
    alt: "Pressure washing and resanding",
    category: "washing",
  },
  {
    id: "g8",
    src: "/images/img-service/polymeric-sand.webp",
    alt: "Polymeric sand jointing",
    category: "washing",
  },
  {
    id: "g9",
    src: "/images/img-service/turf-inst.webp",
    alt: "Turf installation",
    category: "turf",
  },
  // {
  //   id: "g10",
  //   src: "/images/img-service/turf-inst.webp",
  //   alt: "Turf installation with clean edging",
  //   category: "turf",
  // },
];


