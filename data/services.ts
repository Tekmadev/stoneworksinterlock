import { BUSINESS } from "@/config/business";

export type ServiceSlug =
  | "interlock-installation"
  | "patio-installation"
  | "interlock-repair"
  | "uneven-pavers-leveling"
  | "pressure-washing-resanding"
  | "polymeric-sand"
  | "turf-installation"
  | "sealant-natural-look"
  | "sealant-wet-look"
  | "retaining-walls"
  | "staircases";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
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
  tags: ("interlock" | "repair" | "washing" | "turf" | "patio" | "sealant")[];
};

const primaryCity = BUSINESS.primaryCity;

export const SERVICES: Service[] = [
  {
    slug: "interlock-installation",
    name: "Interlock Installation",
    short:
      "New driveways, walkways, and front entrances with a strong base and premium finish.",
    description:
      "Interlock installation is one of the most effective ways to upgrade your home's curb appeal and add lasting value to your property. We handle every step—from removing old surfaces and excavating the site, to building a properly compacted granular base that prevents settling and shifting over time. Our team lays each paver with precision, cutting clean edges at borders, curves, and transitions. We use quality edge restraints and polymeric sand to lock everything in place. Whether it's a driveway that needs to handle vehicle traffic, a front walkway that sets the tone for your home, or a side path connecting your backyard, we build it to look sharp and hold up through Ottawa's freeze-thaw cycles. Every project includes a final walkthrough so you know exactly how to care for your new surface.",
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
        src: "/images/workexample/work2done.jpeg",
        alt: "Clean interlock pavers in Ottawa",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Interlock walkway project",
      },
      {
        src: "/images/workexample/work1done.jpeg",
        alt: "Completed interlock driveway installation",
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
    description:
      "A well-built patio transforms your backyard into a functional living space—perfect for entertaining, relaxing, or simply enjoying the outdoors. We design and install patios using premium interlocking pavers with layouts tailored to your yard's shape, slope, and how you plan to use the space. The process starts with careful site assessment, grading for drainage, and building a solid compacted base. From there, we lay the pavers in your chosen pattern (running bond, herringbone, or custom), cut precise edges, and finish with polymeric sand joints. We can also integrate steps, retaining walls, fire pit pads, or lighting conduit if you're planning those down the road. The result is a clean, level surface that drains properly, holds up to weather, and looks great for years.",
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
    description:
      "Over time, interlock surfaces can develop sunken spots, shifted pavers, cracked edges, or loose border stones—often caused by base erosion, tree roots, poor drainage, or normal wear. Our repair service addresses the root cause, not just the surface. We lift and remove affected pavers, assess and rebuild the base where needed, re-compact, and re-lay the stones so the surface is level, stable, and safe again. We also replace damaged pavers, tighten edge restraints, and resand joints. Whether it's a small trip hazard on a walkway or a larger section of driveway that's settled, we'll restore it to look and perform like it should. Repairs are usually completed in a day or two depending on scope.",
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
      {
        src: "/images/workexample/work2.jpeg",
        alt: "Pavers before repair",
      },
      {
        src: "/images/workexample/work2done.jpeg",
        alt: "Pavers after repair and re-leveling",
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
    description:
      "Uneven pavers aren't just an eyesore—they're a trip hazard and a sign that the base underneath has shifted. Our leveling service targets the problem at its source. We carefully lift the affected pavers, dig out and re-grade the base material, compact it properly, and re-lay the stones so the surface is flat and stable again. We also check for drainage issues that may have contributed to the settling and address those at the same time. This service is ideal for walkways, driveways, and patios where sections have sunk, tilted, or separated over the years. Most leveling jobs can be completed in a single day, and the result is a surface that's safe, even, and visually consistent with the rest of your interlock.",
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
    description:
      "Dirt, moss, algae, and years of weathering can make even quality interlock look tired and worn. Our pressure washing service uses professional-grade equipment to deep clean your pavers without damaging the surface or displacing the base. After washing, we sweep out the old sand from the joints and refill with fresh kiln-dried or polymeric sand to stabilize the surface and reduce weed growth. The result is a dramatic before-and-after difference—your interlock looks refreshed, the colour comes back, and the joints are tight and clean. This service is a great option if your interlock is structurally sound but just needs a facelift. We recommend pressure washing and resanding every few years to keep your surface looking its best.",
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
        src: "/images/B-A-polimetric-sanding.jpg",
        alt: "Pressure washing interlock",
      },
      {
        src: "/images/img-service/polymeric-sand.webp",
        alt: "Resanding paver joints",
      },
      {
        src: "/images/B-A-polimetric-sanding.jpg",
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
    description:
      "Polymeric sand is a binding material that fills the joints between interlocking pavers and hardens when activated with water. It's a major upgrade over regular sand—it resists washout from rain, prevents weeds and ants from pushing through the joints, and gives the surface a cleaner, more finished look. Our polymeric sand service includes cleaning the joints, removing old sand, sweeping in the new product, compacting it into the gaps, and activating it with a controlled mist. We use premium-grade polymeric sand that's flexible enough to handle expansion and contraction through seasons. This service works great on its own or as the final step after a pressure wash, and it's one of the most cost-effective ways to refresh an aging interlock surface.",
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
        src: "/images/workexample/work3.jpeg",
        alt: "Paver joints before polymeric sand",
      },
      {
        src: "/images/workexample/work3done.jpeg",
        alt: "Finished paver joints with polymeric sand",
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
    description:
      "Artificial turf gives you a lush, green lawn year-round without the watering, mowing, or seasonal brown patches that come with natural grass. We install turf over a properly prepared base that includes grading for drainage, compacted aggregate, and a weed barrier. The turf itself is UV-resistant, pet-friendly, and soft underfoot. We secure the edges cleanly against interlock borders, garden beds, or fencing, and infill with sand for a natural feel and added stability. Turf is a great fit for backyards, side yards, pet areas, and rooftop terraces—anywhere you want a clean, low-maintenance green surface. We handle everything from removing the existing lawn or soil to the final brushing and infill.",
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
        src: "/images/workexample/work1.jpeg",
        alt: "Yard before turf installation",
      },
      {
        src: "/images/workexample/work1done.jpeg",
        alt: "Completed turf and interlock border",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showPetFriendly: true,
      showDrainageIssues: true,
    },
    tags: ["turf"],
  },
  {
    slug: "sealant-natural-look",
    name: "Natural Look Sealant",
    short:
      "Protect and enhance your interlock with a natural-looking sealant that preserves the original appearance.",
    description:
      "A natural look sealant protects your interlock without changing its appearance. It penetrates the paver surface to guard against stains, UV fading, oil spills, and moisture absorption—while keeping the original colour and texture of the stone. This is the preferred option if you want protection without a glossy or darkened finish. Our application process starts with a thorough cleaning and drying of the surface, followed by an even coat of a breathable, high-quality sealant. It dries clear and doesn't leave a film or sheen. We recommend reapplying every 3–5 years depending on traffic and exposure. Natural look sealant is ideal for driveways, walkways, patios, and pool decks where you want to preserve the original aesthetic while extending the life of the stone.",
    seo: {
      title: `Natural Look Sealant in ${primaryCity}`,
      description:
        "Professional natural look sealant application for interlock pavers. Protects against stains, weather, and wear while maintaining the original stone appearance.",
    },
    hero: {
      headline: "Protection that looks natural.",
      subheadline:
        "Our natural look sealant protects your interlock from stains, weather, and wear while preserving the authentic appearance of your pavers.",
    },
    benefits: [
      {
        title: "Maintains natural appearance",
        description:
          "Enhances protection without changing the look or color of your pavers.",
      },
      {
        title: "Stain resistance",
        description:
          "Protects against oil, grease, and other common stains that can mar your interlock.",
      },
      {
        title: "Weather protection",
        description:
          "Shields pavers from freeze/thaw cycles, UV damage, and moisture penetration.",
      },
    ],
    process: [
      {
        title: "Clean + prep",
        description:
          "We thoroughly clean the surface and ensure it's completely dry before application.",
      },
      {
        title: "Apply sealant",
        description:
          "We apply the natural look sealant evenly using professional techniques.",
      },
      {
        title: "Cure + protect",
        description:
          "We ensure proper curing time and provide care instructions for lasting protection.",
      },
    ],
    pricingFactors: [
      "Total square footage",
      "Surface condition and cleaning requirements",
      "Access and weather conditions",
      "Number of coats needed",
      "Curing time and protection needs",
    ],
    faqs: [
      {
        question: "Will natural look sealant change the color of my pavers?",
        answer:
          "No. Natural look sealant is designed to protect without altering the appearance or color of your interlock.",
      },
      {
        question: "How long does sealant last?",
        answer:
          "Typically 2-5 years depending on traffic, weather exposure, and maintenance. We'll provide care guidelines.",
      },
      {
        question: "Can sealant be applied to wet pavers?",
        answer:
          "No. The surface must be completely dry for proper adhesion and performance.",
      },
      {
        question: "Will sealant prevent all stains?",
        answer:
          "It significantly reduces staining, but prompt cleanup of spills is still recommended for best results.",
      },
      {
        question: "Do you clean before sealing?",
        answer:
          "Yes. Proper cleaning is essential for sealant performance and longevity.",
      },
      {
        question: "Can I walk on it right away?",
        answer:
          "We'll provide a specific timeline based on the product used, typically 24-48 hours.",
      },
    ],
    gallery: [
      {
        src: "/images/workexample/work3done.jpeg",
        alt: "Natural look sealant on interlock pavers",
      },
      {
        src: "/images/workexample/work1done.jpeg",
        alt: "Sealed interlock driveway with natural finish",
      },
      {
        src: "/images/img-service/cleaned-paver.webp",
        alt: "Natural finish sealant detail",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showLastServiceDate: true,
    },
    tags: ["sealant", "washing"],
  },
  {
    slug: "sealant-wet-look",
    name: "Wet Look Sealant",
    short:
      "Enhance your interlock with a premium wet look sealant that adds depth and richness to the stone.",
    description:
      "A wet look sealant enhances the natural colour of your pavers and gives the surface a rich, slightly glossy finish—similar to how the stone looks when it's just been rained on. It deepens the tones in the stone, brings out texture and pattern detail, and provides strong protection against stains, oil, UV fading, and moisture penetration. We clean and prep the surface thoroughly before applying the sealant in even coats. The result is a striking, polished look that makes driveways, walkways, and patios stand out. Wet look sealant is a popular choice for homeowners who want their interlock to make a visual impact. We recommend reapplication every 3–5 years depending on exposure and use.",
    seo: {
      title: `Wet Look Sealant in ${primaryCity}`,
      description:
        "Professional wet look sealant application for interlock pavers. Creates a rich, enhanced appearance while providing superior protection against stains and weather.",
    },
    hero: {
      headline: "A rich, enhanced finish that protects.",
      subheadline:
        "Our wet look sealant deepens the color and adds a premium finish to your interlock while providing strong protection against stains and weather damage.",
    },
    benefits: [
      {
        title: "Enhanced appearance",
        description:
          "Deepens colors and adds a rich, premium finish that makes your interlock stand out.",
      },
      {
        title: "Superior protection",
        description:
          "Provides excellent protection against stains, UV damage, and moisture penetration.",
      },
      {
        title: "Easy maintenance",
        description:
          "Sealed surfaces are easier to clean and maintain over time.",
      },
    ],
    process: [
      {
        title: "Clean + prep",
        description:
          "We thoroughly clean and ensure the surface is completely dry for optimal results.",
      },
      {
        title: "Apply wet look sealant",
        description:
          "We apply the sealant evenly to achieve a consistent, rich finish across the surface.",
      },
      {
        title: "Cure + final check",
        description:
          "We ensure proper curing and provide care instructions to maintain the enhanced look.",
      },
    ],
    pricingFactors: [
      "Total square footage",
      "Surface condition and cleaning requirements",
      "Access and weather conditions",
      "Number of coats needed",
      "Curing time and protection needs",
    ],
    faqs: [
      {
        question: "How does wet look differ from natural look sealant?",
        answer:
          "Wet look sealant enhances and deepens the color of your pavers, giving them a richer, more vibrant appearance compared to natural look which preserves the original appearance.",
      },
      {
        question: "Will wet look sealant make my pavers darker?",
        answer:
          "Yes. Wet look sealant enhances and deepens the natural colors of your pavers, creating a richer, more vibrant finish.",
      },
      {
        question: "How long does wet look sealant last?",
        answer:
          "Typically 2-5 years depending on traffic, weather exposure, and maintenance. We'll provide care guidelines.",
      },
      {
        question: "Can wet look be applied over existing sealant?",
        answer:
          "Existing sealant should be removed first for best results. We can assess and prep as needed.",
      },
      {
        question: "Is wet look sealant slippery when wet?",
        answer:
          "Quality wet look sealants are formulated to maintain traction, but we'll discuss options based on your specific needs.",
      },
      {
        question: "Do you clean before applying wet look sealant?",
        answer:
          "Yes. Proper cleaning is essential for achieving the best wet look finish and sealant performance.",
      },
    ],
    gallery: [
      {
        src: "/images/img-service/cleaned-paver.webp",
        alt: "Wet look sealant on interlock pavers",
      },
      {
        src: "/images/workexample/work3done.jpeg",
        alt: "Enhanced interlock with wet look sealant",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Rich finish sealant detail",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showLastServiceDate: true,
    },
    tags: ["sealant", "washing"],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    short:
      "Engineered retaining walls for grade support, drainage control, and a clean finished landscape.",
    description:
      "Retaining walls are built to hold back soil, manage elevation changes, and make sloped yards functional and safe. A properly built wall does more than look good; it protects your property from washout, erosion, and long-term movement. We start by assessing grade, load, and drainage so the wall is designed for your site conditions. Then we excavate, prepare a stable base, install drainage stone and relief paths, and build with quality wall systems that are installed to manufacturer standards. Whether you need a low garden wall, a multi-tier backyard wall, or structural support along a driveway or walkway, we focus on clean lines, reliable stability, and a finish that integrates with your interlock and landscaping.",
    seo: {
      title: `Retaining Walls in ${primaryCity}`,
      description:
        "Professional retaining wall installation with proper base prep, drainage, and structural detailing for long-term stability and curb appeal.",
    },
    hero: {
      headline: "Retaining walls that look sharp and hold strong.",
      subheadline:
        "Built with proper base, drainage, and alignment so your wall stays stable and your landscape stays protected.",
    },
    benefits: [
      {
        title: "Slope control + safety",
        description:
          "Stabilize elevation changes and reduce erosion or washout risk.",
      },
      {
        title: "Drainage-minded build",
        description:
          "We design with drainage behind the wall to reduce hydrostatic pressure.",
      },
      {
        title: "Premium curb appeal",
        description:
          "Clean wall lines and integrated finishes that elevate the whole property.",
      },
    ],
    process: [
      {
        title: "Site assessment + layout",
        description:
          "We evaluate grade, loads, and drainage, then map the wall alignment and height.",
      },
      {
        title: "Excavate + base prep",
        description:
          "We dig to depth, compact the base, and establish proper leveling for stability.",
      },
      {
        title: "Wall build + drainage",
        description:
          "We install courses, backfill with drainage stone, and include relief as required.",
      },
      {
        title: "Finish + tie-ins",
        description:
          "We cap and detail the wall, then blend transitions into steps, patio, or interlock.",
      },
    ],
    pricingFactors: [
      "Total wall length, height, and complexity",
      "Site access and excavation conditions",
      "Drainage requirements and backfill volume",
      "Wall block system and cap style",
      "Engineering/permitting requirements for taller walls",
      "Tie-ins with stairs, patios, or walkways",
    ],
    faqs: [
      {
        question: "Do retaining walls need drainage?",
        answer:
          "Yes. Proper drainage behind the wall is essential to reduce pressure and improve long-term performance.",
      },
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "It depends on wall height and local code requirements. We can guide you on what is needed for your project.",
      },
      {
        question: "How long do retaining walls last?",
        answer:
          "With proper base prep, drainage, and installation, retaining walls can last for decades.",
      },
      {
        question: "Can you build retaining walls on sloped backyards?",
        answer:
          "Yes. Sloped yards are one of the most common use cases and often benefit the most from properly designed walls.",
      },
      {
        question: "Can retaining walls be combined with steps or patios?",
        answer:
          "Absolutely. We regularly integrate retaining walls with staircases, patio areas, and walkways for a cohesive layout.",
      },
      {
        question: "What type of blocks do you use?",
        answer:
          "We use quality retaining wall systems selected for your project height, load conditions, and desired look.",
      },
    ],
    gallery: [
      {
        src: "/images/workexample/work1done.jpeg",
        alt: "Retaining wall with clean stone finish in Ottawa",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Backyard retaining wall integrated with interlock",
      },
      {
        src: "/images/workexample/work2done.jpeg",
        alt: "Tiered retaining wall and walkway transition",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showStylePreference: true,
      showTimeline: true,
      showBudgetRange: true,
      showDrainageIssues: true,
    },
    tags: ["interlock", "patio"],
  },
  {
    slug: "staircases",
    name: "Interlock Staircases",
    short:
      "Custom outdoor staircases built for safe access, clean transitions, and premium visual impact.",
    description:
      "Outdoor staircases connect levels, improve access, and create a finished architectural look across your front entrance, side yard, or backyard. A quality staircase needs precise rise/run consistency, proper foundation support, and clean tie-ins to surrounding interlock or landscape features. We design and build interlock and block stair systems that are both durable and comfortable to use, with attention to tread depth, edge alignment, and long-term stability. Whether you need a small front entry staircase, wide backyard terrace steps, or stairs integrated into a retaining wall design, we build with safety, drainage, and visual balance in mind so the result feels intentional and high-end.",
    seo: {
      title: `Interlock Staircases in ${primaryCity}`,
      description:
        "Custom outdoor staircases built with proper rise/run, stable base support, and clean interlock integration for safe, long-lasting access.",
    },
    hero: {
      headline: "Outdoor staircases that feel solid and look premium.",
      subheadline:
        "Built for safe daily use with precise dimensions, strong support, and clean design continuity.",
    },
    benefits: [
      {
        title: "Safe elevation transitions",
        description:
          "Consistent step geometry and stable construction for confident footing.",
      },
      {
        title: "Integrated design",
        description:
          "Stairs that tie in seamlessly with your driveway, walkway, patio, or wall.",
      },
      {
        title: "Durable through seasons",
        description:
          "Proper base and drainage reduce shifting through Ottawa freeze/thaw cycles.",
      },
    ],
    process: [
      {
        title: "Measure + stair design",
        description:
          "We calculate rise/run and layout based on code-minded, comfortable stair geometry.",
      },
      {
        title: "Excavation + structural prep",
        description:
          "We build a stable base and supports to handle daily traffic and seasonal movement.",
      },
      {
        title: "Install treads/risers + edges",
        description:
          "We install step components with tight alignment and clean side transitions.",
      },
      {
        title: "Detail + final walkthrough",
        description:
          "We complete finishing details, confirm consistency, and review care guidance with you.",
      },
    ],
    pricingFactors: [
      "Number of steps and overall staircase width",
      "Material system (blocks, slabs, coping, accent borders)",
      "Site access and existing structure removal",
      "Need for retaining wall integration or landings",
      "Lighting conduit, rail prep, or additional finishes",
      "Drainage and grading corrections around stairs",
    ],
    faqs: [
      {
        question: "Do outdoor stairs settle over time?",
        answer:
          "They can if base prep is weak. With proper excavation, compaction, and support, movement is minimized.",
      },
      {
        question: "Can you match the staircase to existing interlock?",
        answer:
          "Yes. We can often match or closely blend materials, colours, and edge details for a cohesive look.",
      },
      {
        question: "How do you make sure stairs are safe?",
        answer:
          "We focus on consistent rise/run dimensions, stable treads, and proper drainage to reduce slip and trip risk.",
      },
      {
        question: "Can stairs be combined with retaining walls?",
        answer:
          "Yes. Many projects integrate walls and stairs together for both function and visual balance.",
      },
      {
        question: "Do you offer front entrance staircase upgrades?",
        answer:
          "Absolutely. Front steps are one of the most common projects and a major curb-appeal upgrade.",
      },
      {
        question: "How long does a staircase project take?",
        answer:
          "Most projects are completed in a few days depending on size, access, and complexity.",
      },
    ],
    gallery: [
      {
        src: "/images/workexample/work2done.jpeg",
        alt: "Interlock staircase with clean front entry finish",
      },
      {
        src: "/images/workexample/work3done.jpeg",
        alt: "Backyard staircase connecting patio levels",
      },
      {
        src: "/images/img-service/interlock-installation.webp",
        alt: "Outdoor stone staircase integrated with walkway",
      },
    ],
    formRules: {
      showApproxSqFt: true,
      showStylePreference: true,
      showTimeline: true,
      showBudgetRange: true,
      showApproxArea: true,
    },
    tags: ["interlock", "patio"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
