import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getOppositeLocalePath, landingCopy, type Locale } from "../../i18n";

type PremiumHeaderProps = {
  docsUrl: string;
  locale: Locale;
  loginUrl: string;
  tryUrl: string;
};

export function PremiumHeader({ docsUrl, locale, loginUrl, tryUrl }: PremiumHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = landingCopy[locale].nav;
  const otherLocale: Locale = locale === "tr" ? "en" : "tr";
  const otherLocaleHref = getOppositeLocalePath(window.location.pathname, otherLocale);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const handleNavClick = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    ["#scan", copy.scan],
    ["#compare", copy.compare],
    ["#dashboard", copy.analysis],
    ["#faq", copy.faq],
    ["#pricing", copy.pricing],
  ] as const;

  return (
    <>
      <header className="premium-header">
        <a className="premium-brand" href={locale === "en" ? "/en" : "#top"} aria-label="Papirus AI" onClick={closeMenu}>
          <img className="premium-brand-logo" src="/papi-logo-web.png" alt="Papirus AI" />
          <span className="premium-beta-badge">BETA</span>
        </a>

        <nav className="premium-nav" aria-label="Main menu">
          {navItems.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
          <a href={docsUrl} target="_blank" rel="noopener noreferrer">
            {copy.docs}
          </a>
        </nav>

        <div className="premium-header-actions">
          <a href={otherLocaleHref} className="premium-language-button" aria-label="Change language">
            {otherLocale.toUpperCase()}
          </a>
          <a href={loginUrl} className="premium-link-button">
            {copy.login}
          </a>
          <a href={tryUrl} className="premium-primary-button premium-primary-button--small">
            {copy.try}
            <ArrowRight aria-hidden="true" />
          </a>

          <button
            type="button"
            className="hamburger-btn"
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay" aria-modal="true" role="dialog" aria-label="Mobile menu">
          <div className="mobile-menu-backdrop" onClick={closeMenu} aria-hidden="true" />
          <nav className="mobile-menu" aria-label="Mobile menu">
            <div className="mobile-menu-inner">
              {navItems.map(([href, label]) => (
                <a href={href} className="mobile-menu-link" key={href} onClick={() => handleNavClick(href)}>
                  <span>{label}</span>
                </a>
              ))}
              <a href={docsUrl} className="mobile-menu-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <span>{copy.docs}</span>
              </a>
              <a href={otherLocaleHref} className="mobile-menu-link" onClick={closeMenu}>
                <span>{otherLocale.toUpperCase()}</span>
              </a>

              <div className="mobile-menu-actions">
                <a href={loginUrl} className="premium-link-button mobile-menu-action-btn" onClick={closeMenu}>
                  {copy.login}
                </a>
                <a href={tryUrl} className="premium-primary-button" onClick={closeMenu}>
                  {copy.tryFree}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
