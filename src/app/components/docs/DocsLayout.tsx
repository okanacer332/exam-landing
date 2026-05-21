import { useEffect, useState } from "react";
import type { Locale } from "../../i18n";
import "../../../styles/docs.css";
import { DocsContent } from "./DocsContent";
import { DocsHeader } from "./DocsHeader";
import { DocsSearchModal } from "./DocsSearchModal";
import { DocsSidebar } from "./DocsSidebar";

function extractSlug(pathname: string): string {
  const normalized = pathname.replace(/^\/en\/docs\/?/, "").replace(/^\/dokuman\/?/, "");
  return normalized || "giris/index";
}

export function DocsLayout({ locale }: { locale: Locale }) {
  const [slug, setSlug] = useState(() => extractSlug(window.location.pathname));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
    const onPopState = () => {
      setSlug(extractSlug(window.location.pathname));
      setMobileMenuOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [locale]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = (newSlug: string) => {
    setSlug(newSlug);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <div className="docs-shell">
      <DocsHeader locale={locale} onMenuClick={() => setMobileMenuOpen((v) => !v)} onSearchClick={() => setSearchOpen(true)} />
      <DocsSearchModal isOpen={searchOpen} locale={locale} onClose={() => setSearchOpen(false)} />

      <div className="docs-body">
        <DocsSidebar currentSlug={slug} locale={locale} onNavigate={handleNavigate} />
        {mobileMenuOpen && (
          <div className="docs-sidebar-overlay" role="dialog" aria-modal="true" aria-label="Navigation">
            <div className="docs-sidebar-overlay-backdrop" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
            <DocsSidebar currentSlug={slug} locale={locale} onNavigate={handleNavigate} />
          </div>
        )}
        <DocsContent locale={locale} slug={slug} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
