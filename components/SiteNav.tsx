import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SiteNavLinks } from "@/components/SiteNavLinks";
import { MobileNav } from "@/components/MobileNav";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export function SiteNav({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between py-1 sm:h-20">
        <Link href="/" className="group inline-flex h-full items-center gap-3">
          <span className="relative h-full w-[220px] sm:w-[300px]">
            <Image
              src="/images/swil_logo-removebg.png"
              alt={`${BUSINESS.name} logo`}
              fill
              priority
              sizes="(min-width: 640px) 300px, 220px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        <SiteNavLinks />
        <MobileNav />

        <div className="flex items-center gap-2">
          <TrackedCallButton placement="nav" size="sm" className="gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call {BUSINESS.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </TrackedCallButton>
          <Button href="/contact/" variant="secondary" size="sm" className="hidden sm:inline-flex">
            Get Free Quote
          </Button>
        </div>
      </Container>
    </header>
  );
}


