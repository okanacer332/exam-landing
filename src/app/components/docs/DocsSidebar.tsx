import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { docsNav } from "./docsNav";

interface DocsSidebarProps {
  currentSlug: string;
  onNavigate?: (slug: string) => void;
}

export function DocsSidebar({ currentSlug, onNavigate }: DocsSidebarProps) {
  // Hangi section'lar açık — varsayılan: currentSlug'ın bulunduğu section + ilk ikisi
  const defaultOpen = docsNav.reduce<Record<string, boolean>>((acc, sec) => {
    const hasActive = sec.items.some((i) => i.slug === currentSlug);
    acc[sec.section] = hasActive || sec.section === "Başlarken" || sec.section === "Hızlı Başlangıç";
    return acc;
  }, {});

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(defaultOpen);

  const toggleSection = (name: string) => {
    setOpenSections((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleNavClick = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(slug);
    // URL güncelle
    const newPath = `/dokuman/${slug}`;
    window.history.pushState({}, "", newPath);
    window.scrollTo(0, 0);
  };

  return (
    <aside className="docs-sidebar" aria-label="Dokümantasyon navigasyonu">
      {docsNav.map((sec) => {
        const isOpen = !!openSections[sec.section];
        return (
          <div className="docs-sidebar-section" key={sec.section}>
            <button
              type="button"
              className="docs-sidebar-section-header"
              onClick={() => toggleSection(sec.section)}
              aria-expanded={isOpen}
            >
              <span className="docs-sidebar-section-icon" aria-hidden="true">
                {sec.icon}
              </span>
              {sec.section}
              <ChevronRight
                className={`docs-sidebar-section-chevron ${isOpen ? "docs-sidebar-section-chevron--open" : ""}`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div className="docs-sidebar-items">
                {sec.items.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <a
                      key={item.slug}
                      href={`/dokuman/${item.slug}`}
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
