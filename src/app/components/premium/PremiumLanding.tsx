import { PremiumHeader } from "./PremiumHeader";
import { PremiumFooter } from "./PremiumFooter";
import { PremiumFAQ } from "./PremiumFAQ";
import { ScrollStory } from "./ScrollStory";
import { MobileStory } from "./MobileStory";
import { PremiumPricing } from "./PremiumPricing";
import { ProductVideo } from "./ProductVideo";

type PremiumLandingProps = {
  loginUrl: string;
  tryUrl: string;
};

export function PremiumLanding({ loginUrl, tryUrl }: PremiumLandingProps) {
  return (
    <div className="premium-shell" id="top">
      <PremiumHeader loginUrl={loginUrl} tryUrl={tryUrl} />
      <main>
        <ProductVideo />
        {/* Masaüstü: scroll-driven GSAP animasyonu — mobilde CSS ile gizlenir */}
        <ScrollStory tryUrl={tryUrl} />
        {/* Mobil: statik moment kartları — masaüstünde CSS ile gizlenir */}
        <MobileStory />
        <PremiumFAQ />
        <PremiumPricing tryUrl={tryUrl} />
      </main>
      <PremiumFooter />
    </div>
  );
}
