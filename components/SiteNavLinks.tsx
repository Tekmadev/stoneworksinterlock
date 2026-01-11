"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/services/", label: "Services" },
  { href: "/locations/", label: "Locations" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
] as const;

function isActivePath(pathname: string, href: string) {
  // Normalize: treat "/services" and "/services/" the same.
  const p = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const h = href.endsWith("/") ? href : `${href}/`;
  return p === h || (h !== "/" && p.startsWith(h));
}

export function SiteNavLinks({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";

  return (
    <nav className={cn("hidden items-center gap-1 md:flex", className)}>
      {NAV_LINKS.map((l) => {
        const active = isActivePath(pathname, l.href);

        return (
          <div key={l.href} className="relative">
            <Link
              href={l.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative z-10 inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                active && "text-zinc-950",
              )}
            >
              <span className="relative">
                {l.label}
                {active ? (
                  <motion.span
                    layoutId="site-nav-active-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-zinc-900/90"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                ) : null}
              </span>
            </Link>

            <motion.span
              className="absolute inset-0 rounded-md bg-zinc-100"
              initial={false}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </div>
        );
      })}
    </nav>
  );
}



