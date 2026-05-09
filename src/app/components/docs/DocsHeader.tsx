import { ArrowRight, ExternalLink, Search } from "lucide-react";

interface DocsHeaderProps {
  onMenuClick: () => void;
}

export function DocsHeader({ onMenuClick }: DocsHeaderProps) {
  return (
    <header className="docs-header">
      {/* Mobil hamburger */}
      <button
        type="button"
        className="docs-mobile-menu-btn"
        aria-label="Menüyü aç"
        onClick={onMenuClick}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Logo */}
      <a href="/" className="docs-header-brand" aria-label="Papirus AI ana sayfa">
        <img
          src="/papi-logo.png"
          alt="Papirus AI"
          className="docs-header-brand-logo"
        />
        <span className="docs-header-badge">Docs</span>
      </a>

      <div className="docs-header-spacer" />

      {/* Arama (placeholder) */}
      <button type="button" className="docs-header-search" aria-label="Dokümantasyonda ara">
        <Search className="docs-header-search-icon" />
        <span className="docs-header-search-text">Ara...</span>
        <span className="docs-header-search-kbd">
          <kbd>⌘</kbd><kbd>K</kbd>
        </span>
      </button>

      {/* Konsola git */}
      <a
        href="https://konsol.papirus-ai.com"
        target="_blank"
        rel="noopener noreferrer"
        className="docs-header-console-btn"
      >
        <span>Konsola Git</span>
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </header>
  );
}
