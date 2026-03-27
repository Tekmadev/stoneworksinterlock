export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category:
    | "interlock"
    | "patio"
    | "repair"
    | "washing"
    | "turf"
    | "staircase";
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
    src: "/images/workexample/work1done.jpeg",
    alt: "Completed interlock driveway project",
    category: "interlock",
  },
  {
    id: "g4",
    src: "/images/img-service/patio-install.webp",
    alt: "Backyard patio installation",
    category: "patio",
  },
  {
    id: "g5",
    src: "/images/img-service/patio-install2.webp",
    alt: "Patio project with lighting",
    category: "patio",
  },
  {
    id: "g6",
    src: "/images/img-service/int-repair.webp",
    alt: "Interlock repair project",
    category: "repair",
  },
  {
    id: "g7",
    src: "/images/workexample/work2done.jpeg",
    alt: "Pavers after repair and leveling",
    category: "repair",
  },
  {
    id: "g8",
    src: "/images/img-service/leveling.webp",
    alt: "Paver leveling and base correction",
    category: "repair",
  },
  {
    id: "g9",
    src: "/images/B-A-polimetric-sanding.jpg",
    alt: "Pressure washing and resanding",
    category: "washing",
  },
  {
    id: "g10",
    src: "/images/img-service/polymeric-sand.webp",
    alt: "Polymeric sand jointing",
    category: "washing",
  },
  {
    id: "g11",
    src: "/images/workexample/work3done.jpeg",
    alt: "Finished paver joints after resanding",
    category: "washing",
  },
  {
    id: "g12",
    src: "/images/img-service/turf-inst.webp",
    alt: "Turf installation",
    category: "turf",
  },
  {
    id: "g13",
    src: "/images/workexample/farsideafter.jpeg",
    alt: "Front entrance staircase with retaining wall and driveway",
    category: "staircase",
  },
  {
    id: "g14",
    src: "/images/workexample/frontstairafter.jpeg",
    alt: "Curved interlock staircase at front entrance",
    category: "staircase",
  },
  {
    id: "g15",
    src: "/images/workexample/staircase-project-2.jpeg",
    alt: "Staircase and driveway with two-tone paver design",
    category: "staircase",
  },
  {
    id: "g16",
    src: "/images/workexample/backsideafter.jpeg",
    alt: "Curved dark paver step detail from above",
    category: "staircase",
  },
  {
    id: "g17",
    src: "/images/workexample/frontstairbefore.jpeg",
    alt: "Front staircase before repair and rebuild",
    category: "staircase",
  },
];


