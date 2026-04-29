import Link from "next/link";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand-mark" href="/">
          <span className="brand-orbit" />
          <span>
            <strong>{content.brand.name}</strong>
            <small>{content.brand.shortDescription}</small>
          </span>
        </Link>
        <nav aria-label="Ana menü">
          <a href="#akis">Akış</a>
          <a href="#belgeler">Belgeler</a>
          <a href="#demo">Demo</a>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>
            {content.hero.title} <span>{content.hero.accent}</span>
          </h1>
          <p className="hero-description">{content.hero.description}</p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">
              {content.hero.primaryCta}
            </a>
            <Link className="button ghost" href="/admin">
              {content.hero.secondaryCta}
            </Link>
          </div>
          <div className="metric-row">
            {content.metrics.map((metric) => (
              <div className="metric-card" key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="scanner-card" aria-label="Sınav kağıdı okuma önizlemesi">
          <div className="scanner-toolbar">
            <span />
            <span />
            <span />
          </div>
          <div className="paper-preview">
            <div className="paper-line strong" />
            <div className="question-block active">
              <b>1. Soru (30)</b>
              <p>Beklenen cevap metni ve anahtar kavramlar...</p>
            </div>
            <div className="question-block">
              <b>2. Soru (25)</b>
              <p>Öğrenci cevabı ile referans cevap eşleştiriliyor.</p>
            </div>
            <div className="scan-beam" />
          </div>
          <div className="ai-note">
            <span>AI kontrol notu</span>
            <p>“Soru 1’de kavramsal açıklama var, örnek eksik olabilir.”</p>
          </div>
        </div>
      </section>

      <section className="audience-section" aria-labelledby="audience-title">
        <div className="section-heading">
          <p className="eyebrow">Kimin için?</p>
          <h2 id="audience-title">Sınav yükünü ekip içinde daha görünür ve yönetilebilir hale getirir.</h2>
        </div>
        <div className="feature-grid three">
          {content.audiences.map((audience) => (
            <article className="soft-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="akis" aria-labelledby="workflow-title">
        <div className="section-heading narrow">
          <p className="eyebrow">Ürün akışı</p>
          <h2 id="workflow-title">Kağıttan veriye, veriden kontrollü değerlendirmeye.</h2>
        </div>
        <div className="timeline">
          {content.workflow.map((item) => (
            <article className="timeline-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="belgeler">
        <div>
          <p className="eyebrow">Belge konseptleri</p>
          <h2>Referans, teslim ve rapor aynı dilde konuşsun.</h2>
          <p className="section-copy">
            Landing bu üç ana belgeyi merkeze alıyor. İleride gerçek ürün ekranları, demo formu ve video
            içerikleri buradan kontrollü biçimde büyütülebilir.
          </p>
        </div>
        <div className="document-stack">
          {content.documents.map((document) => (
            <article className="document-card" key={document.title}>
              <span>{document.tag}</span>
              <h3>{document.title}</h3>
              <p>{document.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="eyebrow">Temel vaat</p>
          <h2 id="features-title">Otomasyon değil, güvenli hız kazancı.</h2>
        </div>
        <div className="feature-grid">
          {content.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="video-section" id="demo">
        <div className="video-frame">
          <div className="play-button" aria-hidden="true" />
          <div>
            <span>{content.video.duration}</span>
            <h2>{content.video.title}</h2>
            <p>{content.video.description}</p>
            {content.video.url ? (
              <a href={content.video.url} target="_blank" rel="noreferrer">
                Videoyu aç
              </a>
            ) : (
              <small>{content.video.posterHint}</small>
            )}
          </div>
        </div>
      </section>

      <section className="admin-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Kontrol merkezi</p>
          <h2>Landing ayrı repoda, içerik admin panelinde.</h2>
        </div>
        <div className="feature-grid three">
          {content.adminPitch.map((item) => (
            <article className="soft-card contrast" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="section-heading narrow">
          <p className="eyebrow">Kısa cevaplar</p>
          <h2>Ürünün sınırını en baştan net tutuyoruz.</h2>
        </div>
        <div className="faq-list">
          {content.faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>{content.brand.name} ayrı landing reposu olarak Docker ve cloud deploy hattına hazırlandı.</p>
        <Link href="/admin">Admin paneli</Link>
      </footer>
    </main>
  );
}
