import { cn } from "@/lib/cn";

type BadgeProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm shadow-black/5",
        className,
      )}
    >
      {children}
    </span>
  );
}


