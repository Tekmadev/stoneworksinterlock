import type { Metadata } from "next";
import { BUSINESS } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}. Learn what we collect when you request a quote and how we use it.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <div>
      <Section className="pt-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Privacy policy
          </h1>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            This page explains what information we collect and how we use it when you contact{" "}
            {BUSINESS.name}.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          <Card className="p-6">
            <p className="text-sm font-semibold">What we collect</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              When you request a quote, we may collect your name, phone number, email, city/postal
              code, optional address, your message, and any photos you choose to upload.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold">How we use it</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We use your information to respond to your request, provide a quote, schedule work,
              and communicate about your project. We do not sell your personal information.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold">Analytics</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              We may use analytics to understand how visitors use our website (for example, which
              pages are visited or when a call button is clicked). This helps us improve the
              website.
            </p>
          </Card>

          <Card className="p-6">
            <p className="text-sm font-semibold">Contact</p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              If you have privacy questions, contact us at{" "}
              <a className="font-semibold text-accent hover:text-zinc-950" href={`mailto:${BUSINESS.email}`}>
                {BUSINESS.email}
              </a>
              .
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

