import { useEffect, useState } from "react";
import { PageLoader } from "./components/PageLoader";
import { PremiumLanding } from "./components/premium/PremiumLanding";
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
      <PremiumLanding onLoginClick={() => goToConsole("login")} onTryClick={() => goToConsole("trial")} />
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
