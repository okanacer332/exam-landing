import type { LandingCopy } from "../../i18n";

export function PremiumPricing({ copy }: { copy: LandingCopy }) {
  return (
    <section className="premium-pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="premium-section-heading">
        <span>{copy.pricing.eyebrow}</span>
        <h2 id="pricing-title">{copy.pricing.title}</h2>
        <p>{copy.pricing.text}</p>
      </div>

      <div className="premium-plan-row">
        {copy.pricing.plans.map((name, index) => (
          <article className={index === 1 ? "is-featured" : ""} key={name}>
            {index === 1 ? <em>{copy.pricing.recommended}</em> : null}
            <span>{name}</span>
            <div className="premium-pricing-beta-notice" style={{ marginTop: "1rem", marginBottom: 0 }}>
              {copy.pricing.beta}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
