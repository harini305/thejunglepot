import Link from "next/link";
import Photo from "@/components/Photo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowIcon } from "@/components/Icons";
import { SPA_GROUPS, SPA_COUNT } from "@/lib/spa";
import styles from "./home.module.css";

export const metadata = {
  title: { absolute: "LINGGA YOGA by The Jungle Pots — Retreat in Taro Village, Bali" },
  alternates: { canonical: "/" },
};

const featuredSpa = ["jungle-pots-balinese-massage", "jungle-pots-hot-stone", "jungle-pots-aromatherapy-massage", "jungle-pots-bamboo-package"];
const spaItems = SPA_GROUPS.flatMap((g) => g.items).filter((t) => featuredSpa.includes(t.slug));

// Glass cards in the hero: verified facts from the schedule and service pages.
const heroCards = [
  { href: "/experiences#yoga", title: "Yoga Shala", text: "Morning Yoga daily, 09:00 – 10:00" },
  { href: "/experiences#holly-place", title: "Holly Place", text: "Melukat water purification at five sacred spouts" },
  { href: "/spa", title: "Spa & sauna", text: `${SPA_COUNT} traditional Balinese treatments` },
];

const experiences = [
  { id: "yoga", title: "Yoga Shala", text: "Open-air yoga, meditation and soul healing among the bamboo.", image: "home-yoga", alt: "A guest lying among singing bowls during a sound healing session" },
  { id: "holly-place", title: "Holly Place", text: "Melukat water purification at five sacred spouts.", image: "home-holly", alt: "A priest guiding guests through a water blessing at the sacred spouts" },
  { id: "cooking", title: "Cooking Class", text: "Balinese recipes and the meaning behind each dish.", image: "home-cooking", alt: "Guests presenting the dishes they prepared in the cooking class" },
  { id: "trekking", title: "Lingga Trekking", text: "Guided walks through bamboo forest and village paths.", image: "home-trekking", alt: "A group of trekkers walking a forest path with their guide" },
];

// Curved edge joining one section to the next, with a terracotta line along the curve.
function Curve({ to, flip = false }) {
  const d = flip
    ? "M0,40 C360,120 1080,0 1440,70 L1440,120 L0,120 Z"
    : "M0,70 C360,0 1080,120 1440,40 L1440,120 L0,120 Z";
  const line = flip ? "M0,40 C360,120 1080,0 1440,70" : "M0,70 C360,0 1080,120 1440,40";
  return (
    <svg className={styles.curve} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill={`var(--j-${to})`} />
      <path d={line} fill="none" className={styles.curveLine} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={`hero hero-full on-image ${styles.hero}`} data-hero>
        <div className="hero-media" data-hero-media>
          <Photo name="home-hero" alt="The Lingga Yoga entrance with the Lingga Yoni among tall palms and jungle" sizes="100vw" priority />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle} data-hero-item>
              Breathe, heal
              <br />& awaken
            </h1>
            <p className={styles.heroLead} data-hero-item>
              A forest sanctuary in Taro Village, Bali, for yoga, sacred ritual, rest and Balinese culture.
            </p>
            <div className="actions" data-hero-item>
              <WhatsAppButton message="Hello, I would like to plan a visit to The Jungle Pots." />
              <Link prefetch={false} className="btn btn-outline" href="/experiences">
                Explore experiences
              </Link>
            </div>
          </div>
          <ul className={styles.glassCards}>
            {heroCards.map((c) => (
              <li key={c.href} data-hero-item>
                <Link prefetch={false} href={c.href} className={styles.glass}>
                  <span className={styles.glassTitle}>{c.title}</span>
                  <span className={styles.glassText}>{c.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Curve to="cream" />
      </section>

      <section className={`${styles.section} ${styles.cream}`}>
        <div className={`container ${styles.intro}`}>
          <div className={styles.introText} data-reveal>
            <h2 className={styles.title}>
              LINGGA YOGA
              <span>by The Jungle Pots</span>
            </h2>
            <p className={styles.lead}>
              Nestled in the heart of Bali’s spiritual highlands, we are a sanctuary for healing, connection, and
              self-discovery. Rooted in the sacred traditions of Bali Mula, our retreat invites you to reconnect with
              yourself through nature, ritual, and stillness.
            </p>
            <p className={styles.body}>
              Every moment is crafted with meaning: yoga, soul healing, Melukat (water purification), traditional
              ceremonies, and temple journeys (Tirtayatra), guided by the symbol of the Lingga Yoni.
            </p>
            <Link prefetch={false} className={styles.link} href="/about">
              Read our story <ArrowIcon />
            </Link>
          </div>
          <div className={styles.introMedia} data-reveal>
            <div className={`${styles.frame} ${styles.pebble}`}>
              <div className={`${styles.shape} ${styles.pebble}`}>
                <Photo name="home-intro" alt="A guest in prayer at an offering place in the forest" sizes="(min-width: 860px) 42vw, 90vw" />
              </div>
            </div>
          </div>
        </div>
        <Curve to="deep" flip />
      </section>

      <section className={`${styles.section} ${styles.deep}`}>
        <div className={`container ${styles.stay}`}>
          <div className={styles.stayMedia} data-reveal>
            <div className={`${styles.frame} ${styles.arch}`}>
              <div className={`${styles.shape} ${styles.arch}`}>
                <Photo name="cottage-reception" alt="Guests being welcomed at the reception pavilion" sizes="(min-width: 960px) 38vw, 90vw" />
              </div>
            </div>
          </div>
          <div className={styles.stayText} data-reveal>
            <h2 className={styles.title}>Your home in the forest</h2>
            <p className={styles.lead}>
              Lingga Cottage sits in the highlands of Taro Village among sacred bamboo forest, blending traditional
              Balinese charm with natural elegance.
            </p>
            <dl className={styles.facts}>
              <div>
                <dt>Check-in</dt>
                <dd>2:00 PM</dd>
              </div>
              <div>
                <dt>Check-out</dt>
                <dd>11:00 AM</dd>
              </div>
              <div>
                <dt>Breakfast</dt>
                <dd>Traditional Balinese, included</dd>
              </div>
            </dl>
            <Link prefetch={false} className="btn btn-primary" href="/stay">
              Explore the stay <ArrowIcon />
            </Link>
          </div>
        </div>
        <Curve to="cream" />
      </section>

      <section className={`${styles.section} ${styles.cream}`}>
        <div className={`container ${styles.spa}`}>
          <div className={styles.spaMedia} data-reveal>
            <div className={`${styles.frame} ${styles.pebbleAlt}`}>
              <div className={`${styles.shape} ${styles.pebbleAlt}`}>
                <Photo name="home-spa" alt="A guest relaxing during a massage" sizes="(min-width: 860px) 38vw, 90vw" />
              </div>
            </div>
          </div>
          <div className={styles.spaText} data-reveal>
            <h2 className={styles.title}>Spa, sauna & jacuzzi</h2>
            <p className={styles.lead}>
              Traditional Balinese therapies, sauna heat and bamboo-framed jacuzzis, in a quiet wellness space under the
              trees.
            </p>
            <ul className={styles.prices}>
              {spaItems.map((t) => (
                <li key={t.slug}>
                  <Link prefetch={false} href={`/spa#${t.slug}`}>
                    <span className={styles.priceName}>{t.name}</span>
                    <span className={styles.priceDots} aria-hidden="true" />
                    <span className={styles.priceMeta}>
                      {t.mins} min <strong>Rp {t.price}</strong>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className={styles.note}>Prices per person in Indonesian rupiah (K = thousand).</p>
            <Link prefetch={false} className={styles.link} href="/spa">
              See all {SPA_COUNT} treatments <ArrowIcon />
            </Link>
          </div>
        </div>
        <Curve to="deep" flip />
      </section>

      <section className={`${styles.section} ${styles.deep}`}>
        <div className="container">
          <div className={styles.ritualsHead} data-reveal>
            <h2 className={styles.title}>Rituals, culture and forest trails</h2>
            <Link prefetch={false} className={styles.link} href="/experiences">
              All experiences and the weekly schedule <ArrowIcon />
            </Link>
          </div>
        </div>
        <ul className={`container ${styles.rituals}`}>
          {experiences.map((e) => (
            <li key={e.id} data-reveal>
              <Link prefetch={false} href={`/experiences#${e.id}`} className={styles.ritual}>
                <div className={`${styles.frame} ${styles.arch}`}>
                  <div className={`${styles.shape} ${styles.arch} ${styles.ritualImage}`}>
                    <Photo name={e.image} alt={e.alt} sizes="(min-width: 1024px) 22vw, (min-width: 640px) 44vw, 70vw" />
                  </div>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Curve to="cream" />
      </section>

      <section className={`${styles.section} ${styles.cream} ${styles.last}`}>
        <div className={`container ${styles.dining}`}>
          <div className={styles.diningText} data-reveal>
            <h2 className={styles.title}>Lingga Restaurant & Bar</h2>
            <p className={styles.lead}>
              Balinese, Asian and Western dishes made with fresh, local ingredients, from breakfast to an afternoon
              drink at the bar.
            </p>
            <div className="actions">
              <Link prefetch={false} className="btn btn-primary" href="/dining">
                See the full menu <ArrowIcon />
              </Link>
              <WhatsAppButton
                variant="outline"
                message="Hello, I would like to book a table at Lingga Restaurant & Bar. Date and time: , Number of guests: "
              >
                Book a table
              </WhatsAppButton>
            </div>
          </div>
          <div className={styles.diningMedia} data-reveal>
            <div className={`${styles.frame} ${styles.pebbleWide}`}>
              <div className={`${styles.shape} ${styles.pebbleWide}`}>
                <Photo name="dining-room" alt="The open-sided restaurant with bamboo walls and rattan lamps" sizes="(min-width: 960px) 55vw, 90vw" />
              </div>
            </div>
          </div>
        </div>
        <Curve to="footer" flip />
      </section>
    </div>
  );
}
