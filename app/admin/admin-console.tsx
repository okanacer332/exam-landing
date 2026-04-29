"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/types/content";

type AdminConsoleProps = {
  initialContent: SiteContent;
  isAuthenticated: boolean;
};

export function AdminConsole({ initialContent, isAuthenticated }: AdminConsoleProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [content, setContent] = useState(initialContent);
  const [jsonDraft, setJsonDraft] = useState(() => JSON.stringify(initialContent, null, 2));
  const [message, setMessage] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsBusy(true);
    setMessage("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      setMessage(body?.message || "Giriş yapılamadı.");
      setIsBusy(false);
      return;
    }

    router.refresh();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  function updateHero(key: keyof SiteContent["hero"], value: string) {
    setContent((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [key]: value,
      },
    }));
  }

  function updateBrand(key: keyof SiteContent["brand"], value: string) {
    setContent((current) => ({
      ...current,
      brand: {
        ...current.brand,
        [key]: value,
      },
    }));
  }

  function updateVideo(key: keyof SiteContent["video"], value: string) {
    setContent((current) => ({
      ...current,
      video: {
        ...current.video,
        [key]: value,
      },
    }));
  }

  function loadJsonDraft() {
    try {
      const parsed = JSON.parse(jsonDraft) as SiteContent;
      setContent(parsed);
      setMessage("JSON içeriği forma yüklendi. Kaydetmeyi unutma.");
    } catch {
      setMessage("JSON formatında hata var. Virgül ve tırnakları kontrol et.");
    }
  }

  async function saveContent() {
    setIsBusy(true);
    setMessage("");

    const response = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      setMessage(body?.message || "İçerik kaydedilemedi.");
      setIsBusy(false);
      return;
    }

    const savedContent = (await response.json()) as SiteContent;
    setContent(savedContent);
    setJsonDraft(JSON.stringify(savedContent, null, 2));
    setMessage("İçerik kaydedildi. Landing sayfası güncel veriyi okuyacak.");
    setIsBusy(false);
    router.refresh();
  }

  if (!isAuthenticated) {
    return (
      <section className="admin-login-card">
        <div>
          <p className="eyebrow">Yerel içerik girişi</p>
          <h1>Landing içeriğini düzenlemek için giriş yap.</h1>
          <p>
            Varsayılan geliştirme şifresi <strong>admin123</strong>. Yayına çıkmadan önce
            <code> ADMIN_PASSWORD </code> ortam değişkenini değiştir.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <label htmlFor="password">Kontrol şifresi</label>
          <input
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Şifre"
            type="password"
            value={password}
          />
          <button className="button primary" disabled={isBusy} type="submit">
            {isBusy ? "Kontrol ediliyor..." : "Giriş yap"}
          </button>
          {message ? <p className="form-message">{message}</p> : null}
        </form>
      </section>
    );
  }

  return (
    <section className="admin-console">
      <div className="admin-heading">
        <div>
          <p className="eyebrow">İçerik kontrolü</p>
          <h1>Landing metinlerini buradan düzenle.</h1>
          <p>Hero metni, video konsepti ve JSON içerik tek dosyada saklanır.</p>
        </div>
        <button className="button ghost" onClick={handleLogout} type="button">
          Çıkış yap
        </button>
      </div>

      <div className="admin-grid">
        <section className="editor-panel">
          <h2>Hızlı düzenleme</h2>
          <label>
            Marka adı
            <input value={content.brand.name} onChange={(event) => updateBrand("name", event.target.value)} />
          </label>
          <label>
            Kısa açıklama
            <input
              value={content.brand.shortDescription}
              onChange={(event) => updateBrand("shortDescription", event.target.value)}
            />
          </label>
          <label>
            Hero üst etiketi
            <input value={content.hero.eyebrow} onChange={(event) => updateHero("eyebrow", event.target.value)} />
          </label>
          <label>
            Ana başlık
            <textarea value={content.hero.title} onChange={(event) => updateHero("title", event.target.value)} />
          </label>
          <label>
            Vurgu metni
            <textarea value={content.hero.accent} onChange={(event) => updateHero("accent", event.target.value)} />
          </label>
          <label>
            Açıklama
            <textarea
              value={content.hero.description}
              onChange={(event) => updateHero("description", event.target.value)}
            />
          </label>
          <div className="two-columns">
            <label>
              Birincil CTA
              <input
                value={content.hero.primaryCta}
                onChange={(event) => updateHero("primaryCta", event.target.value)}
              />
            </label>
            <label>
              İkincil CTA
              <input
                value={content.hero.secondaryCta}
                onChange={(event) => updateHero("secondaryCta", event.target.value)}
              />
            </label>
          </div>
          <h2>Video konsepti</h2>
          <label>
            Video başlığı
            <input value={content.video.title} onChange={(event) => updateVideo("title", event.target.value)} />
          </label>
          <label>
            Video açıklaması
            <textarea
              value={content.video.description}
              onChange={(event) => updateVideo("description", event.target.value)}
            />
          </label>
          <div className="two-columns">
            <label>
              Süre
              <input value={content.video.duration} onChange={(event) => updateVideo("duration", event.target.value)} />
            </label>
            <label>
              Video URL
              <input value={content.video.url} onChange={(event) => updateVideo("url", event.target.value)} />
            </label>
          </div>
          <label>
            Poster/çekim fikri
            <textarea
              value={content.video.posterHint}
              onChange={(event) => updateVideo("posterHint", event.target.value)}
            />
          </label>
          <button className="button primary" disabled={isBusy} onClick={saveContent} type="button">
            {isBusy ? "Kaydediliyor..." : "İçeriği kaydet"}
          </button>
          {message ? <p className="form-message">{message}</p> : null}
        </section>

        <aside className="json-panel">
          <h2>Gelişmiş JSON editörü</h2>
          <p>Belge kartları, sık sorular, akış adımları ve özellikler bu JSON bloktan değiştirilebilir.</p>
          <textarea spellCheck={false} value={jsonDraft} onChange={(event) => setJsonDraft(event.target.value)} />
          <button className="button ghost" onClick={loadJsonDraft} type="button">
            JSON'u forma yükle
          </button>
        </aside>
      </div>
    </section>
  );
}
