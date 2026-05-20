# Kaynak Havuzu ile Değerlendirme

Kaynak havuzu, öğretmenin klasik bir cevap anahtarı yüklemeden; kitap, ders notu, PDF, klinik rehber, yönetmelik veya konu anlatımı gibi kaynaklardan değerlendirme çerçevesi oluşturmasını sağlar.

Bu akış özellikle hemşirelik, sağlık bilimleri, hukuk, eğitim bilimleri ve mesleki derslerde kullanışlıdır. Öğretmen elindeki güvenilir kaynakları yükler, sınav sorularını ve puan planını tanımlar, Papirus AI ise öğrenci kağıdını bu kaynaklardan çıkarılan bilgi çerçevesine göre değerlendirir.

---

## Ne Zaman Kullanılır?

Kaynak havuzu şu durumlarda tercih edilebilir:

- Öğretmenin hazır bir cevap anahtarı yoksa
- Değerlendirme belirli kitap, PDF veya ders notlarına göre yapılacaksa
- Aynı kaynak seti birden fazla sınavda tekrar kullanılacaksa
- Soruların cevabı tek sayfalık çözümden değil, geniş bir konu kapsamından çıkarılıyorsa
- Kurum içinde ortak kaynak kütüphanesiyle tutarlı değerlendirme yapılmak isteniyorsa

Bu yöntem cevap anahtarının alternatifi değildir; cevap anahtarı olmayan derslerde güvenilir kaynaklardan cevap çerçevesi üretmek için ayrı bir değerlendirme yoludur.

---

## Akış Özeti

```txt
Kaynak havuzu oluştur
        ↓
PDF / doküman kaynaklarını yükle
        ↓
Kaynakları işle ve metin içeriğini çıkar
        ↓
Sınav sorularını ve puan planını tanımla
        ↓
AI cevap çerçevesi oluştur
        ↓
Öğrenci kağıdını kaynak havuzu ile okut
        ↓
Sonucu öğretmen kontrol eder ve kaydeder
```

---

## 1. Kaynak Havuzu Oluşturma

Konsolda **Kaynak Yükle** ekranına girerek yeni bir kaynak havuzu oluşturabilirsiniz.

Havuz; aynı ders, konu, sınav veya dönem için birlikte kullanılacak belgeleri gruplar. Örneğin:

- Hemşirelik Temel Bakım Kaynakları
- Anatomi Final Kaynak Seti
- Pediatri Klinik Uygulama Notları
- Hukuk 1. Sınıf Borçlar Hukuku Kaynakları

Havuz adı kısa, anlaşılır ve tekrar kullanılabilir olmalıdır.

![Kaynak havuzu yükleme ekranı](/docs-media/screenshots/is-akislari/kaynak-havuzu-yukleme.svg)

---

## 2. Kaynakları Yükleme ve İşleme

Havuz oluşturulduktan sonra kaynak belgeler yüklenir.

Desteklenen kaynak tipleri uygulama sürümüne göre değişebilir, ancak temel kullanım PDF ve metin tabanlı dokümanlar üzerine kuruludur. En iyi sonuç için kaynak dosyaların:

- Aranabilir PDF olması
- Net taranmış olması
- Sayfa sırası bozulmamış olması
- Gereksiz kapak, reklam veya boş sayfa içermemesi
- Aynı konuya ait belgelerden oluşması

önerilir.

Kaynak işleme sırasında sistem belge içeriğini çıkarır, bölümlere ayırır ve daha sonra sınav sorularıyla eşleştirilebilecek bir bilgi zemini hazırlar.

---

## 3. Soru ve Puan Planı Tanımlama

Kaynak havuzuyla değerlendirmede öğretmenin mutlaka sınav sorularını ve puan planını belirtmesi gerekir.

Çünkü kaynak belgeler geniş bilgi içerir; AI'ın hangi soruya kaç puanlık bir cevap beklediğini bilmesi gerekir.

Örnek yapı:

```txt
1. Basınç yaralarının oluşum risk faktörlerini açıklayınız. (20 puan)
2. Hasta güvenliğinde düşme riskini azaltmaya yönelik hemşirelik girişimlerini yazınız. (30 puan)
3. İlaç uygulamalarında doğru hasta, doğru ilaç ve doğru doz ilkelerini açıklayınız. (25 puan)
4. Enfeksiyon kontrolünde el hijyeninin önemini gerekçeleriyle açıklayınız. (25 puan)
```

İyi bir puan planı şu bilgileri içermelidir:

- Soru numarası
- Soru metni
- Maksimum puan
- Varsa alt kriterler
- Kısmi puan beklentileri
- Mutlaka aranacak kavramlar

---

## 4. Cevap Çerçevesi Oluşturma

Soru ve puan planı girildikten sonra Papirus AI, seçili kaynak havuzundan ilgili bölümleri kullanarak cevap çerçevesi oluşturur.

Bu çerçeve klasik cevap anahtarına benzer şekilde çalışır. İçerisinde:

- Beklenen cevap özeti
- Anahtar kavramlar
- Kısmi puan kriterleri
- Kaynak dayanakları
- Değerlendirme notları

bulunur.

Öğretmen bu çerçeveyi kontrol etmeli, gerekiyorsa düzenlemeli ve ancak bundan sonra öğrenci kağıdı okuma adımına geçmelidir.

![Kaynağa göre cevap çerçevesi oluşturma](/docs-media/screenshots/is-akislari/kaynak-cevap-cercevesi.svg)

---

## 5. Öğrenci Kağıdını Kaynak Havuzuyla Okutma

Hazırlanan cevap çerçevesi seçildikten sonra **Sınav Kağıdı Oku** ekranında öğrenci kağıdı yüklenir.

Bu aşamada sistem:

- Öğrenci kağıdındaki cevapları okur
- Seçili kaynak havuzundan üretilen cevap çerçevesini kullanır
- Soru bazlı puanlama yapar
- Eksik, hatalı veya güçlü cevap bölümlerini açıklar
- Öğretmene denetlenebilir bir taslak sonuç sunar

Nihai karar yine öğretmendedir. Papirus AI, kaynaklara dayalı ilk değerlendirme taslağını üretir.

![Kaynak havuzuyla sınav kağıdı okuma](/docs-media/screenshots/is-akislari/kaynakla-sinav-okuma.svg)

---

## AI Kaynakları Nasıl Kullanır?

Kaynak havuzu akışı, belgeleri doğrudan tek parça halinde değerlendirme istemine yığmaz. Bunun yerine daha kontrollü bir yapı izler:

1. Kaynak dosyaların metin içeriği çıkarılır.
2. İçerik konu ve anlam bütünlüğüne göre parçalara ayrılır.
3. Soru metni ve puan planı bu parçalarla eşleştirilir.
4. En ilgili kaynak bölümleri cevap çerçevesine taşınır.
5. Öğrenci cevabı, bu çerçeve ve kaynak dayanaklarıyla birlikte değerlendirilir.

Bu yaklaşım AI'ın geniş kaynak seti içinde kaybolmasını azaltır ve her sorunun ilgili bilgiyle değerlendirilmesine yardımcı olur.

---

## İyi Sonuç İçin Kaynak Hazırlığı

Daha yüksek doğruluk için:

- Her havuzu tek ders veya tek sınav kapsamıyla sınırlı tutun.
- Çok büyük kitapları gereksiz bölümlerden arındırın.
- Tarama kalitesi düşük PDF'leri OCR'dan geçirin.
- Soru metnini açık ve tam yazın.
- Puanları soru metninin yanında belirtin.
- İlk oluşan cevap çerçevesini mutlaka gözden geçirin.

Kaynak kalitesi düşükse veya sorular belirsizse sonuçların öğretmen tarafından daha dikkatli incelenmesi gerekir.

---

## Kurum Kullanımında Paylaşım

Kurum hesabında kaynak havuzları ders, bölüm veya ekip bazında ortak kullanılabilir.

Kurum admini ve yetkili öğretmenler aynı kaynak seti üzerinde çalışabilir. Böylece aynı dersin farklı şubelerinde benzer değerlendirme standardı korunabilir.

Öğretmenler, erişim yetkisi olan havuzları kullanarak kendi sınav kağıtlarını okutabilir. Yetki yapısı kurum rolüne göre sınırlandırılır.

---

## Cevap Anahtarı ile Farkı

| Cevap anahtarı akışı | Kaynak havuzu akışı |
| --- | --- |
| Öğretmen çözülmüş cevap anahtarı yükler | Öğretmen kitap, PDF veya ders notu yükler |
| Sistem cevap anahtarından rubric çıkarır | Sistem kaynaklardan cevap çerçevesi oluşturur |
| En uygunu hazır çözümü olan sınavlardır | En uygunu kaynak temelli değerlendirmelerdir |
| Sınav soruları genellikle belgede zaten vardır | Soru ve puan planı ayrıca yazılmalıdır |

İki yöntem birlikte de kullanılabilir. Cevap anahtarı varsa klasik akış daha hızlıdır; cevap anahtarı yoksa kaynak havuzu daha güçlü bir başlangıç sağlar.

---

## Özet

Kaynak havuzu ile değerlendirme, Papirus AI'ın cevap anahtarı olmayan sınavlarda da güvenilir kaynaklara dayalı değerlendirme çerçevesi oluşturmasını sağlar.

Bu özellik özellikle belge, kitap ve ders notu yoğun alanlarda öğretmenin kontrolünde daha hızlı, tutarlı ve izlenebilir bir değerlendirme süreci oluşturmayı hedefler.

---

## Sonraki Adım

Kaynak havuzundan cevap çerçevesi oluşturduktan sonra öğrenci kağıtlarını yükleme sürecini inceleyebilirsiniz.

→ [Öğrenci Kağıdı Yükleme](./ogrenci-kagidi-yukleme)
