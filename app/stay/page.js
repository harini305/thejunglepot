import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Framed from "@/components/Framed";
import Closing from "@/components/Closing";
import { ArrowIcon } from "@/components/Icons";
import styles from "./stay.module.css";

export const metadata = {
  title: "Stay at Lingga Cottage",
  description:
    "Lingga Cottage in Taro Village, Bali: nature-inspired cottages with ensuite bathrooms, Balinese breakfast, free Wi-Fi and access to the pool and wellness facilities.",
  alternates: { canonical: "/stay" },
};

// Cottage details from the original /lingga-cottage page. "Private sauna access in select
// units" is withheld until the owner confirms which units (08 · A14).
const features = [
  "Spacious bedroom with garden views",
  "Modern ensuite bathrooms",
  "Traditional Balinese design",
  "Walking distance to the yoga shala, spa and sacred river",
];

const included = [
  "Welcome drink on arrival",
  "Access to the pool and wellness facilities",
  "Daily housekeeping",
  "Complimentary traditional Balinese breakfast",
  "Free Wi-Fi in all cottages",
  "24/7 guest assistance and cultural concierge",
];

// Facility copy from the original pool, river pool and playground pages. Unconfirmed claims
// (infinity edge, candlelit/champagne service) are left out (08 · A9, A10).
const grounds = [
  {
    id: "pool",
    title: "Lingga Pool",
    text: "A tranquil pool surrounded by tropical gardens, made for both relaxation and fun: swim laps, lounge by the water, or let the children splash around.",
    points: ["Shaded lounge chairs and sunbeds", "Poolside snacks and drinks", "Changing rooms and showers", "Towel service"],
    image: "pool",
    alt: "The Lingga Pool with a white pavilion reflected in the water",
    shape: "arch",
    ratio: "4 / 5",
  },
  {
    id: "river-pool",
    title: "Romantic River Pool",
    text: "A secluded river pool under bamboo, for couples seeking intimate moments away from the crowds, with the sounds of the forest all around.",
    points: ["Private, secluded setting", "Surrounded by tropical gardens"],
    image: "river-pool",
    alt: "Stone river pools beneath a canopy of bamboo",
    shape: "pebble-alt",
    ratio: "1 / 1",
  },
  {
    id: "playground",
    title: "Playground",
    text: "A nature-inspired space for children to climb, swing, run and play, with shaded seating nearby so parents can relax within sight.",
    points: ["Recommended for ages 3–12", "Children must be supervised by an adult", "Comfortable shoes recommended"],
    image: "playground",
    alt: "A group of children walking through the gardens",
    shape: "arch",
    ratio: "4 / 5",
  },
];

export default function StayPage() {
  return (
    <>
      <PageHero
        image="stay-hero"
        alt="A cottage terrace with two chairs looking out to the forest"
        title="Lingga Cottage"
        lead="Nature-inspired cottages where sacred energy meets authentic Balinese hospitality."
      />

      <Section tone="cream" next="deep">
        <div className={`container ${styles.overview}`}>
          <div className="stack" data-reveal>
            <h2 className="title-split">
              Your home in the forest
              <span>in the highlands of Taro Village</span>
            </h2>
            <p className="lead">
              Lingga Cottage is surrounded by lush greenery, sacred bamboo forests and soothing mountain breezes.
            </p>
            <p className="muted">
              Whether you are attending a spiritual ceremony, joining a yoga retreat or simply seeking peace away from
              the noise, each cottage offers serene views, nature-inspired interiors and direct access to our wellness
              facilities.
            </p>
            <ul className={`ruled-list ${styles.features}`}>
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <aside className={`surface-deep card-deep ${styles.facts}`} aria-labelledby="stay-info" data-reveal>
            <h2 id="stay-info" className={styles.factsTitle}>
              Check-in & stay
            </h2>
            <dl className="fact-list">
              <div>
                <dt>Check-in</dt>
                <dd>2:00 PM</dd>
              </div>
              <div>
                <dt>Check-out</dt>
                <dd>11:00 AM</dd>
              </div>
              <div>
                <dt>Flexible times</dt>
                <dd>Early check-in and late check-out on request</dd>
              </div>
              <div>
                <dt>Parking</dt>
                <dd>Free on site</dd>
              </div>
              <div>
                <dt>Add during your stay</dt>
                <dd>Massage, yoga, cultural tours</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>

      <Section tone="deep" next="cream" aria-label="Cottage photographs">
        <div className={`container ${styles.gallery}`}>
          <Framed
            className={styles.gMain}
            name="cottage-bedroom"
            alt="A cottage bedroom with a stone feature wall"
            sizes="(min-width: 860px) 56vw, 92vw"
            shape="pebble-wide"
            ratio="3 / 2"
            blob="br"
          />
          <Framed
            className={styles.gSide}
            name="cottage-bathroom"
            alt="An ensuite bathroom with a round mirror and timber wardrobe"
            sizes="(min-width: 860px) 18vw, 44vw"
            shape="arch"
            ratio="3 / 4"
          />
          <Framed
            className={styles.gSide}
            name="cottage-robe"
            alt="A cotton robe hanging in a timber wardrobe"
            sizes="(min-width: 860px) 18vw, 44vw"
            shape="arch"
            ratio="3 / 4"
          />
        </div>
      </Section>

      <Section tone="cream" next="deep">
        <div className={`container ${styles.included}`}>
          <Framed
            className={styles.includedImage}
            name="cottage-towels"
            alt="Folded towels and bath amenities on a timber tray"
            sizes="(min-width: 860px) 34vw, 90vw"
            shape="pebble"
            ratio="1 / 1"
            blob="tl"
          />
          <div data-reveal>
            <h2 className={styles.includedTitle}>Included with your stay</h2>
            <ul className={styles.includedList}>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2>Around the grounds</h2>
            <p className="lead">Shared spaces for cottage guests and day visitors.</p>
          </div>
          <div className={styles.grounds}>
            {grounds.map((g) => (
              <article key={g.id} id={g.id} className={styles.ground}>
                <Framed
                  className={styles.groundImage}
                  name={g.image}
                  alt={g.alt}
                  sizes="(min-width: 860px) 36vw, 90vw"
                  shape={g.shape}
                  ratio={g.ratio}
                />
                <div className={styles.groundText} data-reveal>
                  <h3>{g.title}</h3>
                  <p className="muted">{g.text}</p>
                  <ul className="ruled-list">
                    {g.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Closing
        title="Book your stay"
        text="Send us your dates on WhatsApp or by email, or message us on Instagram. Our team will confirm availability and guide you through the booking."
        message="Hello, I would like to ask about staying at Lingga Cottage."
        secondary={
          <Link prefetch={false} className="btn btn-outline" href="/contact?subject=Lingga%20Cottage%20stay">
            Other ways to book <ArrowIcon />
          </Link>
        }
      />
    </>
  );
}
