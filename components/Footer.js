import Link from "next/link";
import { ADDRESS_LINES, EMAIL, MAPS_URL, NAV, SOCIAL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <Link prefetch={false} href="/" className={styles.brand} aria-label="The Jungle Pots, home">
          <img src="/images/logo-white.png" alt="" width="480" height="151" loading="lazy" />
        </Link>

        <div className={styles.visit}>
          <address>{ADDRESS_LINES.join(", ")}</address>
          <a className={styles.accent} href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </div>

        <ul className={styles.contact}>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>

        <ul className={styles.social} aria-label="Social media">
          {SOCIAL.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.base}`}>
        <nav aria-label="Footer">
          <ul className={styles.nav}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>© {new Date().getFullYear()} LINGGA YOGA by The Jungle Pots. All rights reserved.</p>
      </div>
    </footer>
  );
}
