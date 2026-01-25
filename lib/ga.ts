declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaEventParams = Record<string, string | number | boolean | undefined>;

export function trackGaEvent(eventName: string, params?: GaEventParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, {
    ...params,
    transport_type: "beacon",
  });
}

