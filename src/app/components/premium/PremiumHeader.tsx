import { ArrowRight } from "lucide-react";

type PremiumHeaderProps = {
  onLoginClick: () => void;
  onTryClick: () => void;
};

export function PremiumHeader({ onLoginClick, onTryClick }: PremiumHeaderProps) {
  return (
    <header className="premium-header">
      <a className="premium-brand" href="#top" aria-label="Papirus AI">
        <img className="premium-brand-mark" src="/brand/papirus-mark.svg" alt="" aria-hidden="true" />
        <span>Papirus AI</span>
      </a>

      <nav className="premium-nav" aria-label="Ana menü">
        <a href="#scan">Tarama</a>
        <a href="#compare">Karşılaştırma</a>
        <a href="#dashboard">Analiz</a>
        <a href="#faq">SSS</a>
        <a href="#pricing">Fiyatlandırma</a>
      </nav>

      <div className="premium-header-actions">
        <button type="button" className="premium-link-button" onClick={onLoginClick}>
          Giriş
        </button>
        <button type="button" className="premium-primary-button premium-primary-button--small" onClick={onTryClick}>
          Deneyin
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
