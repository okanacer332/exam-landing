/**
 * Vite import.meta.glob ile docs/ klasöründeki tüm .md dosyaları
 * ?raw query → dosyayı ham string olarak import eder (URL değil, içerik)
 * eager: true → build time'da bundle'a dahil edilir
 */
// @ts-ignore — Vite'a özel API, TypeScript tanımıyor ama build'de çalışır
const mdModules = import.meta.glob("/docs/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/**
 * slug → markdown string döner
 * slug örnek: "giris/papirus-ai-nedir"
 */
export function getDocContent(slug: string, locale: "tr" | "en" = "tr"): string {
  try {
    const localizedKey = `/docs/${locale}/${slug}.md`;
    const localizedRaw = mdModules[localizedKey];
    if (typeof localizedRaw === "string" && localizedRaw.trim() !== "") {
      return transformImagePaths(localizedRaw);
    }
    const key = `/docs/${slug}.md`;
    const raw = mdModules[key];
    if (typeof raw === "string" && raw.trim() !== "") {
      return transformImagePaths(raw);
    }
  } catch {
    // glob hatasını sessizce yakala
  }
  return generatePlaceholder(slug, locale);
}

/**
 * Tüm içerikleri döner (arama özelliği için)
 */
export function getAllDocsContent(): Record<string, string> {
  return mdModules;
}

/**
 * Markdown içindeki relative image path'leri absolute path'lere dönüştürür.
 * ../medya/screenshots/... → /docs-media/screenshots/...
 * ./medya/screenshots/... → /docs-media/screenshots/...
 */
function transformImagePaths(md: string): string {
  return md
    .replace(/!\[([^\]]*)\]\(\.\.\/medya\//g, "![$1](/docs-media/")
    .replace(/!\[([^\]]*)\]\(\.\/medya\//g, "![$1](/docs-media/")
    .replace(/!\[([^\]]*)\]\(medya\//g, "![$1](/docs-media/");
}

function generatePlaceholder(slug: string, locale: "tr" | "en" = "tr"): string {
  const parts = slug.split("/");
  const rawName = parts[parts.length - 1];
  const name = rawName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (locale === "en") {
    return `# ${name}

This documentation page is being prepared.

## Overview

Papirus AI supports teacher-controlled written exam reading, answer-key based grading, source-library based grading, institutional workspaces, and localized TR/EN output.

For support, contact [info@papirus-ai.com](mailto:info@papirus-ai.com).
`;
  }

  return `# ${name}

> Bu sayfa hazırlanıyor. Yakında burada kapsamlı içerik ve ekran görüntüleri yer alacak.

## Genel Bakış

Bu dokümantasyon sayfası içerik eklenmesi için hazır durumda. Aşağıdaki konular yakında eklenecek:

- Genel bakış ve amaç
- Adım adım kullanım rehberi  
- Ekran görüntüleri ile görsel anlatım
- Sık yapılan hatalar ve çözümleri

---

*Sorularınız için [info@papirus-ai.com](mailto:info@papirus-ai.com) adresine ulaşabilirsiniz.*
`;
}
