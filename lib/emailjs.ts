import emailjs from "@emailjs/browser";
import { requiredPublicEnv } from "@/lib/env";

export type QuoteLeadPayload = {
  fullName: string;
  phone: string;
  email: string;
  postalCode: string;
  city: string;
  address?: string;
  /**
   * Preformatted address line for emails (so we don't show an empty address row).
   */
  addressLine?: string;
  preferredContactMethod: string;
  /**
   * The selected service slug (e.g. "interlock-installation").
   */
  serviceSelected: string;
  /**
   * Human-friendly service name (e.g. "Interlock Installation").
   */
  serviceName?: string;
  message: string;
  /**
   * A timestamp string for the email footer/header (e.g. "2026-01-20 14:32").
   */
  submittedAt?: string;
  /**
   * Plain text (newline-separated) for the "Project Details" section, generated from filled fields only.
   */
  projectDetailsText?: string;
  // Conditional fields
  approxSqFt?: string;
  stylePreference?: string;
  timeline?: string;
  budgetRange?: string;
  issueType?: string;
  approxArea?: string;
  urgency?: string;
  lastServiceDate?: string;
  weedIssue?: string;
  petFriendly?: string;
  drainageIssues?: string;
  photoUrls?: string[];
};

export async function sendQuoteLead(payload: QuoteLeadPayload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const templateParams = {
    ...payload,
    photoUrls: payload.photoUrls?.join("\n") || "",
    photoCount: payload.photoUrls?.length ? String(payload.photoUrls.length) : "0",
  };

  return await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}


