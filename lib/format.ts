export function toTelHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function toWhatsAppHref(phone: string, message?: string) {
  const digits = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export function titleCase(input: string) {
  return input
    .trim()
    .split(/\s+/)
    .map((w) => (w ? w[0]?.toUpperCase() + w.slice(1) : w))
    .join(" ");
}
