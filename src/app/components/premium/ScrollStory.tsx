import { ArrowRight } from "lucide-react";
import type { LandingCopy } from "../../i18n";
import { AIComparisonScene } from "./AIComparisonScene";
import { ComparisonScene } from "./ComparisonScene";
import { ResultDashboard } from "./ResultDashboard";
import { StoryPaper } from "./StoryPaper";

type ScrollStoryProps = {
  copy: LandingCopy;
  tryUrl: string;
};

export function ScrollStory({ copy, tryUrl }: ScrollStoryProps) {
  return (
    <section className="scroll-story journey-story">
      <div className="story-progress" aria-hidden="true">
        <div style={{ transform: "scaleX(1)" }} />
      </div>

      <div className="journey-sticky">
        <div className="journey-stage">
          <div className="journey-paper">
            <StoryPaper />
            <div className="scan-console" aria-hidden="true">
              <span>papirus.scan</span>
              <strong>{copy.nav.scan}</strong>
            </div>
          </div>
          <div className="journey-ai-comparison">
            <AIComparisonScene />
          </div>
          <div className="journey-comparison">
            <ComparisonScene />
          </div>
          <div className="journey-dashboard">
            <ResultDashboard />
          </div>
        </div>

        <div className="journey-copy" aria-live="polite">
          {copy.panels.map((panel, index) => (
            <article className={`journey-panel journey-panel--${panel.id}`} id={panel.id} key={panel.id}>
              <span>{panel.eyebrow}</span>
              <h1>{panel.title}</h1>
              <p>{panel.text}</p>
              {index === 0 ? (
                <a href={tryUrl} className="premium-primary-button">
                  {copy.nav.tryFree}
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
