import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Chrome, Mail, X } from "lucide-react";
import { motion } from "motion/react";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "./Button";

export type AuthIntent = "login" | "trial";

interface RegistrationModalProps {
  open: boolean;
  intent: AuthIntent;
  onOpenChange: (open: boolean) => void;
  onIntentChange: (intent: AuthIntent) => void;
}

const consoleBaseUrl = (import.meta.env.VITE_CONSOLE_URL || "https://konsol.papirus-ai.com").replace(/\/$/, "");

function buildConsoleLoginUrl(params: Record<string, string>) {
  const url = new URL("/giris", consoleBaseUrl);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  return url.toString();
}

export function RegistrationModal({ open, intent, onOpenChange, onIntentChange }: RegistrationModalProps) {
  const [email, setEmail] = useState("");
  const isTrial = intent === "trial";

  useEffect(() => {
    if (!open) setEmail("");
  }, [open]);

  const handleGoogleSignIn = () => {
    window.location.href = buildConsoleLoginUrl({
      auto: "1",
      auth: "google",
      intent: isTrial ? "signup" : "signin",
    });
  };

  const handleEmailContinue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildConsoleLoginUrl({
      auth: "email",
      intent: isTrial ? "signup" : "signin",
      email: email.trim(),
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2rem)] max-w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-card p-6 shadow-2xl sm:p-8">
          <Dialog.Close className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            <X className="h-5 w-5" />
          </Dialog.Close>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2 pr-8">
              <Dialog.Title className="text-2xl font-bold text-foreground">
                {isTrial ? "Ücretsiz denemenizi başlatın" : "Papirus AI’a giriş yapın"}
              </Dialog.Title>
              <Dialog.Description className="text-sm leading-6 text-muted-foreground">
                {isTrial
                  ? "5 kağıt okuma hakkınızı kullanmak için hesabınızı güvenli şekilde oluşturun."
                  : "Hesabınıza devam edin; girişten sonra Papirus AI konsoluna yönlendirilirsiniz."}
              </Dialog.Description>
            </div>

            <div className="grid grid-cols-2 rounded-xl bg-secondary p-1 text-sm font-semibold">
              <button
                type="button"
                onClick={() => onIntentChange("trial")}
                className={`rounded-lg px-3 py-2 transition ${
                  isTrial ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Kayıt ol
              </button>
              <button
                type="button"
                onClick={() => onIntentChange("login")}
                className={`rounded-lg px-3 py-2 transition ${
                  !isTrial ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Giriş yap
              </button>
            </div>

            <Button variant="outline" size="lg" className="w-full border-primary bg-primary text-white hover:opacity-90" onClick={handleGoogleSignIn}>
              <Chrome className="h-5 w-5" />
              Gmail ile devam et
            </Button>

            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              veya
              <span className="h-px flex-1 bg-border" />
            </div>

            <form className="space-y-3" onSubmit={handleEmailContinue}>
              <label className="block text-sm font-semibold text-foreground" htmlFor="landing-auth-email">
                E-posta ile devam et
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="landing-auth-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="ornek@universite.edu.tr"
                    className="h-12 w-full rounded-xl border border-border bg-white pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                </div>
                <Button type="submit" variant="primary" size="md" className="h-12 whitespace-nowrap px-4">
                  Devam et
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs leading-5 text-muted-foreground">
                Şifre alanı ve hesap oluşturma işlemi güvenli konsol ekranında tamamlanır.
              </p>
            </form>

            <p className="text-center text-xs leading-5 text-muted-foreground">
              Devam ederek Kullanım Koşullarını ve Gizlilik Politikasını kabul etmiş olursunuz.
            </p>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
