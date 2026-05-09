# Nasıl Çalışır?

Papirus AI, yazılı ve açık uçlu sınav kağıtlarını yapay zeka destekli analiz süreçleri ile değerlendirmeye yardımcı olur.

Platformun çalışma yapısı; cevap anahtarının yüklenmesi, rubric oluşturulması, öğrenci kağıtlarının okunması ve sonuçların değerlendirilmesi üzerine kuruludur.

Bu bölümde Papirus AI'nin gerçek değerlendirme akışını adım adım inceleyebilirsiniz.

---

## Bu Bölümde Neler Öğreneceksiniz?

- Cevap anahtarı yükleme süreci
- Rubric oluşturma yapısı
- Öğrenci kağıdı yükleme yöntemleri
- Sınıf kuyruğu sistemi
- AI destekli puanlama süreci
- Sonuç inceleme ve PDF çıktısı

---

## Genel Sistem Akışı

Papirus AI temel olarak aşağıdaki süreç üzerinden çalışır:

```txt
Cevap Anahtarı Yükleme
      ↓
Rubric ve Puanlama Yapısı Oluşturma
      ↓
Öğrenci Kağıtlarını Yükleme
      ↓
Sınıf Kuyruğu Oluşturma
      ↓
AI Destekli Kağıt Okuma
      ↓
Sonuç İnceleme ve Puanlama
      ↓
PDF ve Raporlama
```

![Papirus AI Genel Sistem Akışı](/docs-media/screenshots/genel/dashboard-overview-new.png)
---

## 1. Cevap Anahtarı Yükleme

Değerlendirme süreci öğretmenin cevap anahtarını sisteme yüklemesi ile başlar.

Kullanıcı isterse:

- Daha önce yüklediği cevap anahtarlarını seçebilir
- Yeni bir öğretmen kağıdı yükleyebilir

Bu yapı aynı ders veya sınav için tekrar kullanılabilir değerlendirme süreçleri oluşturulmasını sağlar.

<!-- SCREENSHOT: Cevap anahtarı seçim ekranı -->
![Cevap Anahtarı Seçim Ekranı](/docs-media/screenshots/sinav-olusturma/answer-key-selection.png)
---

## 2. Rubric ve Puanlama Yapısı Oluşturma

Cevap anahtarı yüklendikten sonra Papirus AI, soru yapısını ve değerlendirme içeriğini otomatik olarak analiz etmeye başlar.

Sistem:

- Soruları ayırabilir
- Beklenen cevapları analiz edebilir
- Puan yapısını çıkarabilir
- Değerlendirme kriterlerini yorumlayabilir

Akademisyen isterse bu yapıyı daha da detaylandırabilir ve değerlendirme sürecini özelleştirebilir.

Örneğin:

- Çözüm yöntemi puanlaması
- Ek işlem adımları
- Kısmi puan kuralları
- Tolerans değerleri
- Özel değerlendirme notları

gibi ek bilgiler sisteme tanımlanabilir.

Bu yapı sayesinde Papirus AI zamanla dersin değerlendirme yaklaşımına daha uygun sonuçlar üretmeye yardımcı olur.

![Rubric ve Puanlama Yapısı](/docs-media/screenshots/sinav-olusturma/rubric-structure.png)

---

## 3. Öğrenci Kağıtlarını Yükleme

Cevap anahtarı ve rubric yapısı hazırlandıktan sonra öğrenci kağıtları sisteme yüklenebilir.

Papirus AI farklı yükleme yöntemlerini destekler:

- Manuel dosya yükleme
- Google Drive entegrasyonu
- Google Classroom entegrasyonu

Bu yapı sayesinde çok sayıda öğrenci kağıdı hızlı şekilde sisteme aktarılabilir.

Yüklenen öğrenci kağıtları ilgili cevap anahtarı ile eşleştirilir ve değerlendirme kuyruğuna alınır.

Platform özellikle kalabalık sınıflarda ve yüksek hacimli sınav süreçlerinde toplu işlem akışını kolaylaştıracak şekilde tasarlanmıştır.

![Öğrenci Kağıdı Yükleme](/docs-media/screenshots/sinav-olusturma/student-paper-upload.png)

---

## 4. Sınıf Kuyruğu ve Toplu Okuma

Yüklenen öğrenci kağıtları değerlendirme kuyruğuna alınır ve sınıf bazlı olarak yönetilebilir hale gelir.

Akademisyen isterse:

- Kağıtları tek tek okuyabilir
- Belirli öğrencileri seçebilir
- Tüm sınıfı toplu şekilde okutabilir

Papirus AI özellikle yüksek hacimli sınav süreçlerinde toplu işlem yapısını hızlandıracak şekilde tasarlanmıştır.

Sistem aynı anda çok sayıda öğrenci kağıdını işleyerek değerlendirme sürecinin daha verimli ilerlemesine yardımcı olur.

Toplu okuma süreci boyunca öğrencilerin durumları takip edilebilir ve değerlendirme akışı kontrol altında tutulabilir.

![Sınıf Kuyruğu ve Toplu Okuma](/docs-media/screenshots/sinav-olusturma/class-queue-processing.png)

---


## 5. AI Destekli Değerlendirme

Papirus AI, öğrenci cevaplarını yapay zeka destekli analiz süreçleri ile değerlendirir.

Sistem değerlendirme sürecinde:

- Beklenen cevapları
- Rubric yapısını
- Puanlama kriterlerini
- Anlamsal benzerlikleri
- Çözüm yöntemlerini
- İşlem adımlarını

birlikte analiz eder.

Değerlendirme sonucunda sistem:

- Kağıt üzerinde ilgili alanları işaretleyebilir
- Açıklamalı puanlama oluşturabilir
- Eksik veya hatalı bölümleri belirtebilir
- Soru bazlı değerlendirme sunabilir
- Genel başarı analizi oluşturabilir

Akademisyen isterse sonuçları inceleyebilir, düzenleyebilir ve değerlendirme sürecini kontrol altında tutabilir.

Papirus AI'nin amacı akademisyenin yerine karar vermek değil, değerlendirme sürecini hızlandıran ve daha tutarlı hale getiren bir yardımcı sistem sunmaktır.

![AI Destekli Değerlendirme](/docs-media/screenshots/sinav-olusturma/ai-evaluation-result.png)

---

## 6. Sonuç İnceleme ve PDF Çıktısı

Okuma işlemi tamamlandıktan sonra akademisyen değerlendirme sonuçlarını detaylı şekilde inceleyebilir.

Platform üzerinden:

- Öğrenci puanları görüntülenebilir
- AI açıklamaları incelenebilir
- Kağıt üzerindeki işaretlemeler kontrol edilebilir
- Soru bazlı değerlendirmeler görüntülenebilir
- Sonuçlar PDF olarak indirilebilir

Bu yapı değerlendirme sürecinin daha şeffaf, daha kontrol edilebilir ve daha takip edilebilir hale gelmesini sağlar.

---

## Sonraki Adım

Bir sonraki bölümde Papirus AI platformunun öne çıkan temel özelliklerini inceleyebilirsiniz.

→ [Temel Özellikler](./temel-ozellikler)