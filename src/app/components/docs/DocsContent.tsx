import { useEffect, useMemo } from "react";
import { marked } from "marked";
import { getDocContent } from "./docsMdLoader";
import { docsNav, getAdjacentDocs } from "./docsNav";

// marked ayarları
marked.setOptions({ gfm: true, breaks: false });

interface DocsContentProps {
  slug: string;
  onNavigate: (slug: string) => void;
}

export function DocsContent({ slug, onNavigate }: DocsContentProps) {
  // Breadcrumb için section bul
  const section = useMemo(
    () => docsNav.find((s) => s.items.some((i) => i.slug === slug)),
    [slug]
  );
  const item = section?.items.find((i) => i.slug === slug);

  // Markdown → HTML
  const html = useMemo(() => {
    const md = getDocContent(slug);
    return marked.parse(md) as string;
  }, [slug]);

  const { prev, next } = getAdjacentDocs(slug);

  // Başlığa scroll
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const handleNavClick = (targetSlug: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(targetSlug);
    window.history.pushState({}, "", `/dokuman/${targetSlug}`);
  };

  return (
    <main className="docs-main">
      <div className="docs-content-wrapper">
        {/* Breadcrumb */}
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <a href="/dokuman">Docs</a>
          <span className="docs-breadcrumb-sep" aria-hidden="true">›</span>
          {section && (
            <>
              <span>{section.icon} {section.section}</span>
              <span className="docs-breadcrumb-sep" aria-hidden="true">›</span>
            </>
          )}
          <span className="docs-breadcrumb-current">{item?.title ?? slug}</span>
        </nav>

        {/* Markdown içerik */}
        <article
          className="docs-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Prev / Next navigasyon */}
        <nav className="docs-page-nav" aria-label="Sayfa navigasyonu">
          {prev ? (
            <a
              href={`/dokuman/${prev.slug}`}
              className="docs-page-nav-btn"
              onClick={(e) => handleNavClick(prev.slug, e)}
            >
              <span className="docs-page-nav-label">← Önceki</span>
              <span className="docs-page-nav-title">{prev.title}</span>
            </a>
          ) : (
            <div />
          )}

          {next ? (
            <a
              href={`/dokuman/${next.slug}`}
              className="docs-page-nav-btn docs-page-nav-btn--next"
              onClick={(e) => handleNavClick(next.slug, e)}
            >
              <span className="docs-page-nav-label">Sonraki →</span>
              <span className="docs-page-nav-title">{next.title}</span>
            </a>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </main>
  );
}
