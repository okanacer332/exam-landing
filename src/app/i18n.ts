export type Locale = "tr" | "en";

export function normalizeLocale(value: unknown): Locale {
  return value === "en" ? "en" : "tr";
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname;
}

export function withLocalePath(locale: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "tr") return normalized;
  if (normalized === "/") return "/en";
  if (normalized.startsWith("/dokuman")) return normalized.replace(/^\/dokuman/, "/en/docs");
  return `/en${normalized}`;
}

export function getOppositeLocalePath(pathname: string, nextLocale: Locale) {
  const current = stripLocalePrefix(pathname).replace(/^\/docs/, "/dokuman");
  return withLocalePath(nextLocale, current);
}

export const landingCopy = {
  tr: {
    nav: {
      scan: "Tarama",
      compare: "Karşılaştırma",
      analysis: "Analiz",
      faq: "SSS",
      pricing: "Fiyatlandırma",
      docs: "Doküman",
      login: "Giriş",
      try: "Deneyin",
      tryFree: "Ücretsiz deneyin",
      menuOpen: "Menüyü aç",
      menuClose: "Menüyü kapat",
    },
    panels: [
      {
        id: "hero",
        eyebrow: "Papirus AI",
        title: "Değerlendirme yükünü azaltın, akademik odağınızı koruyun.",
        text: "Papirus AI, yazılı sınav evraklarını düzenli biçimde okur, çözüm adımlarını izler ve puanlama sürecini öğretim elemanının kontrolünde şeffaflaştırır.",
      },
      {
        id: "scan",
        eyebrow: "Tarama",
        title: "Sınav evrakı, soru düzeyinde okunabilir veriye dönüşür.",
        text: "Kağıt üzerindeki soru alanları, yanıt boşlukları ve puan bölümleri ayrı katmanlar halinde ayrışır.",
      },
      {
        id: "ai-compare",
        eyebrow: "AI Karşılaştırma",
        title: "Papirus, yanıtı rubrikle ve çözüm akışıyla birlikte değerlendirir.",
        text: "Cevap anahtarı, puan ölçütleri ve öğrencinin işlem adımları aynı ekranda hizalanır; önerilen puan her zaman öğretim elemanının denetimine açık kalır.",
      },
      {
        id: "compare",
        eyebrow: "Karşılaştırma",
        title: "Adil değerlendirme. Her adımda mantık takibi.",
        text: "Öğretmen anahtarı ve öğrenci kağıdı eşleşir; doğru adımlar, riskli alanlar ve eksik gerekçeler görünür hale gelir.",
      },
      {
        id: "dashboard",
        eyebrow: "Sonuç",
        title: "Sınıfın akademik performans profili tek ekranda netleşir.",
        text: "Papirus; soru bazlı başarıyı, kazanım kırılımlarını ve kontrol gerektiren yanıtları öğretim elemanının denetimine hazır bir özet halinde sunar.",
      },
    ],
    mobileMoments: [
      { title: "El yazısı tanımlanıyor", text: "Kağıt sabit kalır, Papirus cevap alanlarını satır satır yakalar." },
      { title: "Cevaplar eşleştiriliyor", text: "Öğretmen anahtarı ile öğrenci çözümü aynı soru mantığında buluşur." },
      { title: "Taslak puan hazır", text: "Hoca son kararı vermeden önce gerekçeli ve kontrol edilebilir sonuç görür." },
    ],
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorulara net yanıtlar.",
      text: "Satın alma, güvenlik ve akademik kontrol tarafında ilk bakışta bilinmesi gerekenleri sade tuttuk.",
      items: [
        ["Papirus AI sınav kağıdını tamamen otomatik mi puanlar?", "Papirus AI değerlendirme taslağı üretir; son karar ve kontrol her zaman öğretim elemanında kalır."],
        ["El yazısı ve çözüm adımları nasıl ele alınır?", "Sistem yanıt alanlarını soru düzeyinde ayrıştırır, çözüm akışını referans rubrikle karşılaştırır ve kontrol gerektiren noktaları görünür hale getirir."],
        ["Kaynak havuzu ile değerlendirme yapılabilir mi?", "Evet. Öğretmen kitap, PDF veya ders kaynağı yükleyerek kaynak temelli cevap çerçevesi oluşturabilir ve öğrenci kağıtlarını buna göre okutabilir."],
        ["Kurumsal kullanım destekleniyor mu?", "Evet. Kurum admini öğretmen davet edebilir, kurum verilerini ve sınav istatistiklerini yönetebilir."],
      ],
    },
    pricing: {
      eyebrow: "Fiyatlandırma",
      title: "Kullanım hacminize göre sade paketler.",
      text: "Konsola girin, hesabınızı oluşturun ve ilk değerlendirme akışını deneyin.",
      recommended: "Önerilen",
      beta: "Beta sürümü devam etmektedir...",
      plans: ["Başlangıç", "Akademik", "Kurum"],
    },
    footer: {
      legal: "Yasal",
      membership: "Üyelik ve Paketler",
      product: "Ürünler",
      contact: "Bize Ulaşın",
      contactText: "Teknik destek, abonelik ve kurumsal kullanım soruları için bize ulaşabilirsiniz.",
      securePayment: "Güvenli Ödeme",
      paymentText: "Ödemeler güvenli ödeme altyapısı üzerinden alınır.",
      copyright: "Copyright © 2026 Papirus AI. Tüm hakları saklıdır.",
      secure: "Akademik veriler güvenli konsol akışında işlenir.",
    },
  },
  en: {
    nav: {
      scan: "Scanning",
      compare: "Comparison",
      analysis: "Analytics",
      faq: "FAQ",
      pricing: "Pricing",
      docs: "Docs",
      login: "Sign in",
      try: "Try",
      tryFree: "Try for free",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    panels: [
      {
        id: "hero",
        eyebrow: "Papirus AI",
        title: "Reduce grading load while keeping academic control.",
        text: "Papirus AI reads written exam papers, tracks solution steps, and makes assessment transparent under the instructor's supervision.",
      },
      {
        id: "scan",
        eyebrow: "Scanning",
        title: "Exam papers become question-level readable data.",
        text: "Question areas, answer spaces, and point fields are separated into clear layers for review.",
      },
      {
        id: "ai-compare",
        eyebrow: "AI Comparison",
        title: "Papirus evaluates answers against the rubric and solution flow.",
        text: "The answer key, grading criteria, and student solution steps are aligned on one screen; the suggested score stays reviewable by the instructor.",
      },
      {
        id: "compare",
        eyebrow: "Comparison",
        title: "Fair assessment with reasoning traceability.",
        text: "The teacher key and student paper are matched question by question, making correct steps and risky gaps visible.",
      },
      {
        id: "dashboard",
        eyebrow: "Result",
        title: "The class performance profile becomes clear in one view.",
        text: "Papirus summarizes question performance, learning outcome signals, and answers that need instructor review.",
      },
    ],
    mobileMoments: [
      { title: "Handwriting is recognized", text: "Papirus captures answer areas line by line while the paper stays readable." },
      { title: "Answers are matched", text: "Teacher references and student solutions meet under the same question logic." },
      { title: "Draft score is ready", text: "The instructor sees a justified, reviewable result before making the final decision." },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Clear answers to common questions.",
      text: "The essentials around academic control, security, and institutional use are kept simple.",
      items: [
        ["Does Papirus AI grade exams fully automatically?", "Papirus AI produces a grading draft; the final decision and control always remain with the instructor."],
        ["How are handwriting and solution steps handled?", "The system separates answers by question, compares the solution flow against the rubric, and surfaces review points."],
        ["Can I grade from a source library?", "Yes. Instructors can upload books, PDFs, or course material, generate a source-based answer frame, and grade student papers against it."],
        ["Is institutional use supported?", "Yes. Institution admins can invite teachers, manage institutional access, and review institution-level statistics."],
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Simple plans by usage volume.",
      text: "Open the console, create your account, and test the first assessment workflow.",
      recommended: "Recommended",
      beta: "Beta version is in progress...",
      plans: ["Starter", "Academic", "Institution"],
    },
    footer: {
      legal: "Legal",
      membership: "Membership",
      product: "Product",
      contact: "Contact",
      contactText: "Reach us for technical support, subscription, and institutional questions.",
      securePayment: "Secure Payment",
      paymentText: "Payments are processed through secure payment infrastructure.",
      copyright: "Copyright © 2026 Papirus AI. All rights reserved.",
      secure: "Academic data is processed through the secure console flow.",
    },
  },
} as const;

export type LandingCopy = (typeof landingCopy)[Locale];
