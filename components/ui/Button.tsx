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
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[color:var(--accent)] text-black hover:bg-[color:color-mix(in_oklab,var(--accent)_88%,white)]",
    secondary:
      "bg-white text-[color:var(--foreground)] hover:bg-zinc-50 border border-zinc-200",
    ghost: "text-[color:var(--foreground)] hover:bg-zinc-100",
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
    return (
      <Link className={cls} href={href} target={target} rel={rel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}


