import { BUSINESS } from "@/config/business";

export type ServiceSlug =
  | "interlock-installation"
  | "patio-installation"
  | "interlock-repair"
  | "uneven-pavers-leveling"
  | "pressure-washing-resanding"
  | "polymeric-sand"
  | "turf-installation";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  pricingFactors: string[];
  faqs: ServiceFaq[];
  gallery: { src: string; alt: string }[];
  formRules: {
    showApproxSqFt?: boolean;
    showStylePreference?: boolean;
    showTimeline?: boolean;
    showBudgetRange?: boolean;
    showIssueType?: boolean;
    showApproxArea?: boolean;
    showUrgency?: boolean;
    showLastServiceDate?: boolean;
    showWeedIssue?: boolean;
    showPetFriendly?: boolean;
    showDrainageIssues?: boolean;
  };
  tags: ("interlock" | "repair" | "washing" | "turf" | "patio")[];
};

const primaryCity = BUSINESS.primaryCity;

export const SERVICES: Service[] = [
  {
    slug: "interlock-installation",
    name: "Interlock Installation",
    short:
      "New driveways, walkways, and front entrances with a strong base and premium finish.",
    seo: {
      title: `Interlock Installation in ${primaryCity}`,
      description:
        "Premium interlock installation with proper excavation, base prep, and tight clean edges. Built to look sharp and last for years.",
    },
    hero: {
      headline: "Interlock installation that looks premium and stays level.",
      subheadline:
        "We build from the base up: excavation, compaction, and clean edges for a crisp finish that holds up through freeze/thaw.",
    },
    benefits: [
      {
        title: "Strong base work",
        description:
          "Proper excavation and compaction to prevent shifting and sinking.",
      },
      {
        title: "Clean, modern layout",
        description:
          "Straight lines, smooth transitions, and crisp cuts where they matter.",
      },
      {
        title: "Low maintenance",
        description:
          "Interlock is easy to maintain and looks great with routine cleaning.",
      },
    ],
    process: [
      {
        title: "Site check + measurements",
        description:
          "We confirm access, drainage, and layout to avoid surprises.",
      },
      {
        title: "Excavation + base",
        description:
          "We dig, grade, and compact with the right materials and lifts.",
      },
      {
        title: "Install + edges",
        description:
          "We set pavers, cut clean edges, and lock everything in place.",
      },
      {
        title: "Jointing + final walkthrough",
        description:
          "We finish joints, clean up, and review care steps with you.",
      },
    ],
    pricingFactors: [
      "Total square footage and pattern complexity",
      "Access and disposal requirements",
      "Existing material removal (concrete, old pavers, etc.)",
      "Base depth requirements based on usage (walkway vs driveway)",
      "Drainage improvements (grading, drains, downspout tie-ins)",
      "Paver type, thickness, and border details",
    ],
    faqs: [
      {
        question: "How long does interlock installation take?",
        answer:
          "Most projects take 1-5 days depending on size, access, and complexity.",
      },
      {
        question: "Do you handle permits?",
        answer:
          "If a permit is required for your scope, we’ll guide you through what’s needed and help with documentation.",
      },
      {
        question: "Will my interlock shift in winter?",
        answer:
          "With proper base prep and edge restraints, movement is minimized and the surface stays stable.",
      },
      {
        question: "What pattern is best for driveways?",
        answer:
          "Herringbone patterns are a popular choice for strength and visual impact.",
      },
      {
        question: "Can you improve drainage?",
        answer:
          "Yes. We can regrade areas, add drains, and direct water away from foundations.",
      },
      {
        question: "Do you offer a warranty?",
        answer:
          "We stand behind our workmanship; warranty details depend on scope and materials.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/cleaned-paver.webp",
        alt: "Clean interlock pavers in Ottawa",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Interlock walkway project",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Front entrance interlock",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showStylePreference: true,
      showTimeline: true,
      showBudgetRange: true,
    },
    tags: ["interlock"],
  },
  {
    slug: "patio-installation",
    name: "Patio Installation",
    short:
      "Backyard patios designed for hosting, lounging, and clean outdoor flow.",
    seo: {
      title: `Patio Installation in ${primaryCity}`,
      description:
        "Custom patio installation with thoughtful layout, drainage, and premium finishing details. Built for outdoor living.",
    },
    hero: {
      headline: "Patios that feel like an outdoor living room.",
      subheadline:
        "From modern clean lines to classic warm textures, we build patios with comfort, durability, and flow in mind.",
    },
    benefits: [
      {
        title: "Better outdoor flow",
        description:
          "Create zones for seating, dining, and pathways that feel intentional.",
      },
      {
        title: "Durable surface",
        description:
          "Proper base + quality materials for a patio that stays level.",
      },
      {
        title: "Higher curb appeal",
        description:
          "A premium patio adds value and makes your backyard feel finished.",
      },
    ],
    process: [
      {
        title: "Design + layout",
        description:
          "We confirm shape, borders, steps, and how you’ll use the space.",
      },
      {
        title: "Excavation + drainage",
        description: "We prep the base and ensure water moves away correctly.",
      },
      {
        title: "Installation",
        description:
          "We set pavers/slabs, cut details cleanly, and lock edges.",
      },
      {
        title: "Final clean + handoff",
        description: "We leave a clean site and explain care/maintenance.",
      },
    ],
    pricingFactors: [
      "Size and shape complexity (curves, multi-level areas)",
      "Material selection (pavers vs slabs)",
      "Borders, steps, and retaining details",
      "Drainage and grading improvements",
      "Access to backyard and disposal needs",
    ],
    faqs: [
      {
        question: "Can you build around an existing deck?",
        answer:
          "Yes. We can tie in cleanly and address grading at the transition.",
      },
      {
        question: "Do patios need a slope?",
        answer:
          "Yes. A subtle slope helps water drain and keeps the patio dry and safe.",
      },
      {
        question: "What’s better: slabs or pavers?",
        answer:
          "Slabs give a modern look; pavers offer pattern options and easy spot repairs.",
      },
      {
        question: "Do you add steps?",
        answer:
          "We can include steps where needed for safe, comfortable access.",
      },
      {
        question: "Will weeds grow through?",
        answer:
          "With proper base and jointing, weeds are minimized; maintenance keeps it looking fresh.",
      },
      {
        question: "How do I maintain a patio?",
        answer:
          "Routine sweeping, occasional wash, and joint sand upkeep keeps it crisp.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/patio-install.webp",
        alt: "Backyard patio installation",
      },
      {
        src: "/images/img-service/patio-install2.webp",
        alt: "Modern patio installation",
      },
      {
        src: "/images/img-service/patio-install.webp",
        alt: "Patio with border details",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showStylePreference: true,
      showTimeline: true,
      showBudgetRange: true,
    },
    tags: ["patio"],
  },
  {
    slug: "interlock-repair",
    name: "Interlock Repair",
    short:
      "Fix sunken areas, shifting borders, and loose pavers to restore a clean, safe surface.",
    seo: {
      title: `Interlock Repair in ${primaryCity}`,
      description:
        "Interlock repair for sinking, shifting, and damaged pavers. We re-level, rebuild weak areas, and restore clean lines.",
    },
    hero: {
      headline: "Repair work that blends in and holds up.",
      subheadline:
        "We diagnose the cause (base, edge restraint, drainage) and fix it correctly so the issue doesn’t return.",
    },
    benefits: [
      {
        title: "Safer surface",
        description: "Reduce trip hazards and improve traction and drainage.",
      },
      {
        title: "Restore curb appeal",
        description:
          "Bring back crisp lines and an even surface without full replacement.",
      },
      {
        title: "Targeted fixes",
        description:
          "We focus on problem areas, rebuild base where needed, and re-install properly.",
      },
    ],
    process: [
      {
        title: "Assessment",
        description:
          "We identify why the area failed (water, base, or edging).",
      },
      {
        title: "Lift + rebuild base",
        description:
          "We pull pavers, correct grade, and compact layers properly.",
      },
      {
        title: "Reinstall + jointing",
        description:
          "We reinstall, cut cleanly, and re-sand joints for lock-in.",
      },
    ],
    pricingFactors: [
      "Area size and severity of sinking/shift",
      "Whether base rebuild is needed",
      "Drainage corrections required",
      "Replacement pavers (if existing are broken/unavailable)",
      "Edge restraint and border repairs",
    ],
    faqs: [
      {
        question: "Why does interlock sink?",
        answer:
          "Common causes are poor base compaction, drainage issues, or failing edge restraints.",
      },
      {
        question: "Can you match existing pavers?",
        answer:
          "Often yes. If the product is still available; otherwise we suggest a close match or feature border.",
      },
      {
        question: "Is re-leveling better than replacing?",
        answer:
          "If the pavers are in good shape, re-leveling is usually the best value.",
      },
      {
        question: "How long do repairs take?",
        answer:
          "Most repairs are completed in a few hours to 1-2 days depending on scope.",
      },
      {
        question: "Will the repaired area look different?",
        answer:
          "We aim for a seamless blend; cleaning/sealing can help unify the overall look.",
      },
      {
        question: "Do you fix pooling water?",
        answer: "Yes. We can regrade and adjust slope to improve drainage.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/int-repair.webp",
        alt: "Interlock repair work",
      },
      { src: "/images/img-service/int-repair.webp", alt: "Re-leveled pavers" },
      {
        src: "/images/img-service/int-repair.webp",
        alt: "Fixed border and edge restraint",
      },
    ],
    formRules: { showIssueType: true, showApproxArea: true, showUrgency: true },
    tags: ["repair", "interlock"],
  },
  {
    slug: "uneven-pavers-leveling",
    name: "Uneven Pavers Leveling",
    short:
      "Lift and re-level uneven pavers to eliminate trip hazards and restore clean lines.",
    seo: {
      title: `Uneven Pavers Leveling in ${primaryCity}`,
      description:
        "Professional paver leveling to correct sinking and shifting. Restore a smooth, safe surface with proper base correction.",
    },
    hero: {
      headline: "Uneven pavers? We re-level them the right way.",
      subheadline:
        "We lift, correct the base, and reinstall with the proper slope so your surface looks clean and feels safe again.",
    },
    benefits: [
      {
        title: "Remove trip hazards",
        description: "Fix uneven spots that can catch toes and wheels.",
      },
      {
        title: "Better drainage",
        description:
          "Correct slope helps prevent water pooling and ice buildup.",
      },
      {
        title: "Protect your investment",
        description:
          "Stop small failures from spreading into a larger rebuild.",
      },
    ],
    process: [
      {
        title: "Identify failure points",
        description: "We map where and why the surface is moving.",
      },
      {
        title: "Lift + correct base",
        description: "We rebuild the bedding and base where needed.",
      },
      {
        title: "Reinstall + lock in",
        description: "We reinstall pavers, compact, and re-sand joints.",
      },
    ],
    pricingFactors: [
      "Area size and accessibility",
      "How deep the base correction needs to go",
      "Drainage changes required",
      "Existing paver condition",
      "Edge restraint repairs",
    ],
    faqs: [
      {
        question: "Can you level only a small section?",
        answer:
          "Yes. We can isolate problem areas and blend the repair in cleanly.",
      },
      {
        question: "Do you need to remove all pavers?",
        answer: "Not always. We lift only what’s needed for a stable fix.",
      },
      {
        question: "Will it happen again?",
        answer:
          "We address root causes like base depth and drainage to reduce recurrence.",
      },
      {
        question: "Is leveling noisy or messy?",
        answer:
          "There’s some lifting and compaction, but we keep the site clean and controlled.",
      },
      {
        question: "Do you re-sand joints afterward?",
        answer: "Yes. Re-sanding is critical for paver lock-in and stability.",
      },
      {
        question: "Can you improve water pooling?",
        answer:
          "Yes. Slope corrections and drainage work can solve pooling issues.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/leveling.webp",
        alt: "Uneven pavers leveling",
      },
      {
        src: "/images/img-service/before.webp",
        alt: "Uneven pavers before leveling",
      },
      {
        src: "/images/img-service/after.webp",
        alt: "Uneven pavers after leveling",
      },
    ],
    formRules: { showIssueType: true, showApproxArea: true, showUrgency: true },
    tags: ["repair"],
  },
  {
    slug: "pressure-washing-resanding",
    name: "Pressure Washing + Resanding",
    short: "Deep clean interlock and refresh joints for a sharp, renewed look.",
    seo: {
      title: `Pressure Washing & Resanding in ${primaryCity}`,
      description:
        "Pressure washing and resanding for interlock to remove grime and refresh joints. Restore curb appeal fast.",
    },
    hero: {
      headline: "Make your interlock look new again.",
      subheadline:
        "We remove buildup safely, then re-sand joints for a clean finish that locks pavers and reduces weed growth.",
    },
    benefits: [
      {
        title: "Instant curb appeal",
        description:
          "Wash away grime and bring back the original tone of the stone.",
      },
      {
        title: "Refreshed joints",
        description: "Resanding tightens the system and reduces shifting.",
      },
      {
        title: "Weed reduction",
        description:
          "Clean joints plus proper sand helps limit weeds over time.",
      },
    ],
    process: [
      {
        title: "Pre-check",
        description: "We confirm surface condition and pressure-safe approach.",
      },
      {
        title: "Wash",
        description: "We clean evenly without damaging pavers or joint lines.",
      },
      {
        title: "Resand",
        description:
          "We sweep and compact sand into joints for a finished look.",
      },
    ],
    pricingFactors: [
      "Total square footage",
      "Level of buildup and staining",
      "Joint depth and condition",
      "Weed presence and treatment",
      "Access and water source availability",
    ],
    faqs: [
      {
        question: "Will pressure washing damage my pavers?",
        answer:
          "We use the right pressure and technique to protect the surface and joints.",
      },
      {
        question: "Should I do polymeric sand after washing?",
        answer:
          "If joints are stable and dry conditions allow, polymeric sand is a great upgrade.",
      },
      {
        question: "How long does it take?",
        answer:
          "Most jobs are completed same day depending on size and drying conditions.",
      },
      {
        question: "Can you remove oil stains?",
        answer:
          "Some stains can be improved significantly; results vary by depth and age.",
      },
      {
        question: "How often should I wash?",
        answer:
          "Many homeowners refresh every 1-3 years depending on shade and traffic.",
      },
      {
        question: "Will weeds come back?",
        answer:
          "Maintenance helps; polymeric sand and trimming nearby vegetation reduce regrowth.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/pressure-wash.webp",
        alt: "Pressure washing interlock",
      },
      {
        src: "/images/img-service/polymeric-sand.webp",
        alt: "Resanding paver joints",
      },
      {
        src: "/images/img-service/pressure-wash.webp",
        alt: "Cleaned driveway interlock",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showLastServiceDate: true,
      showWeedIssue: true,
    },
    tags: ["washing"],
  },
  {
    slug: "polymeric-sand",
    name: "Polymeric Sand",
    short:
      "Lock in joints, reduce weeds, and upgrade the look with polymeric sand finishing.",
    seo: {
      title: `Polymeric Sand in ${primaryCity}`,
      description:
        "Professional polymeric sand installation to lock paver joints, reduce weeds, and improve durability and finish.",
    },
    hero: {
      headline: "A clean finish that locks everything in.",
      subheadline:
        "Polymeric sand strengthens joints, reduces weed growth, and keeps your interlock looking crisp.",
    },
    benefits: [
      {
        title: "Fewer weeds",
        description:
          "Helps reduce weed growth by hardening and sealing joints.",
      },
      {
        title: "Stronger joints",
        description: "Locks pavers together and improves overall stability.",
      },
      {
        title: "Cleaner look",
        description:
          "A uniform joint finish makes the whole surface feel premium.",
      },
    ],
    process: [
      {
        title: "Prep + clean",
        description: "We ensure joints are clean and dry for proper bonding.",
      },
      {
        title: "Install sand",
        description: "We sweep, compact, and fill joints thoroughly.",
      },
      {
        title: "Activate",
        description:
          "We activate per manufacturer spec and protect during curing.",
      },
    ],
    pricingFactors: [
      "Square footage and joint condition",
      "Whether washing is needed first",
      "Edge and border integrity",
      "Shade and curing conditions",
      "Weed removal requirements",
    ],
    faqs: [
      {
        question: "Do I need polymeric sand?",
        answer:
          "It’s optional but recommended if you want tighter joints and fewer weeds.",
      },
      {
        question: "How long does it take to cure?",
        answer:
          "Cure times vary; we’ll provide a clear no-water / no-traffic window.",
      },
      {
        question: "Can polymeric sand be added to old interlock?",
        answer: "Yes. After proper cleaning and joint prep.",
      },
      {
        question: "Will it stop all weeds?",
        answer:
          "It reduces weeds significantly, but no solution is 100% maintenance-free.",
      },
      {
        question: "Can rain ruin it?",
        answer:
          "Rain during activation/curing can cause issues; we plan around weather.",
      },
      {
        question: "Does it crack?",
        answer:
          "Installed correctly, it remains stable; heavy movement can lead to cracks.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/polymeric-sand.webp",
        alt: "Polymeric sand installation",
      },
      {
        src: "/images/img-service/polymeric-sand.webp",
        alt: "Finished paver joints",
      },
      {
        src: "/images/img-service/polymeric-sand.webp",
        alt: "Clean border detail with sand joints",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showLastServiceDate: true,
      showWeedIssue: true,
    },
    tags: ["washing"],
  },
  {
    slug: "turf-installation",
    name: "Turf Installation",
    short:
      "Low-maintenance, always-green turf with proper base prep and drainage.",
    seo: {
      title: `Turf Installation in ${primaryCity}`,
      description:
        "Professional turf installation with proper base, drainage, and clean edging. Great for pets, kids, and low maintenance.",
    },
    hero: {
      headline: "Always-green turf that feels clean and intentional.",
      subheadline:
        "We prep the base and drainage properly, then install turf with clean edges that hold up to use.",
    },
    benefits: [
      {
        title: "Low maintenance",
        description: "No mowing, no watering, and easy cleanup.",
      },
      {
        title: "Pet & kid friendly",
        description:
          "Great for active spaces with easy wash-down and durability.",
      },
      {
        title: "Drainage-ready base",
        description: "Proper base prep reduces puddling and uneven spots.",
      },
    ],
    process: [
      {
        title: "Excavate + base",
        description:
          "We remove material and create a stable, well-draining base.",
      },
      {
        title: "Grade + compact",
        description: "We compact in lifts and fine-grade for a smooth finish.",
      },
      {
        title: "Install + detail",
        description:
          "We seam, secure, and detail edges for a clean final look.",
      },
    ],
    pricingFactors: [
      "Total square footage",
      "Access and disposal needs",
      "Drainage requirements and base depth",
      "Edge detailing and transitions to interlock/deck",
      "Pet-use considerations (infill and cleanup)",
    ],
    faqs: [
      {
        question: "Does turf get hot in summer?",
        answer:
          "It can warm up in direct sun; shade and occasional rinse help reduce heat.",
      },
      {
        question: "Is turf safe for pets?",
        answer: "Yes. We recommend pet-friendly infill and proper drainage.",
      },
      {
        question: "How long does turf last?",
        answer:
          "Quality turf and proper installation can last many years with basic care.",
      },
      {
        question: "Will it smell with pets?",
        answer: "Good drainage, rinsing, and pet infill greatly reduce odor.",
      },
      {
        question: "Can you install on uneven yards?",
        answer: "Yes. We regrade and prepare a stable base.",
      },
      {
        question: "Do you include edging?",
        answer: "Yes. Clean edging keeps the turf tight and prevents lifting.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/turf-inst.webp",
        alt: "Backyard turf installation",
      },
      {
        src: "/images/img-service/turf-inst.webp",
        alt: "Turf with interlock border",
      },
      { src: "/images/img-service/turf-inst.webp", alt: "Turf detail closeup" },
    ],
    formRules: {
      showApproxSqFt: true,
      showPetFriendly: true,
      showDrainageIssues: true,
    },
    tags: ["turf"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
