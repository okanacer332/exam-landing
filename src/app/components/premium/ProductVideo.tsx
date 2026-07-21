import { CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

export function ProductVideo() {
  return (
    <section className="product-video" id="urun-videosu" aria-labelledby="product-video-title">
      <div className="product-video__glow product-video__glow--blue" aria-hidden="true" />
      <div className="product-video__glow product-video__glow--violet" aria-hidden="true" />

      <div className="product-video__heading">
        <h2 id="product-video-title">El yazılı sınavları okuyan yapay zekayı görün.</h2>
        <p>
          Papirus AI’ın öğrenci cevaplarını nasıl okuduğunu, rubrikle eşleştirdiğini ve
          öğretmenin kontrolüne hazır sonuçlara dönüştürdüğünü gerçek ürün üzerinde izleyin.
        </p>
      </div>

      <div className="product-video__frame">
        <div className="product-video__chrome" aria-hidden="true">
          <div><i /><i /><i /></div>
          <span>papirus-ai.com · ürün demosu</span>
        </div>
        <iframe
          src="https://www.youtube-nocookie.com/embed/9NDZ5kQDGk8?rel=0&modestbranding=1"
          title="Papirus AI ürün tanıtım videosu"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      <div className="product-video__proofs" aria-label="Videoda gösterilen yetenekler">
        <div><CheckCircle2 aria-hidden="true" /><span><strong>El yazısı analizi</strong>Öğrenci cevabını soru düzeyinde okur.</span></div>
        <div><ShieldCheck aria-hidden="true" /><span><strong>Öğretmen kontrolü</strong>Puan ve gerekçe denetime açık kalır.</span></div>
        <div><Clock3 aria-hidden="true" /><span><strong>Uçtan uca akış</strong>Yüklemeden sınıf raporuna kadar.</span></div>
      </div>
    </section>
  );
}
