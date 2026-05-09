import { Mail, ShieldCheck } from "lucide-react";

const legalLinks = [
  ["Kullanım Koşulları", "/kullanim-kosullari/"],
  ["Gizlilik Politikası", "/gizlilik-politikasi/"],
  ["KVKK Aydınlatma Metni", "/kvkk-aydinlatma-metni/"],
  ["Çerez Politikası", "/cerez-politikasi/"],
  ["Mesafeli Satış Sözleşmesi", "/mesafeli-satis-sozlesmesi/"],
  ["Ön Bilgilendirme Formu", "/on-bilgilendirme-formu/"],
  ["İade ve İptal Politikası", "/iade-iptal-politikasi/"],
  ["Güvenlik Politikası", "/guvenlik-politikasi/"],
];

const membershipLinks = [
  ["Paketler", "#pricing"],
  ["Fiyatlandırma", "#pricing"],
  ["Deneme Hakkı", "#pricing"],
  ["Abonelik Yönetimi", "#abonelik-yonetimi"],
  ["Kurumsal Kullanım", "#kurumsal"],
  ["Fatura ve Ödeme", "#odeme"],
];

const productLinks = [
  ["Sınav Kağıdı Okuma", "#scan"],
  ["Rubrik Bazlı Değerlendirme", "#ai-compare"],
  ["AI Karşılaştırma", "#compare"],
  ["Sınıf Analizi", "#dashboard"],
  ["Güvenli Konsol", "#top"],
];

const paymentBadges = ["Lemon Squeezy", "Visa", "Mastercard", "American Express", "Troy"];

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <nav className="premium-footer__column" aria-label={title}>
      <h2>{title}</h2>
      {links.map(([label, href]) => (
        <a
          href={href}
          key={label}
          onClick={(event) => {
            if (!href.startsWith("/")) return;
            event.preventDefault();
            window.location.assign(href);
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export function PremiumFooter() {
  return (
    <footer className="premium-footer">
      <div className="premium-footer__inner">
        <div className="premium-footer__columns">
          <FooterColumn title="Yasal" links={legalLinks} />
          <FooterColumn title="Üyelik ve Paketler" links={membershipLinks} />
          <FooterColumn title="Ürünler" links={productLinks} />

          <section className="premium-footer__contact" aria-label="Bize ulaşın">
            <h2>Bize Ulaşın</h2>
            <p>Teknik destek, abonelik ve kurumsal kullanım soruları için bize ulaşabilirsiniz.</p>
            <a href="mailto:info@papirus-ai.com">
              <Mail aria-hidden="true" />
              info@papirus-ai.com
            </a>

            <div className="premium-footer__payment">
              <h2>Güvenli Ödeme</h2>
              <p>Ödemeler Lemon Squeezy altyapısı üzerinden güvenli olarak alınır.</p>
              <div className="payment-badges" aria-label="Desteklenen ödeme altyapısı ve kart markaları">
                {paymentBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="premium-footer__bottom">
          <a href="#top" className="premium-footer__brand" aria-label="Papirus AI ana sayfa">
            <img src="/papi-logo-web.png" alt="Papirus AI" className="premium-footer__logo" />
            <span className="premium-footer__beta-badge">BETA</span>
          </a>
          <p>Copyright © 2026 Papirus AI. Tüm hakları saklıdır.</p>
          <span className="premium-footer__secure">
            <ShieldCheck aria-hidden="true" />
            Akademik veriler güvenli konsol akışında işlenir.
          </span>
        </div>
      </div>
    </footer>
  );
}
