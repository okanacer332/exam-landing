# Papirus AI Landing Sistem Mimarisi

## Urun ve Sistem Ozeti

`exam-landing`, Papirus AI'in public web yuzudur. Akademisyenlere urunun amacini anlatir, fiyat/deneme mesajini sunar, yasal sayfalari barindirir ve dokumantasyon portalini yayinlar. Gercek login, signup, dosya yukleme, AI okuma ve kredi islemleri `konsol.papirus-ai.com` uzerindeki ana uygulamada yapilir.

## Uygulama Yapisi

- `src/main.tsx`: React uygulama girisi.
- `src/app/App.tsx`: Route niyeti, policy sayfalari, docs route'u ve console yonlendirmelerini yonetir.
- `src/app/components/premium/`: Landing ana deneyimi, pricing, hero, hikaye ve CTA componentleri.
- `src/app/components/policies/`: Gizlilik, KVKK, kullanim kosullari, iade, satis sozlesmesi gibi yasal sayfalar.
- `src/app/components/docs/`: Markdown tabanli dokumantasyon portalinin layout, sidebar, search ve content katmani.
- `docs/`: Kullanici dokumantasyonu markdown kaynaklari.
- `public/docs-media/`: Dokumantasyon gorselleri.
- `src/styles/`: Landing, docs ve tema stilleri.

## Route Davranisi

`App.tsx` browser path ve hash uzerinden hafif bir client route mantigi kurar:

- `/`: Premium landing.
- `/giris` veya `/login`: Konsol login URL'sine yonlendirir.
- `/kayit` veya `/register`: Konsol signup URL'sine yonlendirir.
- `/dokuman` ve alt pathler: Docs layout.
- Policy pathleri: Ilgili yasal component.

Konsol hedefi `VITE_CONSOLE_URL` ile verilebilir. Varsayilan hedef `https://konsol.papirus-ai.com` olarak tanimlanmistir.

## Dokumantasyon Portali

Docs sistemi `import.meta.glob("/docs/**/*.md")` ile markdown dosyalarini build zamaninda bundle'a alir. `marked` markdown'u HTML'e cevirir. Navigasyon `docsNav.ts` tarafindan belirlenir. Arama modal'i baslik ve markdown icerigi uzerinden client tarafinda sonuc uretir.

Bu portal son kullanici yardim dokumantasyonu icindir. Ana repo kokundeki `agents.md`, `system_mimarisi.md`, `deployment_rehberi.md` ve `veritabani_yapisi.md` ise gelistirici/ajan referansidir.

## Kullanici Akisi

1. Kullanici `https://papirus-ai.com` adresine gelir.
2. Urun deger onerisi, fiyat ve guven unsurlarini gorur.
3. Deneme veya giris CTA'lari konsola gider.
4. Konsolda Firebase Auth ve Papirus session akisi tamamlanir.
5. Kullanici cevap anahtari ve ogrenci kagidi akislariyla devam eder.

## Kritik Kararlar

- Landing, backend sorumlulugu tasimaz.
- Auth burada modal veya local session olarak uygulanmaz; console'a yonlendirilir.
- Yasal sayfalar static React componentleri olarak tutulur.
- Kullanici dokumantasyonu markdown dosyalarindan beslenir.
- Canli hosting Cloudflare Pages uzerindedir.
