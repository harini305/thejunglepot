import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Framed from "@/components/Framed";
import Closing from "@/components/Closing";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowIcon } from "@/components/Icons";
import { SLOTS, WEEK } from "@/lib/schedule";
import styles from "./experiences.module.css";

export const metadata = {
  title: "Experiences & Retreats",
  description:
    "Yoga, Lingga Yoni and Holly Place rituals, Balinese arts and culture, cooking class, trekking, camping and the weekly retreat schedule with prices at The Jungle Pots, Taro Village.",
  alternates: { canonical: "/experiences" },
};

const sections = [
  { id: "yoga", label: "Yoga" },
  { id: "sacred-sites", label: "Lingga Yoni & Holly Place" },
  { id: "culture", label: "Arts & culture" },
  { id: "cooking", label: "Cooking class" },
  { id: "trekking", label: "Trekking" },
  { id: "camping", label: "Camping & outbound" },
  { id: "schedule", label: "Weekly schedule" },
];

const offerings = [
  {
    title: "Traditional Balinese dance",
    text: "Watch or join dances passed down from village elders, where every gesture carries symbolic meaning.",
  },
  {
    title: "Canang & gebogan workshop",
    text: "Prepare sacred offerings such as canang sari and gebogan from natural materials, arranged with intent.",
  },
  {
    title: "Cultural ceremonies",
    text: "Take part in rituals performed by the community, from melukat water purification to communal prayer.",
  },
  {
    title: "Balinese dress",
    text: "Our team helps you wear traditional ceremonial attire for rituals, with its meaning explained.",
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image="experiences-hero"
        alt="Guests in white seated in prayer among the forest plants"
        title="Experiences & retreats"
        lead="Yoga, sacred rituals, Balinese culture and forest trails, guided by the local Banjar Pakuseba community."
      />

      <nav className="page-nav" aria-label="On this page">
        <div className="container">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Section tone="cream" next="deep" id="yoga" className="has-page-nav" aria-labelledby="yoga-title">
        <div className={`container ${styles.yoga}`}>
          <div className={styles.yogaMedia}>
            <Framed
              className={styles.yogaMain}
              name="exp-yoga"
              alt="A sound healing session with singing bowls in the Yoga Shala"
              sizes="(min-width: 960px) 46vw, 80vw"
              shape="pebble-wide"
              ratio="4 / 3"
              blob="bl"
            />
            <Framed
              className={styles.yogaSmall}
              name="exp-yoga-circle"
              alt="Guests meditating cross-legged in the shala"
              sizes="(min-width: 960px) 18vw, 30vw"
              shape="arch"
              ratio="2 / 3"
            />
          </div>
          <div className="stack" data-reveal>
            <h2 id="yoga-title">Yoga Shala & Yoga Place</h2>
            <p className="lead">
              An open-air shala surrounded by bamboo and forest air, for yoga, meditation and soul healing.
            </p>
            <p className="muted">
              Guided sessions support both beginners and experienced practitioners. Combine yoga with nourishing food,
              spa treatments and a restful stay for a complete reset.
            </p>
            <dl className="fact-list">
              <div>
                <dt>Morning Yoga</dt>
                <dd>Daily, 09:00 – 10:00 · Rp 350K</dd>
              </div>
              <div>
                <dt>Afternoon sessions</dt>
                <dd>Sound, chakra and sleep healing, pranayama, open-air yoga</dd>
              </div>
            </dl>
            <a className="text-link" href="#schedule">
              See the weekly schedule <ArrowIcon />
            </a>
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" id="sacred-sites" className="has-page-nav" aria-labelledby="sacred-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="sacred-title">Sacred sites</h2>
            <p className="lead">
              Two places on our land tied to the journey of Maha Rsi Markandya, where rituals are led by local
              spiritual leaders.
            </p>
          </div>
          <div className={styles.sites}>
            <article id="lingga-yoni" className={`${styles.site} has-page-nav`} aria-labelledby="lingga-yoni-title">
              <Framed
                name="exp-lingga-yoni"
                alt="A priest blessing a guest during a ceremony"
                sizes="(min-width: 860px) 42vw, 90vw"
                shape="pebble"
                ratio="4 / 3"
              />
              <div className="stack" data-reveal>
                <h3 id="lingga-yoni-title">Lingga Yoni</h3>
                <p className="muted">
                  A sacred symbol of creation and the union of masculine and feminine, earth and sky, revered in
                  Balinese Hindu tradition and surrounded by bamboo groves and a natural spring.
                </p>
                <ul className="ruled-list">
                  <li>Silent meditation and spiritual connection</li>
                  <li>Blessing ceremonies and ancestral offerings</li>
                  <li>Private rituals guided by spiritual leaders</li>
                  <li>Mindfulness walks around sacred energy points</li>
                </ul>
              </div>
            </article>
            <article id="holly-place" className={`${styles.site} has-page-nav`} aria-labelledby="holly-place-title">
              <Framed
                name="exp-holly-place"
                alt="A guest receiving a water blessing at the sacred spouts"
                sizes="(min-width: 860px) 42vw, 90vw"
                shape="pebble-alt"
                ratio="4 / 3"
                blob="br"
              />
              <div className="stack" data-reveal>
                <h3 id="holly-place-title">Holly Place</h3>
                <p className="muted">
                  Beside a sacred spring, five purification spouts (Pancoran Lima) are used for the traditional
                  Melukat ritual: release, cleanse and restore through water blessing and quiet reflection.
                </p>
                <ul className="ruled-list">
                  <li>Melukat water purification at five sacred spouts</li>
                  <li>Meditation guided by Balinese spiritual leaders</li>
                  <li>Water Purification on the schedule: Monday, 13:30 · Rp 390K</li>
                  <li>Also available by appointment</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section tone="cream" next="deep" id="culture" className="has-page-nav" aria-labelledby="culture-title">
        <div className={`container ${styles.culture}`}>
          <div className={styles.cultureHead} data-reveal>
            <h2 id="culture-title">Balinese arts & culture</h2>
            <p className="lead">
              Living traditions shared by our community, with explanations from cultural facilitators so no prior
              knowledge is needed.
            </p>
            <Framed
              className={styles.cultureImage}
              name="exp-arts"
              alt="Guests building a gebogan offering tower with a local guide"
              sizes="(min-width: 960px) 30vw, 80vw"
              shape="arch"
              ratio="4 / 5"
              blob="tr"
            />
          </div>
          <div className={styles.offerings}>
            {offerings.map((o) => (
              <div key={o.title} className={styles.offering} data-reveal>
                <h3>{o.title}</h3>
                <p className="muted">{o.text}</p>
              </div>
            ))}
            <p className={styles.cultureNote} data-reveal>
              We recommend booking hands-on workshops and guided ceremonies in advance. During sacred rituals, please
              follow our team’s guidance on photography.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" aria-label="Cooking class and trekking">
        <div className={`container ${styles.pair}`}>
          <article id="cooking" className={`${styles.pairItem} has-page-nav`} aria-labelledby="cooking-title">
            <Framed
              name="exp-cooking"
              alt="Guests cooking at the outdoor kitchen with the chefs"
              sizes="(min-width: 860px) 42vw, 90vw"
              shape="pebble-wide"
              ratio="3 / 2"
              blob="bl"
            />
            <div className="stack" data-reveal>
              <h2 id="cooking-title">Lingga Cooking Class</h2>
              <p className="muted">
                Learn to prepare authentic Balinese dishes with fresh ingredients from local gardens, guided by local
                chefs and community members, and discover the philosophy and rituals behind each recipe.
              </p>
              <dl className="fact-list">
                <div>
                  <dt>Schedule</dt>
                  <dd>Wednesday, 11:00 · Rp 450K</dd>
                </div>
                <div>
                  <dt>Experience</dt>
                  <dd>Beginners welcome</dd>
                </div>
                <div>
                  <dt>Provided</dt>
                  <dd>Ingredients, equipment and aprons</dd>
                </div>
              </dl>
            </div>
          </article>

          <article id="trekking" className={`${styles.pairItem} has-page-nav`} aria-labelledby="trekking-title">
            <Framed
              name="exp-trekking"
              alt="A guide showing trekkers a papaya tree on the trail"
              sizes="(min-width: 860px) 42vw, 90vw"
              shape="pebble"
              ratio="3 / 2"
            />
            <div className="stack" data-reveal>
              <h2 id="trekking-title">Lingga Trekking</h2>
              <p className="muted">
                Walk bamboo forests, sacred springs and jungle paths with community guides, passing the Campuhan where
                four streams meet and hearing the stories of Bali Mula culture along the way.
              </p>
              <dl className="fact-list">
                <div>
                  <dt>Duration</dt>
                  <dd>Usually 1.5 – 2 hours</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>All fitness levels; children welcome with adults</dd>
                </div>
                <div>
                  <dt>Bring</dt>
                  <dd>Walking shoes, light clothing, hat, sunscreen, water bottle</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </Section>

      <Section tone="cream" next="deep" id="camping" className="has-page-nav" aria-labelledby="camping-title">
        <div className={`container ${styles.camping}`}>
          <Framed
            className={styles.campingImage}
            name="exp-camping"
            alt="Tents pitched on a lawn surrounded by palms"
            sizes="(min-width: 860px) 36vw, 90vw"
            shape="pebble-alt"
            ratio="4 / 3"
            blob="br"
          />
          <div data-reveal>
            <h2 id="camping-title">Camping & outbound</h2>
            <p className={`muted ${styles.campingLead}`}>
              Outdoor adventure and team building, with professional guides, safety equipment, camping gear and meals
              included.
            </p>
            <div className={styles.campingLists}>
              <div>
                <h3>Camping</h3>
                <ul className="ruled-list">
                  <li>Overnight camping in nature</li>
                  <li>Campfire and storytelling</li>
                  <li>Stargazing</li>
                  <li>Traditional Balinese camping setup</li>
                </ul>
              </div>
              <div>
                <h3>Outbound</h3>
                <ul className="ruled-list">
                  <li>Team building challenges</li>
                  <li>Jungle trekking and river crossing</li>
                  <li>Survival skills training</li>
                  <li>Nature photography sessions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" id="schedule" className="has-page-nav" aria-labelledby="schedule-title">
        <div className="container">
          <div className={styles.scheduleHead} data-reveal>
            <h2 id="schedule-title">Weekly retreat schedule</h2>
            <p className="lead">
              Book single sessions or ask us to design a personalised retreat. Prices in Indonesian rupiah, thousands.
            </p>
          </div>
          <div className={styles.week}>
            {WEEK.map((d) => (
              <section key={d.day} className={styles.day} aria-label={d.day} data-reveal>
                <h3 className={styles.dayName}>{d.day}</h3>
                <ul>
                  {d.sessions.map(([name, price], i) => (
                    <li key={SLOTS[i]} className={styles.session}>
                      <span className={styles.time}>{SLOTS[i]}</span>
                      <span className={styles.sessionName}>{name}</span>
                      <span className={styles.sessionPrice}>{price ? `Rp ${price}` : "Price on request"}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className={`actions ${styles.scheduleActions}`}>
            <WhatsAppButton message="Hello, I am looking to book a Daily Retreat session. Session: , Date: , Number of guests: ">
              Book a session
            </WhatsAppButton>
            <Link prefetch={false} className="btn btn-outline" href="/contact?subject=Daily%20Retreat">
              Ask about a personalised retreat
            </Link>
          </div>
        </div>
      </Section>

      <Closing
        title="Not sure where to begin?"
        text="Tell us what you are looking for, whether healing, yoga, nature or culture, and we will recommend experiences that suit you."
        message="Hello, I would like help choosing experiences at The Jungle Pots."
      />
    </>
  );
}
