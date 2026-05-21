# Papirus AI Landing Veritabani Yapisi

## Genel

`exam-landing` projesinde dogrudan veritabani yoktur. Proje statik React/Vite uygulamasi olarak calisir ve Cloudflare Pages uzerinden yayinlanir.

## Veri Kaynaklari

- Landing icerigi React componentleri icinde tutulur.
- Yasal metinler `src/app/components/policies/` altindaki componentlerdedir.
- Kullanici dokumantasyonu `docs/**/*.md` markdown dosyalarindan gelir.
- Dokumantasyon gorselleri `public/docs-media/` altindadir.
- Konsol hedef URL'si `VITE_CONSOLE_URL` veya varsayilan `https://konsol.papirus-ai.com` degerinden okunur.

## Uygulama Ici State

Uygulama yalnizca hafif client state kullanir:

- PageLoader gorunurlugu.
- Aktif path/hash bilgisi.
- Docs sidebar, arama modal'i ve image zoom state'i.

Kalici kullanici verisi, login session, kredi, dosya ve AI sonuclari bu projede tutulmaz.

## Ana Veritabaniyla Iliski

Landing, Papirus AI ana PostgreSQL veritabanina dogrudan baglanmaz. Kullanici CTA'lari konsola yonlendirilir; Firebase Auth, Papirus session, Neon kayitlari ve R2 dosya akisi ana `exam-meuu/papirus-ai-app` uygulamasinda baslar.

## Guvenlik Notlari

- Bu projeye DB connection string, API key veya secret eklenmemelidir.
- Public env olarak yalnizca tarayicida gorunmesi kabul edilebilir degerler kullanilmalidir.
- Docs markdown icerigi public kabul edilmelidir.
