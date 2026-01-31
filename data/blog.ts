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
};

const city = BUSINESS.primaryCity;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "interlock-installation-ottawa-base-prep",
    title: `Interlock Installation in ${city}: What “Proper Base Prep” Really Means`,
    description:
      "A practical breakdown of excavation depth, compaction, grading, and edge restraint—so your interlock stays level through freeze/thaw.",
    datePublished: "2026-01-23",
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
  },
  {
    slug: "polymeric-sand-ottawa",
    title: `Polymeric Sand in ${city}: When It’s Worth It (and When It’s Not)`,
    description:
      "Learn what polymeric sand does, when it helps, common mistakes, and what to expect for maintenance in Ottawa conditions.",
    datePublished: "2026-01-18",
    dateModified: "2026-01-22",
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
      ],
      outroCta:
        "Not sure if polymeric sand is right for your driveway or patio? Call and we’ll recommend the best next step.",
    },
  },
  {
    slug: "uneven-pavers-leveling-ottawa",
    title: `Uneven Pavers Leveling in ${city}: Before/After and What Causes Sinking`,
    description:
      "See what leveling can fix, why pavers sink, and how proper base correction prevents the problem from returning.",
    datePublished: "2026-01-10",
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
      ],
      outroCta:
        "If you can send a couple photos, we can usually tell quickly whether leveling is the right fix. Call for a fast quote.",
    },
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

