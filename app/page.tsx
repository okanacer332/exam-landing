import Link from "next/link";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:7331";
  const authUrl = `${appUrl.replace(/\/$/, "")}/enter`;

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand-mark" href="/">
          <span className="brand-symbol">P</span>
          <span>
            <strong>{content.brand.name}</strong>
            <small>{content.brand.shortDescription}</small>
          </span>
        </Link>
        <div className="topbar-actions">
          <nav aria-label="Ana menü">
            <a href="#akis">Akış</a>
            <a href="#belgeler">Belgeler</a>
            <a href="#demo">Demo</a>
            <a href="#sss">SSS</a>
          </nav>
          <div className="auth-actions" aria-label="Hesap işlemleri">
            <a className="button small ghost" href={authUrl}>
              Giriş yap
            </a>
            <a className="button small primary" href={authUrl}>
              Kayıt ol
            </a>
          </div>
        </div>
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
            <a className="button accent" href={authUrl}>
              Kayıt ol
            </a>
            <a className="button ghost" href="#akis">
              Nasıl çalışır?
            </a>
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

        <div className="paper-card" aria-label="Sınav okuma önizlemesi">
          <div className="paper-card-header">
            <span>Referans kağıt</span>
            <strong>Matematik 101</strong>
          </div>
          <div className="paper-preview">
            <div className="paper-line long" />
            <div className="question-block active">
              <b>1. Soru (30)</b>
              <p>Beklenen cevap, anahtar kavramlar ve puan kırılımı ayrılır.</p>
            </div>
            <div className="question-block">
              <b>2. Soru (25)</b>
              <p>Öğrenci yanıtı aynı soru yapısıyla karşılaştırmaya hazırlanır.</p>
            </div>
            <div className="question-block muted">
              <b>Kontrol notu</b>
              <p>Eksik açıklama, güçlü cevap ve hocanın son kararı ayrı tutulur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section" aria-labelledby="audience-title">
        <div className="section-heading">
          <p className="eyebrow">Kimin için?</p>
          <h2 id="audience-title">Sınav dönemlerinde aynı işi tekrar tekrar yapan akademik ekipler için.</h2>
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
          <p className="eyebrow">Akış</p>
          <h2 id="workflow-title">Kağıt yüklenir, sorular ayrılır, kontrol daha düzenli ilerler.</h2>
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
          <p className="eyebrow">Belgeler</p>
          <h2>Referans cevap, öğrenci teslimi ve değerlendirme aynı yapıda tutulur.</h2>
          <p className="section-copy">
            Papirus AI, sınav okuma işini tek bir ekranda toplamak için tasarlanır. Amaç hocanın
            kararını devralmak değil, karar vereceği bilgiyi daha hızlı ve anlaşılır hale getirmektir.
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
          <h2 id="features-title">Daha az dağınıklık, daha hızlı kontrol, hocada kalan son karar.</h2>
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

      <section className="faq-section" id="sss">
        <div className="section-heading narrow">
          <p className="eyebrow">Kısa cevaplar</p>
          <h2>Papirus AI’nin sınırını ve amacını net tutuyoruz.</h2>
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
        <p>{content.brand.name} akademik sınav okuma süreçleri için geliştiriliyor.</p>
        <a href="mailto:destek@papirus-ai.com">destek@papirus-ai.com</a>
      </footer>
    </main>
  );
}
