import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { Locale } from "../../i18n";
import { getDocsNav } from "./docsNav";

interface DocsSidebarProps {
  currentSlug: string;
  locale: Locale;
  onNavigate?: (slug: string) => void;
}

function docsHref(locale: Locale, slug: string) {
  return locale === "en" ? `/en/docs/${slug}` : `/dokuman/${slug}`;
}

export function DocsSidebar({ currentSlug, locale, onNavigate }: DocsSidebarProps) {
  const nav = getDocsNav(locale);
  const defaultOpen = nav.reduce<Record<string, boolean>>((acc, sec) => {
    const hasActive = sec.items.some((i) => i.slug === currentSlug);
    acc[sec.section] = hasActive || sec === nav[0];
    return acc;
  }, {});

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(defaultOpen);

  const handleNavClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(slug);
    window.history.pushState({}, "", docsHref(locale, slug));
    window.scrollTo(0, 0);
  };

  return (
    <aside className="docs-sidebar" aria-label={locale === "en" ? "Documentation navigation" : "Dokümantasyon navigasyonu"}>
      {nav.map((sec) => {
        const isOpen = !!openSections[sec.section];
        return (
          <div className="docs-sidebar-section" key={sec.section}>
            <button
              type="button"
              className="docs-sidebar-section-header"
              onClick={() => setOpenSections((prev) => ({ ...prev, [sec.section]: !prev[sec.section] }))}
              aria-expanded={isOpen}
            >
              <span className="docs-sidebar-section-icon" aria-hidden="true">
                {sec.icon}
              </span>
              {sec.section}
              <ChevronRight className={`docs-sidebar-section-chevron ${isOpen ? "docs-sidebar-section-chevron--open" : ""}`} aria-hidden="true" />
            </button>

            {isOpen && (
              <div className="docs-sidebar-items">
                {sec.items.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <a
                      key={item.slug}
                      href={docsHref(locale, item.slug)}
                      className={`docs-sidebar-link ${isActive ? "docs-sidebar-link--active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => handleNavClick(item.slug, e)}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
