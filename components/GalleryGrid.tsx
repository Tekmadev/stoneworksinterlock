"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/cn";

const categories = [
  { key: "all", label: "All" },
  { key: "interlock", label: "Interlock" },
  { key: "patio", label: "Patios" },
  { key: "repair", label: "Repairs" },
  { key: "washing", label: "Washing" },
  { key: "turf", label: "Turf" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<CategoryKey>("all");
  const filtered = useMemo(() => {
    if (active === "all") return items;
    return items.filter((i) => i.category === active);
  }, [active, items]);

  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = useMemo(
    () => filtered.find((i) => i.id === openId) ?? items.find((i) => i.id === openId) ?? null,
    [filtered, items, openId],
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                isActive
                  ? "border-zinc-300 bg-white text-zinc-950"
                  : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950",
              )}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((it) => (
          <button
            key={it.id}
            type="button"
            onClick={() => setOpenId(it.id)}
            className="group mb-4 block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-sm shadow-black/5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-zinc-200 bg-white/85 p-3 backdrop-blur">
                <p className="text-sm font-semibold text-zinc-950">{it.alt}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {openItem ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50"
              onClick={() => setOpenId(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={openItem.src}
                alt={openItem.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-zinc-950">{openItem.alt}</p>
              <p className="mt-1 text-sm text-zinc-600">
                Category: <span className="capitalize">{openItem.category}</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


