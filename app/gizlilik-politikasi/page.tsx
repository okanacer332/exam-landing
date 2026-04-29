import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Papirus AI",
  description: "Papirus AI gizlilik politikası. Kişisel verilerin işlenmesi, KVKK haklarınız ve veri güvenliği.",
};

export default function GizlilikPolitikasi() {
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
          Gizlilik Politikası ve KVKK Aydınlatma Metni
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "48px", lineHeight: 1.7 }}>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Madde 10 kapsamında veri sorumlusu sıfatıyla hazırlanmıştır.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>1. Veri Sorumlusu</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              <strong style={{ color: "#0F172A" }}>Papirus AI</strong> — destek@papirus-ai.com adresinden ulaşılabilir.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>2. İşlenen Kişisel Veriler</h2>
            <ul style={{ color: "var(--muted)", lineHeight: 2, paddingLeft: "20px" }}>
              <li><strong style={{ color: "#0F172A" }}>Kimlik ve iletişim:</strong> Ad, soyad, e-posta adresi, kurum bilgisi.</li>
              <li><strong style={{ color: "#0F172A" }}>Kullanım verileri:</strong> Sisteme giriş zamanları, işlem geçmişi, tercihler.</li>
              <li><strong style={{ color: "#0F172A" }}>Yüklenen belgeler:</strong> Cevap anahtarları ve öğrenci sınav evrakları (değerlendirme amacıyla geçici olarak işlenir).</li>
              <li><strong style={{ color: "#0F172A" }}>Ödeme bilgileri:</strong> Ödeme tutarı ve tarihi (kart numarası gibi hassas veriler yalnızca ödeme sağlayıcısı tarafından tutulur).</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>3. İşleme Amaçları ve Hukuki Dayanak</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                ["Hizmetin sunulması ve üyelik yönetimi", "KVKK 5/2-c — Sözleşmenin ifası"],
                ["Faturalandırma ve yasal yükümlülükler", "KVKK 5/2-ç — Hukuki yükümlülük"],
                ["Hizmet kalitesinin iyileştirilmesi", "KVKK 5/2-f — Meşru menfaat"],
                ["Pazarlama iletişimi (onay verilmişse)", "KVKK 5/1 — Açık rıza"],
              ].map(([purpose, basis]) => (
                <div key={purpose} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", padding: "12px", background: "#fff", borderRadius: "8px", border: "1px solid rgba(15,23,42,0.06)" }}>
                  <p style={{ margin: 0, color: "#0F172A", fontSize: "0.9rem" }}>{purpose}</p>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem" }}>{basis}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>4. Veri Saklama Süreleri</h2>
            <ul style={{ color: "var(--muted)", lineHeight: 2, paddingLeft: "20px" }}>
              <li>Hesap verileri: Üyelik süresince ve silme talebinden itibaren 30 gün.</li>
              <li>Sınav evrakları: Değerlendirme tamamlandıktan sonra kullanıcı talebine göre hemen veya en geç 90 gün içinde silinir.</li>
              <li>Fatura ve muhasebe kayıtları: Vergi mevzuatı gereği 10 yıl.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>5. Üçüncü Taraflarla Paylaşım</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Kişisel verileriniz; yasal zorunluluklar, açık rızanız veya sözleşmenin ifası dışında hiçbir üçüncü tarafla paylaşılmaz, satılmaz ve pazarlama amacıyla kullanılmaz. Hizmet altyapısında kullanılan yurt dışı tabanlı sağlayıcılar (bulut, yapay zeka altyapısı), KVKK'nın 9. maddesi kapsamında yeterli güvence sağlanarak çalışmaktadır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>6. Güvenlik</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Verileriniz TLS şifrelemesiyle aktarılır ve dinlenme halinde (at rest) şifrelenerek depolanır. Sisteme erişim yetki bazlı denetlenir ve erişim kayıtları tutulur.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>7. KVKK Kapsamındaki Haklarınız (Madde 11)</h2>
            <ul style={{ color: "var(--muted)", lineHeight: 2, paddingLeft: "20px" }}>
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme.</li>
              <li>İşlenmişse bilgi talep etme.</li>
              <li>Amaca uygunluğunu sorgulama.</li>
              <li>Yurt içi veya yurt dışına aktarıldığı üçüncü kişileri öğrenme.</li>
              <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme.</li>
              <li>KVKK Madde 7 çerçevesinde silinmesini talep etme.</li>
              <li>İşlemenin kısıtlanmasını talep etme.</li>
              <li>Otomatik analiz sonuçlarına itiraz etme.</li>
              <li>Zararın giderilmesini talep etme.</li>
            </ul>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: "12px" }}>
              Haklarınızı kullanmak için <a href="mailto:destek@papirus-ai.com" style={{ color: "#D4AF37", fontWeight: 600 }}>destek@papirus-ai.com</a> adresine yazılı başvuruda bulunabilirsiniz. Talebiniz 30 gün içinde yanıtlanır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>8. Çerezler (Cookies)</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Yalnızca oturum yönetimi ve güvenlik amacıyla zorunlu çerezler kullanılmaktadır. Analitik çerezler için kullanıcıdan açık onay alınır.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "12px" }}>9. Güncellemeler</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Bu politika gerektiğinde güncellenebilir. Önemli değişiklikler kullanıcılara e-posta yoluyla bildirilir. Politikanın güncel versiyonu daima bu sayfada yayımlanır.
            </p>
          </section>

        </div>

        <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid rgba(15,23,42,0.08)", display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <Link href="/satis-sozlesmesi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Satış Sözleşmesi</Link>
          <Link href="/iade-politikasi" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>İade Politikası</Link>
          <a href="mailto:destek@papirus-ai.com" style={{ color: "#D4AF37", fontSize: "0.875rem", fontWeight: 600 }}>Bize Ulaşın</a>
        </div>

      </div>
    </main>
  );
}
