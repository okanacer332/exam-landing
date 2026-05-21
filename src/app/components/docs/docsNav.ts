import type { Locale } from "../../i18n";

export interface DocItem {
  title: string;
  slug: string;
}

export interface DocSection {
  section: string;
  icon: string;
  items: DocItem[];
}

export const docsNavTr: DocSection[] = [
  {
    section: "Başlarken",
    icon: "→",
    items: [
      { title: "Genel Bakış", slug: "giris/index" },
      { title: "Papirus AI Nedir?", slug: "giris/papirus-ai-nedir" },
      { title: "Nasıl Çalışır?", slug: "giris/nasil-calisir" },
      { title: "Temel Özellikler", slug: "giris/temel-ozellikler" },
      { title: "Güvenlik ve Gizlilik", slug: "giris/guvenlik-ve-gizlilik" },
    ],
  },
  {
    section: "İş Akışları",
    icon: "•",
    items: [
      { title: "Cevap Anahtarı Oluşturma", slug: "is-akislari/cevap-anahtari-olusturma" },
      { title: "Kaynak Havuzu ile Değerlendirme", slug: "is-akislari/kaynak-havuzu-ile-degerlendirme" },
      { title: "Öğrenci Kağıdı Yükleme", slug: "is-akislari/ogrenci-kagidi-yukleme" },
      { title: "AI Değerlendirmesi Başlatma", slug: "is-akislari/ai-degerlendirmesi-baslatma" },
      { title: "Sonuçları İnceleme", slug: "is-akislari/sonuclari-inceleme" },
    ],
  },
  {
    section: "Özellikler",
    icon: "•",
    items: [
      { title: "OCR Sistemi", slug: "ozellikler/ocr-sistemi" },
      { title: "AI Feedback Üretimi", slug: "ozellikler/ai-feedback-uretimi" },
      { title: "Çoklu Dil Desteği", slug: "ozellikler/coklu-dil-destegi" },
    ],
  },
];

export const docsNavEn: DocSection[] = [
  {
    section: "Getting Started",
    icon: "→",
    items: [
      { title: "Overview", slug: "giris/index" },
      { title: "What is Papirus AI?", slug: "giris/papirus-ai-nedir" },
      { title: "How It Works", slug: "giris/nasil-calisir" },
      { title: "Core Features", slug: "giris/temel-ozellikler" },
      { title: "Security and Privacy", slug: "giris/guvenlik-ve-gizlilik" },
    ],
  },
  {
    section: "Workflows",
    icon: "•",
    items: [
      { title: "Create an Answer Key", slug: "is-akislari/cevap-anahtari-olusturma" },
      { title: "Source Library Grading", slug: "is-akislari/kaynak-havuzu-ile-degerlendirme" },
      { title: "Upload Student Papers", slug: "is-akislari/ogrenci-kagidi-yukleme" },
      { title: "Run AI Grading", slug: "is-akislari/ai-degerlendirmesi-baslatma" },
      { title: "Review Results", slug: "is-akislari/sonuclari-inceleme" },
    ],
  },
  {
    section: "Features",
    icon: "•",
    items: [
      { title: "OCR System", slug: "ozellikler/ocr-sistemi" },
      { title: "AI Feedback", slug: "ozellikler/ai-feedback-uretimi" },
      { title: "Localization", slug: "ozellikler/coklu-dil-destegi" },
    ],
  },
];

export function getDocsNav(locale: Locale): DocSection[] {
  return locale === "en" ? docsNavEn : docsNavTr;
}

export const docsNav = docsNavTr;

export function getAllDocItems(locale: Locale): (DocItem & { section: string })[] {
  return getDocsNav(locale).flatMap((s) => s.items.map((item) => ({ ...item, section: s.section })));
}

export const allDocItems = getAllDocItems("tr");

export function getAdjacentDocs(slug: string, locale: Locale = "tr") {
  const flat = getAllDocItems(locale);
  const idx = flat.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
