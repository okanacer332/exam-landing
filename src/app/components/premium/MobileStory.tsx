import { CheckCircle2, ScanLine, Sparkles } from "lucide-react";
import { StoryPaper } from "./StoryPaper";

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
    </section>
  );
}
