import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { AIComparisonScene } from "./AIComparisonScene";
import { ComparisonScene } from "./ComparisonScene";
import { ResultDashboard } from "./ResultDashboard";
import { StoryPaper } from "./StoryPaper";

gsap.registerPlugin(ScrollTrigger);

const storyPanels = [
  {
    id: "hero",
    eyebrow: "Papirus AI",
    title: "Değerlendirme yükünü azaltın, akademik odağınızı koruyun.",
    text: "Papirus AI, yazılı sınav evraklarını düzenli biçimde okur, çözüm adımlarını izler ve puanlama sürecini öğretim elemanının kontrolünde şeffaflaştırır.",
  },
  {
    id: "scan",
    eyebrow: "The Scan",
    title: "Sınav evrakı, soru düzeyinde okunabilir veriye dönüşür.",
    text: "Focus Blue tarama çizgisi kağıdın üzerinden inerken soru alanları, yanıt boşlukları ve puan bölümleri ayrı katmanlar halinde ayrışır.",
  },
  {
    id: "ai-compare",
    eyebrow: "AI Comparison",
    title: "Papirus, yanıtı rubrikle ve çözüm akışıyla birlikte değerlendirir.",
    text: "Cevap anahtarı, puan ölçütleri ve öğrencinin işlem adımları aynı ekranda hizalanır; önerilen puan her zaman öğretim elemanının denetimine açık kalır.",
  },
  {
    id: "compare",
    eyebrow: "The Comparison",
    title: "Adil Değerlendirme. Her adımda mantık takibi.",
    text: "Öğretmen anahtarı ve öğrenci kağıdı iki ayrı düzlemde eşleşir; doğru adımlar yeşil, riskli adımlar yumuşak turuncu ile belirir.",
  },
  {
    id: "dashboard",
    eyebrow: "The Result",
    title: "Sınıfın akademik performans profili tek ekranda netleşir.",
    text: "Papirus; soru bazlı başarıyı, kazanım kırılımlarını ve kontrol gerektiren yanıtları öğretim elemanının denetimine hazır bir özet halinde sunar.",
  },
];

type ScrollStoryProps = {
  tryUrl: string;
};

export function ScrollStory({ tryUrl }: ScrollStoryProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const paperRef = useRef<HTMLDivElement | null>(null);
  const aiComparisonRef = useRef<HTMLDivElement | null>(null);
  const comparisonRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<Array<HTMLElement | null>>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.set(panelRefs.current[0], { autoAlpha: 1, y: 0 });
      gsap.set(panelRefs.current.slice(1), { autoAlpha: 0, y: 28 });
      gsap.set([aiComparisonRef.current, comparisonRef.current, dashboardRef.current], { autoAlpha: 0, y: 72, scale: 0.94 });
      gsap.set(paperRef.current, { autoAlpha: 1, scale: 0.72, y: -78, rotateZ: 0, rotateX: 0 });
      gsap.set(".scan-box", { autoAlpha: 0, scale: 0.92 });
      gsap.set(".paper-data-token", { autoAlpha: 0, y: 10 });
      gsap.set(".scan-beam", { autoAlpha: 0, yPercent: -18 });
      gsap.set(".scan-console", { autoAlpha: 0, y: 16 });
      gsap.set(".ai-source-paper", { autoAlpha: 0, y: 34, scale: 0.94 });
      gsap.set(".ai-core", { autoAlpha: 0, scale: 0.72 });
      gsap.set(".ai-match-row", { autoAlpha: 0, x: -18 });
      gsap.set(".data-streams span", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".mini-paper-track span", { scaleX: 0, transformOrigin: "left center" });
      gsap.set(".dashboard-hero-metric, .dashboard-status, .dashboard-metrics article", { autoAlpha: 0, y: 18 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      timeline
        .to(progressRef.current, { scaleX: 1, ease: "none", duration: 4.1 }, 0)
        .to(paperRef.current, { scale: 0.88, y: -92, duration: 0.36, ease: "power1.out" }, 0)
        .to(panelRefs.current[0], { autoAlpha: 0, y: -24, duration: 0.24 }, 0.22)
        .to(panelRefs.current[1], { autoAlpha: 1, y: 0, duration: 0.32 }, 0.3)
        .to(paperRef.current, { rotateZ: -5, rotateX: 5, scale: 1.1, y: -18, duration: 0.48 }, 0.34)
        .to(".scan-beam", { autoAlpha: 1, duration: 0.1 }, 0.52)
        .to(".scan-beam", { yPercent: 125, ease: "none", duration: 0.68 }, 0.56)
        .to(".scan-box", { autoAlpha: 1, scale: 1, stagger: 0.08, duration: 0.32 }, 0.78)
        .to(".paper-data-token", { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.26 }, 0.95)
        .to(".scan-console", { autoAlpha: 1, y: 0, duration: 0.28 }, 0.92)
        .to(panelRefs.current[1], { autoAlpha: 0, y: -24, duration: 0.24 }, 1.18)
        .to(panelRefs.current[2], { autoAlpha: 1, y: 0, duration: 0.32 }, 1.28)
        .to(paperRef.current, { autoAlpha: 0, scale: 0.68, xPercent: -42, y: -34, duration: 0.34 }, 1.2)
        .to(aiComparisonRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, 1.32)
        .to(".ai-core", { autoAlpha: 1, scale: 1, duration: 0.36 }, 1.42)
        .to(".ai-source-paper", { autoAlpha: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.34 }, 1.5)
        .to(".ai-match-row", { autoAlpha: 1, x: 0, stagger: 0.08, duration: 0.28 }, 1.68)
        .to(panelRefs.current[2], { autoAlpha: 0, y: -24, duration: 0.24 }, 2.14)
        .to(panelRefs.current[3], { autoAlpha: 1, y: 0, duration: 0.32 }, 2.24)
        .to(aiComparisonRef.current, { autoAlpha: 0, scale: 0.9, y: -68, duration: 0.42 }, 2.2)
        .to(comparisonRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, 2.3)
        .to(".data-streams span", { scaleX: 1, stagger: 0.08, duration: 0.34 }, 2.48)
        .to(".mini-paper-track span", { scaleX: 1, stagger: 0.08, duration: 0.32 }, 2.56)
        .to(panelRefs.current[3], { autoAlpha: 0, y: -24, duration: 0.24 }, 3.08)
        .to(panelRefs.current[4], { autoAlpha: 1, y: 0, duration: 0.34 }, 3.18)
        .to(comparisonRef.current, { autoAlpha: 0, scale: 0.9, y: -68, duration: 0.42 }, 3.14)
        .to(dashboardRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.54 }, 3.24)
        .to(".dashboard-hero-metric, .dashboard-status, .dashboard-metrics article", { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.32 }, 3.32)
        .fromTo(".dashboard-bar span", { scaleY: 0.18 }, { scaleY: 1, transformOrigin: "bottom", stagger: 0.05, duration: 0.42 }, 3.4);
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section className="scroll-story journey-story" ref={rootRef}>
      <div className="story-progress" aria-hidden="true">
        <div ref={progressRef} />
      </div>

      <div className="journey-sticky">
        <div className="journey-stage">
          <div className="journey-paper" ref={paperRef}>
            <StoryPaper />
            <div className="scan-console" aria-hidden="true">
              <span>papirus.scan</span>
              <strong>Sınav kağıdı analiz ediliyor...</strong>
            </div>
          </div>

          <div className="journey-ai-comparison" ref={aiComparisonRef}>
            <AIComparisonScene />
          </div>

          <div className="journey-comparison" ref={comparisonRef}>
            <ComparisonScene />
          </div>

          <div className="journey-dashboard" ref={dashboardRef}>
            <ResultDashboard />
          </div>
        </div>

        <div className="journey-copy" aria-live="polite">
          {storyPanels.map((panel, index) => (
            <article
              className={`journey-panel journey-panel--${panel.id}`}
              id={panel.id}
              key={panel.id}
              ref={(node) => {
                panelRefs.current[index] = node;
              }}
            >
              <span>{panel.eyebrow}</span>
              <h1>{panel.title}</h1>
              <p>{panel.text}</p>
              {index === 0 ? (
                <a href={tryUrl} className="premium-primary-button">
                  Ücretsiz deneyin
                  <ArrowRight aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
