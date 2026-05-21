import { ArrowRight } from "lucide-react";
import type { LandingCopy } from "../../i18n";
import { ResultDashboard } from "./ResultDashboard";

type ScrollStoryProps = {
  copy: LandingCopy;
  tryUrl: string;
};

export function ScrollStory({ copy, tryUrl }: ScrollStoryProps) {
  const hero = copy.panels[0];
  return (
    <section className="localized-hero" id="scan">
      <div className="localized-hero__copy">
        <span>{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <a href={tryUrl} className="premium-primary-button">
          {copy.nav.tryFree}
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className="localized-hero__visual" aria-hidden="true">
        <ResultDashboard />
      </div>
    </section>
  );
}
