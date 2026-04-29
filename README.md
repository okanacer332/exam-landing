# Papirus AI Landing

Papirus AI Landing, akademisyenlerin sınav okuma sürecini hızlandıran ürün için bağımsız tanıtım projesidir.

## Amaç

- Referans cevap kağıdı, öğrenci teslimleri ve değerlendirme özeti fikrini sade biçimde anlatmak.
- Ana Papirus AI uygulamasından bağımsız Docker ve deploy hattına sahip olmak.
- Cloud Pages gibi statik/edge odaklı ortamlara kolayca taşınabilecek temiz bir landing yapısı sunmak.

## Lokal Çalıştırma

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:7332` adresinde açılır.

## Yerel İçerik Kontrolü

İçerik düzenleme ekranı sadece lokal kullanım içindir:

```text
http://localhost:7332/admin
```

Geliştirme ortamında varsayılan şifre:

```text
admin123
```

Yayına çıkmadan önce ortam değişkenlerini değiştir:

```bash
ADMIN_PASSWORD="guclu-bir-sifre"
ADMIN_SESSION_SECRET="uzun-rastgele-bir-secret"
ADMIN_COOKIE_SECURE="false"
```

Canlı HTTPS ortamında `ADMIN_COOKIE_SECURE="true"` kullan.

## Docker

```bash
docker compose up --build
```

Docker servisi `http://localhost:7332` adresinden çalışır. `./data` klasörü container içine volume olarak bağlanır.
