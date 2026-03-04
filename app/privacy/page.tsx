import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${BUSINESS.name}. Learn how we collect, use, and protect your personal information.`,
  path: "/privacy/",
});

export default function PrivacyPage() {
  const lastUpdated = "January 23, 2026";

  return (
    <div>
      <Section className="pt-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-500">Last updated: {lastUpdated}</p>
          <p className="mt-4 text-sm leading-7 text-zinc-600">
            {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website{" "}
            <Link href="/" className="font-medium text-accent hover:text-zinc-950">
              {BUSINESS.siteUrl.replace("https://", "")}
            </Link>{" "}
            or contact us for a quote.
          </p>

          <div className="mt-10 space-y-10">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                1. Information We Collect
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700">
                <div>
                  <p className="font-semibold text-zinc-900">Personal information you provide</p>
                  <p>
                    When you request a quote, contact us, or subscribe to our newsletter, we may
                    collect:
                  </p>
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Mailing address, city, or postal code</li>
                    <li>Project details (service type, area size, photos you upload)</li>
                    <li>Any additional information you include in a message</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Information collected automatically</p>
                  <p>
                    When you visit our website, we may automatically collect certain technical
                    information, including:
                  </p>
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>IP address and approximate location (city-level)</li>
                    <li>Browser type, operating system, and device information</li>
                    <li>Pages visited, time spent on pages, and referring URL</li>
                    <li>Interactions such as button clicks (e.g., &quot;Call Now&quot;)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                2. How We Use Your Information
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>To respond to your quote request or inquiry</li>
                  <li>To provide, schedule, and complete the services you request</li>
                  <li>To communicate with you about your project (phone, email, or text)</li>
                  <li>To send you our newsletter if you have subscribed</li>
                  <li>
                    To improve our website, services, and customer experience through analytics
                  </li>
                  <li>To comply with legal obligations</li>
                </ul>
                <p className="mt-3 font-semibold text-zinc-900">
                  We do not sell, rent, or trade your personal information to third parties.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                3. Cookies &amp; Analytics
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-700">
                <p>
                  Our website uses cookies and similar technologies to enhance your browsing
                  experience and collect analytics data. Specifically:
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    <strong>Google Analytics (GA4):</strong> We use Google Analytics to understand how
                    visitors use our site (pages visited, time on site, button clicks). Google
                    Analytics collects data through cookies and may process it on servers in the
                    United States. For more information, see{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-zinc-950"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Firebase:</strong> We use Google Firebase for hosting, database services,
                    and newsletter management. Firebase may use cookies for functional purposes.
                  </li>
                  <li>
                    <strong>Essential cookies:</strong> Some cookies are strictly necessary for the
                    website to function (e.g., form state, session management).
                  </li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. Disabling
                  cookies may affect certain website features.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                4. Third-Party Services
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>We may share limited data with trusted third-party services to operate our business:</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>
                    <strong>EmailJS:</strong> To deliver contact form submissions to our team via
                    email. Your name, email, phone, and message content are transmitted securely.
                  </li>
                  <li>
                    <strong>Google Analytics / Firebase:</strong> For website analytics and data
                    storage as described above.
                  </li>
                  <li>
                    <strong>Hosting provider:</strong> Our website is hosted on Firebase Hosting
                    (Google Cloud infrastructure).
                  </li>
                </ul>
                <p className="mt-3">
                  These third parties are obligated to handle your data securely and only for the
                  purposes described.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                5. Data Retention
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes for which it was collected, including:
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>Quote requests and project communications: retained for up to 3 years</li>
                  <li>Newsletter subscriptions: retained until you unsubscribe</li>
                  <li>Analytics data: retained according to Google Analytics default settings (14 months)</li>
                </ul>
              </div>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                6. Data Security
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  We implement reasonable technical and organizational measures to protect your
                  personal information, including HTTPS encryption for all website traffic, secure
                  cloud infrastructure, and access controls. However, no method of transmission over
                  the internet is 100% secure.
                </p>
              </div>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                7. Your Rights
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent (e.g., unsubscribe from our newsletter)</li>
                  <li>Opt out of analytics tracking by using browser privacy settings or extensions</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </div>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                8. Children&apos;s Privacy
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not
                  knowingly collect personal information from children. If you believe a child has
                  provided us with personal information, please contact us and we will promptly
                  delete it.
                </p>
              </div>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                9. Changes to This Policy
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices or applicable laws. The &quot;Last updated&quot; date at the top of this
                  page indicates when the policy was last revised. We encourage you to review this
                  page periodically.
                </p>
              </div>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                10. Contact Us
              </h2>
              <div className="mt-4 text-sm leading-7 text-zinc-700">
                <p>
                  If you have questions or concerns about this Privacy Policy or how we handle your
                  data, please contact us:
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
                href="/terms/"
                className="font-semibold text-accent hover:text-zinc-950 hover:underline"
              >
                Terms of Service
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
