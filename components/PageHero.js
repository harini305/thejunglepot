import Photo from "./Photo";
import Curve from "./Curve";

export default function PageHero({ image, alt, title, lead, size, children }) {
  return (
    <section className={`hero on-image${size ? ` hero-${size}` : ""}`} data-hero>
      <div className="hero-media" data-hero-media>
        <Photo name={image} alt={alt} sizes="100vw" priority />
      </div>
      <div className="container hero-inner">
        <h1 className="hero-title" data-hero-item>
          {title}
        </h1>
        {lead && (
          <p className="hero-lead" data-hero-item>
            {lead}
          </p>
        )}
        {children && (
          <div className="actions" data-hero-item>
            {children}
          </div>
        )}
      </div>
      <Curve to="cream" />
    </section>
  );
}
