import { Check, Info, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { motion } from "motion/react";

const plans = [
  {
    name: "Ücretsiz Deneme",
    description: "Sistemin hızını ve doğruluğunu kendi sınav kağıtlarınızla test edin.",
    price: "Ücretsiz",
    billing: "Kredi kartı gerekmez",
    scope: "5 Sınav Kağıdı Kredisi",
    highlight: "Kurumsal (.edu.tr) e-posta ile hızlı başlangıç",
    features: [
      "Yapay Zeka Destekli El Yazısı Analizi",
      "Otomatik Cevap Anahtarı Karşılaştırması",
    ],
    buttonText: "Ücretsiz Deneyin",
    popular: false,
  },
  {
    name: "Bireysel Akademisyen",
    description: "Dersleri ve asistanlık süreçlerini tek başına yöneten akademisyenler için.",
    price: "10.000 TL",
    billing: "Yıllık (2 ay bizden hediye) veya Aylık 1.000 TL",
    scope: "Yıllık 1.500 Kağıt Kredisi",
    highlight: "Kişisel kullanım ve akademik bütçeler için ideal",
    features: [
      "Kişiye Özel Güvenli Oturum",
      "Bölüm ve Ders Bazlı Özelleştirme",
      "Excel/CSV İle Kolay Not Aktarımı",
      "7/24 Öncelikli Teknik Destek",
    ],
    buttonText: "Hemen Başlayın",
    popular: true,
  },
  {
    name: "Araştırma Grubu & Kürsü",
    description: "Asistan ekibiyle ortak ders yürüten ve yoğun sınav yapan kürsüler için.",
    price: "35.000 TL",
    billing: "Yıllık",
    scope: "Yıllık 6.000 Kağıt Kredisi",
    highlight: "Kredileri asistanlarınızla ortak havuzda kullanın",
    features: [
      "1 Yönetici ve 3 Asistan Hesabı",
      "Ekip İçi Ortak Kredi Havuzu",
      "Sınav Paylaşımı ve Ortak Onay Sistemi",
      "Gelişmiş Başarı Analizi ve İstatistikler",
    ],
    buttonText: "Ekiple Başlayın",
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

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
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
                <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
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
                    const isHighlighted = feature === "Ekip İçi Ortak Kredi Havuzu" || feature === "Sınav Paylaşımı ve Ortak Onay Sistemi" || feature === "Bölüm ve Ders Bazlı Özelleştirme";
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
              <h3 className="text-xl font-bold text-foreground">Kotanız mı doldu? Dilediğiniz kadar ek kredi alın.</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">Sınav dönemlerinde limitlere takılmayın. Mevcut paketinize anında ek kredi tanımlayarak değerlendirme sürecinize kesintisiz devam edebilirsiniz.</p>
          </div>
          <div className="w-full min-w-0 text-center md:w-auto md:min-w-[200px] md:text-right">
            <div className="text-2xl font-bold text-foreground">+500 Kağıt</div>
            <div className="text-lg text-primary font-semibold">3.500 TL</div>
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
