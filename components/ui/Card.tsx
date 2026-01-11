import { cn } from "@/lib/cn";

type CardProps = React.PropsWithChildren<{
  className?: string;
}>;

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[color:var(--card-border)] bg-[color:var(--card)] p-6 shadow-sm shadow-black/5",
        className,
      )}
    >
      {children}
    </div>
  );
}


