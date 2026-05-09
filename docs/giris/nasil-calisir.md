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

---

## 2. Rubric ve Puanlama Yapısı Oluşturma

Cevap anahtarı yüklendikten sonra sistem içerisinden soru bazlı puanlama yapısı oluşturulur.

Her soru için:

- Soru başlığı
- Toplam puan
- Beklenen cevap
- Puanlama kriterleri
- Rubric detayları

tanımlanabilir.

Bu yapı AI değerlendirme sürecinin temelini oluşturur.

<!-- SCREENSHOT: Rubric ve puanlama ekranı -->

---

## 3. Öğrenci Kağıtlarını Yükleme

Öğrenci kağıtları cevap anahtarına bağlı şekilde sisteme yüklenir.

Platform farklı yükleme yöntemlerini destekler:

- Manuel dosya yükleme
- Google Drive entegrasyonu
- Google Classroom entegrasyonu

Bu süreç sayesinde çok sayıda öğrenci kağıdı hızlı şekilde sisteme aktarılabilir.

<!-- SCREENSHOT: Öğrenci kağıdı yükleme ekranı -->

---

## 4. Sınıf Kuyruğu ve Toplu Okuma

Yüklenen öğrenci kağıtları sınıf kuyruğuna alınır.

Akademisyen isterse:

- Kağıtları tek tek okuyabilir
- Belirli öğrencileri seçebilir
- Tüm sınıfı toplu şekilde okutabilir

Bu yapı büyük sınıflarda değerlendirme sürecini hızlandırır.

<!-- SCREENSHOT: Tüm sınıfı oku ekranı -->

---

## 5. AI Destekli Değerlendirme

Papirus AI öğrenci cevaplarını:

- Beklenen cevap
- Rubric yapısı
- Puanlama kriterleri
- Anlamsal benzerlik

üzerinden analiz eder.

Sistem öğrenci cevaplarını değerlendirerek açıklamalı puanlama oluşturur ve kağıt üzerinde ilgili alanları işaretler.

<!-- SCREENSHOT: AI değerlendirme sonucu -->

---

## 6. Sonuç İnceleme ve PDF Çıktısı

Okuma işlemi tamamlandıktan sonra akademisyen:

- Öğrenci puanlarını inceleyebilir
- AI açıklamalarını görüntüleyebilir
- Kağıt üzerindeki işaretlemeleri kontrol edebilir
- Sonuçları PDF olarak indirebilir

Bu süreç değerlendirme sonuçlarının daha şeffaf ve daha kontrol edilebilir hale gelmesini sağlar.

<!-- SCREENSHOT: Sonuç ve PDF ekranı -->

---

## Sonraki Adım

Bir sonraki bölümde Papirus AI platformunun öne çıkan temel özelliklerini inceleyebilirsiniz.

→ [Temel Özellikler](./temel-ozellikler)