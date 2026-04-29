import Link from "next/link";
import Image from "next/image";
import { getSiteContent } from "@/lib/content";
import CountdownBar from "./components/CountdownBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="site-shell container">
      
      <CountdownBar />

      {/* ─── Header ─────────────────────────────────── */}
      <header className="topbar">
        <Link className="brand-mark" href="/" aria-label="Papirus AI Ana Sayfa">
          <Image
            src="/papirus-logo.svg"
            alt="Papirus AI logosu"
            width={140}
            height={28}
            priority
          />
        </Link>
        <nav aria-label="Ana menü">
          <a href="#akis">Nasıl Çalışır?</a>
          <a href="#belgeler">Süreç</a>
          <a href="#demo">Önizleme</a>
          <a href="#sss">SSS</a>
        </nav>
      </header>

      {/* ─── Hero ───────────────────────────────────── */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{content.hero.eyebrow}</span>
            <h1 id="hero-heading">
              {content.hero.title} <span>{content.hero.accent}</span>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#demo">
                {content.hero.primaryCta}
              </a>
              <a className="button ghost" href="#akis">
                {content.hero.secondaryCta}
              </a>
            </div>

          </div>

          <div className="paper-card" aria-label="Asistan önizlemesi">
            <div className="paper-card-header">
              <span>Referans Anahtarı</span>
              <strong>Fizik 101</strong>
            </div>
            <div className="paper-preview">
              <div className="question-block active">
                <b>Soru 1 (30 Puan)</b>
                <p>İvme ve hız denklemleri doğru kurulmuş, formülasyon net.</p>
              </div>
              <div className="question-block">
                <b>Soru 2 (25 Puan)</b>
                <p>Kısmi doğru. Birim dönüştürme adımı eksik.</p>
              </div>
              <div className="question-block" style={{ background: "rgba(67, 56, 202, 0.05)" }}>
                <b>Asistan Önerisi: 85/100</b>
                <p>Nihai kararınızı bekliyor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Audience ───────────────────────────────── */}
      <section className="section" aria-labelledby="audience-title">
        <div className="section-heading">
          <span className="eyebrow">Kimler İçin Tasarlandı?</span>
          <h2 id="audience-title">Akademik Değerlendirmede Güvenilir Asistanınız.</h2>
        </div>
        <div className="feature-grid three">
          {content.audiences.map((audience) => (
            <article className="card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Workflow / Timeline ─────────────────────── */}
      <section className="section" id="akis" aria-labelledby="workflow-title">
        <div className="section-heading">
          <span className="eyebrow">Nasıl Çalışır?</span>
          <h2 id="workflow-title">Beş Adımda Değerlendirme Süreciniz.</h2>
          <p style={{ marginTop: "12px", maxWidth: "640px" }}>
            Papirus AI, değerlendirme sürecinizi tek bir şeffaf akışta toplar. Kararınızı devralmaz; karara varmanız için gereken bilgiyi sizin uzmanlığınıza sunar.
          </p>
        </div>

        {/* Intro step — plain text, no dot */}
        {content.workflow.filter(w => w.step === "intro").map(item => (
          <div key={item.step} className="workflow-intro">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}

        {/* Numbered steps — dot + line timeline */}
        <div className="timeline" role="list">
          {content.workflow.filter(w => w.step !== "intro").map((item) => (
            <article className="timeline-card" key={item.step} role="listitem">
              <span className="step-dot" aria-hidden="true">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>



      {/* ─── Demo / Video ───────────────────────────── */}
      <section className="section" id="demo">
        <div className="video-frame">
          <div className="play-button" aria-label="Demo videosunu oynat" role="button" tabIndex={0} />
          <div>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>{content.video.duration}</span>
            <h2 style={{ color: "var(--paper)" }}>{content.video.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.75)" }}>{content.video.description}</p>
            {content.video.url ? (
              <a
                href={content.video.url}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", marginTop: "16px", color: "var(--accent)", fontWeight: "bold" }}
              >
                Videoyu Aç
              </a>
            ) : (
              <small style={{ display: "block", marginTop: "16px", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
                {content.video.posterHint}
              </small>
            )}
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────── */}
      <section className="section" id="sss">
        <div className="section-heading">
          <span className="eyebrow">Sık Sorulan Sorular</span>
          <h2>Papirus AI Hakkında Merak Ettikleriniz</h2>
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

      {/* ─── Footer ─────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-brand">
          <Image
            src="/papirus-logo.svg"
            alt="Papirus AI logosu"
            width={120}
            height={24}
          />
          <p style={{ marginTop: "10px", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Papirus AI. Tüm hakları saklıdır.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/satis-sozlesmesi">Satış Sözleşmesi</Link>
          <Link href="/iade-politikasi">İade Politikası</Link>
          <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
          <a href="mailto:destek@papirus-ai.com">İletişim</a>
        </div>
      </footer>

    </main>
  );
}
