import { CheckCircle2, ScanLine, Sparkles } from "lucide-react";
import { StoryPaper } from "./StoryPaper";
import { useEffect, useState } from "react";

const moments = [
  {
    icon: ScanLine,
    title: "El yazısı tanımlanıyor",
    text: "Kağıt sabit kalır, Papirus cevap alanlarını satır satır yakalar.",
  },
  {
    icon: Sparkles,
    title: "Cevaplar eşleştiriliyor",
    text: "Öğretmen anahtarı ile öğrenci çözümü aynı soru mantığında buluşur.",
  },
  {
    icon: CheckCircle2,
    title: "Taslak puan hazır",
    text: "Hoca son kararı vermeden önce gerekçeli ve kontrol edilebilir sonuç görür.",
  },
];

export function MobileStory() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowHint(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mobile-story" aria-label="Mobil Papirus AI deneyimi">
      <div className="mobile-story-sticky">
        <StoryPaper />
      </div>

      <div className="mobile-story-moments">
        {moments.map((moment) => {
          const Icon = moment.icon;
          return (
            <article className="mobile-moment" key={moment.title}>
              <Icon aria-hidden="true" />
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Scroll hint — ilk scroll'dan sonra kayboluyor */}
      {showHint && (
        <div className="scroll-hint" aria-hidden="true">
          <div className="scroll-hint-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
