import { BUSINESS } from "@/config/business";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO (YYYY-MM-DD)
  dateModified?: string; // ISO (YYYY-MM-DD)
  category: string;
  tags: string[];
  cover: {
    src: string;
    alt: string;
  };
  content: {
    intro: string[];
    sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
    outroCta: string;
  };
  /** Related service slugs for internal linking */
  relatedServices?: string[];
};

const city = BUSINESS.primaryCity;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "interlock-installation-ottawa-base-prep",
    title: `Interlock Installation in ${city}: What “Proper Base Prep” Really Means`,
    description:
      "A practical breakdown of excavation depth, compaction, grading, and edge restraint—so your interlock stays level through freeze/thaw.",
    datePublished: "2026-01-23",
    dateModified: "2026-01-23",
    category: "Interlock",
    tags: ["interlock installation", "base prep", "ottawa", "freeze thaw"],
    cover: {
      src: "/images/img-service/interlock-installation.webp",
      alt: "Interlock installation work in progress",
    },
    content: {
      intro: [
        "If you’ve ever seen interlock sink, shift, or start pooling water after a season or two, it usually comes back to base prep.",
        "Here’s what “proper base prep” should include on an Ottawa project—explained in plain English.",
        "When quotes look far apart, the difference is often in what happens underground. The surface can look similar on day one, but base quality is what decides how it performs after two or three winters.",
      ],
      sections: [
        {
          heading: "1) Excavation depth (it’s not one-size-fits-all)",
          paragraphs: [
            "Walkways, patios, and driveways don’t need the same base depth. A driveway typically requires a deeper, stronger base because of vehicle load.",
            "Ottawa’s freeze/thaw cycles make depth and compaction especially important—shallow or inconsistent excavation is a common cause of future settling.",
          ],
        },
        {
          heading: "2) Compaction in lifts (not all at once)",
          paragraphs: [
            "Compaction should be done in layers (“lifts”), not by dumping all base material and compacting once.",
            "Layered compaction creates a denser base that resists shifting—especially at edges and transitions.",
          ],
        },
        {
          heading: "3) Grading + slope (so water leaves the surface)",
          paragraphs: [
            "Interlock shouldn’t be perfectly flat. You want a subtle slope that directs water away from the house and prevents pooling.",
            "Good grading reduces ice buildup, helps the surface dry faster, and improves long-term stability.",
          ],
        },
        {
          heading: "4) Edge restraint (keeps the pattern locked)",
          paragraphs: [
            "Edges are where movement starts. Proper edge restraint keeps the field pavers from spreading outward over time.",
            "If you see borders pulling away or joints opening up, the edge system may be failing.",
          ],
        },
        {
          heading: "5) Bedding layer + jointing quality",
          paragraphs: [
            "The bedding layer should be consistent and properly screeded so pavers sit evenly across the surface.",
            "After install, joints should be fully filled and compacted. Incomplete joints can accelerate movement and weed growth.",
          ],
        },
        {
          heading: "6) Drainage planning around the project",
          paragraphs: [
            "Good projects account for where water goes at transitions: garage thresholds, foundation walls, steps, and side-yard tie-ins.",
            "Ignoring these details can create pooling zones or ice patches even if the paver field looks good at first glance.",
          ],
        },
        {
          heading: "Red flags during quoting",
          paragraphs: ["These are common warning signs homeowners should watch for:"],
          bullets: [
            "No discussion of base depth or compaction method",
            "No mention of drainage direction or slope targets",
            "Very low pricing with no written scope details",
            "Vague answers on edge restraint and jointing materials",
          ],
        },
        {
          heading: "Quick homeowner checklist (what to ask before you book)",
          paragraphs: ["Use this checklist during quoting so you can compare apples-to-apples."],
          bullets: [
            "What base depth do you recommend for my use (walkway/patio/driveway)?",
            "Do you compact in lifts, and what compactor size do you use?",
            "How do you set slope for drainage?",
            "What edge restraint system will be installed?",
          ],
        },
      ],
      outroCta:
        "Want a fast quote? Call us and we’ll confirm your scope, access, drainage, and timeline in a quick call.",
    },
    relatedServices: [
      "interlock-installation",
      "patio-installation",
      "uneven-pavers-leveling",
      "retaining-walls",
      "staircases",
    ],
  },
  {
    slug: "polymeric-sand-ottawa",
    title: `Polymeric Sand in ${city}: When It’s Worth It (and When It’s Not)`,
    description:
      "Learn what polymeric sand does, when it helps, common mistakes, and what to expect for maintenance in Ottawa conditions.",
    datePublished: "2026-01-18",
    dateModified: "2026-01-23",
    category: "Maintenance",
    tags: ["polymeric sand", "jointing", "weeds", "ottawa"],
    cover: {
      src: "/images/img-service/polymeric-sand.webp",
      alt: "Polymeric sand being swept into paver joints",
    },
    content: {
      intro: [
        "Polymeric sand can make interlock look cleaner, reduce weeds, and help lock pavers together.",
        "But it’s not magic—and if it’s installed at the wrong time (or on a dirty surface), results can disappoint.",
        "Homeowners often treat polymeric sand as a cosmetic add-on, but it performs best when the surface is stable, clean, and drainage issues are already addressed.",
      ],
      sections: [
        {
          heading: "What polymeric sand actually does",
          paragraphs: [
            "It hardens in the joints after activation, creating a more stable joint fill than regular sand.",
            "That can help reduce weed growth and limit joint washout in heavy rain.",
          ],
        },
        {
          heading: "When it’s worth it",
          paragraphs: ["Polymeric sand is usually a good fit when:"],
          bullets: [
            "Your joints are clean and dry (critical).",
            "You want fewer weeds and a crisp joint finish.",
            "You’ve already fixed any uneven/sunken areas first.",
          ],
        },
        {
          heading: "When it’s not worth it (yet)",
          paragraphs: ["Hold off if:"],
          bullets: [
            "The surface is still shifting/sinking (leveling should come first).",
            "There’s ongoing drainage/pooling water—fix slope and water flow first.",
            "It’s too wet/cold to cure properly (weather timing matters).",
          ],
        },
        {
          heading: "Common mistakes we see",
          paragraphs: ["Most issues come from prep and timing."],
          bullets: [
            "Applying before the surface is fully dry",
            "Leaving residue haze on the pavers",
            "Underfilling joints or skipping compaction",
          ],
        },
        {
          heading: "How long it lasts (realistic expectations)",
          paragraphs: [
            "Longevity depends on traffic, drainage, joint depth, and weather exposure. High-use driveways usually wear faster than low-traffic patios.",
            "A good install can last years, but no joint material is permanent. Periodic touch-ups are normal and part of long-term maintenance.",
          ],
        },
        {
          heading: "Best time of year to apply polymeric sand",
          paragraphs: [
            "Mild, dry conditions are ideal so joints can cure properly. Very wet or cold windows increase the risk of weak curing and washout.",
            "Planning this work during stable weather generally produces cleaner joints and better durability.",
          ],
        },
        {
          heading: "Homeowner prep checklist before service day",
          paragraphs: ["A little prep helps the install go smoother and faster."],
          bullets: [
            "Move vehicles and outdoor furniture away from the area",
            "Trim overgrown edges so joints are accessible",
            "Identify any sprinklers/drains near the paver field",
            "Share spots where weeds, pooling, or washout keep returning",
          ],
        },
      ],
      outroCta:
        "Not sure if polymeric sand is right for your driveway or patio? Call and we’ll recommend the best next step.",
    },
    relatedServices: ["polymeric-sand", "interlock-repair", "interlock-installation"],
  },
  {
    slug: "uneven-pavers-leveling-ottawa",
    title: `Uneven Pavers Leveling in ${city}: Before/After and What Causes Sinking`,
    description:
      "See what leveling can fix, why pavers sink, and how proper base correction prevents the problem from returning.",
    datePublished: "2026-01-10",
    dateModified: "2026-01-23",
    category: "Repairs",
    tags: ["paver leveling", "interlock repair", "trip hazards", "ottawa"],
    cover: {
      src: "/images/img-service/before.webp",
      alt: "Before leveling uneven pavers",
    },
    content: {
      intro: [
        "Uneven pavers are more than an eyesore—they’re a trip hazard and can cause water to pool and freeze.",
        "Leveling is usually the best-value fix when the pavers themselves are still in good shape.",
        "The key is identifying whether the problem is isolated settlement or a deeper base/drainage issue. That decision determines whether repair or partial rebuild is the smarter investment.",
      ],
      sections: [
        {
          heading: "Common causes of sinking",
          paragraphs: ["In Ottawa, these show up often:"],
          bullets: [
            "Insufficient base depth or poor compaction",
            "Water movement washing out bedding/joints",
            "Failing edge restraint letting the field spread",
          ],
        },
        {
          heading: "What a proper leveling job includes",
          paragraphs: [
            "Good leveling isn’t just “lifting and dropping sand.” The base and slope need to be corrected so the issue doesn’t come right back.",
            "After re-install, joints should be properly refilled and the surface compacted for lock-in.",
          ],
        },
        {
          heading: "Before/after",
          paragraphs: [
            "A visual comparison helps set expectations. Leveling improves safety, drainage, and curb appeal without a full rebuild.",
          ],
        },
        {
          heading: "Repair vs rebuild: how to decide",
          paragraphs: [
            "Leveling is usually ideal when the pavers are still structurally sound and movement is limited to specific zones.",
            "If wide areas are unstable, drainage is poor, or materials are heavily worn, partial or full rebuild can be more cost-effective long term.",
          ],
        },
        {
          heading: "Where uneven pavers are most common",
          paragraphs: ["We frequently see settlement in these areas first:"],
          bullets: [
            "Garage aprons and driveway wheel paths",
            "Bottom of stair transitions and landing zones",
            "Downspout discharge areas with recurring water flow",
            "Edges near soft landscaping or old trench backfill",
          ],
        },
        {
          heading: "What to do after leveling to extend lifespan",
          paragraphs: ["A few maintenance habits can help keep the surface stable longer."],
          bullets: [
            "Keep joints topped up and address washout early",
            "Redirect downspouts away from paver edges where possible",
            "Treat weeds/moss quickly before roots spread in joints",
            "Schedule periodic inspection of high-traffic zones",
          ],
        },
      ],
      outroCta:
        "If you can send a couple photos, we can usually tell quickly whether leveling is the right fix. Call for a fast quote.",
    },
    relatedServices: [
      "uneven-pavers-leveling",
      "interlock-repair",
      "patio-installation",
      "retaining-walls",
      "staircases",
    ],
  },
];

/**
 * Accessor for all blog posts.
 * Today this is a local array; later you can swap this to a database fetch
 * without changing your pages.
 */
export function getAllBlogPosts() {
  return [...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

