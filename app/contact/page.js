import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { ADDRESS_LINES, EMAIL, INSTAGRAM_HANDLE, MAPS_URL, SOCIAL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";
import EnquiryForm from "./EnquiryForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book a stay, spa treatment, table or experience at The Jungle Pots via WhatsApp, email or Instagram. Address, booking FAQ and guest guidelines.",
  alternates: { canonical: "/contact" },
};

// FAQ and guidelines condensed from the original FAQ and Terms pages. Deposit and online
// payment wording is withheld: the audit found no working payment system (08 · A1, A4, A5).
const faqs = [
  {
    q: "How can I book a service or experience?",
    a: `Message us on WhatsApp (${WHATSAPP_DISPLAY}), send an Instagram DM to ${INSTAGRAM_HANDLE}, or email ${EMAIL}. Our team will confirm availability and guide you through the process.`,
  },
  {
    q: "How do I know my booking is confirmed?",
    a: "Once we receive your request, we confirm your booking through the channel you used: WhatsApp, Instagram or email.",
  },
  {
    q: "Can I reschedule my booking?",
    a: "Yes. Please contact us at least 7 days before your booking date so we can make the change.",
  },
  {
    q: "I’m not sure what to book yet. Can you help?",
    a: "Absolutely. Send us a message and we will recommend experiences based on your interests, whether that is healing, yoga, nature or cultural discovery.",
  },
  {
    q: "Can I book other services during my stay?",
    a: "Yes. Cottage guests can add yoga classes, traditional Balinese ceremonies, cooking classes, spa treatments and cultural tours.",
  },
];

const guidelines = [
  ["Arrival", "Please arrive at least 15 minutes before your session or activity. Late arrival may shorten your session out of respect for other guests."],
  ["Health & safety", "Tell us about any health conditions, allergies or special needs before you take part. Participation in yoga, healing or outdoor trekking is at your own risk."],
  ["Photography", "We may photograph or film activities for promotional use. If you prefer not to be included, please tell our staff at check-in."],
  ["Privacy", "Your personal information is kept confidential and used only for communication and reservations."],
  ["Conduct", "We may refuse service to any guest behaving in a disruptive, disrespectful or unsafe manner."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="short"
        image="contact"
        alt="Guests seated in a circle with a priest during a forest ceremony"
        title="Contact & booking"
        lead="Bookings are made directly with our team on WhatsApp, by email or on Instagram."
      />

      <Section tone="cream" next="deep">
        <div className={`container ${styles.layout}`} data-pin-wrap>
          <div className={styles.direct} data-pin>
            <h2>Reach us directly</h2>
            <dl className={styles.channels}>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    {WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={SOCIAL[0].href} target="_blank" rel="noopener noreferrer">
                    {INSTAGRAM_HANDLE}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <address>
                    {ADDRESS_LINES.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                  <a className="text-link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className={`card-cream ${styles.formWrap}`} data-reveal>
            <h2 className={styles.formTitle}>Write your enquiry</h2>
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <Section tone="deep" next="cream" id="faq" aria-labelledby="faq-title">
        <div className={`container ${styles.faqLayout}`} data-pin-wrap>
          <h2 id="faq-title" data-pin>
            Frequently asked questions
          </h2>
          <div className={styles.faq}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream" next="footer" id="good-to-know" aria-labelledby="guidelines-title">
        <div className={`container ${styles.faqLayout}`} data-pin-wrap>
          <h2 id="guidelines-title" data-pin>
            Good to know
          </h2>
          <dl className={styles.guidelines}>
            {guidelines.map(([title, text]) => (
              <div key={title} data-reveal>
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
