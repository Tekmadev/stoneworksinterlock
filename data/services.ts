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
    showStylePreference?: boolean;
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
      "Expert driveway, walkway, and patio installations built on a solid base with a clean finish.",
    description:
      "We install interlock driveways, walkways, patios, and front entrances for Ottawa homeowners who want a surface that looks sharp and holds up. Every project starts with proper excavation and a compacted granular base. We build to the right depth for your soil conditions and usage, whether that is a pedestrian walkway or a driveway that handles daily vehicle traffic. Pavers are laid in your chosen pattern, edges are cut clean, and the whole surface is locked in with quality edge restraints and polymeric sand. We focus on getting the base right because that is what determines how your interlock performs through Ottawa freeze thaw cycles. Corners, transitions, curves, and border details are handled with care so the finished product looks intentional and precise.",
    seo: {
      title: `Interlock Installation Ottawa | Driveways, Patios & Walkways`,
      description:
        "Interlock installation in Ottawa for driveways, patios, and walkways. Proper excavation, base prep, and clean finishes built for Ottawa winters.",
    },
    hero: {
      headline: "Interlock installation in Ottawa. Built right from the base up.",
      subheadline:
        "Driveways, patios, and walkways installed with proper excavation, compacted base, and clean edges designed to handle Ottawa freeze thaw cycles without sinking.",
    },
    benefits: [
      {
        title: "Proper base preparation",
        description:
          "Every installation starts with excavation and compaction to the correct depth for your usage and soil type.",
      },
      {
        title: "Clean, precise installation",
        description:
          "Straight lines, smooth cuts at borders and curves, and tight joints throughout.",
      },
      {
        title: "Ottawa climate ready",
        description:
          "Base depth, edge restraints, and drainage are all set up to handle freeze thaw conditions without shifting.",
      },
      {
        title: "Adds lasting value",
        description:
          "Quality interlock improves curb appeal and holds its appearance with simple routine care.",
      },
    ],
    process: [
      {
        title: "Consultation and site review",
        description:
          "We confirm access, drainage, existing materials, and project scope before any work starts.",
      },
      {
        title: "Excavation and base preparation",
        description:
          "We dig to the correct depth, add compacted granular base in lifts, and establish proper slope for drainage.",
      },
      {
        title: "Paver installation",
        description:
          "We lay pavers in your chosen pattern, cut edges cleanly, and secure borders with edge restraints.",
      },
      {
        title: "Jointing and final cleanup",
        description:
          "We sweep and compact polymeric sand into joints, clean the surface, and walk you through care and maintenance.",
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
          "Most interlock installation projects in Ottawa take between 1 and 5 days. Smaller walkways can sometimes be done in a single day, while larger driveways with curves or borders usually take 3 to 5 days. Weather and access to the site can also affect timing.",
      },
      {
        question: "Do you handle permits?",
        answer:
          "Most standard interlock work like driveways and walkways doesn't require a permit, but certain projects near property lines or involving grade changes might. If a permit is needed for your scope, we'll walk you through the process and help with any documentation the city requires.",
      },
      {
        question: "Will my interlock shift in winter?",
        answer:
          "Ottawa's freeze-thaw cycles can be tough on outdoor surfaces, but a properly built base is the best defense. We excavate to the right depth, compact in lifts, and install solid edge restraints so the pavers stay locked in place. Some minor seasonal movement is normal, but a well-built system handles it without noticeable shifting.",
      },
      {
        question: "What pattern is best for driveways?",
        answer:
          "For driveways, herringbone is the go-to pattern because it distributes vehicle weight really well and resists shifting under traffic. Running bond is another option that gives a cleaner, more modern look. We can walk you through samples and help you pick something that fits your home's style and the way the space will be used.",
      },
      {
        question: "Can you improve drainage?",
        answer:
          "Yes, drainage is something we factor into every project. We can regrade the surface to direct water away from your foundation, add catch basins or channel drains where needed, and tie into existing downspouts. Poor drainage is one of the biggest reasons interlock fails early, so getting it right up front saves you money down the road.",
      },
      {
        question: "Do you offer a warranty?",
        answer:
          "Yes, we stand behind our work. Warranty details depend on the scope of the project and the materials used, so we'll go over everything with you before we start. The paver manufacturers also offer their own product warranties, and we make sure to install according to their specifications so those stay valid.",
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
      showStylePreference: true,
    },
    tags: ["interlock"],
  },
  {
    slug: "patio-installation",
    name: "Patio Installation",
    short:
      "Backyard patio installations designed for outdoor living with proper drainage and a premium finish.",
    description:
      "A well-built patio gives your backyard a real purpose. We design and install interlock patios for Ottawa homeowners who want a surface that drains properly, stays level, and looks great for years. We start by assessing your yard shape, slope, and how you plan to use the space. From there we excavate, prepare a compacted base with proper drainage grading, and install pavers in your chosen pattern. We handle all the finishing details including cut edges, border courses, and transitions to adjacent structures like decks, stairs, or garden beds. We can also rough in conduit for lighting or plan access for future features. The result is a patio that is built to last through Ottawa winters and comfortable to use all season long.",
    seo: {
      title: `Patio Installation Ottawa | Backyard Interlock Patios`,
      description:
        "Patio installation in Ottawa using premium interlock pavers. Proper base, drainage, and custom layouts for backyards and outdoor entertaining spaces.",
    },
    hero: {
      headline: "Patio installation in Ottawa that gives your backyard real purpose.",
      subheadline:
        "Custom interlock patios designed for Ottawa backyards, with proper drainage, compacted base, and clean finishes that hold up through Canadian seasons.",
    },
    benefits: [
      {
        title: "More usable outdoor space",
        description:
          "Turn a sloped or underused backyard into a functional patio for entertaining, dining, or relaxing.",
      },
      {
        title: "Drains properly",
        description:
          "We grade every patio surface so water moves away from your house and does not pool.",
      },
      {
        title: "Stays level year after year",
        description:
          "Proper base prep and edge restraints keep the surface stable through Ottawa freeze thaw cycles.",
      },
      {
        title: "Designed around how you use it",
        description:
          "We plan zones, transitions, and access points that match the way you actually want to use your yard.",
      },
    ],
    process: [
      {
        title: "Design and layout planning",
        description:
          "We review your yard, confirm shape, borders, drainage direction, and any tie-ins to decks or walkways.",
      },
      {
        title: "Excavation and drainage prep",
        description:
          "We excavate to the right depth, build a compacted granular base, and set the correct grade for drainage.",
      },
      {
        title: "Paver installation",
        description:
          "We lay pavers in your chosen pattern, cut edges cleanly, and lock in borders with edge restraints.",
      },
      {
        title: "Finishing and site cleanup",
        description:
          "We joint with polymeric sand, clean up the site, and walk you through care and maintenance.",
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
          "Absolutely. We regularly build patios that tie into existing decks, and we pay close attention to the transition point so drainage flows properly and the two surfaces sit at the right height relative to each other. We'll also make sure the grading around the deck posts doesn't create pooling issues.",
      },
      {
        question: "Do patios need a slope?",
        answer:
          "Yes, every patio needs a slight slope to move water away from your house and off the surface. The standard is about a quarter inch per foot, which is barely noticeable when you're walking on it but makes a big difference for drainage. Without it, you'd end up with standing water that can freeze in winter and create slippery spots.",
      },
      {
        question: "What's better: slabs or pavers?",
        answer:
          "It depends on the look you're going for and how you plan to use the space. Slabs give you a sleek, modern feel with fewer joint lines, while pavers offer more pattern variety and are easier to repair since you can pull out individual pieces. Pavers also tend to handle Ottawa's freeze-thaw cycles a bit better because the joints give them room to flex.",
      },
      {
        question: "Do you add steps?",
        answer:
          "Yes, we build steps as part of the patio project whenever there's a grade change to deal with. This is pretty common in Ottawa backyards where the ground slopes away from the house. We make sure the rise and run on each step is consistent so they're comfortable and safe to use, and we match them to your patio material for a clean, unified look.",
      },
      {
        question: "Will weeds grow through?",
        answer:
          "A solid base layer and properly filled joints go a long way toward preventing weeds. Polymeric sand is especially effective because it hardens in the joints and makes it tough for seeds to take root. You may still see the occasional weed pop up over the years, but regular sweeping and a quick spot treatment keeps things under control.",
      },
      {
        question: "How do I maintain a patio?",
        answer:
          "Patios are pretty low maintenance overall. Regular sweeping keeps debris from building up in the joints, and a pressure wash every couple of years brings the colour back. You'll also want to keep an eye on the joint sand and top it up if you notice it wearing down. If you go with polymeric sand, it lasts longer but should still be checked every few years.",
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
      showStylePreference: true,
    },
    tags: ["patio"],
  },
  {
    slug: "interlock-repair",
    name: "Interlock Repair",
    short:
      "Sunken pavers, shifting borders, and failed bases repaired to restore a safe, level surface.",
    description:
      "Interlock surfaces sink, shift, and crack for specific reasons. Usually it comes down to base failure, poor drainage, or edge restraints that have given out over time. Our repair service starts with diagnosing why the area failed, not just patching what you can see. We lift the affected pavers, assess and rebuild the base, compact it correctly, and reinstall everything level and tight. We also address any drainage issues that contributed to the problem so the same area does not fail again. Whether it is a trip hazard on a front walkway, a sunken section in the driveway, or border stones that have shifted out, we fix the root cause and blend the repair into the surrounding surface so it looks clean when we are done.",
    seo: {
      title: `Interlock Repair Ottawa | Sunken Pavers & Base Repair`,
      description:
        "Interlock repair in Ottawa for sunken driveways, shifted walkways, and failed bases. We diagnose the root cause and fix it properly.",
    },
    hero: {
      headline: "Interlock repair in Ottawa. We fix the cause, not just the surface.",
      subheadline:
        "Sunken pavers, cracked edges, and shifting borders are a sign of base failure. We lift, rebuild, and reinstall so your surface is level, stable, and safe.",
    },
    benefits: [
      {
        title: "Fixes the root cause",
        description:
          "We diagnose base failure, drainage issues, and edge problems before touching a single paver.",
      },
      {
        title: "Eliminates trip hazards",
        description:
          "Sunken and uneven pavers are a liability. We restore a safe, even surface.",
      },
      {
        title: "Restores curb appeal",
        description:
          "Properly repaired interlock looks clean and blends with the surrounding surface.",
      },
      {
        title: "Prevents further damage",
        description:
          "Addressing drainage and base issues stops the problem from spreading to adjacent areas.",
      },
    ],
    process: [
      {
        title: "Diagnosis and assessment",
        description:
          "We identify the cause of failure, whether it is base erosion, drainage problems, or failing edge restraints.",
      },
      {
        title: "Lift and base rebuild",
        description:
          "We remove the affected pavers, excavate, correct the base and grading, and compact in lifts.",
      },
      {
        title: "Reinstall and joint",
        description:
          "We reinstall pavers, cut cleanly where needed, re-sand joints, and compact for a stable lock.",
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
          "The most common reason is that the base underneath wasn't compacted properly when it was originally installed, so over time it settles unevenly. Water is another big factor, especially in Ottawa where freeze-thaw cycles can wash out base material and create voids under the pavers. Failing edge restraints can also let the whole system shift outward, which creates gaps and low spots.",
      },
      {
        question: "Can you match existing pavers?",
        answer:
          "In most cases, yes. If the original paver is still being manufactured, we can source the same product for a seamless repair. If it's been discontinued, we'll find the closest match available or we can use a contrasting paver as a feature border to make the transition look intentional rather than patched.",
      },
      {
        question: "Is re-leveling better than replacing?",
        answer:
          "If your pavers are still in good condition and just the base has failed, re-leveling is almost always the smarter move. It costs less than a full replacement and gives you a solid result. We'll assess the pavers during the repair and let you know honestly if any need to be swapped out.",
      },
      {
        question: "How long do repairs take?",
        answer:
          "Small repairs like a sunken section of walkway can often be done in a few hours. Larger areas that need base rebuilding or drainage corrections might take 1 to 2 days. We'll give you a clear timeline after the initial assessment so you know what to expect.",
      },
      {
        question: "Will the repaired area look different?",
        answer:
          "We do our best to blend the repair into the surrounding surface so it's not obvious. There can be some slight colour variation if the existing pavers have weathered over the years, but a good cleaning or sealing of the full area usually brings everything together. Most homeowners are surprised at how well it matches.",
      },
      {
        question: "Do you fix pooling water?",
        answer:
          "Yes, pooling water is one of the most common issues we deal with. We can regrade the affected area to create proper slope, add drainage features if needed, and make sure water is moving away from your home's foundation. Fixing the drainage is important because standing water is usually what caused the damage in the first place.",
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
      "Uneven pavers aren't just an eyesore. They're a trip hazard and a sign that the base underneath has shifted. Our leveling service targets the problem at its source. We carefully lift the affected pavers, dig out and re-grade the base material, compact it properly, and re-lay the stones so the surface is flat and stable again. We also check for drainage issues that may have contributed to the settling and address those at the same time. This service is ideal for walkways, driveways, and patios where sections have sunk, tilted, or separated over the years. Most leveling jobs can be completed in a single day, and the result is a surface that's safe, even, and visually consistent with the rest of your interlock.",
    seo: {
      title: `Uneven Pavers Leveling in ${primaryCity}`,
      description:
        "Ottawa paver leveling for uneven driveways, walkways, and patios. We correct the base and slope for a safe, even surface.",
    },
    hero: {
      headline: "Uneven pavers in Ottawa? We re-level them the right way.",
      subheadline:
        "We lift, correct the base, and reinstall with proper slope so your driveway or walkway looks clean and feels safe again.",
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
          "Yes, we do this all the time. We can lift just the affected section, fix the base underneath, and reinstall the pavers so the repair blends in with the rest of the surface. There's no need to redo the entire area if the problem is localized to one spot.",
      },
      {
        question: "Do you need to remove all pavers?",
        answer:
          "Not usually. We only remove the pavers in the area that's actually affected, plus a small buffer around it to make sure we're getting the full extent of the base issue. This keeps the job faster and more affordable while still giving you a solid, long-lasting fix.",
      },
      {
        question: "Will it happen again?",
        answer:
          "Our goal is to fix the cause, not just the symptom. We dig down to see what went wrong with the base, whether it's poor compaction, water erosion, or tree roots, and we correct it properly. In Ottawa, freeze-thaw cycles are a major factor, so we make sure the base depth and drainage are set up to handle that.",
      },
      {
        question: "Is leveling noisy or messy?",
        answer:
          "There's some noise from the plate compactor, and we do need to move material around, but it's not nearly as disruptive as a full installation. We protect the surrounding area, keep our workspace tidy, and clean up everything when we're done. Most leveling jobs are wrapped up in a single day.",
      },
      {
        question: "Do you re-sand joints afterward?",
        answer:
          "Yes, always. Re-sanding the joints is a critical final step because it's what locks the pavers together and keeps them from shifting. We sweep sand into every joint, compact it, and top it off. If your budget allows, we can use polymeric sand for even better weed resistance and joint stability.",
      },
      {
        question: "Can you improve water pooling?",
        answer:
          "Yes, and honestly this is one of the main reasons people call us. We can adjust the slope of the leveled area so water drains properly instead of sitting on the surface. In some cases we'll also add a drain or extend the grading to move water further from your foundation, especially if pooling has been an ongoing problem.",
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
    short: "Professional interlock cleaning and joint resanding to bring back the look and stability of your surface.",
    description:
      "Interlock surfaces collect dirt, moss, algae, and organic staining over the years. Joint sand erodes and weeds start pushing through. Pressure washing and resanding is the most effective way to restore the look and stability of your interlock without replacing anything. We use professional equipment calibrated for interlock to clean deeply without damaging the paver surface or displacing the base. After washing, we remove the old joint sand and replace it with fresh kiln-dried or polymeric sand, compacted into every joint for a tight, weed-resistant finish. The transformation is dramatic. Colour comes back, joints tighten up, and the surface looks clean and maintained again. We recommend doing this every two to three years depending on your level of traffic and tree cover.",
    seo: {
      title: `Pressure Washing & Resanding Ottawa | Interlock Cleaning`,
      description:
        "Pressure washing and resanding for Ottawa interlock driveways, walkways, and patios. Professional cleaning, fresh joints, and restored colour.",
    },
    hero: {
      headline: "Pressure washing and resanding for Ottawa interlock. Like new again.",
      subheadline:
        "We clean years of buildup from your pavers and replace worn joint sand to restore colour, stability, and a clean finished look.",
    },
    benefits: [
      {
        title: "Dramatic visual restoration",
        description:
          "Professional cleaning removes staining, algae, and grime that makes interlock look old and neglected.",
      },
      {
        title: "Tighter, more stable joints",
        description:
          "Fresh polymeric or kiln-dried sand locks pavers together and reduces movement.",
      },
      {
        title: "Reduces weed growth",
        description:
          "Clean, properly filled joints give weed seeds far less room to establish.",
      },
      {
        title: "Extends surface lifespan",
        description:
          "Keeping joints full and pavers clean prevents accelerated wear and base erosion.",
      },
    ],
    process: [
      {
        title: "Surface inspection",
        description:
          "We check paver condition, joint depth, staining, and any areas that need extra attention before starting.",
      },
      {
        title: "Pressure washing",
        description:
          "We wash the entire surface using professional equipment set for interlock, removing buildup without damaging pavers.",
      },
      {
        title: "Resanding and compaction",
        description:
          "We sweep sand into all joints, compact it in, and ensure a full, tight finish across the surface.",
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
          "Not when it's done correctly. We adjust the pressure and use the right nozzle for your specific paver type so we clean thoroughly without etching the surface or blowing out the joint sand prematurely. DIY pressure washers set too high can definitely cause damage, which is why it's worth having it done professionally.",
      },
      {
        question: "Should I do polymeric sand after washing?",
        answer:
          "If your joints are in decent shape and the weather cooperates, polymeric sand is a great upgrade after a wash. It hardens in the joints, which means less weed growth and better paver stability compared to regular sand. We can assess the joint condition after washing and let you know if it makes sense for your situation.",
      },
      {
        question: "How long does it take?",
        answer:
          "Most pressure washing and resanding jobs are completed in a single day. A typical driveway takes around 3 to 5 hours including drying time between the wash and resanding. Larger areas or surfaces with heavy buildup might take a bit longer, but we'll give you an estimate upfront.",
      },
      {
        question: "Can you remove oil stains?",
        answer:
          "We can usually improve oil stains significantly, especially if they're relatively fresh. Older stains that have soaked deep into the paver are harder to fully remove, but pressure washing combined with targeted cleaning agents can make a noticeable difference. We'll be upfront about what to expect based on the condition of your surface.",
      },
      {
        question: "How often should I wash?",
        answer:
          "Most homeowners in Ottawa benefit from a wash every 2 to 3 years, though areas with a lot of shade or tree cover might need it more often since moisture and organic debris build up faster there. High-traffic driveways also tend to need more frequent attention than a backyard patio that gets lighter use.",
      },
      {
        question: "Will weeds come back?",
        answer:
          "Weeds can return over time since seeds blow in naturally, but proper resanding makes a big difference. Polymeric sand is the best option for keeping weeds out of the joints long term. Keeping nearby garden beds and vegetation trimmed also helps reduce the amount of organic material that ends up on your interlock.",
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
      "Polymeric sand is a binding material that fills the joints between interlocking pavers and hardens when activated with water. It's a major upgrade over regular sand. It resists washout from rain, prevents weeds and ants from pushing through the joints, and gives the surface a cleaner, more finished look. Our polymeric sand service includes cleaning the joints, removing old sand, sweeping in the new product, compacting it into the gaps, and activating it with a controlled mist. We use premium-grade polymeric sand that's flexible enough to handle expansion and contraction through seasons. This service works great on its own or as the final step after a pressure wash, and it's one of the most cost-effective ways to refresh an aging interlock surface.",
    seo: {
      title: `Polymeric Sand in ${primaryCity}`,
      description:
        "Polymeric sand for Ottawa interlock driveways, walkways, and patios. Locks joints and cuts weeds through wet Canadian seasons.",
    },
    hero: {
      headline: "Polymeric sand for Ottawa interlock that locks tight.",
      subheadline:
        "Strengthen joints on driveways, walkways, and patios against washout and weeds through Ottawa freeze-thaw cycles.",
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
          "It's not strictly necessary, but we recommend it for most interlock surfaces. Polymeric sand locks the pavers together better than regular sand, reduces weed growth, and resists washout from rain. It's especially worthwhile in Ottawa where heavy rain and snowmelt can quickly erode regular joint sand.",
      },
      {
        question: "How long does it take to cure?",
        answer:
          "Full curing typically takes about 24 to 48 hours, depending on the product and weather conditions. During that time, the surface needs to stay dry and free of foot or vehicle traffic. We always check the forecast before scheduling and will give you a clear timeline for when you can start using the area again.",
      },
      {
        question: "Can polymeric sand be added to old interlock?",
        answer:
          "Yes, it works great on older interlock as long as the joints are properly cleaned and prepped first. We remove the old sand, clean out any debris or weed roots, and make sure the joints are deep enough for the polymeric sand to bond properly. It's one of the best ways to refresh an aging surface without replacing anything.",
      },
      {
        question: "Will it stop all weeds?",
        answer:
          "Polymeric sand dramatically reduces weed growth by creating a hardened barrier in the joints that seeds can't push through easily. That said, no product is 100% weed-proof forever. Over the years, a bit of organic material can accumulate on the surface and give weeds a place to sprout, but a quick pull or spot treatment is usually all you need.",
      },
      {
        question: "Can rain ruin it?",
        answer:
          "Rain before the polymeric sand has fully cured can wash it out of the joints or cause a hazy residue on the paver surface, which is why timing matters. We always check the weather forecast and schedule the work during a dry window with at least 24 hours of no rain expected. If conditions aren't right, we'll reschedule rather than risk a bad result.",
      },
      {
        question: "Does it crack?",
        answer:
          "When installed properly, polymeric sand stays flexible enough to handle normal expansion and contraction through Ottawa's seasons. Some minor cracking can happen in areas with heavy vehicle traffic or if the base underneath shifts, but that's usually a sign of a deeper issue. On a stable surface, it holds up really well for years.",
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
      "Artificial turf gives you a lush, green lawn year-round without the watering, mowing, or seasonal brown patches that come with natural grass. We install turf over a properly prepared base that includes grading for drainage, compacted aggregate, and a weed barrier. The turf itself is UV-resistant, pet-friendly, and soft underfoot. We secure the edges cleanly against interlock borders, garden beds, or fencing, and infill with sand for a natural feel and added stability. Turf is a great fit for backyards, side yards, pet areas, and rooftop terraces, anywhere you want a clean, low-maintenance green surface. We handle everything from removing the existing lawn or soil to the final brushing and infill.",
    seo: {
      title: `Turf Installation in ${primaryCity}`,
      description:
        "Artificial turf installation in Ottawa with drainage-focused base prep. Backyards, pet areas, and low-maintenance green space.",
    },
    hero: {
      headline: "Always-green turf for Ottawa yards, done right.",
      subheadline:
        "We prep base and drainage for Canadian weather, then install turf with clean edges against patios and walkways.",
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
          "Artificial turf can get warm in direct sunlight during peak summer days, similar to how a deck or patio heats up. Shaded areas stay much cooler, and a quick rinse with the hose brings the temperature down fast. If your yard gets full sun, we can recommend lighter-coloured turf options that absorb less heat.",
      },
      {
        question: "Is turf safe for pets?",
        answer:
          "Yes, turf is a great option for pet owners. We use pet-friendly infill that helps control odour and makes cleanup easy. The drainage system underneath is designed to handle liquids so nothing pools on the surface. A regular rinse with the hose keeps things fresh and hygienic.",
      },
      {
        question: "How long does turf last?",
        answer:
          "With quality materials and proper installation, artificial turf typically lasts 15 to 20 years. The base prep is what really determines longevity, which is why we don't cut corners there. Basic maintenance like occasional brushing and rinsing will keep it looking good throughout its lifespan.",
      },
      {
        question: "Will it smell with pets?",
        answer:
          "Odour is manageable with the right setup. We install a drainage layer underneath that lets liquids pass through quickly so nothing sits on the surface. Pet-specific infill also helps neutralize odours. A routine rinse with the hose, especially in warmer months, keeps things smelling clean.",
      },
      {
        question: "Can you install on uneven yards?",
        answer:
          "Yes, that's actually very common. We start by removing existing material and regrading the area to create a smooth, properly sloped surface. The compacted base we build ensures the turf sits flat and drains correctly, even if the original yard was bumpy or uneven.",
      },
      {
        question: "Do you include edging?",
        answer:
          "Yes, edging is included in every installation. It's what keeps the turf pulled tight and prevents the edges from curling or lifting over time. We secure the turf against whatever borders your yard has, whether that's interlock, garden beds, fencing, or concrete. Clean edges make the whole install look intentional and professional.",
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
      "A natural look sealant protects your interlock without changing its appearance. It penetrates the paver surface to guard against stains, UV fading, oil spills, and moisture absorption, while keeping the original colour and texture of the stone. This is the preferred option if you want protection without a glossy or darkened finish. Our application process starts with a thorough cleaning and drying of the surface, followed by an even coat of a breathable, high-quality sealant. It dries clear and doesn't leave a film or sheen. We recommend reapplying every 3-5 years depending on traffic and exposure. Natural look sealant is ideal for driveways, walkways, patios, and pool decks where you want to preserve the original aesthetic while extending the life of the stone.",
    seo: {
      title: `Natural Look Sealant in ${primaryCity}`,
      description:
        "Natural-look interlock sealant in Ottawa for driveways, walkways, and patios. Protects from stains and freeze-thaw without gloss.",
    },
    hero: {
      headline: "Natural-look protection for Ottawa interlock.",
      subheadline:
        "Seal driveways, walkways, and patios without changing the stone. Helps guard against stains, salt, and moisture in a Canadian climate.",
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
          "No, that's the whole point of a natural look sealant. It soaks into the paver to provide protection from stains, moisture, and UV exposure without changing the colour or adding any sheen. Your pavers will look exactly the same as they did before, just better protected against the elements.",
      },
      {
        question: "How long does sealant last?",
        answer:
          "Most natural look sealants last between 3 and 5 years before they need reapplication. High-traffic areas like driveways may wear faster than a backyard patio that sees lighter use. Ottawa's winters with salt and freeze-thaw cycles can also affect longevity. We'll let you know when it's time to reapply based on your specific setup.",
      },
      {
        question: "Can sealant be applied to wet pavers?",
        answer:
          "No, the pavers need to be completely dry for the sealant to absorb and bond properly. If there's any moisture in the stone, the sealant won't adhere well and can turn cloudy or peel. That's why we schedule sealing jobs during dry weather and make sure there's been no rain for at least 24 hours beforehand.",
      },
      {
        question: "Will sealant prevent all stains?",
        answer:
          "Sealant makes your pavers much more resistant to stains by creating a barrier that prevents liquids from soaking in as quickly. That said, if something like oil or red wine sits on the surface for a long time, it can still leave a mark. The key benefit is that it buys you time to clean up spills before they become permanent.",
      },
      {
        question: "Do you clean before sealing?",
        answer:
          "Yes, thorough cleaning is a mandatory first step. If you seal over dirt, algae, or old stains, you're essentially locking that grime into the paver permanently. We pressure wash the entire surface and let it dry completely before applying any sealant. This prep work is what makes the difference between a sealant job that lasts and one that fails early.",
      },
      {
        question: "Can I walk on it right away?",
        answer:
          "You'll need to stay off the surface for at least 24 to 48 hours while the sealant cures, depending on the product we use and the weather conditions. We'll give you a clear timeline before we leave so you can plan around it. Vehicle traffic usually needs to wait a bit longer than foot traffic.",
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
      "A wet look sealant enhances the natural colour of your pavers and gives the surface a rich, slightly glossy finish, similar to how the stone looks when it's just been rained on. It deepens the tones in the stone, brings out texture and pattern detail, and provides strong protection against stains, oil, UV fading, and moisture penetration. We clean and prep the surface thoroughly before applying the sealant in even coats. The result is a striking, polished look that makes driveways, walkways, and patios stand out. Wet look sealant is a popular choice for homeowners who want their interlock to make a visual impact. We recommend reapplication every 3-5 years depending on exposure and use.",
    seo: {
      title: `Wet Look Sealant in ${primaryCity}`,
      description:
        "Wet-look sealant for Ottawa interlock driveways, walkways, and patios. Rich finish with stain protection for harsh winters.",
    },
    hero: {
      headline: "Rich wet-look sealant for Ottawa pavers.",
      subheadline:
        "Deepen color on driveways, walkways, and patios while adding stain protection suited to Ottawa winters.",
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
          "Natural look sealant protects your pavers without changing how they look, while wet look sealant deepens the colours and adds a slight sheen, similar to how your pavers look right after it rains. Both provide protection against stains, UV, and moisture, but wet look gives you that extra visual punch. It comes down to whether you prefer a subtle or a more dramatic finish.",
      },
      {
        question: "Will wet look sealant make my pavers darker?",
        answer:
          "Yes, that's one of the main reasons people choose it. The sealant enhances the natural tones in the stone and gives them a deeper, richer look. Lighter-coloured pavers tend to show the most dramatic change. We can apply a test patch on a small area first so you can see exactly how your specific pavers will look before we do the full surface.",
      },
      {
        question: "How long does wet look sealant last?",
        answer:
          "You can expect wet look sealant to last about 3 to 5 years, depending on how much traffic the surface gets and how exposed it is to the elements. Driveways in Ottawa tend to need reapplication sooner than a covered patio because of salt, plowing, and freeze-thaw exposure. We'll give you care tips so you get the most out of each application.",
      },
      {
        question: "Can wet look be applied over existing sealant?",
        answer:
          "For the best results, any old sealant should be stripped off before applying a new coat. Layering sealant over an old application can cause peeling, bubbling, or an uneven finish. We'll assess your surface and handle the removal and prep work so the new sealant bonds properly and looks consistent.",
      },
      {
        question: "Is wet look sealant slippery when wet?",
        answer:
          "The products we use are formulated to maintain good traction even when wet, so slipperiness isn't usually an issue. For areas around pools or where you're especially concerned about slip risk, we can add a non-slip additive to the sealant. We'll talk through your specific situation so we can recommend the right product.",
      },
      {
        question: "Do you clean before applying wet look sealant?",
        answer:
          "Yes, cleaning is essential. Any dirt, stains, or old sealant residue left on the surface will get locked under the new coat and affect the final appearance. We pressure wash thoroughly and make sure the pavers are fully dry before applying. The cleaner the surface going in, the better the wet look finish turns out.",
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
      showLastServiceDate: true,
    },
    tags: ["sealant", "washing"],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    short:
      "Structural retaining walls built for slope control, drainage, and a clean finished landscape.",
    description:
      "Retaining walls hold back soil, manage grade changes, and make sloped Ottawa yards usable and safe. A properly built wall does more than look good. It controls erosion, manages water movement, and stays stable through years of freeze thaw cycles and seasonal soil expansion. We start with a site assessment that looks at grade, load, drainage, and your plans for the surrounding area. We excavate to the right depth, prepare a compacted base, install drainage stone and weeping tile behind the wall, and build with quality block systems designed to handle the load your site requires. Whether you need a low garden wall, a multi-tier retaining system, or a structural wall tied into stairs and a patio, we build to last and design details that integrate cleanly with your interlock and landscape.",
    seo: {
      title: `Retaining Walls Ottawa | Structural & Garden Walls`,
      description:
        "Retaining wall installation in Ottawa for sloped yards, drainage control, and landscape structure. Built with proper base, drainage, and clean finishes.",
    },
    hero: {
      headline: "Retaining walls in Ottawa. Built to hold, designed to last.",
      subheadline:
        "Structural and decorative retaining walls for Ottawa yards with proper base, drainage behind the wall, and clean integration with your interlock or patio.",
    },
    benefits: [
      {
        title: "Stops erosion and washout",
        description:
          "A properly built wall with drainage controls soil movement and protects your property through heavy rain and snowmelt.",
      },
      {
        title: "Manages water and drainage",
        description:
          "We install drainage stone and relief paths behind every wall to prevent hydrostatic pressure buildup.",
      },
      {
        title: "Turns slopes into usable space",
        description:
          "Tiered walls create flat areas for patios, gardens, and lawns where a slope once made the yard unusable.",
      },
      {
        title: "Clean integration with interlock",
        description:
          "We detail wall caps and transitions to tie in cleanly with steps, patios, and walkways.",
      },
    ],
    process: [
      {
        title: "Site assessment and wall design",
        description:
          "We assess grade, load, drainage, and layout to determine the right wall system, height, and drainage approach.",
      },
      {
        title: "Excavation and base preparation",
        description:
          "We excavate to the correct depth, compact the base, and establish level courses for a plumb, stable wall.",
      },
      {
        title: "Wall construction and drainage",
        description:
          "We build courses with the correct setback, backfill with drainage stone, and install weeping tile where required.",
      },
      {
        title: "Capping and tie-ins",
        description:
          "We cap the wall, detail the top course, and blend transitions to any connected stairs, patio, or interlock.",
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
          "Yes, drainage is one of the most important parts of a retaining wall build. Without it, water builds up behind the wall and creates hydrostatic pressure that can push the wall forward or cause it to fail over time. We install drainage stone and relief paths behind every wall we build so water can escape and the structure stays stable through Ottawa's wet seasons and spring thaw.",
      },
      {
        question: "Do I need a permit for a retaining wall?",
        answer:
          "In Ottawa, walls over a certain height typically require a building permit, and the threshold varies depending on your municipality. Walls that are close to property lines or that retain significant grade changes may also need engineering. We'll assess your project and let you know exactly what's required so there are no surprises.",
      },
      {
        question: "How long do retaining walls last?",
        answer:
          "A well-built retaining wall with proper drainage and a solid base can easily last 25 years or more. The key factors are the quality of the base, how well the drainage works, and whether the wall was built to handle the actual load it's retaining. Cutting corners on any of those leads to early failure, which is why we don't skip steps.",
      },
      {
        question: "Can you build retaining walls on sloped backyards?",
        answer:
          "Yes, sloped backyards are actually the most common reason people need retaining walls. A well-placed wall can turn a steep, unusable slope into tiered flat areas for patios, gardens, or play space. We assess the grade and soil conditions to design a wall system that handles the load and works with your landscape plans.",
      },
      {
        question: "Can retaining walls be combined with steps or patios?",
        answer:
          "Absolutely, and that's one of the best ways to get value out of a retaining wall project. We regularly build walls that incorporate built-in staircases, transition into patio surfaces, or frame a walkway. Planning these elements together ensures everything ties in cleanly and the drainage, grading, and materials all work as one system.",
      },
      {
        question: "What type of blocks do you use?",
        answer:
          "We work with established retaining wall systems from manufacturers like Permacon and Techo-Bloc, selected based on your project's height, load requirements, and the look you want. For shorter garden walls, a standard block system works great. Taller walls that retain more soil may need a geogrid-reinforced system for added strength. We'll recommend the right product for your specific situation.",
      },
    ],
    gallery: [
      {
        src: "/images/workexample/retaining-wall.jpeg",
        alt: "Curved tiered retaining wall edging a manicured lawn in Ottawa",
      },
      {
        src: "/images/workexample/retaining-wall-2.jpg",
        alt: "Curved retaining wall holding a raised garden bed at a stone home",
      },
      {
        src: "/images/workexample/retaining-wall-3.jpg",
        alt: "Multi-tier retaining wall with planted terraces and capped finish",
      },
    ],
    formRules: {
      showStylePreference: true,
      showDrainageIssues: true,
    },
    tags: ["interlock", "patio"],
  },
  {
    slug: "staircases",
    name: "Interlock Staircases",
    short:
      "Custom outdoor staircases built for safe access, clean transitions, and lasting visual impact.",
    description:
      "Outdoor stairs connect levels, make your property accessible, and add a finished look to your front entrance, backyard, or landscaped yard. Good stairs start with consistent rise and run geometry, a solid structural base, and details that tie in cleanly to the interlock or walls they are connected to. We design and build interlock and block stair systems that are comfortable to use daily and stable through Ottawa winters. We factor in tread depth, drainage off the steps, and edge alignment so nothing shifts or creates a hazard through freeze thaw cycles. Whether it is a three-step front entrance upgrade, wide backyard terrace steps, or a staircase integrated into a retaining wall, we build with safety and appearance in equal measure.",
    seo: {
      title: `Interlock Staircases Ottawa | Outdoor Steps & Entrance Stairs`,
      description:
        "Outdoor interlock staircases and front entrance steps in Ottawa. Consistent rise and run, structural base, and clean ties to driveways and patios.",
    },
    hero: {
      headline: "Interlock staircases in Ottawa. Solid footing and a clean finish.",
      subheadline:
        "Front entrance stairs, backyard steps, and retaining wall staircases built with precise geometry, structural prep, and clean integration with your interlock.",
    },
    benefits: [
      {
        title: "Safe and consistent geometry",
        description:
          "Every step is built with matching rise and run so stairs feel natural and predictable underfoot.",
      },
      {
        title: "Structural base for Ottawa winters",
        description:
          "Proper excavation and foundation work prevents settling and ice-related movement through freeze thaw cycles.",
      },
      {
        title: "Front entrance impact",
        description:
          "New front stairs dramatically improve curb appeal and set the tone for the entire property.",
      },
      {
        title: "Integrates with walls and patios",
        description:
          "We design stair transitions that tie in cleanly to retaining walls, driveways, and patio surfaces.",
      },
    ],
    process: [
      {
        title: "Measurement and stair design",
        description:
          "We calculate rise and run based on your grade change and design steps that are comfortable and safe to walk daily.",
      },
      {
        title: "Excavation and structural base",
        description:
          "We build a solid foundation to handle daily foot traffic and resist seasonal movement from frost.",
      },
      {
        title: "Tread and riser installation",
        description:
          "We set each step component with consistent alignment, tight edges, and clean transitions on both sides.",
      },
      {
        title: "Final details and walkthrough",
        description:
          "We complete any finishing cuts, check every step for consistency, and review care and winter maintenance with you.",
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
          "They can if the base wasn't built right, which is unfortunately common with older builds. We excavate to the right depth, compact the base in layers, and build a solid foundation for each step so everything stays put. Ottawa's freeze-thaw cycles put extra stress on outdoor stairs, which is why proper base prep matters even more here.",
      },
      {
        question: "Can you match the staircase to existing interlock?",
        answer:
          "Yes, we do this regularly. If your pavers are still being manufactured, we can source the same product for a seamless match. Even if the exact product isn't available anymore, we can find something very close or use complementary materials and borders to tie everything together visually.",
      },
      {
        question: "How do you make sure stairs are safe?",
        answer:
          "Safety comes down to consistency and stability. Every step needs to have the same rise and run so your body naturally knows what to expect as you walk up or down. We also make sure treads are solidly set with no wobble, and we build in proper drainage so water doesn't pool on the steps and freeze in winter.",
      },
      {
        question: "Can stairs be combined with retaining walls?",
        answer:
          "Yes, this is actually one of the most popular combinations we do. When you have a grade change that needs a retaining wall, adding stairs into the wall design gives you functional access between levels without taking up extra yard space. It also looks great because everything is built from the same materials and the transitions are clean.",
      },
      {
        question: "Do you offer front entrance staircase upgrades?",
        answer:
          "Absolutely, front entrance stairs are one of our most popular projects. Upgrading old concrete or crumbling steps with clean interlock or stone treads makes a huge difference in curb appeal. We handle everything from removing the old steps to building a proper foundation and installing new risers and treads that match or complement your existing walkway or driveway.",
      },
      {
        question: "How long does a staircase project take?",
        answer:
          "Most staircase projects take 2 to 4 days from start to finish. A simple 3 or 4 step front entrance can sometimes be done in a day or two, while larger multi-level staircases integrated with retaining walls take longer. We'll give you a clear timeline after the site visit so you can plan accordingly.",
      },
    ],
    gallery: [
      {
        src: "/images/workexample/frontstairafter.jpeg",
        alt: "Clean curved interlock staircase at a front entrance in Ottawa",
      },
      {
        src: "/images/workexample/staircase-project-3.jpeg",
        alt: "Curved four-step interlock staircase at a front entrance",
      },
      {
        src: "/images/workexample/staircase-project-2.jpeg",
        alt: "Front entrance interlock stairs flowing into a curved driveway",
      },
    ],
    formRules: {
      showStylePreference: true,
      showApproxArea: true,
    },
    tags: ["interlock", "patio"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
