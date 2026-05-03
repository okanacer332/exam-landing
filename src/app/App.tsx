import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProcessSteps } from "./components/ProcessSteps";
import { Features } from "./components/Features";
import { PrivacyPolicy } from "./components/policies/PrivacyPolicy";
import { TermsOfUse } from "./components/policies/TermsOfUse";
import { SecurityPolicy } from "./components/policies/SecurityPolicy";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { RegistrationModal } from "./components/RegistrationModal";
import { PageLoader } from "./components/PageLoader";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderContent = () => {
    if (hash === '#gizlilik-politikasi') return <PrivacyPolicy />;
    if (hash === '#kullanim-kosullari') return <TermsOfUse />;
    if (hash === '#guvenlik-politikasi') return <SecurityPolicy />;
    
    return (
      <>
        <Hero onTryClick={() => setIsModalOpen(true)} />
        <ProcessSteps />
        <Features />
        <Pricing onTryClick={() => setIsModalOpen(true)} />
        <FAQ />
        <CTA onTryClick={() => setIsModalOpen(true)} />
      </>
    );
  };

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white flex flex-col">
        <Header onTryClick={() => setIsModalOpen(true)} />
        <main className="flex-1">
          {renderContent()}
        </main>
        <Footer />
        <RegistrationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </>
  );
}
