import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";
import { getDocContent } from "./docsMdLoader";
import { docsNav, getAdjacentDocs } from "./docsNav";
import { BookOpen, Shield, Cpu, Users, BarChart3, FileCheck, X } from "lucide-react";

// marked ayarları + custom renderer
const renderer = new marked.Renderer();
renderer.image = function ({ href, title, text }) {
  const alt = text || "";
  const titleAttr = title ? ` title="${title}"` : "";
  return `<img src="${href}" alt="${alt}"${titleAttr} class="docs-screenshot" loading="lazy" />`;
};
marked.setOptions({ gfm: true, breaks: false, renderer });

interface DocsContentProps {
  slug: string;
  onNavigate: (slug: string) => void;
}

/** Ana sayfa mı? */
const isLandingSlug = (slug: string) => slug === "giris/index";

export function DocsContent({ slug, onNavigate }: DocsContentProps) {
  const isLanding = isLandingSlug(slug);

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

  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const handleProseClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName.toLowerCase() === "img" && target.classList.contains("docs-screenshot")) {
      setZoomedImg((target as HTMLImageElement).src);
    }
  };

  return (
    <main className="docs-main">
      <div className={`docs-content-wrapper ${isLanding ? "docs-content-wrapper--landing" : ""}`}>

        {/* Hero alanı — sadece ana sayfada */}
        {isLanding && (
          <div className="docs-hero">
            <div className="docs-hero-badge">
              <BookOpen size={14} />
              Dokümantasyon
            </div>
            <h1 className="docs-hero-title">Papirus-AI Dokümantasyonu</h1>
            <p className="docs-hero-subtitle">
              Yapay zeka destekli yazılı sınav değerlendirme platformu.
            </p>
            <p className="docs-hero-desc">
              Yazılı sınav kağıtlarını yükleyin, değerlendirme kriterlerini tanımlayın,
              AI destekli analiz başlatın ve sonuçları verimli şekilde yönetin.
            </p>
          </div>
        )}

        {/* Breadcrumb — ana sayfa değilse */}
        {!isLanding && (
          <nav className="docs-breadcrumb" aria-label="Breadcrumb">
            <a href="/dokuman/" onClick={(e) => handleNavClick("giris/index", e)}>Docs</a>
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

        {/* Markdown içerik */}
        <article
          className={`docs-prose ${isLanding ? "docs-prose--landing" : ""}`}
          dangerouslySetInnerHTML={{ __html: html }}
          onClick={handleProseClick}
        />

        {/* Kurumsal güven bölümü — sadece ana sayfada */}
        {isLanding && (
          <section className="docs-trust">
            <h2 className="docs-trust-title">Akademik Kurumlar İçin Geliştirildi</h2>
            <div className="docs-trust-grid">
              <div className="docs-trust-card">
                <Cpu className="docs-trust-card-icon" size={22} />
                <h3>Yapay Zeka Destekli Değerlendirme</h3>
                <p>Rubric tabanlı AI analizi ile açık uçlu soruları otomatik değerlendirin.</p>
              </div>
              <div className="docs-trust-card">
                <Users className="docs-trust-card-icon" size={22} />
                <h3>İnsan Kontrolü Destekli</h3>
                <p>Her AI sonucunu akademisyen onayıyla kesinleştirin, tam kontrol sizde.</p>
              </div>
              <div className="docs-trust-card">
                <Shield className="docs-trust-card-icon" size={22} />
                <h3>Güvenli Doküman İşleme</h3>
                <p>Sınav kağıtları şifreli kanallarla işlenir, verileriniz güvende.</p>
              </div>
              <div className="docs-trust-card">
                <FileCheck className="docs-trust-card-icon" size={22} />
                <h3>Rubric Tabanlı Puanlama</h3>
                <p>Standartlaştırılmış değerlendirme kriterleri ile tutarlı puanlama.</p>
              </div>
              <div className="docs-trust-card">
                <BarChart3 className="docs-trust-card-icon" size={22} />
                <h3>Detaylı Analitik</h3>
                <p>Öğrenci ve soru bazlı analizler, performans grafikleri ve raporlar.</p>
              </div>
              <div className="docs-trust-card">
                <BookOpen className="docs-trust-card-icon" size={22} />
                <h3>Ölçeklenebilir Altyapı</h3>
                <p>Yüzlerce kağıdı toplu yükleyin, AI ile dakikalar içinde değerlendirin.</p>
              </div>
            </div>
          </section>
        )}

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

      {zoomedImg && (
        <div 
          className="docs-image-modal" 
          onClick={() => setZoomedImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="docs-image-modal-close" onClick={() => setZoomedImg(null)}>
            <X size={24} />
          </button>
          <img src={zoomedImg} alt="Büyütülmüş görsel" className="docs-image-modal-content" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
