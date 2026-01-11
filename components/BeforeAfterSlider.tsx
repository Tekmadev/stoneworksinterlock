"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt,
  className,
}: {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  className?: string;
}) {
  const id = useId();
  const [value, setValue] = useState(55);

  return (
    <div className={cn("rounded-3xl border border-zinc-200 bg-white p-3 shadow-sm shadow-black/5", className)}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
        <Image
          src={beforeSrc}
          alt={`${alt} (before)`}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-cover opacity-90"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={afterSrc}
            alt={`${alt} (after)`}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover opacity-95"
          />
        </div>

        <div className="absolute inset-x-0 bottom-4 px-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
              Before
            </span>
            <span className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
              After
            </span>
          </div>
        </div>

        <div
          className="absolute inset-y-0"
          style={{ left: `${value}%`, transform: "translateX(-1px)" }}
        >
          <div className="h-full w-[2px] bg-white/90" />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white/60 backdrop-blur" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={id} className="sr-only">
          Before and after slider
        </label>
        <input
          id={id}
          type="range"
          min={10}
          max={90}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-[color:var(--accent)]"
        />
      </div>
    </div>
  );
}


