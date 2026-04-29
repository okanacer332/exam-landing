# Papirus AI Landing

Papirus AI Landing, sınav kağıdı okuma ürününün ana uygulamadan bağımsız tanıtım ve içerik yönetimi projesidir.

## Amaç

- Öğretmen cevap kağıdı, öğrenci teslimleri ve puanlama raporu konseptini anlaşılır biçimde sunmak.
- Landing içeriğini kod değiştirmeden `/admin` panelinden düzenlenebilir yapmak.
- Ana Papirus AI uygulamasından bağımsız Docker ve deploy hattına sahip olmak.

## Lokal Çalıştırma

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:7332` adresinde açılır.

## Admin Paneli

Admin paneli: `http://localhost:7332/admin`

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

Admin paneli landing içeriğini `data/site-content.json` dosyasına kaydeder.

Canlı HTTPS ortamında `ADMIN_COOKIE_SECURE="true"` kullan.

## Docker

```bash
docker compose up --build
```

Docker servisi `http://localhost:7332` adresinden çalışır. `./data` klasörü container içine volume olarak bağlanır.
