import { Check, CircleAlert } from "lucide-react";

function MiniPaper({
  title,
  variant,
}: {
  title: string;
  variant: "teacher" | "student";
}) {
  return (
    <article className={`mini-paper mini-paper--${variant}`}>
      <div className="mini-paper-header">
        <span>{title}</span>
        <strong>{variant === "teacher" ? "Anahtar" : "Öğrenci"}</strong>
      </div>
      <div className="mini-paper-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="mini-paper-track">
        <span />
        <span />
      </div>
      <div className="mini-paper-score">
        {variant === "teacher" ? <Check aria-hidden="true" /> : <CircleAlert aria-hidden="true" />}
        <p>{variant === "teacher" ? "Doğru çözüm adımları" : "İşlem hatası tespit edildi"}</p>
      </div>
    </article>
  );
}

export function ComparisonScene() {
  return (
    <div className="comparison-scene" aria-label="Öğretmen ve öğrenci kağıdı karşılaştırması">
      <MiniPaper title="Soru 2" variant="teacher" />
      <div className="data-streams">
        <span />
        <span />
        <span />
      </div>
      <MiniPaper title="Soru 2" variant="student" />
    </div>
  );
}
