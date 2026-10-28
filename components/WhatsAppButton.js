import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton({ message, children = "Book on WhatsApp", variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
      <WhatsAppIcon />
      {children}
      <span className="visually-hidden"> (opens WhatsApp in a new tab)</span>
    </a>
  );
}
