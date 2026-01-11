import { cn } from "@/lib/cn";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-black/5",
        className,
      )}
    >
      {items.map((it) => (
        <details key={it.question} className="group p-5">
          <summary className="cursor-pointer list-none select-none text-sm font-semibold text-zinc-950">
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-xs text-zinc-500 transition-transform group-open:rotate-45">
                +
              </span>
              {it.question}
            </span>
          </summary>
          <div className="mt-3 text-sm leading-7 text-zinc-600">{it.answer}</div>
        </details>
      ))}
    </div>
  );
}


