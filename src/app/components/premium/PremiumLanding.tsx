import { PremiumHeader } from "./PremiumHeader";
import { PremiumFooter } from "./PremiumFooter";
import { PremiumFAQ } from "./PremiumFAQ";
import { ScrollStory } from "./ScrollStory";
import { MobileStory } from "./MobileStory";
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
        {/* Masaüstü: scroll-driven GSAP animasyonu — mobilde CSS ile gizlenir */}
        <ScrollStory onTryClick={onTryClick} />
        {/* Mobil: statik moment kartları — masaüstünde CSS ile gizlenir */}
        <MobileStory />
        <PremiumFAQ />
        <PremiumPricing onTryClick={onTryClick} />
      </main>
      <PremiumFooter />
    </div>
  );
}
