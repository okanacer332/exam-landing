import Link from "next/link";

export default function SatisSozlesmesi() {
  return (
    <main className="site-shell container" style={{ padding: '64px 16px' }}>
      <header style={{ marginBottom: '48px' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          &larr; Ana Sayfaya Dön
        </Link>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="eyebrow">Papirus AI</span>
        <h1 style={{ marginBottom: '32px' }}>Mesafeli Satış Sözleşmesi</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--muted)' }}>
          <p>
            <strong>MADDE 1 – TARAFLAR VE KAPSAM</strong><br/>
            İşbu sözleşme, Papirus AI (bundan böyle "Asistan" veya "Hizmet Sağlayıcı" olarak anılacaktır) ile sistemi kullanacak olan değerli Öğretim Üyesi / Kurum (bundan böyle "Kullanıcı" olarak anılacaktır) arasında, dijital hizmetlerin sunulmasına ilişkin şartları düzenlemektedir.
          </p>

          <p>
            <strong>MADDE 2 – HİZMETİN NİTELİĞİ</strong><br/>
            Papirus AI, akademik değerlendirme süreçlerinde öğretim üyelerine yardımcı olmak amacıyla geliştirilmiş bir yapay zeka asistanıdır. Sunulan hizmet, öğrenci sınav kağıtlarının referans cevap anahtarlarıyla karşılaştırılması ve ön değerlendirme sunulmasından ibarettir.
          </p>

          <p>
            <strong>MADDE 3 – UZMANLIK VE SORUMLULUK</strong><br/>
            Kullanıcı, sistemin bir asistan olarak ön değerlendirme yaptığını ve nihai akademik notlandırmanın, uzmanlık gerektiren bir süreç olması hasebiyle daima Kullanıcının (Öğretim Üyesinin) kontrolünde ve sorumluluğunda olduğunu peşinen kabul eder.
          </p>

          <p>
            <strong>MADDE 4 – GÜVENLİK VE GİZLİLİK</strong><br/>
            Kullanıcı tarafından sisteme yüklenen tüm sınav verileri ve öğrenci evrakları, üst düzey güvenlik protokolleriyle korunmakta olup, üçüncü şahıslarla paylaşılmamaktadır. Veri güvenliğine ilişkin detaylar Gizlilik Politikamızda yer almaktadır.
          </p>
          
          <p>
            <em>Saygılarımızla, akademik süreçlerinizde size destek olmaktan onur duyarız.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
