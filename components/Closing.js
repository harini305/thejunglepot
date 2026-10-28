import Section from "./Section";
import WhatsAppButton from "./WhatsAppButton";

// Closing call to action: a deep rounded card on cream, curving into the footer.
export default function Closing({ title, text, message, secondary }) {
  return (
    <Section tone="cream" next="footer" className="closing">
      <div className="container">
        <div className="surface-deep card-deep closing-inner" data-reveal>
          <div>
            <h2>{title}</h2>
            {text && <p className="lead">{text}</p>}
          </div>
          <div className="actions">
            <WhatsAppButton message={message} />
            {secondary}
          </div>
        </div>
      </div>
    </Section>
  );
}
