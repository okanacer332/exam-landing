import { motion } from "motion/react";
import { Button } from "./Button";
import { Check } from "lucide-react";

interface CTAProps {
  onTryClick: () => void;
}

export function CTA({ onTryClick }: CTAProps) {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-6 sm:p-12 text-center shadow-2xl"
      >
        <h2 className="text-3xl sm:text-4xl text-white mb-4">
          Değerlendirme Sürecinizi Dönüştürmeye Hazır mısınız?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          5 kağıt okuma hakkı ile ücretsiz denemenizi bugün başlatın. Kredi kartı gerektirmez.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 mb-8">
          <Button
            variant="secondary"
            size="lg"
            onClick={onTryClick}
            className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
          >
            Ücretsiz Deneyin
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
          >
            Demo Talep Edin
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>5 kağıt okuma hakkı</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>Kredi kartı gerekmez</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            <span>İstediğiniz zaman iptal edin</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
