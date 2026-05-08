export function PreliminaryInfoForm() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-foreground">
      <h1 className="text-4xl mb-8 font-bold">ÖN BİLGİLENDİRME FORMU</h1>

      <p className="mb-6 leading-relaxed text-foreground/70">
        Mesafeli Sözleşmeler Yönetmeliği'nin 5. maddesi gereğince, satın alma işlemi tamamlanmadan önce aşağıdaki bilgilerin tarafınıza sunulması zorunludur.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Satıcı Bilgileri</h2>
      <ul className="list-none mb-4 space-y-1">
        <li><strong>Ticari Unvan:</strong> ARCTECH</li>
        <li><strong>E-posta:</strong> info@papirus-ai.com</li>
        <li><strong>Web Sitesi:</strong> https://papirus-ai.com</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">2. Hizmet Tanımı</h2>
      <p className="mb-4 leading-relaxed">
        Papirus AI, akademisyenler ve öğretim elemanları için yapay zeka destekli sınav kağıdı değerlendirme hizmetidir. Hizmet, seçilen paketteki kağıt okuma kredisi miktarı dahilinde sunulmaktadır.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">3. Fiyat ve Ödeme</h2>
      <p className="mb-4 leading-relaxed">
        Tüm fiyatlar KDV dahildir ve Türk Lirası cinsindendir. Ödeme, Lemon Squeezy güvenli ödeme altyapısı aracılığıyla kredi/banka kartı ile gerçekleştirilir.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">4. İfa ve Teslimat</h2>
      <p className="mb-4 leading-relaxed">
        Hizmet, ödemenin onaylanmasıyla birlikte elektronik ortamda derhal aktive edilir.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">5. Cayma Hakkı</h2>
      <p className="mb-4 leading-relaxed">
        6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca, dijital içerik veya hizmetlere erişim sağlandığı andan itibaren tüketicinin onayıyla cayma hakkı sona erer. Satın alma işlemi sırasında bu durum açıkça onaylanmaktadır.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">6. Şikayet ve İletişim</h2>
      <p className="mb-4 leading-relaxed">
        Her türlü şikayet ve bilgi talebi için <strong>info@papirus-ai.com</strong> adresine başvurabilirsiniz.
      </p>
    </div>
  );
}
