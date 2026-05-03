export function SecurityPolicy() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-foreground">
      <h1 className="text-4xl mb-4 font-bold">GÜVENLİK POLİTİKASI</h1>
      <h2 className="text-2xl mb-8 font-semibold text-muted-foreground">Papirüs.ai Güvenlik Taahhüdü</h2>
      <p className="mb-8 leading-relaxed">Akademik verilerin hassasiyetinin farkındayız. Bu nedenle güvenliği sadece bir özellik olarak değil, sistemin temeli olarak görüyoruz.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Veri Şifreleme (Encryption)</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Aktarım Güvenliği:</strong> Cihazınızdan sunucularımıza gönderilen tüm veriler (sınav görselleri, kullanıcı bilgileri vb.) 256-bit SSL/TLS şifreleme protokolleri ile korunur.</li>
        <li><strong>Depolama Güvenliği:</strong> Sunucularımızda saklanan tüm veriler, "At Rest" (beklemede) şifreleme yöntemleri ile korunmaktadır. Bu, fiziksel bir müdahalede verilerin okunamaz olmasını sağlar.</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">2. AWS Altyapısı ve Local-First Yaklaşımı</h2>
      <p className="mb-4 leading-relaxed">Papirüs.ai, dünyanın en güvenli bulut altyapılarından biri olan Amazon Web Services (AWS) üzerinde çalışmaktadır. Verileriniz, AWS'nin sunduğu fiziksel güvenlik, yangın koruma ve ağ güvenliği standartları altında korunur. Sistem mimarimiz, veriyi en hızlı ve en güvenli şekilde işlemek üzere yerel öncelikli optimizasyonlarla donatılmıştır.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">3. AI Veri Gizliliği (Zero Training Policy)</h2>
      <p className="mb-4 leading-relaxed">Sisteme yüklediğiniz sınav kağıtları veya cevap anahtarları, yapay zeka modellerimizin genel eğitimi için asla kullanılmaz. Verileriniz sadece sizin hesabınız altındaki analiz işlemi için işlenir. Sınav kağıtlarınız Papirüs.ai'nin mülkiyetine geçmez; verilerinizin sahibi siz kalmaya devam edersiniz.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">4. Erişim Kontrolü ve İzolasyon</h2>
      <p className="mb-4 leading-relaxed">Her kullanıcının verisi mantıksal olarak diğer kullanıcılardan izole edilmiştir. Bir öğretim görevlisi, sadece kendi yüklediği sınıfların ve sınavların verilerine erişebilir. Şirket personeli, teknik bir destek talebi olmadıkça ve sizin onayınız bulunmadıkça verilerinize erişemez.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">5. Ödeme Güvenliği</h2>
      <p className="mb-4 leading-relaxed">Ödeme işlemleriniz doğrudan Iyzico korumalı ödeme sayfasında gerçekleşir. Kredi kartı numaranız, CVV kodunuz veya şifreniz hiçbir şekilde Papirüs.ai sunucularına ulaşmaz ve veritabanımızda kaydedilmez.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">6. Sürekli İzleme</h2>
      <p className="mb-4 leading-relaxed">Sistemimiz, siber saldırılara, kaba kuvvet (brute-force) denemelerine ve yetkisiz erişim çabalarına karşı 7/24 otomatik izleme sistemleri ile denetlenmektedir. Herhangi bir güvenlik ihlali şüphesinde, protokollerimiz gereği ilgili kullanıcılar ve resmi merciler derhal bilgilendirilir.</p>
    </div>
  );
}
