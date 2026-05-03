import { Brain, Zap, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Brain,
    title: "Yapay Zeka Destekli",
    description: "Gelişmiş optik karakter tanıma ve makine öğrenimi ile yüksek doğruluk",
  },
  {
    icon: Zap,
    title: "Hızlı İşlem",
    description: "Yüzlerce sınavı dakikalar içinde değerlendirin",
  },
  {
    icon: Shield,
    title: "Güvenli Altyapı",
    description: "Kurumsal düzeyde güvenlik ve uçtan uca şifreleme",
  },
  {
    icon: Users,
    title: "Ekip Çalışması",
    description: "Cevap anahtarlarını ve değerlendirme kriterlerini bölümünüzle paylaşın",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground">
              Güçlü Özellikler
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Akademik değerlendirme sürecinizi optimize etmek için ihtiyacınız olan her şey
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-5 sm:p-6 bg-white border border-border rounded-2xl hover:shadow-xl hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
