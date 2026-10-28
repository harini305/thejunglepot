"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, WHATSAPP_DISPLAY, EMAIL, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  // Solid background once the page scrolls away from the top of the hero.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll, close on Escape, and close if the viewport widens to the desktop nav.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onWide = (e) => e.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`${styles.header} ${solid || open ? styles.solid : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link prefetch={false} href="/" className={styles.logo} aria-label="The Jungle Pots, home">
          <img src="/images/logo-white.png" alt="" width="480" height="151" />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.end}>
          <a className={`btn btn-primary ${styles.book}`} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            <span>Book</span>
            <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.toggleLines} aria-hidden="true" />
            <span className={styles.toggleLabel}>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div id="site-menu" ref={panelRef} className={styles.panel} hidden={!open}>
        <nav className="container" aria-label="Menu">
          <ul className={styles.panelList}>
            <li>
              <Link prefetch={false} href="/" aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link prefetch={false} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.panelContact}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
