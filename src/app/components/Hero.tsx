import { GraduationCap } from "lucide-react";
import { Button } from "./Button";
import { motion } from "motion/react";

interface HeroProps {
  onTryClick: () => void;
}

export function Hero({ onTryClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-white to-secondary px-4 py-14 sm:px-6 sm:py-20">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="greek-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 L40 0 L80 40 L40 80 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#greek-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Akademisyenlerin Sınav Odaklı <span className="text-primary">AI Asistanı</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Klasik sınav değerlendirmelerinizi daha hızlı, güvenilir ve adil bir şekilde
              tamamlayın. Yapay zeka destekli sistemimiz, optik okuma teknolojisiyle sınav
              kağıtlarınızı otomatik değerlendirir ve size anlamlı içgörüler sunar.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button variant="primary" size="lg" onClick={onTryClick} className="w-full sm:w-auto">
                <GraduationCap className="w-5 h-5" />
                Ücretsiz Deneyin
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Paketleri İnceleyin
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[280px] sm:h-[380px] lg:h-[500px] flex items-center justify-center"
          >
            <img
              src="/hero-illustration.png"
              alt="AI Grading Illustration"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
