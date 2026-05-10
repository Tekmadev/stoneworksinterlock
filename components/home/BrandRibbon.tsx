import { homeCopy } from "@/data/home-copy";

export function BrandRibbon() {
  const items = homeCopy.brandRibbon;
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden border-y border-onyx-10 py-6 md:py-8 bg-canvas-soft"
    >
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center px-6 md:px-10"
          >
            <span
              className="font-display italic text-onyx tracking-[-0.02em] leading-none"
              style={{ fontSize: "clamp(28px, 3.5vw, 56px)" }}
            >
              {item}
            </span>
            <span
              aria-hidden
              className="ml-8 md:ml-14 inline-block h-1.5 w-1.5 rounded-full bg-copper"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
