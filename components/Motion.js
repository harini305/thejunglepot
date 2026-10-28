"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const headerHeight = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 80;

// Page-level motion: hero entrance, section reveals, a light image drift and pinned
// columns ([data-pin] inside [data-pin-wrap]). Content is fully visible without
// JavaScript; reveals and the hero drift are skipped under reduced motion.
export default function Motion() {
  const pathname = usePathname();

  // Smooth scrolling for same-page section links. Done in script rather than with CSS
  // `scroll-behavior: smooth`, which breaks ScrollTrigger's position measurements.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const id = decodeURIComponent(link.getAttribute("href").slice(1));
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
      // keep keyboard focus with the destination (e.g. the skip-to-content link)
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const heroMedia = document.querySelector("[data-hero-media] img");
      const heroItems = gsap.utils.toArray("[data-hero-item]");

      if (heroMedia) {
        gsap.fromTo(heroMedia, { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power2.out" });
        gsap.to(heroMedia, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
        });
      }
      if (heroItems.length) {
        gsap.from(heroItems, { y: 28, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.15 });
      }

      // Reveal as soon as any part of the block enters the screen, so nothing that is
      // already visible waits for a scroll before appearing.
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top bottom", once: true },
        });
      });
    });

    // Pin a column while its neighbour scrolls past (two-column layouts on wide screens).
    mm.add("(min-width: 960px)", () => {
      gsap.utils.toArray("[data-pin]").forEach((el) => {
        const wrap = el.closest("[data-pin-wrap]");
        if (!wrap) return;
        ScrollTrigger.create({
          trigger: wrap,
          pin: el,
          pinSpacing: false,
          start: () => `top top+=${headerHeight() + 32}`,
          end: () => `+=${Math.max(0, wrap.offsetHeight - el.offsetHeight)}`,
          invalidateOnRefresh: true,
        });
      });
    });

    // Whenever the page content changes height (images, fonts, accordions, menu tabs),
    // re-measure every trigger so reveals and pins fire at the right scroll position.
    let timer;
    const refresh = () => {
      clearTimeout(timer);
      timer = setTimeout(() => ScrollTrigger.refresh(), 120);
    };
    const main = document.getElementById("main");
    let lastHeight = main?.offsetHeight;
    const observer = new ResizeObserver(() => {
      const h = main.offsetHeight;
      if (h !== lastHeight) {
        lastHeight = h;
        refresh();
      }
    });
    if (main) observer.observe(main);
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    refresh();

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
