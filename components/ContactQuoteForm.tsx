"use client";

import { useSearchParams } from "next/navigation";
import { SERVICES, type ServiceSlug } from "@/data/services";
import { QuoteForm } from "@/components/QuoteForm";

function isServiceSlug(value: string | null): value is ServiceSlug {
  return value !== null && SERVICES.some((s) => s.slug === value);
}

export function ContactQuoteForm() {
  const searchParams = useSearchParams();

  const urlService = searchParams.get("service");
  const urlPostalRaw = (searchParams.get("postal") ?? "").trim();
  const urlPostalFormatted =
    urlPostalRaw.length <= 3
      ? urlPostalRaw.toUpperCase().replace(/[^A-Z0-9]/g, "")
      : `${urlPostalRaw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 3)} ${urlPostalRaw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(3, 6)}`.trim();
  const hasValidUrlService = isServiceSlug(urlService);
  const hasUrlPostal = urlPostalFormatted.length >= 6;

  const initial =
    hasValidUrlService || hasUrlPostal
      ? {
          serviceSelected: (hasValidUrlService ? urlService! : undefined) as
            | ServiceSlug
            | undefined,
          postalCode: hasUrlPostal ? urlPostalFormatted : undefined,
        }
      : undefined;

  return <QuoteForm variant="full" initial={initial} />;
}
