import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Framed from "@/components/Framed";
import Closing from "@/components/Closing";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MENU, MENU_COUNT } from "@/lib/menu";
import MenuTabs from "./MenuTabs";
import styles from "./dining.module.css";

export const metadata = {
  title: "Restaurant & Bar Menu",
  description:
    "The full menu of Lingga Restaurant & Bar in Taro Village, Bali: breakfast, starters, salads, mains, desserts, cocktails, juices and coffee.",
  alternates: { canonical: "/dining" },
};

const TABLE_MESSAGE = "Hello, I would like to book a table at Lingga Restaurant & Bar. Date and time: , Number of guests: ";

// Opening hours and dietary claims are omitted until the owner confirms them (08 · A3, A12).
export default function DiningPage() {
  return (
    <>
      <PageHero
        image="dining-hero"
        alt="The restaurant dining room with long tables, bamboo walls and rattan lamps"
        title="Lingga Restaurant & Bar"
        lead="A culinary journey through earth and spirit, in a setting surrounded by nature’s calm."
      />

      <Section tone="cream" next="deep">
        <div className={`container ${styles.intro}`}>
          <div className={styles.introText} data-reveal>
            <h2 className="title-split">
              Flavours of Bali
              <span>and beyond</span>
            </h2>
            <p className="lead">
              A menu of Balinese, Asian and Western dishes made with fresh, local ingredients. Start the day with a
              nourishing breakfast, stay for lunch, or relax with a drink at the bar.
            </p>
            <div className="actions">
              <WhatsAppButton message={TABLE_MESSAGE}>Book a table</WhatsAppButton>
              <a className="btn btn-outline" href="/fnb-pricelist.pdf" target="_blank" rel="noopener">
                Printed menu (PDF)
              </a>
            </div>
          </div>
          <div className={styles.introMedia}>
            <Framed
              name="dining-floating"
              alt="A floating breakfast tray in the pool"
              sizes="(min-width: 960px) 22vw, 44vw"
              shape="arch"
              ratio="3 / 4"
              blob="tr"
            />
            <Framed
              name="dining-spread"
              alt="A table of pastries, fruit and fresh juices"
              sizes="(min-width: 960px) 22vw, 44vw"
              shape="arch"
              ratio="3 / 4"
            />
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" id="menu" aria-labelledby="menu-title">
        <div className="container">
          <div className={styles.menuHead} data-reveal>
            <div className={styles.menuIntro}>
              <h2 id="menu-title">The menu</h2>
              <p className="muted">
                {MENU_COUNT} dishes and drinks. Prices in Indonesian rupiah, thousands (40K = Rp 40,000).
              </p>
            </div>
            <ul className={styles.plates} aria-label="Dishes from the kitchen">
              {["dish-1", "dish-2", "dish-3"].map((d) => (
                <li key={d}>
                  <img src={`/images/${d}.webp`} alt="A plated dish from the Lingga kitchen" width="640" height="640" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
          <MenuTabs menu={MENU} />
        </div>
      </Section>

      <Closing
        title="Book a table"
        text="Let us know the day, time and number of guests, and we will confirm your table."
        message={TABLE_MESSAGE}
      />
    </>
  );
}
