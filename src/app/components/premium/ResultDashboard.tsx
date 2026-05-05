const metrics = [
  { label: "Ortalama", value: "78.4", detail: "100 üzerinden" },
  { label: "En zor soru", value: "Soru 4", detail: "%41 başarı" },
  { label: "Kontrol", value: "12 dk", detail: "taslak inceleme" },
];

export function ResultDashboard() {
  return (
    <div className="result-dashboard" aria-label="Sınav analiz paneli">
      <div className="dashboard-orbit" />
      <div className="dashboard-gridline" aria-hidden="true" />
      <div className="dashboard-hero-metric">
        <span>Sınıf başarısı</span>
        <strong>86%</strong>
      </div>
      <div className="dashboard-status">
        <span />
        <p>12 kağıt kontrol edildi</p>
      </div>
      <div className="dashboard-chart" aria-hidden="true">
        <span style={{ height: "58%" }} />
        <span style={{ height: "74%" }} />
        <span style={{ height: "42%" }} />
        <span style={{ height: "88%" }} />
        <span style={{ height: "66%" }} />
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
