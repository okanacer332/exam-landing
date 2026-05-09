/**
 * Vite import.meta.glob ile docs/ klasöründeki tüm .md dosyaları
 * eager: true → build time'da bundle'a dahil edilir, runtime fetch yok
 */
const mdModules = import.meta.glob("/docs/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/**
 * slug → markdown string döner
 * slug örnek: "giris/papirus-ai-nedir"
 */
export function getDocContent(slug: string): string {
  const key = `/docs/${slug}.md`;
  const raw = mdModules[key];
  if (!raw || raw.trim() === "") {
    return generatePlaceholder(slug);
  }
  return raw;
}

function generatePlaceholder(slug: string): string {
  const parts = slug.split("/");
  const name = parts[parts.length - 1]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return `# ${name}

> Bu sayfa hazırlanıyor. Yakında burada kapsamlı içerik ve ekran görüntüleri yer alacak.

## İçerik

Bu dokümantasyon sayfası şu anda içerik eklenmesi için hazır durumda. Aşağıdaki başlıklar yakında doldurulacak:

- Genel bakış ve amaç
- Adım adım kullanım rehberi
- Ekran görüntüsü ile görsel anlatım
- Sık yapılan hatalar ve çözümleri

---

*Güncel bilgi için [info@papirus-ai.com](mailto:info@papirus-ai.com) adresine ulaşabilirsiniz.*
`;
}
