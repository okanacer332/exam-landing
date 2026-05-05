import { PremiumHeader } from "./PremiumHeader";
import { ScrollStory } from "./ScrollStory";

type PremiumLandingProps = {
  onLoginClick: () => void;
  onTryClick: () => void;
};

export function PremiumLanding({ onLoginClick, onTryClick }: PremiumLandingProps) {
  return (
    <div className="premium-shell" id="top">
      <PremiumHeader onLoginClick={onLoginClick} onTryClick={onTryClick} />
      <main>
        <ScrollStory onTryClick={onTryClick} />
      </main>
    </div>
  );
}
