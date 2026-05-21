# Papirus AI Landing Deployment Rehberi

## Amac

Bu rehber `exam-landing` projesinin Cloudflare Pages uzerinde secretsiz yayinlanmasi icindir. Landing statik Vite build ciktisi uretir; server veya veritabani deploy'u yoktur.

## Canli Mimari

- Domain: `https://papirus-ai.com`
- Hosting: Cloudflare Pages
- Build output: `dist`
- Console hedefi: `https://konsol.papirus-ai.com`
- Uygulama tipi: Static React/Vite SPA

## Lokal Gelistirme

```powershell
cd C:\Users\acero\Documents\GitHub\exam-landing
npm install
npm run dev
```

Varsayilan Vite dev server host olarak `0.0.0.0` kullanir. Gerekirse `.env` icinde `VITE_CONSOLE_URL` ile konsol hedefi degistirilebilir.

## Build

```powershell
cd C:\Users\acero\Documents\GitHub\exam-landing
npm run build
```

Build sonucu `dist` klasorune yazilir. Deploy oncesi `/`, `/dokuman`, policy sayfalari ve CTA linkleri kontrol edilmelidir.

## Cloudflare Pages Deploy

```powershell
cd C:\Users\acero\Documents\GitHub\exam-landing
npm run build
npx wrangler pages deploy dist --project-name papirus-ai --branch main
```

Cloudflare Pages panelinde build command `npm run build`, output directory `dist` olarak tutulabilir. Git entegrasyonu varsa main branch push sonrasi otomatik deploy da kullanilabilir.

## Deploy Sonrasi Kontroller

```powershell
Invoke-WebRequest -Uri "https://papirus-ai.com" -UseBasicParsing
Invoke-WebRequest -Uri "https://papirus-ai.com/dokuman" -UseBasicParsing
Invoke-WebRequest -Uri "https://papirus-ai.com/gizlilik-politikasi" -UseBasicParsing
Invoke-WebRequest -Uri "https://papirus-ai.com/kullanim-kosullari" -UseBasicParsing
```

Manuel kontrol:

- Ana CTA "giris" icin `https://konsol.papirus-ai.com/giris?auth=google&intent=signin` benzeri URL'ye gider.
- Deneme CTA "signup" intent'iyle konsola gider.
- `/dokuman` sayfasi PageLoader beklemeden acilir.
- Docs gorselleri `/docs-media/...` altindan yuklenir.
- Yasal sayfalar hash ve path varyantlariyla acilir.

## Operasyon Notlari

- Landing tarafinda secret tutulmamalidir.
- Kullanici auth, kredi, dosya ve AI islemleri console uygulamasina aittir.
- Cloudflare `_redirects` dosyasi SPA fallback davranisi icin korunmalidir.
- Docs markdown veya public gorsel eklenince build ciktisi buyuyebilir; Pages limitleri takip edilmelidir.
