import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Framed from "@/components/Framed";
import Closing from "@/components/Closing";
import { ArrowIcon } from "@/components/Icons";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "The story of LINGGA YOGA by The Jungle Pots in Pakuseba, Taro Village: sacred land, Bali Mula tradition and a retreat guided by the local community.",
  alternates: { canonical: "/about" },
};

// Specific figures from the original page ("7-meter" Lingga Yoni, "70% preserved forest")
// are left out until the owner confirms them (08 · A13).
const pillars = [
  { word: "Balance", text: "between the physical and the spiritual" },
  { word: "Simplicity", text: "embracing peace in nature and daily ritual" },
  { word: "Authenticity", text: "honouring culture through sincere, mindful experiences" },
];

const mission = [
  "Restore inner balance and clarity for each guest",
  "Preserve and uplift the sacred Bali Mula traditions",
  "Foster a meaningful relationship between guests and the local community",
  "Create a sustainable, heart-led retreat that supports people, culture and the environment",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="about-lingga"
        alt="The Lingga Yoni monument at the centre of a circular stone courtyard"
        title="A sacred space for balance, culture and connection"
        lead="Where ancient Balinese wisdom meets the healing power of nature."
      />

      <Section tone="cream" next="deep">
        <div className={`container ${styles.story}`}>
          <h2 className={styles.storyTitle} data-reveal>
            A story rooted in sacred land
          </h2>
          <div className={styles.storyText} data-reveal>
            <p className="lead">
              Our sanctuary is in Pakuseba, a traditional hamlet within Taro Village long known for its strong spiritual
              energy, and closely connected to the holy journey of Maha Rsi Agung Markandya, the sage credited with
              planting the spiritual seeds of Balinese Hinduism.
            </p>
            <p>
              According to local tradition, after placing the sacred Panca Datu at Besakih Temple, Rsi Markandya
              searched for a place for his followers to settle. In a dense forest alive with sacred energy he
              established a pasraman (spiritual hermitage), built temples and sent his followers to find water.
            </p>
            <p>
              When his disciples descended a steep ravine and found a powerful spring, they returned with the joyful cry
              “Paek Suba!” (“It’s near!”). That moment gave Pakuseba its name, and a sacred geography that still blesses
              the land today.
            </p>
            <p>
              Upon this land we built LINGGA YOGA, a retreat for spiritual restoration as much as relaxation. At its
              centre stands the Lingga Yoni, a towering symbol of the balance of divine masculine and feminine energies,
              the union of heaven and earth, and the cycle of creation and renewal.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream">
        <div className={`container ${styles.community}`}>
          <Framed
            className={styles.communityA}
            name="about-tradition"
            alt="Villagers gathered for a ceremony on the lawn under colourful umbrellas"
            sizes="(min-width: 960px) 28vw, 46vw"
            shape="arch"
            ratio="3 / 4"
            blob="bl"
          />
          <Framed
            className={styles.communityB}
            name="about-offering"
            alt="Offerings laid on a chequered cloth beneath bamboo"
            sizes="(min-width: 960px) 22vw, 46vw"
            shape="arch"
            ratio="3 / 4"
          />
          <div className={`stack ${styles.communityText}`} data-reveal>
            <h2>Community & tradition</h2>
            <p className="lead">
              Our retreat is an extension of the Banjar Pakuseba community. Every ceremony, ritual and cultural activity
              is guided by Bali Mula traditions, passed down through generations.
            </p>
            <p className="muted">
              We work with local elders, artisans and spiritual leaders so that every experience reflects true Balinese
              wisdom. Guests are invited to take part in Megibung communal meals, village ceremonies and temple
              rituals, supporting the spiritual life of the village.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="cream" next="deep">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Our philosophy</h2>
            <p className="lead">
              True healing comes from harmony between body and soul, self and nature, the individual and the community.
            </p>
          </div>
          <ul className={styles.pillars}>
            {pillars.map((p) => (
              <li key={p.word} data-reveal>
                <span className={styles.pillarWord}>{p.word}</span>
                <span className="muted">{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="deep" next="cream">
        <div className={`container ${styles.mission}`}>
          <div className="stack" data-reveal>
            <h2>Our mission</h2>
            <p className="lead">
              To be Bali’s leading sanctuary for spiritual tourism, offering deeply rooted, culturally respectful and
              soul-nourishing experiences.
            </p>
            <ul className="ruled-list">
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <Link prefetch={false} className="text-link" href="/experiences">
              Explore our experiences <ArrowIcon />
            </Link>
          </div>
          <Framed
            className={styles.missionImage}
            name="about-community"
            alt="Guests and the retreat team gathered together in the shala"
            sizes="(min-width: 960px) 52vw, 90vw"
            shape="pebble-wide"
            ratio="3 / 2"
            blob="br"
          />
        </div>
      </Section>

      <Closing
        title="Your journey starts here"
        text="Every soul deserves stillness, healing and harmony. Let us help you find yours."
        message="Hello, I would like to know more about The Jungle Pots."
        secondary={
          <Link prefetch={false} className="btn btn-outline" href="/contact">
            Contact us
          </Link>
        }
      />
    </>
  );
}
