import { useState, useEffect } from "react";
import { DocsHeader } from "./DocsHeader";
import { DocsSidebar } from "./DocsSidebar";
import { DocsContent } from "./DocsContent";
import "../../../styles/docs.css";

/** /dokuman URL'inden slug'ı ayıkla */
function extractSlug(pathname: string): string {
  const after = pathname.replace(/^\/dokuman\/?/, "");
  return after || "giris/papirus-ai-nedir";
}

export function DocsLayout() {
  const [slug, setSlug] = useState(() => extractSlug(window.location.pathname));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tarayıcı geri/ileri düğmeleri
  useEffect(() => {
    const onPopState = () => {
      setSlug(extractSlug(window.location.pathname));
      setMobileMenuOpen(false);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handleNavigate = (newSlug: string) => {
    setSlug(newSlug);
    setMobileMenuOpen(false);
  };

  return (
    <div className="docs-shell">
      <DocsHeader onMenuClick={() => setMobileMenuOpen((v) => !v)} />

      <div className="docs-body">
        {/* Desktop sidebar */}
        <DocsSidebar currentSlug={slug} onNavigate={handleNavigate} />

        {/* Mobil overlay sidebar */}
        {mobileMenuOpen && (
          <div className="docs-sidebar-overlay" role="dialog" aria-modal="true" aria-label="Navigasyon menüsü">
            <div
              className="docs-sidebar-overlay-backdrop"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <DocsSidebar currentSlug={slug} onNavigate={handleNavigate} />
          </div>
        )}

        {/* İçerik */}
        <DocsContent slug={slug} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
