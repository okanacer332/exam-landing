import { useEffect, useState } from "react";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PageLoader } from "./components/PageLoader";
import { Pricing } from "./components/Pricing";
import { ProcessSteps } from "./components/ProcessSteps";
import { PrivacyPolicy } from "./components/policies/PrivacyPolicy";
import { SecurityPolicy } from "./components/policies/SecurityPolicy";
import { TermsOfUse } from "./components/policies/TermsOfUse";

type AuthIntent = "login" | "trial";

const consoleBaseUrl = (import.meta.env.VITE_CONSOLE_URL || "https://konsol.papirus-ai.com").replace(/\/$/, "");

function getRouteIntent(pathname: string): AuthIntent | null {
  const normalizedPath = pathname.replace(/\/$/, "");
  if (normalizedPath === "/giris" || normalizedPath === "/login") return "login";
  if (normalizedPath === "/kayit" || normalizedPath === "/register") return "trial";
  return null;
}

function getConsoleLoginUrl(intent: AuthIntent) {
  const url = new URL("/giris", consoleBaseUrl);
  url.searchParams.set("auth", "google");
  url.searchParams.set("intent", intent === "trial" ? "signup" : "signin");
  return url.toString();
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hash, setHash] = useState(window.location.hash);

  const goToConsole = (intent: AuthIntent) => {
    window.location.href = getConsoleLoginUrl(intent);
  };

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const routeIntent = getRouteIntent(window.location.pathname);
    if (routeIntent) {
      goToConsole(routeIntent);
    }
  }, []);

  const renderContent = () => {
    if (hash === "#gizlilik-politikasi") return <PrivacyPolicy />;
    if (hash === "#kullanim-kosullari") return <TermsOfUse />;
    if (hash === "#guvenlik-politikasi") return <SecurityPolicy />;

    return (
      <>
        <Hero onTryClick={() => goToConsole("trial")} />
        <ProcessSteps />
        <Features />
        <Pricing onTryClick={() => goToConsole("trial")} />
        <FAQ />
        <CTA onTryClick={() => goToConsole("trial")} />
      </>
    );
  };

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      <div className="flex min-h-screen flex-col bg-white">
        <Header onLoginClick={() => goToConsole("login")} onTryClick={() => goToConsole("trial")} />
        <main className="flex-1">{renderContent()}</main>
        <Footer />
      </div>
    </>
  );
}
