const boxes = [
  { label: "", top: "19%", left: "5%", width: "90%", height: "24%" },
  { label: "30p", top: "44%", left: "5%", width: "90%", height: "14%" },
  { label: "30p", top: "60%", left: "5%", width: "90%", height: "13%" },
  { label: "15p", top: "78%", left: "5%", width: "42%", height: "17%" },
  { label: "40p", top: "78%", left: "53%", width: "42%", height: "17%" },
];

export function StoryPaper() {
  return (
    <div className="story-paper" aria-label="Taranan sınav kağıdı">
      <div className="paper-glow" />
      <div className="paper-sheet">
        <img className="paper-image" src="/exam-example.jpeg" alt="Örnek sınav kağıdı" />
        <div className="paper-scan-field" aria-hidden="true" />

        {boxes.map(({ label, ...box }, index) => (
          <div className="scan-box" key={index} style={box}>
            {label ? <strong>{label}</strong> : null}
            <span />
            <span />
            <span />
            <span />
          </div>
        ))}

        <div className="paper-data-token paper-data-token--one">OCR 98.7</div>
        <div className="paper-data-token paper-data-token--two">rubric match</div>

        <div className="scan-beam">
          <span />
        </div>
      </div>
    </div>
  );
}
