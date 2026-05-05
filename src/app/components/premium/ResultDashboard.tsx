const questionScores = [
  { label: "S1", value: 84 },
  { label: "S2", value: 72 },
  { label: "S3", value: 91 },
  { label: "S4", value: 58 },
  { label: "S5", value: 76 },
];

const metrics = [
  { label: "Kontrol bekleyen", value: "3 yanıt", detail: "akademisyen onayı" },
  { label: "Riskli kazanım", value: "Soru 4", detail: "%58 sınıf başarısı" },
  { label: "Rubrik uyumu", value: "%92", detail: "anahtar ile eşleşme" },
];

export function ResultDashboard() {
  return (
    <div className="result-dashboard" aria-label="Sınav analiz paneli">
      <div className="dashboard-orbit" />
      <div className="dashboard-gridline" aria-hidden="true" />
      <div className="dashboard-hero-metric">
        <span>Genel ortalama</span>
        <strong>78.4</strong>
        <p>100 puan üzerinden sınıf ortalaması</p>
      </div>
      <div className="dashboard-status">
        <span />
        <p>12 kağıt analiz edildi</p>
      </div>

      <div className="dashboard-chart" aria-label="Soru bazlı başarı oranı">
        <div className="dashboard-chart-head">
          <div>
            <span>Soru bazlı başarı oranı</span>
            <strong>Değerlendirme özeti</strong>
          </div>
          <p>Ortalama çizgisi %78</p>
        </div>
        <div className="dashboard-bars" aria-hidden="true">
          <div className="dashboard-average-line" />
          {questionScores.map((score) => (
            <div className="dashboard-bar" key={score.label}>
              <strong>{score.value}%</strong>
              <span style={{ height: `${score.value}%` }} />
              <p>{score.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
