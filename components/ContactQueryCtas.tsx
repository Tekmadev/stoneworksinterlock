"use client";

import { MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { BUSINESS } from "@/config/business";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { toWhatsAppHref } from "@/lib/format";
import { Button } from "@/components/ui/Button";

function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICES.some((s) => s.slug === value);
}

export function ContactQueryCtas() {
  const sp = useSearchParams();
  const serviceParam = sp.get("service") ?? "";
  const postalParam = sp.get("postal") ?? "";

  const initialService = isServiceSlug(serviceParam) ? serviceParam : undefined;
  const serviceName = initialService
    ? SERVICES.find((s) => s.slug === initialService)?.name
    : "Not sure yet";

  const whatsappMsg = `Hi ${BUSINESS.name}, I'd like a free quote. Service: ${serviceName}. Postal code: ${
    postalParam || "N/A"
  }.`;

  if (!BUSINESS.whatsappPhone) return null;

  return (
    <Button
      href={toWhatsAppHref(BUSINESS.whatsappPhone, whatsappMsg)}
      variant="secondary"
      className="gap-2"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </Button>
  );
}

