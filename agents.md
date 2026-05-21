# Papirus AI Landing Ajan Rehberi

## Projenin Amaci

Bu proje Papirus AI'in pazarlama, urun anlatimi, yasal sayfalar ve kullanici dokumantasyonu yuzudur. Kullaniciya urunun ne yaptigini anlatir ve asil giris/kayit islemi icin konsola yonlendirir.

Papirus AI'in ana amaci akademisyenlerin klasik sinav kagitlarini daha hizli, tutarli ve denetlenebilir sekilde okuyup degerlendirmesine yardim etmektir. Landing tarafinda anlatilacak deger "tam otomatik not verme" degil, hocanin kontrolunde AI destekli hizli degerlendirmedir.

## Calisma Tarzi

- Landing urun vaadini sade ve guven verici anlatmali.
- Kullanici aksiyonu konsola gitmelidir; auth bu projede tamamlanmaz.
- Dokumantasyon ve yasal sayfalar static frontend icinde tutulur.
- Console URL, env ile degistirilebilir olmali; hard-coded degerler dikkatli kullanilmalidir.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS 4
- lucide-react
- marked
- Cloudflare Pages

## Mimari Rol

Ajan bu projede pazarlama arayuzu, dokumantasyon portali ve konsol yonlendirme davranisini korumalidir. DB, auth veya backend mantigi eklemekten kacinmali; bu sorumluluklar ana konsol uygulamasindadir.

## Referans Dosyalar

- `system_mimarisi.md`: Landing ve docs uygulama yapisi.
- `deployment_rehberi.md`: Cloudflare Pages deploy adimlari.
- `veritabani_yapisi.md`: Bu projede DB olmadigini ve veri kaynaklarini aciklar.
