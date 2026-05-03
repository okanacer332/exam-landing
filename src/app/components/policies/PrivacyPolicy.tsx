export function PrivacyPolicy() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-foreground">
      <h1 className="text-4xl mb-8 font-bold">GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ</h1>
      
      <h2 className="text-2xl mt-8 mb-4 font-semibold">1. Veri Sorumlusu</h2>
      <p className="mb-4 leading-relaxed">İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Papirüs.ai (Bundan sonra “Platform” olarak anılacaktır) üzerinden sunulan hizmetler kapsamında kişisel verilerin işlenmesine ilişkin usul ve esasları belirlemek amacıyla ARCTECH (Bundan sonra “Şirket” olarak anılacaktır) tarafından hazırlanmıştır.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">2. İşlenen Kişisel Veriler ve İşleme Amaçları</h2>
      <p className="mb-4 leading-relaxed">Platform üzerinden aşağıdaki veri grupları belirtilen amaçlarla işlenmektedir:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, akademik unvan ve üniversite bilgisi; üyelik kaydı oluşturma, kullanıcı doğrulama ve iletişim faaliyetlerinin yürütülmesi amacıyla,</li>
        <li><strong>Eğitim ve Sınav Verileri:</strong> Kullanıcılar (Öğretim Elemanları) tarafından sisteme yüklenen cevap anahtarları ve öğrenci sınav kağıdı görselleri; yapay zeka destekli optik karakter tanıma (OCR) ve cevap karşılaştırma algoritması aracılığıyla sınav değerlendirme hizmetinin sunulması amacıyla,</li>
        <li><strong>Finansal Bilgiler:</strong> Ödeme işlemleri sırasında kullanılan kart bilgileri; Iyzico ödeme altyapısı aracılığıyla abonelik ücretlerinin tahsil edilmesi amacıyla (Kart bilgileri tarafımızca saklanmaz),</li>
        <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, log kayıtları ve tarayıcı bilgileri; sistem güvenliğinin sağlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">3. Kişisel Verilerin Aktarılması ve Yurt Dışı Aktarımı</h2>
      <p className="mb-4 leading-relaxed">Kişisel verileriniz, hizmetin sunulabilmesi için gerekli olan teknik altyapı sağlayıcılarına ve iş ortaklarımıza aktarılmaktadır. Platform, bulut bilişim hizmetleri için Amazon Web Services (AWS) altyapısını kullanmaktadır. Bu bağlamda, sisteme yüklediğiniz veriler, KVKK’nın 9. maddesi uyarınca güvenli veri aktarım protokolleri çerçevesinde yurt dışında bulunan güvenli sunucularda depolanmaktadır. Ödeme verileri ise ödeme hizmetinin ifası için doğrudan Iyzico sistemlerine aktarılmaktadır.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">4. Veri Toplama Yöntemi ve Hukuki Sebep</h2>
      <p className="mb-4 leading-relaxed">Verileriniz, Platform’a üye olmanız ve sınav kağıtlarını sisteme yüklemeniz suretiyle tamamen dijital ortamda toplanmaktadır. Veri işleme faaliyetlerimiz; "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" (KVKK m.5/2-c) ve "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi" (KVKK m.5/2-ç) hukuki sebeplerine dayanmaktadır.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">5. Veri Saklama Süresi</h2>
      <p className="mb-4 leading-relaxed">Kullanıcılar tarafından yüklenen içerikler ve kişisel veriler, kullanıcının Platform üyeliği devam ettiği müddetçe saklanır. Üyeliğin sonlandırılması veya kullanıcının silme talebi durumunda, veriler yasal mevzuatın öngördüğü süreler saklı kalmak kaydıyla ilk imha periyodunda güvenli bir şekilde silinir veya anonim hale getirilir.</p>

      <h2 className="text-2xl mt-8 mb-4 font-semibold">6. İlgili Kişinin Hakları</h2>
      <p className="mb-4 leading-relaxed">KVKK’nın 11. maddesi uyarınca veri sahipleri; verilerinin işlenip işlenmediğini öğrenme, düzeltme isteme, silinmesini talep etme ve verilerinin yurt dışına aktarılmasına ilişkin bilgi alma haklarına sahiptir. Bu haklarınızı kullanmak için destek@acrtech.com.tr adresinden bizimle iletişime geçebilirsiniz.</p>
    </div>
  );
}
