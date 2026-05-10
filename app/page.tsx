import type { Metadata } from "next";
import { BUSINESS } from "@/config/business";
import { SERVICES } from "@/data/services";
import { GENERAL_FAQS } from "@/data/faqs";
import {
  buildMetadata,
  faqJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  absoluteUrl,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { BrandRibbon } from "@/components/home/BrandRibbon";
import { PhasesSection } from "@/components/home/PhasesSection";
import { NumbersSection } from "@/components/home/NumbersSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AreasSection } from "@/components/home/AreasSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = buildMetadata({
  title: `${BUSINESS.name} — Ottawa Interlock, Patios & Hardscaping Built to Outlast Every Winter`,
  description: `Ottawa interlock contractor with 20+ years on the tools and 500+ finished driveways, patios, walkways and repairs. Base-first installs that hold up through Ottawa freeze and thaw. Free quote in 24 hours. Call ${BUSINESS.phone}.`,
  path: "/",
});

export default function Home() {
  const homePageGraph = {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessJsonLd(),
      ...SERVICES.map((s) =>
        serviceJsonLd({
          name: `${s.name} in ${BUSINESS.primaryCity}`,
          description: s.seo.description,
          url: absoluteUrl(`/services/${s.slug}/`),
          areaServed: BUSINESS.serviceAreas,
        }),
      ),
      faqJsonLd(GENERAL_FAQS),
    ],
  };

  return (
    <>
      <JsonLd data={homePageGraph} />
      <Hero />
      <BrandRibbon />
      <PhasesSection />
      <NumbersSection />
      <ProcessSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <AreasSection />
      <HomeFaqSection />
      <CtaSection />
    </>
  );
}
