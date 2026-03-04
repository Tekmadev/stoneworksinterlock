import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${BUSINESS.name}. Read the terms governing your use of our website and services.`,
  path: "/terms/",
});

export default function TermsPage() {
  const lastUpdated = "January 23, 2026";

  return (
    <div>
      <Section className="pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-zinc-500">Last updated: {lastUpdated}</p>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            Please read these Terms of Service (&quot;Terms&quot;) carefully before using the
            website operated by {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;). By accessing or using our website at{" "}
            <Link href="/" className="font-medium text-accent hover:text-zinc-950">
              {BUSINESS.siteUrl.replace("https://", "")}
            </Link>
            , you agree to be bound by these Terms.
          </p>

          <div className="mt-10 space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                1. Services Overview
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  {BUSINESS.name} provides interlock, hardscaping, and related outdoor services in
                  the {BUSINESS.primaryCity} area. Our website allows you to learn about our
                  services, view project examples, read helpful articles, and request a free quote.
                </p>
                <p className="mt-3">
                  All services provided by {BUSINESS.name} are subject to a separate service
                  agreement or written estimate provided before work begins. These Terms govern only
                  your use of this website.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                2. Use of Website
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>By using our website, you agree to:</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>Use the website only for lawful purposes</li>
                  <li>Provide accurate and complete information when submitting forms</li>
                  <li>
                    Not attempt to interfere with, compromise, or disrupt the website or its servers
                  </li>
                  <li>Not use automated systems (bots, scrapers) to access the website without permission</li>
                  <li>Not impersonate any person or entity</li>
                </ul>
                <p className="mt-3">
                  We reserve the right to restrict or terminate access to the website at any time
                  without notice if we believe these Terms have been violated.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                3. Quotes &amp; Estimates
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  Requesting a quote through our website is free and does not obligate you to
                  purchase any services. All quotes and estimates are:
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>Based on the information you provide and a site assessment</li>
                  <li>Subject to change based on actual site conditions</li>
                  <li>Valid for a limited time as specified in the written estimate</li>
                  <li>Non-binding until a formal service agreement is signed by both parties</li>
                </ul>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                4. Intellectual Property
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  All content on this website, including text, images, logos, graphics, design
                  elements, and code, is the property of {BUSINESS.name} or our licensors and is
                  protected by Canadian copyright and intellectual property laws.
                </p>
                <p className="mt-3">
                  You may not reproduce, distribute, modify, or create derivative works from any
                  content on this website without our prior written consent. You may share links to
                  our pages for non-commercial purposes.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                5. User-Submitted Content
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  When you submit information through our contact form (including photos, project
                  descriptions, and messages), you grant {BUSINESS.name} a non-exclusive right to
                  use that information for the purpose of evaluating and responding to your inquiry.
                </p>
                <p className="mt-3">
                  You are responsible for ensuring you have the right to share any content you
                  submit. Do not upload images or content that infringe on others&apos; rights.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                6. Disclaimer of Warranties
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  This website is provided on an &quot;as is&quot; and &quot;as available&quot;
                  basis. We make no warranties, expressed or implied, regarding:
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>The accuracy, completeness, or reliability of website content</li>
                  <li>Uninterrupted or error-free operation of the website</li>
                  <li>The results of any services described on the website</li>
                </ul>
                <p className="mt-3">
                  Project photos and descriptions on this website are for illustrative purposes.
                  Actual results may vary depending on site conditions, materials, and project scope.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                7. Limitation of Liability
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  To the fullest extent permitted by applicable law, {BUSINESS.name} shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages
                  arising from your use of this website or inability to access it. Our total
                  liability for any claim related to this website shall not exceed CAD $100.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                8. Third-Party Links
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  Our website may contain links to third-party websites or services (e.g., Google
                  Maps, social media). We are not responsible for the content, privacy practices, or
                  availability of those external sites. Visiting third-party links is at your own
                  risk.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                9. Governing Law
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the
                  Province of Ontario and the federal laws of Canada applicable therein. Any disputes
                  arising from these Terms shall be subject to the exclusive jurisdiction of the
                  courts of Ontario.
                </p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                10. Changes to These Terms
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  We reserve the right to update or modify these Terms at any time. Changes take
                  effect immediately upon posting to this page. The &quot;Last updated&quot; date
                  above reflects the most recent revision. Continued use of the website after
                  changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                11. Contact Us
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>
                    <strong>Business:</strong> {BUSINESS.name}
                  </li>
                  {BUSINESS.email && (
                    <li>
                      <strong>Email:</strong>{" "}
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="text-accent hover:text-zinc-950"
                      >
                        {BUSINESS.email}
                      </a>
                    </li>
                  )}
                  <li>
                    <strong>Phone:</strong> {BUSINESS.phone}
                  </li>
                  {BUSINESS.address && (
                    <li>
                      <strong>Address:</strong>{" "}
                      {[
                        BUSINESS.address.street,
                        BUSINESS.address.city,
                        BUSINESS.address.region,
                        BUSINESS.address.postalCode,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-12 border-t border-zinc-200 pt-6">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/privacy/"
                className="font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact/"
                className="font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
