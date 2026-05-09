import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

type PremiumHeaderProps = {
  onLoginClick: () => void;
  onTryClick: () => void;
};

export function PremiumHeader({ onLoginClick, onTryClick }: PremiumHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü açıkken body scroll'u kilitle
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href: string) => {
    closeMenu();
    // Hash link'leri için smooth scroll
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="premium-header">
        {/* Logo */}
        <a className="premium-brand" href="#top" aria-label="Papirus AI" onClick={closeMenu}>
          <img className="premium-brand-logo" src="/papi-logo-web.png" alt="Papirus AI" />
        </a>

        {/* Masaüstü nav */}
        <nav className="premium-nav" aria-label="Ana menü">
          <a href="#scan">Tarama</a>
          <a href="#compare">Karşılaştırma</a>
          <a href="#dashboard">Analiz</a>
          <a href="#faq">SSS</a>
          <a href="#pricing">Fiyatlandırma</a>
          <a href="/dokuman/" target="_blank" rel="noopener noreferrer">Döküman</a>
        </nav>

        {/* Masaüstü aksiyonlar */}
        <div className="premium-header-actions">
          <button type="button" className="premium-link-button" onClick={onLoginClick}>
            Giriş
          </button>
          <button type="button" className="premium-primary-button premium-primary-button--small" onClick={onTryClick}>
            Deneyin
            <ArrowRight aria-hidden="true" />
          </button>

          {/* Hamburger butonu — sadece mobilde görünür */}
          <button
            type="button"
            className="hamburger-btn"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobil menü overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" aria-modal="true" role="dialog" aria-label="Mobil menü">
          {/* Arka plan tıklaması menüyü kapat */}
          <div className="mobile-menu-backdrop" onClick={closeMenu} aria-hidden="true" />

          <nav className="mobile-menu" aria-label="Mobil menü">
            <div className="mobile-menu-inner">
              <a href="#scan" className="mobile-menu-link" onClick={() => handleNavClick("#scan")}>
                <span>Tarama</span>
              </a>
              <a href="#compare" className="mobile-menu-link" onClick={() => handleNavClick("#compare")}>
                <span>Karşılaştırma</span>
              </a>
              <a href="#dashboard" className="mobile-menu-link" onClick={() => handleNavClick("#dashboard")}>
                <span>Analiz</span>
              </a>
              <a href="#faq" className="mobile-menu-link" onClick={() => handleNavClick("#faq")}>
                <span>SSS</span>
              </a>
              <a href="#pricing" className="mobile-menu-link" onClick={() => handleNavClick("#pricing")}>
                <span>Fiyatlandırma</span>
              </a>

              <div className="mobile-menu-actions">
                <button
                  type="button"
                  className="premium-link-button mobile-menu-action-btn"
                  onClick={() => { closeMenu(); onLoginClick(); }}
                >
                  Giriş Yap
                </button>
                <button
                  type="button"
                  className="premium-primary-button"
                  onClick={() => { closeMenu(); onTryClick(); }}
                >
                  Ücretsiz Deneyin
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
