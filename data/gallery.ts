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
  { id: "g1", src: "/placeholders/interlock-1.svg", alt: "Interlock driveway", category: "interlock" },
  { id: "g2", src: "/placeholders/interlock-2.svg", alt: "Interlock walkway", category: "interlock" },
  { id: "g3", src: "/placeholders/patio-1.svg", alt: "Patio seating area", category: "patio" },
  { id: "g4", src: "/placeholders/patio-2.svg", alt: "Modern slab patio", category: "patio" },
  { id: "g5", src: "/placeholders/repair-1.svg", alt: "Interlock repair", category: "repair" },
  { id: "g6", src: "/placeholders/leveling-1.svg", alt: "Leveling uneven pavers", category: "repair" },
  { id: "g7", src: "/placeholders/washing-1.svg", alt: "Pressure washing", category: "washing" },
  { id: "g8", src: "/placeholders/sand-2.svg", alt: "Polymeric sand joints", category: "washing" },
  { id: "g9", src: "/placeholders/turf-1.svg", alt: "Turf installation", category: "turf" },
  { id: "g10", src: "/placeholders/turf-2.svg", alt: "Turf with border", category: "turf" },
];


