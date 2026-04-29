import Link from "next/link";

export default function IadePolitikasi() {
  return (
    <main className="site-shell container" style={{ padding: '64px 16px' }}>
      <header style={{ marginBottom: '48px' }}>
        <Link href="/" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
          &larr; Ana Sayfaya Dön
        </Link>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="eyebrow">Papirus AI</span>
        <h1 style={{ marginBottom: '32px' }}>İade Politikası</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--muted)' }}>
          <p>
            <strong>GENEL PRENSİP</strong><br/>
            Değerli Kullanıcımız, Papirus AI olarak amacımız akademik süreçlerinize maksimum fayda sağlamaktır. Sistemimizin beklentilerinizi karşılamaması durumunda, hizmet memnuniyetiniz bizim için her zaman önceliklidir.
          </p>

          <p>
            <strong>İADE SÜRECİ VE KOŞULLARI</strong><br/>
            Sunulan dijital asistanlık hizmetinin niteliği gereği, abonelik başlangıcından itibaren ilk 14 (on dört) gün içerisinde, sistemin size uygun olmadığını düşünmeniz halinde hiçbir mazeret bildirmeksizin aboneliğinizi iptal edebilir ve kesintisiz iade talep edebilirsiniz.
          </p>

          <p>
            <strong>TALEPLERİN İLETİLMESİ</strong><br/>
            İade taleplerinizi, kayıtlı e-posta adresiniz üzerinden <em>destek@papirus-ai.com</em> adresine iletmeniz yeterlidir. Uzman destek ekibimiz, talebinizi nezaketle karşılayacak ve yasal süreler içerisinde işleminizi gerçekleştirecektir.
          </p>
          
          <p>
            <em>Bilime ayırdığınız zamana saygı duyuyor, anlayışınız için teşekkür ediyoruz.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
