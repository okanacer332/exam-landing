import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "@/lib/content";
import CountdownBar from "./components/CountdownBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:7331";
  const authUrl = `${appUrl.replace(/\/$/, "")}/giris`;

  return (
    <main className="site-shell container">
      <CountdownBar />

      <header className="topbar">
        <Link className="brand-mark" href="/" aria-label="Papirus AI Ana Sayfa">
          <Image src="/papirus-logo.svg" alt="Papirus AI logosu" width={140} height={28} priority />
        </Link>

        <div className="topbar-actions">
          <nav aria-label="Ana menü">
            <a href="#akis">Nasıl çalışır?</a>
            <a href="#belgeler">Süreç</a>
            <a href="#demo">Önizleme</a>
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

      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{content.hero.eyebrow}</span>
            <h1 id="hero-heading">
              {content.hero.title} <span>{content.hero.accent}</span>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions">
              <a className="button primary" href={authUrl}>
                Kayıt ol
              </a>
              <a className="button ghost" href="#akis">
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="audience-title">
        <div className="section-heading">
          <span className="eyebrow">Kimler için tasarlandı?</span>
          <h2 id="audience-title">Akademik değerlendirmede güvenilir asistanınız.</h2>
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

      <section className="section" id="akis" aria-labelledby="workflow-title">
        <div className="section-heading">
          <span className="eyebrow">Nasıl çalışır?</span>
          <h2 id="workflow-title">Beş adımda daha düzenli değerlendirme süreci.</h2>
          <p style={{ marginTop: "12px", maxWidth: "640px" }}>
            Papirus AI, sınav değerlendirme sürecini tek bir şeffaf akışta toplar. Kararınızı devralmaz;
            karara varmanız için gereken bilgiyi uzmanlığınıza sunar.
          </p>
        </div>

        {content.workflow
          .filter((item) => item.step === "intro")
          .map((item) => (
            <div key={item.step} className="workflow-intro">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}

        <div className="timeline" role="list">
          {content.workflow
            .filter((item) => item.step !== "intro")
            .map((item) => (
              <article className="timeline-card" key={item.step} role="listitem">
                <span className="step-dot" aria-hidden="true">
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
        </div>
      </section>

      <section className="section" id="demo">
        <div className="video-frame">
          <div className="play-button" aria-label="Demo videosunu oynat" role="button" tabIndex={0} />
          <div>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>
              {content.video.duration}
            </span>
            <h2 style={{ color: "var(--paper)" }}>{content.video.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.75)" }}>{content.video.description}</p>
            {content.video.url ? (
              <a
                href={content.video.url}
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block", marginTop: "16px", color: "var(--accent)", fontWeight: "bold" }}
              >
                Videoyu aç
              </a>
            ) : (
              <small
                style={{
                  color: "rgba(255,255,255,0.55)",
                  display: "block",
                  fontSize: "0.875rem",
                  marginTop: "16px",
                }}
              >
                {content.video.posterHint}
              </small>
            )}
          </div>
        </div>
      </section>

      <section className="section" id="sss">
        <div className="section-heading">
          <span className="eyebrow">Sık sorulan sorular</span>
          <h2>Papirus AI hakkında merak ettikleriniz</h2>
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
        <div className="footer-brand">
          <Image src="/papirus-logo.svg" alt="Papirus AI logosu" width={120} height={24} />
          <p style={{ fontSize: "0.85rem", marginTop: "10px" }}>
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
