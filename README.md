# Papirus AI Landing

Papirus AI Landing, akademisyenlerin sınav okuma sürecini hızlandıran ürün için bağımsız tanıtım projesidir.

## Amaç

- Referans cevap kağıdı, öğrenci teslimleri ve değerlendirme özeti fikrini sade biçimde anlatmak.
- Ana Papirus AI uygulamasından bağımsız deploy hattına sahip olmak.
- `papirus-ai.com` alan adı altında hızlı ve kontrol edilebilir bir tanıtım sitesi sunmak.

## Lokal Çalıştırma

```bash
npm install
npm run dev
```

Landing yerelde standart Next adresi olan `http://localhost:3000` ile çalışır.

Canlı landing alan adı: `https://papirus-ai.com`

Kayıt ve giriş butonları konsola gider:

```text
https://konsol.papirus-ai.com/giris
```

## Docker

```bash
docker compose up --build
```

Docker yalnızca gerektiğinde çalıştırılır. Günlük geliştirmede landing container'ı açık tutulmaz.
