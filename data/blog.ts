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
      "A practical breakdown of excavation depth, compaction, grading, and edge restraint, so your interlock stays level through freeze/thaw.",
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
        "Here’s what “proper base prep” should include on an Ottawa project, explained in plain English.",
        "When quotes look far apart, the difference is often in what happens underground. The surface can look similar on day one, but base quality is what decides how it performs after two or three winters.",
      ],
      sections: [
        {
          heading: "1) Excavation depth (it’s not one-size-fits-all)",
          paragraphs: [
            "Walkways, patios, and driveways don’t need the same base depth. A driveway typically requires a deeper, stronger base because of vehicle load.",
            "Ottawa’s freeze/thaw cycles make depth and compaction especially important. Shallow or inconsistent excavation is a common cause of future settling.",
          ],
        },
        {
          heading: "2) Compaction in lifts (not all at once)",
          paragraphs: [
            "Compaction should be done in layers (“lifts”), not by dumping all base material and compacting once.",
            "Layered compaction creates a denser base that resists shifting, especially at edges and transitions.",
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
        "But it’s not magic, and if it’s installed at the wrong time (or on a dirty surface), results can disappoint.",
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
            "There’s ongoing drainage/pooling water. Fix slope and water flow first.",
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
        "Uneven pavers are more than an eyesore. They’re a trip hazard and can cause water to pool and freeze.",
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
  {
    slug: "interlock-repair-vs-replacement-ottawa",
    title: `Interlock Repair vs Replacement in ${city}: Which One Do You Need?`,
    description:
      "Sinking pavers or worn-out interlock? Here is how to tell whether repair is enough or a full replacement is the smarter move for your Ottawa property.",
    datePublished: "2026-05-10",
    dateModified: "2026-06-10",
    category: "Repairs",
    tags: ["interlock repair", "interlock replacement", "ottawa", "sinking pavers"],
    cover: {
      src: "/images/img-service/int-repair.webp",
      alt: "Interlock repair work on Ottawa driveway",
    },
    content: {
      intro: [
        "If your interlock driveway, patio, or walkway is starting to sink, shift, or look worn out, you may be wondering whether you need a full replacement or just a repair.",
        "Understanding the difference can save you time and money while protecting your property.",
        "The right answer depends on how widespread the damage is, whether the original base was installed correctly, and how much of the surface is affected.",
      ],
      sections: [
        {
          heading: "When interlock repair is the right choice",
          paragraphs: [
            "In many cases, interlock repair and leveling is all that is needed to restore your surface. Common issues like uneven pavers, minor sinking, or joint sand erosion can often be fixed without replacing the entire area.",
            "Professional interlock repair in Ottawa focuses on removing the affected pavers, fixing the base, and reinstalling them properly so the surface is level and stable again.",
          ],
          bullets: [
            "Localized sinking or uneven spots in specific areas",
            "Loose or shifting pavers in isolated zones",
            "Weed growth between stones",
            "Water pooling in small areas after rain",
          ],
        },
        {
          heading: "When you need full replacement",
          paragraphs: [
            "A full interlock replacement is usually required when the damage is widespread or the original installation was done incorrectly.",
            "Replacing interlock allows for proper excavation, base installation, and drainage correction from the ground up. This is the right call when patching would just delay the same problems.",
          ],
          bullets: [
            "Large areas are sinking or moving across the surface",
            "Poor drainage affecting the entire installation",
            "Old or damaged pavers that cannot be salvaged",
            "Base failure throughout the project",
          ],
        },
        {
          heading: "Cost difference between repair and replacement",
          paragraphs: [
            "Interlock repair is significantly more cost effective than full replacement. Repair targets problem areas, while replacement involves removing and rebuilding the entire surface.",
            "Getting a professional inspection is the best way to determine the right solution for your property. A small repair done early almost always costs less than a larger repair done later.",
          ],
        },
        {
          heading: "Address it early",
          paragraphs: [
            "Small problems can turn into major damage if left untreated. A few uneven pavers today can become a failed base section after one more freeze-thaw cycle.",
            "If you are unsure whether your interlock needs repair or replacement, a site visit is the fastest way to get a clear answer.",
          ],
        },
      ],
      outroCta:
        "Send us a couple of photos and we will tell you whether repair is the right call or whether a rebuild makes more sense. Free quote, no pressure.",
    },
    relatedServices: ["interlock-repair", "uneven-pavers-leveling"],
  },
  {
    slug: "how-to-maintain-interlock-pavers-ottawa",
    title: `How to Maintain Interlock Pavers in ${city} and Make Them Last for Years`,
    description:
      "A practical guide to keeping Ottawa interlock clean, level, and structurally sound through pressure washing, polymeric sand, and proper sealing.",
    datePublished: "2026-05-15",
    dateModified: "2026-06-10",
    category: "Maintenance",
    tags: ["interlock maintenance", "pressure washing", "polymeric sand", "sealing", "ottawa"],
    cover: {
      src: "/images/img-service/cleaned-paver.webp",
      alt: "Cleaned and restored interlock pavers in Ottawa",
    },
    content: {
      intro: [
        "Interlock pavers are one of the most durable and attractive options for driveways, patios, and walkways. However, proper maintenance is essential to keep your interlock looking clean, level, and structurally sound over time.",
        "With Ottawa's harsh winters, freeze-thaw cycles, and seasonal changes, regular maintenance plays a key role in protecting your investment.",
      ],
      sections: [
        {
          heading: "Regular interlock cleaning and pressure washing",
          paragraphs: [
            "Over time, interlock surfaces collect dirt, moss, algae, and stains that reduce curb appeal and can cause long term damage if not removed. Professional pressure washing in Ottawa is one of the most effective ways to restore the original color of your pavers and remove buildup safely.",
          ],
          bullets: [
            "Prevents moss and algae growth that eats into joint sand",
            "Removes oil stains and surface dirt",
            "Improves the overall appearance of your property",
            "Prepares the surface for resanding and sealing",
          ],
        },
        {
          heading: "Resanding with polymeric sand",
          paragraphs: [
            "Joint sand naturally wears away due to rain, traffic, and weather conditions. When this happens, pavers can begin to shift or become unstable.",
            "Polymeric sand resanding in Ottawa should be done after pressure washing to ensure proper bonding and long-lasting results.",
          ],
          bullets: [
            "Locks pavers in place and prevents movement",
            "Prevents weed growth and insect activity in joints",
            "Improves drainage and reduces water penetration",
            "Maintains structural stability of the surface",
          ],
        },
        {
          heading: "Sealing your interlock pavers",
          paragraphs: [
            "Sealing is one of the most important steps in interlock maintenance. Professional interlock sealing in Ottawa protects your pavers from weather damage, staining, and fading.",
            "Most interlock surfaces should be sealed every 2 to 3 years depending on traffic and sun exposure.",
          ],
          bullets: [
            "Enhanced color and appearance",
            "Protection from oil, dirt, and moisture",
            "Reduced maintenance requirements year-over-year",
            "Extended lifespan of your interlock surface",
          ],
        },
        {
          heading: "Preventing common interlock problems",
          paragraphs: [
            "Proper maintenance also helps prevent expensive repairs down the road. Small issues caught early are almost always cheaper to fix than large ones that have been ignored.",
          ],
          bullets: [
            "Address uneven pavers early before the base shifts further",
            "Fix drainage issues before they cause base erosion",
            "Avoid heavy loads on weak or repaired areas",
            "Keep joints filled with polymeric sand year round",
          ],
        },
        {
          heading: "Why interlock maintenance matters",
          paragraphs: [
            "Regular interlock maintenance in Ottawa not only improves appearance but also prevents structural damage. By combining pressure washing, resanding, and sealing, you can extend the life of your driveway, patio, or walkway while maintaining a clean, professional look year round.",
          ],
        },
      ],
      outroCta:
        "Not sure where your interlock stands? We can assess the surface and recommend the right maintenance steps. Call for a free quote.",
    },
    relatedServices: ["pressure-washing-resanding", "interlock-repair"],
  },
  {
    slug: "interlock-installation-cost-ottawa",
    title: `How Much Does Interlock Installation Cost in ${city}?`,
    description:
      "A breakdown of what affects interlock installation pricing in Ottawa, what proper installation includes, and how to get the best long-term value.",
    datePublished: "2026-05-18",
    dateModified: "2026-06-10",
    category: "Interlock",
    tags: ["interlock cost", "interlock pricing", "interlock installation", "ottawa"],
    cover: {
      src: "/images/img-service/interlock-installation.webp",
      alt: "Interlock installation in progress in Ottawa",
    },
    content: {
      intro: [
        "Interlock installation is one of the most popular upgrades for driveways, patios, and outdoor spaces in Ottawa. One of the most common questions homeowners ask is how much interlock installation costs and what factors affect the price.",
        "The honest answer is that pricing varies based on the scope, site conditions, and what is included below the surface. Understanding what goes into a proper install helps you compare quotes accurately.",
      ],
      sections: [
        {
          heading: "What affects interlock installation cost",
          paragraphs: [
            "Several factors impact the cost of your project. Projects that require deeper excavation or correction of existing issues may cost more but will prevent future problems and save money over time.",
          ],
          bullets: [
            "Size of the driveway, patio, or walkway",
            "Type and quality of interlock pavers selected",
            "Amount of excavation and base preparation required",
            "Drainage and grading conditions on the site",
            "Accessibility to the work area",
            "Design complexity and custom features like curves or borders",
          ],
        },
        {
          heading: "Why proper installation matters",
          paragraphs: [
            "Many homeowners are tempted to choose the lowest price, but poor installation often leads to sinking, shifting, and costly repairs within a few years.",
            "A proper interlock installation in Ottawa includes deep excavation and removal of unstable soil, installation of a compacted granular base, proper grading for drainage, and precision paver installation with joint stabilization. Skipping any of these steps results in premature failure of the surface.",
          ],
        },
        {
          heading: "Repair vs new installation costs",
          paragraphs: [
            "In some cases, interlock repair and leveling may be a more cost effective option if the damage is limited to specific areas. However, if the base has failed across a large area, full replacement may be necessary and more cost effective in the long run.",
          ],
        },
        {
          heading: "Getting the best value",
          paragraphs: [
            "The best interlock value comes from choosing experienced contractors, asking about the installation process and base preparation before signing anything, and focusing on long-term durability rather than lowest upfront cost.",
            "A properly built interlock driveway or patio can last 20 to 30 years or more with proper maintenance. A poorly built one can start failing within a couple of seasons.",
          ],
          bullets: [
            "Choose experienced interlock contractors in Ottawa",
            "Ask specifically about base depth and compaction method",
            "Get a written scope and warranty before work starts",
            "Focus on long-term durability rather than lowest cost",
          ],
        },
      ],
      outroCta:
        "Want a clear, written quote for your project? Call us and we'll give you a real number based on your specific site, no guessing.",
    },
    relatedServices: ["interlock-installation", "interlock-repair"],
  },
  {
    slug: "when-to-pressure-wash-seal-interlock-ottawa",
    title: `When Should You Pressure Wash and Seal Interlock in ${city}?`,
    description:
      "Proper timing for interlock pressure washing, resanding, and sealing in Ottawa. Know the signs and the right season to protect your pavers.",
    datePublished: "2026-05-20",
    dateModified: "2026-06-10",
    category: "Maintenance",
    tags: ["pressure washing", "interlock sealing", "maintenance timing", "ottawa"],
    cover: {
      src: "/images/img-service/pressure-wash.webp",
      alt: "Pressure washing interlock pavers in Ottawa",
    },
    content: {
      intro: [
        "Proper timing is key when it comes to maintaining your interlock driveway, patio, or walkway. Knowing when to pressure wash, resand, and seal your interlock can significantly extend its lifespan and keep it looking its best.",
        "In Ottawa, seasonal conditions play a big role. Spring and summer are the best windows, but understanding the signs helps you act before small issues become bigger ones.",
      ],
      sections: [
        {
          heading: "When to pressure wash interlock",
          paragraphs: [
            "Pressure washing should be done when dirt, moss, algae, or stains start to build up on the surface. In Ottawa, spring is one of the best times to clean interlock after winter salt, debris, and moisture buildup.",
          ],
          bullets: [
            "Restore original color and remove winter buildup",
            "Remove harmful moss and algae before they damage joint sand",
            "Prepare the surface for resanding and sealing",
          ],
        },
        {
          heading: "When to resand interlock",
          paragraphs: [
            "Resanding is needed when the joint sand between pavers begins to wear away. This is a critical step that is often overlooked until pavers start moving.",
            "Applying polymeric sand helps stabilize the surface and prevent future movement. It should always be done after pressure washing so the joints are clean and open.",
          ],
          bullets: [
            "Gaps or recessed joints between pavers",
            "Weed growth pushing up through joints",
            "Loose or shifting stones after heavy rain",
          ],
        },
        {
          heading: "When to seal interlock",
          paragraphs: [
            "Interlock sealing in Ottawa is typically recommended every 2 to 3 years. High traffic areas such as driveways may require more frequent sealing to maintain protection.",
            "Sealing protects against staining, UV fading, and moisture penetration, and it brings out the color in the pavers.",
          ],
        },
        {
          heading: "Best time of year in Ottawa",
          paragraphs: [
            "Spring and summer are ideal for pressure washing, resanding, and sealing because the weather allows proper drying and curing. Avoid these services in wet or cold conditions since moisture prevents polymeric sand and sealant from bonding correctly.",
            "Booking early in the season is smart as good contractors fill up quickly once the weather turns.",
          ],
        },
        {
          heading: "Benefits of proper timing",
          paragraphs: [
            "Maintaining your interlock at the right time gives better protection from weather and moisture, improved appearance and curb appeal, and a longer lasting surface with fewer emergency repairs.",
          ],
        },
      ],
      outroCta:
        "Ready to book your spring cleaning, resanding, or sealing? Call us for a free quote and we will let you know what your surface needs.",
    },
    relatedServices: ["pressure-washing-resanding", "interlock-repair"],
  },
  {
    slug: "why-interlock-driveways-are-top-choice-ottawa",
    title: `Why Interlock Driveways Are a Top Choice in ${city}`,
    description:
      "Interlock driveways offer durability, easy repairs, better drainage, and strong curb appeal. Here is why Ottawa homeowners consistently choose them over concrete and asphalt.",
    datePublished: "2026-05-22",
    dateModified: "2026-06-10",
    category: "Interlock",
    tags: ["interlock driveways", "ottawa driveways", "driveway pavers", "curb appeal"],
    cover: {
      src: "/images/workexample/work2done.jpeg",
      alt: "Finished interlock driveway in Ottawa",
    },
    content: {
      intro: [
        "Interlock driveways have become one of the most popular choices for homeowners in Ottawa due to their durability, flexibility, and clean appearance.",
        "When installed properly, interlock offers long term performance that outperforms traditional concrete and asphalt in many ways, particularly in Ottawa's climate where freeze-thaw cycles cause serious damage to rigid surfaces.",
      ],
      sections: [
        {
          heading: "Durability and long term performance",
          paragraphs: [
            "Interlock pavers are designed to handle heavy loads and daily use. Unlike poured concrete, interlock does not crack as easily because individual pavers can shift slightly with ground movement and return to position.",
            "This makes interlock ideal for Ottawa's climate, where freeze-thaw cycles can cause concrete slabs to crack and heave significantly over time.",
          ],
        },
        {
          heading: "Easy repairs and maintenance",
          paragraphs: [
            "One of the biggest advantages of interlock driveways is the ability to repair small areas without replacing the entire surface. If a section becomes uneven or a paver gets damaged, it can be lifted, the base corrected, and reinstalled cleanly.",
            "This is not possible with concrete or asphalt, where any repair is visible and the surface never looks the same afterward.",
          ],
        },
        {
          heading: "Improved drainage",
          paragraphs: [
            "Interlock systems allow for better water drainage compared to solid surfaces. Proper installation with correct slope and joint spacing helps prevent water buildup and reduces the risk of long term damage from moisture under the surface.",
          ],
        },
        {
          heading: "Curb appeal and property value",
          paragraphs: [
            "Interlock driveways significantly improve the appearance of your home. With a wide range of colors, patterns, and designs available, you can create a custom look that enhances your property and sets it apart from standard asphalt driveways.",
          ],
        },
        {
          heading: "A smart investment for Ottawa homes",
          paragraphs: [
            "Choosing interlock installation in Ottawa is a long term investment that adds value, durability, and visual appeal. With proper installation and maintenance, an interlock driveway can last for decades.",
            "The key is getting the base right from the start. A properly built base is what separates an interlock driveway that lasts 25 years from one that needs repairs in three.",
          ],
        },
      ],
      outroCta:
        "Thinking about replacing your driveway with interlock? Call us and we will walk you through the process, timeline, and cost. Free quote.",
    },
    relatedServices: ["interlock-installation", "interlock-repair"],
  },
  {
    slug: "interlock-services-ottawa-complete-guide-2026",
    title: `Interlock Services in ${city}: Complete Guide for Homeowners (2026)`,
    description:
      "Everything Ottawa homeowners need to know about interlock services in 2026: installation, repair, maintenance, costs, and how to choose the right contractor.",
    datePublished: "2026-05-25",
    dateModified: "2026-06-10",
    category: "Interlock",
    tags: ["interlock ottawa", "interlock guide", "ottawa contractor", "interlock services 2026"],
    cover: {
      src: "/images/workexample/work1done.jpeg",
      alt: "Stoneworks Interlock completed Ottawa project",
    },
    content: {
      intro: [
        "If you are a homeowner looking to upgrade your outdoor space, interlock is one of the best investments you can make. From driveways to patios and walkways, interlock adds durability, value, and curb appeal to your property.",
        "This guide covers everything you need to know about interlock services in Ottawa, including the types of services available, areas we serve, what causes failure, the best time to install, and how to choose the right contractor.",
      ],
      sections: [
        {
          heading: "What is interlock and why is it popular in Ottawa?",
          paragraphs: [
            "Interlock, also known as interlocking pavers, is a system of paving stones designed to fit together tightly, creating a strong and flexible surface. Unlike concrete or asphalt, interlock can handle Ottawa's harsh winters without cracking as easily.",
          ],
          bullets: [
            "Long lifespan of 20 to 30 plus years with proper care",
            "Easy repairs by replacing individual stones",
            "Adds measurable property value",
            "Wide range of custom designs and colors",
          ],
        },
        {
          heading: "Interlock services we offer in Ottawa",
          paragraphs: [
            "We provide the full range of interlock installation, repair, and maintenance services across Ottawa and surrounding areas.",
          ],
          bullets: [
            "Interlock driveway installation built for heavy vehicles and Ottawa weather",
            "Patio installation for backyard living and entertaining",
            "Walkways, front entrances, and side paths",
            "Interlock repair and leveling for sinking or uneven pavers",
            "Pressure washing, resanding, and sealing for restoration",
            "Retaining walls, staircases, and outdoor features",
          ],
        },
        {
          heading: "Areas we serve in Ottawa",
          paragraphs: [
            "We work across the National Capital Region and serve homeowners throughout Ottawa and surrounding communities.",
          ],
          bullets: [
            "Nepean, Kanata, Orleans, Barrhaven",
            "Gloucester, Stittsville, Vanier, Alta Vista",
            "Westboro, Rockcliffe Park, Manotick, Gatineau",
          ],
        },
        {
          heading: "Why interlock fails and how to avoid it",
          paragraphs: [
            "Many homeowners experience problems because of improper installation. The surface can look fine on day one but fail within a few seasons if the base work was not done correctly.",
          ],
          bullets: [
            "Sinking pavers caused by inadequate base depth",
            "Weed growth from incomplete joint sand coverage",
            "Water pooling from incorrect slope and drainage",
            "Shifting surfaces from missing or failed edge restraints",
          ],
        },
        {
          heading: "Best time to install interlock in Ottawa",
          paragraphs: [
            "The ideal season for interlock installation is spring through early fall, roughly April to October. This allows proper base compaction and avoids freezing conditions that prevent materials from setting correctly.",
            "Booking early in the season is important since quality contractors fill up quickly once warmer weather arrives.",
          ],
        },
        {
          heading: "How to choose the right interlock contractor",
          paragraphs: [
            "Not all contractors deliver the same quality. Knowing what to look for protects your investment and avoids expensive problems later.",
          ],
          bullets: [
            "Proven experience completing projects in Ottawa",
            "Portfolio of past projects you can review",
            "Clear pricing with a written quote and scope",
            "Warranty on workmanship",
            "Good local reviews and references",
          ],
        },
      ],
      outroCta:
        "Ready to start your project in Ottawa? Contact Stoneworks Interlock for a free quote. We serve Nepean, Kanata, Orleans, Barrhaven, and the entire Ottawa region.",
    },
    relatedServices: [
      "interlock-installation",
      "patio-installation",
      "interlock-repair",
      "pressure-washing-resanding",
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

