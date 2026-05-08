export function RefundPolicy() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-foreground">
      <h1 className="text-4xl mb-8 font-bold">İADE VE İPTAL POLİTİKASI</h1>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Genel Kural</h2>
      <p className="mb-4 leading-relaxed">
        Papirus AI, kullanım bazlı kredi sistemiyle çalışmaktadır. Satın alınan kağıt okuma kredileri dijital hizmet niteliği taşıdığından, hizmetin kullanılmaya başlanmasıyla birlikte cayma hakkı sona erer.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">2. Kullanılmamış Kredi İadesi</h2>
      <p className="mb-4 leading-relaxed">
        Satın alma tarihinden itibaren <strong>7 gün</strong> içinde hiç kullanılmamış krediler için iade talebinde bulunulabilir. Talep, aşağıdaki koşulların tamamını karşılamalıdır:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Satın alma tarihinden itibaren 7 günden az zaman geçmiş olmalıdır,</li>
        <li>Paketteki kredilerin hiçbiri kullanılmamış olmalıdır,</li>
        <li>Talep <strong>info@papirus-ai.com</strong> adresine e-posta ile iletilmiş olmalıdır.</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">3. Kısmı Kullanımlarda İade</h2>
      <p className="mb-4 leading-relaxed">
        Kredilerin kısmen kullanılmış olması durumunda iade yapılmamaktadır. Kullanılan kredi miktarı için ücret iadesi gerçekleştirilmez.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">4. İade Süreci</h2>
      <p className="mb-4 leading-relaxed">
        Onaylanan iade talepleri, Lemon Squeezy ödeme altyapısı aracılığıyla orijinal ödeme yöntemine 5–10 iş günü içinde yansıtılır.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">5. İptal</h2>
      <p className="mb-4 leading-relaxed">
        Papirus AI'da otomatik yenilenen abonelik sistemi bulunmamaktadır. Krediler tükendiğinde yeni bir paket satın alınması gerekmektedir; iptal bildirimi gerekmez.
      </p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">6. İletişim</h2>
      <p className="mb-4 leading-relaxed">
        İade ve iptal talepleriniz için <strong>info@papirus-ai.com</strong> adresine başvurabilirsiniz. Talepler en geç 3 iş günü içinde yanıtlanır.
      </p>
    </div>
  );
}
