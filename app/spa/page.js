import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Framed from "@/components/Framed";
import Closing from "@/components/Closing";
import { SPA_GROUPS, SPA_COUNT } from "@/lib/spa";
import { whatsappLink } from "@/lib/site";
import styles from "./spa.module.css";

export const metadata = {
  title: "Spa, Sauna & Jacuzzi",
  description:
    "Balinese massage, hot stone, aromatherapy, spa packages, facials and nail care at Lingga Sauna, Spa & Jacuzzi in Taro Village, Bali. Full treatment list with prices.",
  alternates: { canonical: "/spa" },
};

function bookingMessage(t) {
  return `Hello, I would like to book the ${t.name} (${t.mins} min). Preferred date and time: `;
}

export default function SpaPage() {
  return (
    <>
      <PageHero
        image="spa-hero"
        alt="A therapist massaging a guest’s shoulders beside the pool"
        title="Lingga Sauna, Spa & Jacuzzi"
        lead="Traditional Balinese therapies, sauna heat and bamboo-framed jacuzzis for deep physical and emotional relaxation."
      />

      <Section tone="cream" next="deep" aria-labelledby="treatments">
        <div className={`container ${styles.layout}`}>
          <aside className={styles.aside}>
            <div className={styles.asideInner} data-reveal>
              <h2 id="treatments">Treatments</h2>
              <p className="muted">
                {SPA_COUNT} treatments. Prices are per person in Indonesian rupiah (K = thousand).
              </p>
              <nav aria-label="Treatment groups">
                <ul className={styles.groupNav}>
                  {SPA_GROUPS.map((g) => (
                    <li key={g.id}>
                      <a href={`#${g.id}`}>
                        {g.title} <span>{g.items.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Framed
                className={styles.asideImage}
                name="spa-footbath"
                alt="A floral foot bath in a wooden bowl"
                sizes="(min-width: 960px) 24vw, 1px"
                shape="arch"
                ratio="4 / 5"
                reveal={false}
              />
            </div>
          </aside>

          <div className={styles.menu}>
            {SPA_GROUPS.map((group) => (
              <section key={group.id} id={group.id} className={styles.group} aria-labelledby={`${group.id}-title`}>
                <h3 id={`${group.id}-title`} className={styles.groupTitle}>
                  {group.title}
                </h3>
                <ul className={styles.items}>
                  {group.items.map((t) => (
                    <li key={t.slug} id={t.slug} className={styles.item}>
                      <div className={styles.itemHead}>
                        <h4>{t.name}</h4>
                        <span className={styles.leader} aria-hidden="true" />
                        <p className={styles.price}>{t.price ? `Rp ${t.price}` : "Price on request"}</p>
                      </div>
                      <div className={styles.itemBody}>
                        <p className={styles.duration}>{t.mins} minutes</p>
                        {t.text && <p className={styles.desc}>{t.text}</p>}
                        <a
                          className={styles.book}
                          href={whatsappLink(bookingMessage(t))}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.price ? "Book" : "Ask"} on WhatsApp
                          <span className="visually-hidden"> about {t.name} (opens in a new tab)</span>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" aria-labelledby="heat-water">
        <div className={`container ${styles.heat}`}>
          <div className={styles.heatText} data-reveal>
            <h2 id="heat-water">Heat and water</h2>
            <p className="lead">
              Warm up in the sauna, then rest in a jacuzzi framed by bamboo. Sauna time is also part of the Bamboo,
              Nira and Slimming packages.
            </p>
            <p className="muted">Sauna and jacuzzi prices are confirmed when you enquire.</p>
          </div>
          <Framed
            className={styles.heatA}
            name="spa-sauna"
            alt="A sauna room with timber benches and warm terracotta walls"
            sizes="(min-width: 860px) 26vw, 46vw"
            shape="arch"
            ratio="3 / 4"
            blob="br"
          />
          <Framed
            className={styles.heatB}
            name="spa-jacuzzi"
            alt="A jacuzzi pool in front of the spa pavilion among bamboo"
            sizes="(min-width: 860px) 26vw, 46vw"
            shape="arch"
            ratio="3 / 4"
          />
        </div>
      </Section>

      <Section tone="cream" next="cream" aria-label="Treatment details">
        <div className={`container ${styles.stripGrid}`}>
          <Framed name="spa-hotstone" alt="Warm stones placed along a guest’s back" sizes="(min-width: 700px) 30vw, 31vw" shape="pebble" ratio="1 / 1" />
          <Framed name="spa-herbal" alt="A therapist pressing a warm herbal pouch onto a guest’s back" sizes="(min-width: 700px) 30vw, 31vw" shape="pebble-alt" ratio="1 / 1" blob="br" />
          <Framed name="spa-massage" alt="A guest relaxing during a Balinese massage" sizes="(min-width: 700px) 30vw, 31vw" shape="pebble-wide" ratio="1 / 1" />
        </div>
      </Section>

      <Closing
        title="Book a treatment"
        text="Send us the treatment, your preferred date and time, and the number of guests. Our team will reply to confirm availability."
        message="Hello, I would like to book a spa treatment. Treatment: , Date and time: , Number of guests: "
      />
    </>
  );
}
