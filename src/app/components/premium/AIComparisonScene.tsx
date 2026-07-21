import { BrainCircuit, Check, CircleAlert } from "lucide-react";

const aiSteps = [
  { label: "Rubrik", value: "ölçütler hizalandı", tone: "blue" },
  { label: "Çözüm", value: "adımlar eşleştirildi", tone: "indigo" },
  { label: "Karar", value: "puan önerisi denetime hazır", tone: "green" },
];

function SourcePaper({ variant }: { variant: "key" | "student" }) {
  const isKey = variant === "key";

  return (
    <article className={`ai-source-paper ai-source-paper--${variant}`}>
      <div className="ai-source-header">
        <span>{isKey ? "Rubrik ve cevap anahtarı" : "Öğrenci çözümü"}</span>
        {isKey ? <Check aria-hidden="true" /> : <CircleAlert aria-hidden="true" />}
      </div>

      <div className="ai-paper-title">
        <strong>{isKey ? "Soru 2 - Analitik puanlama" : "Soru 2 - Öğrenci yanıtı"}</strong>
        <span>{isKey ? "30 puan" : "taslak değerlendirme"}</span>
      </div>

      <div className="ai-rubric-table" aria-hidden="true">
        <div>
          <span>Ölçüt</span>
          <span>Puan</span>
        </div>
        <div>
          <strong>{isKey ? "Model kurulumu" : "Diyot modeli kurulmuş"}</strong>
          <em>{isKey ? "10" : "8"}</em>
        </div>
        <div>
          <strong>{isKey ? "Koşul analizi" : "Zener koşulu eksik"}</strong>
          <em>{isKey ? "12" : "7"}</em>
        </div>
        <div>
          <strong>{isKey ? "Sonuç yorumu" : "Kısmi yorum"}</strong>
          <em>{isKey ? "8" : "5"}</em>
        </div>
      </div>

      <div className="ai-solution-note">
        <span>{isKey ? "Beklenen izlek" : "Algılanan izlek"}</span>
        <p>
          {isKey
            ? "Önce devre modeli kurulur, ardından çalışma bölgesi gerekçelendirilir."
            : "Model doğru başlıyor; çalışma bölgesi gerekçesi tamamlanmalı."}
        </p>
      </div>
    </article>
  );
}

export function AIComparisonScene() {
  return (
    <div className="ai-comparison-scene" aria-label="Yapay zeka karşılaştırma sahnesi">
      <SourcePaper variant="key" />

      <div className="ai-core">
        <div className="ai-core-ring ai-core-ring--outer" />
        <div className="ai-core-ring ai-core-ring--inner" />
        <div className="ai-core-orb">
          <BrainCircuit aria-hidden="true" />
          <strong>YZ</strong>
        </div>
        <div className="ai-confidence">
          <span>Güven</span>
          <strong>97%</strong>
        </div>
      </div>

      <SourcePaper variant="student" />

      <div className="ai-match-panel">
        {aiSteps.map((step) => (
          <article className={`ai-match-row ai-match-row--${step.tone}`} key={step.label}>
            <span>{step.label}</span>
            <strong>{step.value}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}
