import { Button } from "./Button";

interface HeaderProps {
  onLoginClick: () => void;
  onTryClick: () => void;
}

export function Header({ onLoginClick, onTryClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-6 sm:py-4">
        <div className="flex min-w-0 items-center gap-2">
          <img src="/papirus-logo.svg" alt="Papirus AI" className="h-8 w-auto max-w-[132px] sm:h-10 sm:max-w-none" />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
            Özellikler
          </a>
          <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
            Nasıl Çalışır
          </a>
          <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Fiyatlandırma
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Button variant="ghost" size="sm" onClick={onLoginClick} className="px-2.5 text-xs sm:px-4 sm:text-sm">
            <span className="sm:hidden">Giriş</span>
            <span className="hidden sm:inline">Giriş Yapın</span>
          </Button>
          <Button variant="primary" size="sm" onClick={onTryClick} className="px-2.5 text-xs sm:px-4 sm:text-sm">
            <span className="sm:hidden">Dene</span>
            <span className="hidden sm:inline">Ücretsiz Deneyin</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
