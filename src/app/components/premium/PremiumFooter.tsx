import { Mail, ShieldCheck } from "lucide-react";
import type { LandingCopy, Locale } from "../../i18n";
import { withLocalePath } from "../../i18n";

function policyLinks(locale: Locale) {
  if (locale === "en") {
    return [
      ["Terms", "/en/terms"],
      ["Privacy Policy", "/en/privacy-policy"],
      ["Security Policy", "/en/security-policy"],
      ["Cookie Policy", "/en/cookie-policy"],
      ["Refund Policy", "/en/refund-policy"],
    ];
  }
  return [
    ["Kullanım Koşulları", "/kullanim-kosullari/"],
    ["Gizlilik Politikası", "/gizlilik-politikasi/"],
    ["KVKK Aydınlatma Metni", "/kvkk-aydinlatma-metni/"],
    ["Çerez Politikası", "/cerez-politikasi/"],
    ["Mesafeli Satış Sözleşmesi", "/mesafeli-satis-sozlesmesi/"],
    ["Ön Bilgilendirme Formu", "/on-bilgilendirme-formu/"],
    ["İade ve İptal Politikası", "/iade-iptal-politikasi/"],
    ["Güvenlik Politikası", "/guvenlik-politikasi/"],
  ];
}

const paymentBadges = ["Visa", "Mastercard", "American Express", "Troy"];

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <nav className="premium-footer__column" aria-label={title}>
      <h2>{title}</h2>
      {links.map(([label, href]) => (
        <a href={href} key={label}>
          {label}
        </a>
      ))}
    </nav>
  );
}

export function PremiumFooter({ copy, locale }: { copy: LandingCopy; locale: Locale }) {
  const membershipLinks = [
    [locale === "en" ? "Plans" : "Paketler", "#pricing"],
    [copy.nav.tryFree, "#pricing"],
    [locale === "en" ? "Institutional Use" : "Kurumsal Kullanım", "#kurumsal"],
  ];
  const productLinks = [
    [copy.nav.scan, "#scan"],
    [copy.nav.compare, "#compare"],
    [copy.nav.analysis, "#dashboard"],
    [copy.nav.docs, withLocalePath(locale, "/dokuman/")],
  ];

  return (
    <footer className="premium-footer">
      <div className="premium-footer__inner">
        <div className="premium-footer__columns">
          <FooterColumn title={copy.footer.legal} links={policyLinks(locale)} />
          <FooterColumn title={copy.footer.membership} links={membershipLinks} />
          <FooterColumn title={copy.footer.product} links={productLinks} />

          <section className="premium-footer__contact" aria-label={copy.footer.contact}>
            <h2>{copy.footer.contact}</h2>
            <p>{copy.footer.contactText}</p>
            <a href="mailto:info@papirus-ai.com">
              <Mail aria-hidden="true" />
              info@papirus-ai.com
            </a>

            <div className="premium-footer__payment">
              <h2>{copy.footer.securePayment}</h2>
              <p>{copy.footer.paymentText}</p>
              <div className="payment-badges" aria-label={copy.footer.securePayment}>
                {paymentBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="premium-footer__bottom">
          <a href={locale === "en" ? "/en" : "#top"} className="premium-footer__brand" aria-label="Papirus AI">
            <img src="/papi-logo-web.png" alt="Papirus AI" className="premium-footer__logo" />
            <span className="premium-beta-badge">BETA</span>
          </a>
          <p>{copy.footer.copyright}</p>
          <span className="premium-footer__secure">
            <ShieldCheck aria-hidden="true" />
            {copy.footer.secure}
          </span>
        </div>
      </div>
    </footer>
  );
}
