import { ExternalLink, Search } from "lucide-react";
import type { Locale } from "../../i18n";
import { getOppositeLocalePath } from "../../i18n";

interface DocsHeaderProps {
  locale: Locale;
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export function DocsHeader({ locale, onMenuClick, onSearchClick }: DocsHeaderProps) {
  const isEn = locale === "en";
  const otherLocale: Locale = isEn ? "tr" : "en";
  return (
    <header className="docs-header">
      <button type="button" className="docs-mobile-menu-btn" aria-label={isEn ? "Open menu" : "Menüyü aç"} onClick={onMenuClick}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <a href={isEn ? "/en" : "/"} className="docs-header-brand" aria-label="Papirus AI">
        <img src="/papi-logo-web.png" alt="Papirus AI" className="docs-header-brand-logo" />
        <span className="docs-header-badge">Docs</span>
      </a>

      <div className="docs-header-spacer" />

      <button type="button" className="docs-header-search" aria-label={isEn ? "Search documentation" : "Dokümantasyonda ara"} onClick={onSearchClick}>
        <Search className="docs-header-search-icon" />
        <span className="docs-header-search-text">{isEn ? "Search..." : "Ara..."}</span>
        <span className="docs-header-search-kbd">
          <kbd>⌘</kbd><kbd>K</kbd>
        </span>
      </button>

      <a href={getOppositeLocalePath(window.location.pathname, otherLocale)} className="docs-header-console-btn">
        <span>{otherLocale.toUpperCase()}</span>
      </a>

      <a href={`https://konsol.papirus-ai.com/giris?auth=google&intent=signin${isEn ? "&locale=en" : ""}`} target="_blank" rel="noopener noreferrer" className="docs-header-console-btn">
        <span>{isEn ? "Console" : "Konsola Git"}</span>
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </header>
  );
}
