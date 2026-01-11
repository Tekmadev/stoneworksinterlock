export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  service: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex M.",
    location: "Ottawa",
    service: "Interlock Installation",
    quote:
      "The finish is extremely clean and the slope is perfect. No more pooling. Great communication and the crew was respectful.",
  },
  {
    name: "Priya S.",
    location: "Nepean",
    service: "Repair + Leveling",
    quote:
      "They fixed a sunken section that another contractor ignored. Everything is level now and it blends in seamlessly.",
  },
  {
    name: "Jordan K.",
    location: "Kanata",
    service: "Pressure Washing",
    quote:
      "Our driveway looks brand new. The joints were refreshed and the whole surface looks sharper than it has in years.",
  },
];


