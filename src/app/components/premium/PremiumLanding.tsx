import { PremiumHeader } from "./PremiumHeader";
import { PremiumFooter } from "./PremiumFooter";
import { PremiumFAQ } from "./PremiumFAQ";
import { ScrollStory } from "./ScrollStory";
import { PremiumPricing } from "./PremiumPricing";

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
        <PremiumFAQ />
        <PremiumPricing onTryClick={onTryClick} />
      </main>
      <PremiumFooter />
    </div>
  );
}
