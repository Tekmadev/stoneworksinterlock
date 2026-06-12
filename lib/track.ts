import { trackGaEvent, type GaEventParams } from "@/lib/ga";
import { saveClickEvent } from "@/lib/firebase";

export function trackClick(event: string, placement: string, extra?: GaEventParams) {
  trackGaEvent(event, { placement, ...extra });
  saveClickEvent(event, placement);
}
