import { CheckCircle2, Clock3, Play, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function ProductVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState(
    "https://i.ytimg.com/vi/9NDZ5kQDGk8/maxresdefault.jpg",
  );

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
        {isPlaying ? (
          <iframe
            src="https://www.youtube-nocookie.com/embed/9NDZ5kQDGk8?autoplay=1&rel=0&modestbranding=1"
            title="Papirus AI ürün tanıtım videosu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className="product-video__poster"
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Papirus AI ürün videosunu oynat"
          >
            <img
              src={thumbnailUrl}
              alt="Papirus AI ürün demosu"
              onLoad={(event) => {
                if (event.currentTarget.naturalWidth < 640 && thumbnailUrl.includes("maxresdefault")) {
                  setThumbnailUrl("https://i.ytimg.com/vi/9NDZ5kQDGk8/sddefault.jpg");
                }
              }}
              onError={() => setThumbnailUrl("https://i.ytimg.com/vi/9NDZ5kQDGk8/sddefault.jpg")}
            />
            <span><Play fill="currentColor" aria-hidden="true" /></span>
            <strong>Ürün videosunu oynat</strong>
          </button>
        )}
      </div>

      <div className="product-video__proofs" aria-label="Videoda gösterilen yetenekler">
        <div><CheckCircle2 aria-hidden="true" /><span><strong>El yazısı analizi</strong>Öğrenci cevabını soru düzeyinde okur.</span></div>
        <div><ShieldCheck aria-hidden="true" /><span><strong>Öğretmen kontrolü</strong>Puan ve gerekçe denetime açık kalır.</span></div>
        <div><Clock3 aria-hidden="true" /><span><strong>Uçtan uca akış</strong>Yüklemeden sınıf raporuna kadar.</span></div>
      </div>
    </section>
  );
}
