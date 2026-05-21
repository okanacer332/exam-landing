import { CheckCircle2, ScanLine, Sparkles } from "lucide-react";
import type { LandingCopy } from "../../i18n";
import { StoryPaper } from "./StoryPaper";

const icons = [ScanLine, Sparkles, CheckCircle2];

export function MobileStory({ copy }: { copy: LandingCopy }) {
  return (
    <section className="mobile-story" aria-label="Papirus AI">
      <div className="mobile-story-sticky">
        <StoryPaper />
      </div>

      <div className="mobile-story-moments">
        {copy.mobileMoments.map((moment, index) => {
          const Icon = icons[index] || CheckCircle2;
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
