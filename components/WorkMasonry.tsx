"use client";

import Image from "next/image";
import type { WorkItem } from "@/data/work";
import { cn } from "@/lib/cn";

export function WorkMasonry({
  items,
  className,
}: {
  items: WorkItem[];
  className?: string;
}) {
  return (
    <div className={cn("columns-2 gap-4 sm:columns-3 lg:columns-4", className)}>
      {items.map((it) => (
        <div
          key={it.id}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-black/5"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-zinc-200 bg-white/85 p-3 backdrop-blur">
              <p className="text-xs font-semibold text-zinc-950">{it.serviceLabel}</p>
              <p className="text-xs text-zinc-600">Ottawa • {it.neighborhood}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


