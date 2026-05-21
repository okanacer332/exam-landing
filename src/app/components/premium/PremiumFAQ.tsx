import type { LandingCopy } from "../../i18n";

export function PremiumFAQ({ copy }: { copy: LandingCopy }) {
  return (
    <section className="premium-faq" id="faq" aria-labelledby="faq-title">
      <div className="premium-section-heading">
        <span>{copy.faq.eyebrow}</span>
        <h2 id="faq-title">{copy.faq.title}</h2>
        <p>{copy.faq.text}</p>
      </div>

      <div className="premium-faq-list">
        {copy.faq.items.map(([question, answer], index) => (
          <details name="papirus-faq" open={index === 0} key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
