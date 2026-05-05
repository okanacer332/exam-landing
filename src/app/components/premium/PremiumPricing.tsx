import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Başlangıç",
    price: "₺1.999",
    period: "350 kağıt okuma kredisi",
    description: "Dönem içi yazılı sınavlarını düzenli okumaya başlamak isteyen öğretim elemanları için.",
    features: ["350 kağıt okuma", "Soru bazlı değerlendirme", "Gmail ile güvenli konsol girişi"],
  },
  {
    name: "Akademik",
    price: "₺4.999",
    period: "1.000 kağıt okuma kredisi",
    description: "Yoğun sınav dönemlerinde daha yüksek hacimli değerlendirme yapan akademik ekipler için.",
    features: ["1.000 kağıt okuma", "Rubrik bazlı karşılaştırma", "Sınıf performans özeti"],
    featured: true,
  },
  {
    name: "Kurum",
    price: "₺19.999",
    period: "5.000 kağıt okuma kredisi",
    description: "Bölüm, fakülte ve kurum ölçeğinde merkezi sınav değerlendirme akışları için.",
    features: ["5.000 kağıt okuma", "Kurum ölçeğinde kullanım", "Öncelikli destek"],
  },
];

type PremiumPricingProps = {
  onTryClick: () => void;
};

export function PremiumPricing({ onTryClick }: PremiumPricingProps) {
  return (
    <section className="premium-pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="premium-section-heading">
        <span>Fiyatlandırma</span>
        <h2 id="pricing-title">Kullanım hacminize göre sade paketler.</h2>
        <p>Şimdi konsola girin, hesabınızı oluşturun ve ilk değerlendirme akışını 5 kağıt okuma hakkıyla deneyin.</p>
      </div>

      <div className="premium-plan-row">
        {plans.map((plan) => (
          <article className={plan.featured ? "is-featured" : ""} key={plan.name}>
            {plan.featured ? <em>Önerilen</em> : null}
            <span>{plan.name}</span>
            <strong>{plan.price}</strong>
            <p>{plan.period}</p>
            <small>{plan.description}</small>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <button type="button" className="premium-secondary-button" onClick={onTryClick}>
              5 krediyle deneyin
              <ArrowRight aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
