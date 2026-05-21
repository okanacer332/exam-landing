import type { Locale } from "../../i18n";
import { landingCopy } from "../../i18n";
import { MobileStory } from "./MobileStory";
import { PremiumFAQ } from "./PremiumFAQ";
import { PremiumFooter } from "./PremiumFooter";
import { PremiumHeader } from "./PremiumHeader";
import { PremiumPricing } from "./PremiumPricing";
import { ScrollStory } from "./ScrollStory";

type PremiumLandingProps = {
  docsUrl: string;
  locale: Locale;
  loginUrl: string;
  tryUrl: string;
};

export function PremiumLanding({ docsUrl, locale, loginUrl, tryUrl }: PremiumLandingProps) {
  const copy = landingCopy[locale];
  return (
    <div className="premium-shell" id="top">
      <PremiumHeader docsUrl={docsUrl} locale={locale} loginUrl={loginUrl} tryUrl={tryUrl} />
      <main>
        <ScrollStory copy={copy} tryUrl={tryUrl} />
        <MobileStory copy={copy} />
        <PremiumFAQ copy={copy} />
        <PremiumPricing copy={copy} />
      </main>
      <PremiumFooter copy={copy} locale={locale} />
    </div>
  );
}
