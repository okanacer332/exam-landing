import { Mail, ShieldCheck } from "lucide-react";

const legalLinks = [
  ["Kullanım Koşulları", "/yakinda/"],
  ["Gizlilik Politikası", "/yakinda/"],
  ["KVKK Aydınlatma Metni", "/yakinda/"],
  ["Çerez Politikası", "/yakinda/"],
  ["Mesafeli Satış Sözleşmesi", "/yakinda/"],
  ["Ön Bilgilendirme Formu", "/yakinda/"],
  ["İade ve İptal Politikası", "/yakinda/"],
  ["Güvenlik Politikası", "/yakinda/"],
];

const membershipLinks = [
  ["Paketler", "/yakinda/"],
  ["Fiyatlandırma", "/yakinda/"],
  ["Deneme Hakkı", "/yakinda/"],
  ["Abonelik Yönetimi", "/yakinda/"],
  ["Kurumsal Kullanım", "/yakinda/"],
  ["Fatura ve Ödeme", "/yakinda/"],
];

const productLinks = [
  ["Sınav Kağıdı Okuma", "/yakinda/"],
  ["Rubrik Bazlı Değerlendirme", "/yakinda/"],
  ["Yapay Zeka Karşılaştırması", "/yakinda/"],
  ["Sınıf Analizi", "/yakinda/"],
  ["Güvenli Konsol", "/yakinda/"],
];

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
          </section>
        </div>

        <div className="premium-footer__bottom">
          <a href="#top" className="premium-footer__brand" aria-label="Papirus AI ana sayfa" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
            <img src="/papi-logo-web.png" alt="Papirus AI" className="premium-footer__logo" />
            <span className="premium-beta-badge">BETA</span>
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
