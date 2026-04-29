import Link from "next/link";

export default function GizlilikPolitikasi() {
  return (
    <main className="site-shell container" style={{ padding: '64px 16px' }}>
      <header style={{ marginBottom: '48px' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          &larr; Ana Sayfaya Dön
        </Link>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="eyebrow">Papirus AI</span>
        <h1 style={{ marginBottom: '32px' }}>Gizlilik Politikası</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--muted)' }}>
          <p>
            <strong>VERİLERİNİZİN MAHRİYEMETİ</strong><br/>
            Papirus AI olarak, akademik verilerinizin ve öğrenci evraklarının ne denli hassas olduğunun bilincindeyiz. Siz değerli öğretim üyelerine sunduğumuz bu asistanlık hizmetinde, en temel ilkemiz verilerinizin güvenliği ve mahremiyetidir.
          </p>

          <p>
            <strong>VERİ İŞLEME AMACI</strong><br/>
            Sisteme yüklemiş olduğunuz cevap anahtarları ve öğrenci sınav kağıtları, yalnızca size ön değerlendirme sunmak amacıyla yapay zeka modellerimiz tarafından anlık olarak işlenir. Bu veriler, reklam veya model eğitimi amacıyla başka hiçbir üçüncü şahıs veya kurumla paylaşılmaz.
          </p>

          <p>
            <strong>GÜVENLİK STANDARTLARI</strong><br/>
            Sistemimiz, sektör standartlarının ötesinde kriptografik şifreleme yöntemleri ile korunmaktadır. Yüklediğiniz belgeler, değerlendirme süreci tamamlandıktan sonra talebiniz doğrultusunda sistemden tamamen silinecek şekilde tasarlanmıştır.
          </p>

          <p>
            <strong>KİŞİSEL VERİLERİN KORUNMASI (KVKK)</strong><br/>
            Tüm veri işleme süreçlerimiz, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili mevzuata tam uyum çerçevesinde yürütülmektedir. Veri sahibi olarak haklarınızı kullanmak ve detaylı bilgi almak için dilediğiniz zaman bizimle iletişime geçebilirsiniz.
          </p>
          
          <p>
            <em>Güveniniz, hizmet anlayışımızın temel taşıdır.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
