// Verified business details (docs/source-audit/content/business-info.json).
// Opening hours are intentionally omitted: the audit found two conflicting sets (08 · A3).

export const WHATSAPP_NUMBER = "6281353999958";
export const WHATSAPP_DISPLAY = "+62 813-5399-9958";
export const EMAIL = "info@thejunglepots.com";
export const INSTAGRAM_HANDLE = "@thejunglepots.bali";

export const ADDRESS_LINES = [
  "Banjar Pakuseba, Desa Taro",
  "Kecamatan Tegallalang, Kabupaten Gianyar",
  "Bali 80561, Indonesia",
];

export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=-8.3693936%2C115.2803319";

export const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/thejunglepots.bali/" },
  { label: "Facebook", href: "https://www.facebook.com/thejunglepots.bali/" },
  { label: "YouTube", href: "https://www.youtube.com/@TheJunglepots" },
  { label: "TikTok", href: "https://www.tiktok.com/@thejunglepots.bali" },
];

export const NAV = [
  { href: "/stay", label: "Stay" },
  { href: "/spa", label: "Spa" },
  { href: "/dining", label: "Dining" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink(subject, body) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${EMAIL}${query ? `?${query}` : ""}`;
}
