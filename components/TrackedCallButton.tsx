"use client";

import { BUSINESS } from "@/config/business";
import { trackGaEvent } from "@/lib/ga";
import { Button } from "@/components/ui/Button";

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function TrackedCallButton({
  placement,
  size = "md",
  variant = "primary",
  className,
  children,
}: React.PropsWithChildren<{
  placement: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}>) {
  return (
    <Button
      href={toTelHref(BUSINESS.phone)}
      size={size}
      variant={variant}
      className={className}
      onClick={() => {
        trackGaEvent("phone_call_click", {
          placement,
          phone: BUSINESS.phone,
        });
      }}
    >
      {children}
    </Button>
  );
}

