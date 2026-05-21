import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";
import { BarChart3, BookOpen, Cpu, FileCheck, Shield, Users, X } from "lucide-react";
import type { Locale } from "../../i18n";
import { getDocContent } from "./docsMdLoader";
import { getAdjacentDocs, getDocsNav } from "./docsNav";

const renderer = new marked.Renderer();
renderer.image = function ({ href, title, text }) {
  const alt = text || "";
  const titleAttr = title ? ` title="${title}"` : "";
  return `<img src="${href}" alt="${alt}"${titleAttr} class="docs-screenshot" loading="lazy" />`;
};
marked.setOptions({ gfm: true, breaks: false, renderer });

interface DocsContentProps {
  locale: Locale;
  slug: string;
  onNavigate: (slug: string) => void;
}

const isLandingSlug = (slug: string) => slug === "giris/index";

export function DocsContent({ locale, slug, onNavigate }: DocsContentProps) {
  const isLanding = isLandingSlug(slug);
  const rootPath = locale === "en" ? "/en/docs" : "/dokuman";
  const nav = getDocsNav(locale);
  const section = useMemo(() => nav.find((s) => s.items.some((i) => i.slug === slug)), [nav, slug]);
  const item = section?.items.find((i) => i.slug === slug);
  const html = useMemo(() => marked.parse(getDocContent(slug, locale)) as string, [locale, slug]);
  const { prev, next } = getAdjacentDocs(slug, locale);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const handleNavClick = (targetSlug: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(targetSlug);
    window.history.pushState({}, "", `${rootPath}/${targetSlug}`);
  };

  const handleProseClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === "img" && target.classList.contains("docs-screenshot")) {
      setZoomedImg((target as HTMLImageElement).src);
    }
  };

  const trustCards =
    locale === "en"
      ? [
          [Cpu, "AI-assisted assessment", "Rubric-aware AI drafts support open-ended written exam review."],
          [Users, "Instructor controlled", "Every AI result remains under academic review and approval."],
          [Shield, "Secure processing", "Exam papers are handled through the secure console workflow."],
          [FileCheck, "Rubric-based grading", "Consistent criteria make scoring more traceable."],
          [BarChart3, "Detailed analytics", "Question-level, student-level, and class-level views support reporting."],
          [BookOpen, "Source library grading", "Books and PDFs can become source-backed grading frames."],
        ]
      : [
          [Cpu, "Yapay Zeka Destekli Değerlendirme", "Rubric tabanlı AI analizi ile açık uçlu soruları değerlendirin."],
          [Users, "İnsan Kontrolü Destekli", "Her AI sonucunu akademisyen onayıyla kesinleştirin."],
          [Shield, "Güvenli Doküman İşleme", "Sınav kağıtları güvenli konsol akışında işlenir."],
          [FileCheck, "Rubric Tabanlı Puanlama", "Standartlaştırılmış kriterler ile tutarlı puanlama."],
          [BarChart3, "Detaylı Analitik", "Öğrenci ve soru bazlı analizler, grafikler ve raporlar."],
          [BookOpen, "Kaynak Havuzu", "Kitap ve PDF kaynakları puanlama çerçevesine dönüştürün."],
        ];

  return (
    <main className="docs-main">
      <div className={`docs-content-wrapper ${isLanding ? "docs-content-wrapper--landing" : ""}`}>
        {isLanding && (
          <div className="docs-hero">
            <div className="docs-hero-badge">
              <BookOpen size={14} />
              {locale === "en" ? "Documentation" : "Dokümantasyon"}
            </div>
            <h1 className="docs-hero-title">{locale === "en" ? "Papirus AI Documentation" : "Papirus AI Dokümantasyonu"}</h1>
            <p className="docs-hero-subtitle">
              {locale === "en" ? "AI-assisted written exam assessment platform." : "Yapay zeka destekli yazılı sınav değerlendirme platformu."}
            </p>
            <p className="docs-hero-desc">
              {locale === "en"
                ? "Upload answer keys or source libraries, read student papers, review AI-supported draft scores, and export results."
                : "Yazılı sınav kağıtlarını yükleyin, değerlendirme kriterlerini tanımlayın, AI destekli analiz başlatın ve sonuçları verimli şekilde yönetin."}
            </p>
          </div>
        )}

        {!isLanding && (
          <nav className="docs-breadcrumb" aria-label="Breadcrumb">
            <a href={rootPath} onClick={(e) => handleNavClick("giris/index", e)}>Docs</a>
            <span className="docs-breadcrumb-sep" aria-hidden="true">›</span>
            {section && (
              <>
                <span>{section.icon} {section.section}</span>
                <span className="docs-breadcrumb-sep" aria-hidden="true">›</span>
              </>
            )}
            <span className="docs-breadcrumb-current">{item?.title ?? slug}</span>
          </nav>
        )}

        <article className={`docs-prose ${isLanding ? "docs-prose--landing" : ""}`} dangerouslySetInnerHTML={{ __html: html }} onClick={handleProseClick} />

        {isLanding && (
          <section className="docs-trust">
            <h2 className="docs-trust-title">{locale === "en" ? "Built for Academic Institutions" : "Akademik Kurumlar İçin Geliştirildi"}</h2>
            <div className="docs-trust-grid">
              {trustCards.map(([Icon, title, text]) => (
                <div className="docs-trust-card" key={String(title)}>
                  <Icon className="docs-trust-card-icon" size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <nav className="docs-page-nav" aria-label="Page navigation">
          {prev ? (
            <a href={`${rootPath}/${prev.slug}`} className="docs-page-nav-btn" onClick={(e) => handleNavClick(prev.slug, e)}>
              <span className="docs-page-nav-label">{locale === "en" ? "← Previous" : "← Önceki"}</span>
              <span className="docs-page-nav-title">{prev.title}</span>
            </a>
          ) : (
            <div />
          )}

          {next ? (
            <a href={`${rootPath}/${next.slug}`} className="docs-page-nav-btn docs-page-nav-btn--next" onClick={(e) => handleNavClick(next.slug, e)}>
              <span className="docs-page-nav-label">{locale === "en" ? "Next →" : "Sonraki →"}</span>
              <span className="docs-page-nav-title">{next.title}</span>
            </a>
          ) : (
            <div />
          )}
        </nav>
      </div>

      {zoomedImg && (
        <div className="docs-image-modal" onClick={() => setZoomedImg(null)} role="dialog" aria-modal="true">
          <button className="docs-image-modal-close" onClick={() => setZoomedImg(null)}>
            <X size={24} />
          </button>
          <img src={zoomedImg} alt={locale === "en" ? "Expanded visual" : "Büyütülmüş görsel"} className="docs-image-modal-content" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
