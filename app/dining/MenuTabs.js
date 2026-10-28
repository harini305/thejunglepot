"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./dining.module.css";

// Food / Drinks tabs. Both panels are server-rendered; the inactive one is hidden.
// A URL hash pointing at a category (e.g. #cocktails from a legacy redirect) opens its tab.
export default function MenuTabs({ menu }) {
  const [active, setActive] = useState(menu[0].id);
  const [pending, setPending] = useState(null);
  const tabRefs = useRef([]);

  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const owner = menu.find((m) => m.id === id || m.categories.some((c) => c.id === id));
      if (!owner) return;
      setActive(owner.id);
      setPending({ id });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [menu]);

  // Scroll only after the tab holding the target has rendered and is visible.
  useEffect(() => {
    if (!pending) return;
    document.getElementById(pending.id)?.scrollIntoView();
    setPending(null);
  }, [pending, active]);

  const onKeyDown = (e, index) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + menu.length) % menu.length;
    setActive(menu[next].id);
    tabRefs.current[next]?.focus();
  };

  const current = menu.find((m) => m.id === active);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabBar}>
        <div role="tablist" aria-label="Menu sections" className={styles.tabList}>
          {menu.map((m, i) => (
            <button
              key={m.id}
              ref={(el) => (tabRefs.current[i] = el)}
              id={`tab-${m.id}`}
              role="tab"
              type="button"
              aria-selected={active === m.id}
              aria-controls={`panel-${m.id}`}
              tabIndex={active === m.id ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(m.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {m.title}
            </button>
          ))}
        </div>
        <ul className={styles.jump} aria-label={`${current.title} categories`}>
          {current.categories.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`}>{c.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {menu.map((m) => (
        <div
          key={m.id}
          id={`panel-${m.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${m.id}`}
          hidden={active !== m.id}
          className={styles.panel}
        >
          {m.categories.map((c) => (
                <section key={c.id} id={c.id} className={styles.category} aria-labelledby={`${c.id}-title`}>
                  <h3 id={`${c.id}-title`}>{c.title}</h3>
                  <ul>
                    {c.items.map((item) => (
                      <li key={item.name} className={styles.dish}>
                        <div className={styles.dishHead}>
                          <span className={styles.dishName}>{item.name}</span>
                          <span className={styles.leader} aria-hidden="true" />
                          <span className={styles.dishPrice}>{item.price}</span>
                        </div>
                        {item.text && <p className={styles.dishText}>{item.text}</p>}
                      </li>
                    ))}
                  </ul>
                </section>
          ))}
        </div>
      ))}
    </div>
  );
}
