import emailjs from "@emailjs/browser";
import { requiredPublicEnv } from "@/lib/env";

export type QuoteLeadPayload = {
  fullName: string;
  phone: string;
  email: string;
  postalCode: string;
  city: string;
  address?: string;
  preferredContactMethod: string;
  serviceSelected: string;
  message: string;
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
  const serviceId = requiredPublicEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  const templateId = requiredPublicEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
  const publicKey = requiredPublicEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

  const templateParams = {
    ...payload,
    photoUrls: payload.photoUrls?.join("\n") || "",
    photoCount: payload.photoUrls?.length ? String(payload.photoUrls.length) : "0",
  };

  return await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}


