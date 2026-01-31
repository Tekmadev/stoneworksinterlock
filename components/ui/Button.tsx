import Link from "next/link";
import { cn } from "@/lib/cn";

type Common = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    target?: undefined;
    rel?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { className, variant = "primary", size = "md" } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-accent text-black shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] hover:brightness-105 active:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] active:brightness-95",
    secondary:
      "bg-white text-foreground hover:bg-zinc-50 border border-zinc-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]",
    ghost: "text-foreground hover:bg-zinc-100",
  };

  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const cls = cn(base, variants[variant], sizes[size], className);

  const isLink = (p: ButtonProps): p is ButtonAsLink => typeof (p as ButtonAsLink).href === "string";

  if (isLink(props)) {
    const { href, target, rel, onClick, children } = props;
    const style = variant === "primary" 
      ? { backgroundColor: "var(--accent, #c9a13b)" } 
      : undefined;
    return (
      <Link className={cls} href={href} target={target} rel={rel} onClick={onClick} style={style}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  
  // Add inline background for primary variant as fallback
  const style = variant === "primary" 
    ? { backgroundColor: "var(--accent, #c9a13b)" } 
    : undefined;
  
  return (
    <button className={cls} style={style} {...rest}>
      {children}
    </button>
  );
}


