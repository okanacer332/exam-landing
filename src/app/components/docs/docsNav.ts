export interface DocItem {
  title: string;
  slug: string;
}

export interface DocSection {
  section: string;
  icon: string;
  items: DocItem[];
}

export const docsNav: DocSection[] = [
  {
    section: "Başlarken",
    icon: "🚀",
    items: [
      { title: "Genel Bakış", slug: "giris/index" },
      { title: "Papirus AI Nedir?", slug: "giris/papirus-ai-nedir" },
      { title: "Nasıl Çalışır?", slug: "giris/nasil-calisir" },
      { title: "Temel Özellikler", slug: "giris/temel-ozellikler" },
      { title: "AI Değerlendirme", slug: "giris/ai-degerlendirme-genel-bakis" },
      { title: "Desteklenen Sınav Türleri", slug: "giris/desteklenen-sinav-turleri" },
      { title: "Güvenlik ve Gizlilik", slug: "giris/guvenlik-ve-gizlilik" },
      { title: "SSS", slug: "giris/sss" },
    ],
  },
  {
    section: "Hızlı Başlangıç",
    icon: "⚡",
    items: [
      { title: "Hesap Oluşturma", slug: "getting-started/hesap-olusturma" },
      { title: "Kurulum ve Erişim", slug: "getting-started/kurulum-ve-erisim" },
      { title: "Hızlı Başlangıç Rehberi", slug: "getting-started/hizli-baslangic" },
      { title: "İlk Sınav Akışı", slug: "getting-started/ilk-sinav-akisi" },
      { title: "Dashboard Genel Bakış", slug: "getting-started/dashboard-genel-bakis" },
    ],
  },
  {
    section: "Temel Kavramlar",
    icon: "📚",
    items: [
      { title: "Sınavlar", slug: "temel-kavramlar/sinavlar" },
      { title: "Sorular", slug: "temel-kavramlar/sorular" },
      { title: "Rubric Sistemi", slug: "temel-kavramlar/rubric-sistemi" },
      { title: "AI Analizi", slug: "temel-kavramlar/ai-analizi" },
      { title: "Cevap Anahtarları", slug: "temel-kavramlar/cevap-anahtarlari" },
      { title: "Öğrenci Kağıtları", slug: "temel-kavramlar/ogrenci-kagitlari" },
      { title: "Puanlama Sistemi", slug: "temel-kavramlar/puanlama-sistemi" },
      { title: "Manuel İnceleme", slug: "temel-kavramlar/manuel-inceleme" },
      { title: "Raporlar", slug: "temel-kavramlar/raporlar" },
    ],
  },
  {
    section: "İş Akışları",
    icon: "🔄",
    items: [
      { title: "Cevap Anahtarı Oluşturma", slug: "is-akislari/cevap-anahtari-olusturma" },
      { title: "Öğrenci Kağıdı Yükleme", slug: "is-akislari/ogrenci-kagidi-yukleme" },
      { title: "AI Değerlendirmesi Başlatma", slug: "is-akislari/ai-degerlendirmesi-baslatma" },
      { title: "Sonuçları İnceleme", slug: "is-akislari/sonuclari-inceleme" },
      { title: "Sonuçları Onaylama", slug: "is-akislari/sonuclari-onaylama" },
      { title: "Sınıfım Modülü", slug: "is-akislari/sinifim-modulu" },
    ],
  },
  {
    section: "Özellikler",
    icon: "✨",
    items: [
      { title: "OCR Sistemi", slug: "ozellikler/ocr-sistemi" },
      { title: "El Yazısı Okuma", slug: "ozellikler/el-yazisi-okuma" },
      { title: "Görsel İşleme", slug: "ozellikler/gorsel-isleme" },
      { title: "AI Feedback Üretimi", slug: "ozellikler/ai-feedback-uretimi" },
      { title: "Akıllı Cevap Eşleştirme", slug: "ozellikler/akilli-cevap-eslestirme" },
      { title: "Güven Skorlaması", slug: "ozellikler/guven-skorlamasi" },
      { title: "PDF İşleme", slug: "ozellikler/pdf-isleme" },
      { title: "Toplu İşleme", slug: "ozellikler/toplu-isleme" },
      { title: "Değerlendirme Geçmişi", slug: "ozellikler/degerlendirme-gecmisi" },
      { title: "Çoklu Dil Desteği", slug: "ozellikler/coklu-dil-destegi" },
    ],
  },
  {
    section: "Arayüz",
    icon: "🖥️",
    items: [
      { title: "Dashboard", slug: "arayuz/dashboard" },
      { title: "Sınav Yönetim Ekranı", slug: "arayuz/sinav-yonetim-ekrani" },
      { title: "Kağıt İnceleme Ekranı", slug: "arayuz/kagit-inceleme-ekrani" },
      { title: "Puanlama Paneli", slug: "arayuz/puanlama-paneli" },
      { title: "Analitik Ekranı", slug: "arayuz/analitik-ekrani" },
      { title: "Ayarlar", slug: "arayuz/ayarlar" },
      { title: "Kullanıcı Profili", slug: "arayuz/kullanici-profili" },
    ],
  },
  {
    section: "Yönetim",
    icon: "⚙️",
    items: [
      { title: "Organizasyon Yönetimi", slug: "yonetim/organizasyon-yonetimi" },
      { title: "Yetki Yönetimi", slug: "yonetim/yetki-yonetimi" },
      { title: "Eğitmen Rolleri", slug: "yonetim/egitmen-rollleri" },
      { title: "Depolama Yönetimi", slug: "yonetim/depolama-yonetimi" },
      { title: "Kullanım İzleme", slug: "yonetim/kullanim-izleme" },
      { title: "Audit Logları", slug: "yonetim/audit-loglari" },
    ],
  },
  {
    section: "Sorun Giderme",
    icon: "🔧",
    items: [
      { title: "Yaygın Problemler", slug: "sorun-giderme/yaygin-problemler" },
      { title: "Yükleme Hataları", slug: "sorun-giderme/yukleme-hatalari" },
      { title: "AI Analiz Hataları", slug: "sorun-giderme/ai-analiz-hatalari" },
      { title: "Okunamayan Kağıtlar", slug: "sorun-giderme/okunamayan-kagitlar" },
      { title: "Yanlış Puanlama", slug: "sorun-giderme/yanlis-puanlama" },
      { title: "Performans Sorunları", slug: "sorun-giderme/performans-sorunlari" },
    ],
  },
];

/** Tüm slug'ları düz liste olarak döner (arama için) */
export const allDocItems: (DocItem & { section: string })[] = docsNav.flatMap((s) =>
  s.items.map((item) => ({ ...item, section: s.section }))
);

/** Slug → bir sonraki / bir önceki sayfa */
export function getAdjacentDocs(slug: string) {
  const flat = allDocItems;
  const idx = flat.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
