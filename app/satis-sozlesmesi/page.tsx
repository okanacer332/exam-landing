import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Satış Sözleşmesi | Papirus AI",
  description: "Papirus AI mesafeli satış sözleşmesi. Hizmet koşulları, ödeme ve teslimat bilgileri.",
};

export default function SatisSozlesmesi() {
  const today = new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main style={{ minHeight: "100vh", padding: "0 16px", fontFamily: "var(--font-body), sans-serif", background: "var(--paper)" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 0 80px" }}>

        <nav style={{ marginBottom: "40px" }}>
          <Link href="/" style={{ color: "var(--muted)", fontSize: "0.875rem", textDecoration: "none" }}>
            ← Papirus AI
          </Link>
        </nav>

        <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Son güncelleme: {today}
        </p>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "8px", lineHeight: 1.2 }}>
          Mesafeli Satış Sözleşmesi
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "48px", lineHeight: 1.7 }}>
          Bu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında düzenlenmiştir.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 1 — Taraflar</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--muted)", lineHeight: 1.8 }}>
              <p><strong style={{ color: "#0F172A" }}>Satıcı:</strong> Papirus AI — destek@papirus-ai.com</p>
              <p><strong style={{ color: "#0F172A" }}>Alıcı:</strong> Sisteme kayıt esnasında bildirilen ad, soyad ve iletişim bilgilerine sahip kişi ya da kurumsal kullanıcı.</p>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 2 — Sözleşmenin Konusu</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Bu sözleşme, Satıcı tarafından sunulan Papirus AI akademik sınav değerlendirme asistanı hizmetinin (SaaS) satışına ilişkin tarafların hak ve yükümlülüklerini düzenler. Hizmet, yalnızca dijital ortamda sunulmakta olup fiziksel teslimat söz konusu değildir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 3 — Hizmet Kapsamı</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Papirus AI; öğrenci sınav kağıtlarının referans cevap anahtarıyla karşılaştırılması ve öğretim üyelerine ön değerlendirme sunulması işlevlerini yerine getirir. Yapay zeka tarafından üretilen tüm öneriler danışma niteliğinde olup nihai not kararı daima kullanıcıya aittir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 4 — Ücret ve Ödeme</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Abonelik ücreti, kullanıcı tarafından seçilen plana göre belirlenir ve kayıt aşamasında açıkça gösterilir. Ödemeler, kayıt tarihinde başlar ve seçilen abonelik dönemine (aylık/yıllık) göre otomatik olarak yenilenir. Kullanıcı, yenileme tarihinden önce aboneliğini iptal edebilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 5 — Teslimat</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Hizmet, ödemenin onaylanmasının ardından derhal dijital ortamda kullanıcıya açılır. Hizmete erişim, kullanıcı hesabı üzerinden sağlanır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 6 — Cayma Hakkı</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Tüketici, sözleşme tarihinden itibaren 14 (on dört) gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart üstlenmeksizin cayma hakkını kullanabilir. Cayma bildirimi yazılı olarak <strong>destek@papirus-ai.com</strong> adresine iletilmelidir. Dijital içeriklerde cayma hakkı; kullanıcının açık onayıyla hizmetin kullanılmaya başlanması halinde sona erer (Mesafeli Sözleşmeler Yönetmeliği Madde 15/1-ğ).
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>Madde 7 — Uyuşmazlık Çözümü</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Uyuşmazlıklarda öncelikle Tüketici Hakem Heyeti'ne başvurulabilir. Sınır değerlerin üzerindeki uyuşmazlıklar için Tüketici Mahkemeleri yetkilidir. Bu sözleşme Türk Hukuku'na tabidir.
            </p>
          </section>

        </div>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(15,23,42,0.08)", display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/iade-politikasi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>İade Politikası</Link>
          <Link href="/gizlilik-politikasi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Gizlilik Politikası</Link>
          <a href="mailto:destek@papirus-ai.com" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Bize Ulaşın</a>
        </div>

      </div>
    </main>
  );
}
