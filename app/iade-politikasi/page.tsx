import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İade Politikası | Papirus AI",
  description: "Papirus AI iade ve iptal politikası. Cayma hakkı, iade koşulları ve süreçleri.",
};

export default function IadePolitikasi() {
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
          İade ve İptal Politikası
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "48px", lineHeight: 1.7 }}>
          6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği çerçevesinde hazırlanmıştır.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>1. Cayma Hakkı</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Abonelik başlangıcından itibaren <strong style={{ color: "#0F172A" }}>14 (on dört) takvim günü</strong> içinde herhangi bir gerekçe bildirmeksizin aboneliğinizi iptal edip tam iade talep edebilirsiniz.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>2. Cayma Hakkının İstisnaları</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Aşağıdaki durumlarda cayma hakkı kullanılamaz (Mesafeli Sözleşmeler Yönetmeliği Madde 15):
            </p>
            <ul style={{ color: "var(--muted)", lineHeight: 2, marginTop: "12px", paddingLeft: "20px" }}>
              <li>Kullanıcının açık onayıyla hizmetin kullanılmaya başlanmış olması.</li>
              <li>14 günlük cayma süresinin sona ermesi.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>3. İade Başvurusu</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              İade talebinizi, kayıtlı e-posta adresinizden <strong>destek@papirus-ai.com</strong> adresine "İade Talebi" konu başlığıyla iletiniz. Talebiniz en geç <strong style={{ color: "#0F172A" }}>3 iş günü</strong> içinde değerlendirilir ve onaylanan iadeler <strong style={{ color: "#0F172A" }}>7-14 iş günü</strong> içinde ödeme yönteminize iade edilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>4. Abonelik İptali</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Aboneliğinizi dilediğiniz zaman hesap ayarlarınızdan iptal edebilirsiniz. İptal işlemi, bir sonraki fatura döneminin başında geçerli olur; mevcut dönem için ücret alınmaya devam eder ancak kalan süre için iade yapılmaz. İptal sonrası verilerinize 30 gün boyunca erişiminiz sürer.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>5. İletişim</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Sorularınız için: <a href="mailto:destek@papirus-ai.com" style={{ color: "#D4AF37", fontWeight: 600 }}>destek@papirus-ai.com</a>
            </p>
          </section>

        </div>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(15,23,42,0.08)", display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/satis-sozlesmesi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Satış Sözleşmesi</Link>
          <Link href="/gizlilik-politikasi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Gizlilik Politikası</Link>
          <a href="mailto:destek@papirus-ai.com" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Bize Ulaşın</a>
        </div>

      </div>
    </main>
  );
}
