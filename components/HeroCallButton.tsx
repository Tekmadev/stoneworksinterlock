"use client";

import { BUSINESS } from "@/config/business";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export function HeroCallButton() {
  return (
    <TrackedCallButton placement="hero" size="lg">
      Call {BUSINESS.phone}
    </TrackedCallButton>
  );
}

