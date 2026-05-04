import { Check, Info, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { motion } from "motion/react";

const plans = [
  {
    name: "Ücretsiz Deneme",
    description: "Sistemin hızını ve doğruluğunu kendi sınav kağıtlarınızla test edin.",
    price: "Ücretsiz",
    billing: "Kredi kartı gerekmez",
    scope: "5 Kağıt Okuma",
    highlight: "Kurumsal (.edu.tr) e-posta ile hızlı başlangıç",
    features: [
      "Yapay Zeka Destekli El Yazısı Analizi",
      "Otomatik Cevap Anahtarı Karşılaştırması",
    ],
    buttonText: "Ücretsiz Deneyin",
    popular: false,
  },
  {
    name: "Başlangıç",
    description: "Dönem içinde birkaç sınavını hızlıca değerlendirmek isteyen akademisyenler için.",
    price: "₺1.999",
    billing: "Tek seferlik kullanım paketi",
    scope: "350 Kağıt Okuma",
    highlight: "Küçük sınıflar ve dönemlik denemeler için ideal",
    features: [
      "Öğretmen cevap anahtarı okuma",
      "Öğrenci kağıdı okuma ve puanlama",
      "Geçmiş sınav arşivi",
      "Sonuç raporu ve soru bazlı geri bildirim",
    ],
    buttonText: "Paketi Seç",
    popular: false,
  },
  {
    name: "Akademik",
    description: "Birden fazla ders ve kalabalık sınıflar için en dengeli kullanım paketi.",
    price: "₺4.999",
    billing: "Tek seferlik kullanım paketi",
    scope: "1000 Kağıt Okuma",
    highlight: "En çok tercih edilen akademisyen paketi",
    features: [
      "Öğretmen cevap anahtarı okuma",
      "Toplu öğrenci kağıdı yükleme",
      "Geçmiş sınav arşivi",
      "Soru bazlı puanlama dökümü",
      "Excel/CSV ile not aktarımı",
    ],
    buttonText: "En Çok Satılan Paketi Seç",
    popular: true,
  },
  {
    name: "Kurumsal",
    description: "Yoğun sınav dönemleri, bölüm ekipleri ve büyük sınıflar için yüksek hacimli paket.",
    price: "₺19.999",
    billing: "Tek seferlik kullanım paketi",
    scope: "5000 Kağıt Okuma",
    highlight: "Bölüm, kürsü ve asistan ekipleri için geniş kullanım alanı",
    features: [
      "Öğretmen cevap anahtarı okuma",
      "Toplu öğrenci kağıdı yükleme",
      "Geçmiş sınav arşivi",
      "Soru bazlı puanlama dökümü",
      "Ekip kullanımı için yüksek hacim",
    ],
    buttonText: "Kurumsal Paketi Seç",
    popular: false,
  },
];

interface PricingProps {
  onTryClick: () => void;
}

export function Pricing({ onTryClick }: PricingProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground font-bold">Esnek Fiyatlandırma</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Akademik ihtiyaçlarınıza ve kullanım yoğunluğunuza en uygun paketi seçin.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white border ${
                plan.popular ? "border-primary shadow-2xl" : "border-border shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto max-w-[calc(100%-2rem)] px-4 py-1.5 bg-primary text-white text-center text-sm font-semibold rounded-full">
                  En Popüler Seçim
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-14">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
                <span className="text-sm text-muted-foreground">{plan.billing}</span>
              </div>

              <div className="mb-6 p-4 bg-secondary/50 rounded-xl space-y-2">
                <div className="font-semibold text-foreground text-sm">Kapsam: {plan.scope}</div>
                <div className="text-sm text-primary flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{plan.highlight}</span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm font-medium mb-4">Özellikler:</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => {
                    const isHighlighted = feature === "Toplu öğrenci kağıdı yükleme" || feature === "Excel/CSV ile not aktarımı" || feature === "Ekip kullanımı için yüksek hacim";
                    return (
                      <li key={i} className="flex items-start gap-3">
                        {isHighlighted ? (
                          <Sparkles className="w-5 h-5 text-blue-900 flex-shrink-0" />
                        ) : (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${isHighlighted ? "text-foreground font-bold underline decoration-blue-900/30 decoration-2 underline-offset-4" : "text-foreground"}`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <Button
                variant={plan.popular ? "primary" : "ghost"}
                className={`w-full ${!plan.popular && "border border-border"}`}
                onClick={onTryClick}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-foreground">Kağıt okuma hakkınız mı doldu? Ek paket alın.</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">Sınav dönemlerinde limitlere takılmayın. İhtiyaç duyduğunuzda yeni kağıt okuma paketi alarak değerlendirme sürecinize kesintisiz devam edebilirsiniz.</p>
          </div>
          <div className="w-full min-w-0 text-center md:w-auto md:min-w-[200px] md:text-right">
            <div className="text-2xl font-bold text-foreground">350 Kağıt Okuma</div>
            <div className="text-lg text-primary font-semibold">₺1.999</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="ghost" className="group h-auto max-w-full whitespace-normal text-center">
            Üniversite/Fakülte bazlı kurumsal lisanslama için bizimle iletişime geçin
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
