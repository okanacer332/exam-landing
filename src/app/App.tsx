import { useEffect, useMemo, useState } from "react";
import { PageLoader } from "./components/PageLoader";
import { DocsLayout } from "./components/docs/DocsLayout";
import { PremiumLanding } from "./components/premium/PremiumLanding";
import { CookiePolicy } from "./components/policies/CookiePolicy";
import { DistanceSalesContract } from "./components/policies/DistanceSalesContract";
import { KvkkPolicy } from "./components/policies/KvkkPolicy";
import { PreliminaryInfoForm } from "./components/policies/PreliminaryInfoForm";
import { PrivacyPolicy } from "./components/policies/PrivacyPolicy";
import { RefundPolicy } from "./components/policies/RefundPolicy";
import { SecurityPolicy } from "./components/policies/SecurityPolicy";
import { TermsOfUse } from "./components/policies/TermsOfUse";
import { getLocaleFromPath, normalizeLocale, stripLocalePrefix, withLocalePath, type Locale } from "./i18n";

type AuthIntent = "login" | "trial";

const consoleBaseUrl = (import.meta.env.VITE_CONSOLE_URL || "https://konsol.papirus-ai.com").replace(/\/$/, "");

function getRouteIntent(pathname: string): AuthIntent | null {
  const normalizedPath = stripLocalePrefix(pathname).replace(/\/$/, "");
  if (normalizedPath === "/giris" || normalizedPath === "/login") return "login";
  if (normalizedPath === "/kayit" || normalizedPath === "/register") return "trial";
  return null;
}

function getPolicyRoute(pathname: string, hash: string) {
  const p = stripLocalePrefix(pathname).replace(/^\/docs/, "/dokuman").replace(/\/$/, "");
  if (p === "/gizlilik-politikasi" || p === "/privacy-policy" || hash === "#gizlilik-politikasi") return "privacy";
  if (p === "/kullanim-kosullari" || p === "/terms" || hash === "#kullanim-kosullari") return "terms";
  if (p === "/guvenlik-politikasi" || p === "/security-policy" || hash === "#guvenlik-politikasi") return "security";
  if (p === "/kvkk-aydinlatma-metni" || p === "/kvkk-notice" || hash === "#kvkk-aydinlatma-metni") return "kvkk";
  if (p === "/cerez-politikasi" || p === "/cookie-policy" || hash === "#cerez-politikasi") return "cookie";
  if (p === "/mesafeli-satis-sozlesmesi" || p === "/distance-sales-contract" || hash === "#mesafeli-satis-sozlesmesi") return "distance-sales";
  if (p === "/on-bilgilendirme-formu" || p === "/preliminary-information" || hash === "#on-bilgilendirme-formu") return "preliminary-info";
  if (p === "/iade-iptal-politikasi" || p === "/refund-policy" || hash === "#iade-iptal-politikasi") return "refund";
  if (p === "/dokuman" || p.startsWith("/dokuman/")) return "docs";
  return null;
}

function getConsoleLoginUrl(intent: AuthIntent, locale: Locale) {
  const url = new URL("/giris", consoleBaseUrl);
  url.searchParams.set("auth", "google");
  url.searchParams.set("intent", intent === "trial" ? "signup" : "signin");
  if (locale === "en") url.searchParams.set("locale", "en");
  return url.toString();
}

function updateHead(locale: Locale) {
  document.documentElement.lang = locale;
  document.title = locale === "en" ? "Papirus AI | AI-assisted exam grading" : "Papirus AI | AI destekli sınav değerlendirme";
  const description =
    locale === "en"
      ? "Papirus AI helps instructors read written exams, compare answers with rubrics, and review AI-supported grading drafts."
      : "Papirus AI, akademisyenlerin yazılı sınavları rubrik ve AI destekli taslak puanlarla daha hızlı değerlendirmesine yardımcı olur.";
  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

export default function App() {
  const locale = getLocaleFromPath(window.location.pathname);
  const normalizedPath = stripLocalePrefix(window.location.pathname).replace(/^\/docs/, "/dokuman");
  if (normalizedPath === "/dokuman" || normalizedPath === "/dokuman/" || normalizedPath.startsWith("/dokuman/")) {
    return <DocsLayout locale={locale} />;
  }

  return <AppShell initialLocale={locale} />;
}

function AppShell({ initialLocale }: { initialLocale: Locale }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hash, setHash] = useState(window.location.hash);
  const [pathname, setPathname] = useState(window.location.pathname);
  const locale = useMemo(() => normalizeLocale(getLocaleFromPath(pathname) || initialLocale), [initialLocale, pathname]);

  useEffect(() => {
    localStorage.setItem("papirus_locale", locale);
    updateHead(locale);
  }, [locale]);

  const goToConsole = (intent: AuthIntent) => {
    window.location.href = getConsoleLoginUrl(intent, locale);
  };

  useEffect(() => {
    const onRouteChange = () => {
      setHash(window.location.hash);
      setPathname(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onRouteChange);
    window.addEventListener("popstate", onRouteChange);
    return () => {
      window.removeEventListener("hashchange", onRouteChange);
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  useEffect(() => {
    const routeIntent = getRouteIntent(window.location.pathname);
    if (routeIntent) {
      goToConsole(routeIntent);
    }
  }, []);

  const renderContent = () => {
    const policyRoute = getPolicyRoute(pathname, hash);
    if (policyRoute === "privacy") return <PrivacyPolicy />;
    if (policyRoute === "terms") return <TermsOfUse />;
    if (policyRoute === "security") return <SecurityPolicy />;
    if (policyRoute === "kvkk") return <KvkkPolicy />;
    if (policyRoute === "cookie") return <CookiePolicy />;
    if (policyRoute === "distance-sales") return <DistanceSalesContract />;
    if (policyRoute === "preliminary-info") return <PreliminaryInfoForm />;
    if (policyRoute === "refund") return <RefundPolicy />;

    return (
      <PremiumLanding
        locale={locale}
        loginUrl={getConsoleLoginUrl("login", locale)}
        tryUrl={getConsoleLoginUrl("trial", locale)}
        docsUrl={withLocalePath(locale, "/dokuman/")}
      />
    );
  };

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen">
        <main className="flex-1">{renderContent()}</main>
      </div>
    </>
  );
}
