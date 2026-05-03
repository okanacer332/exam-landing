import { motion } from "motion/react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Papirus AI hangi sınav türlerini destekliyor?",
    answer:
      "Papirus AI, çoktan seçmeli, doğru-yanlış, eşleştirme, kısa cevaplı ve açık uçlu sınav türlerini tam olarak desteklemektedir.",
  },
  {
    question: "El yazısı cevapları okuyabiliyor mu?",
    answer:
      "Evet, gelişmiş optik karakter tanıma (OCR) teknolojimiz sayesinde net yazılmış el yazılarını yüksek doğrulukla okuyabiliyoruz. Okunaksız yazılar için manuel kontrol önerisi sunuyoruz.",
  },
  {
    question: "Öğrenci verilerinin güvenliği nasıl sağlanıyor?",
    answer:
      "Tüm öğrenci verileri uçtan uca şifreleme ile korunmaktadır. KVKK ve GDPR standartlarına tam uyumluyuz. Verileriniz hiçbir şekilde üçüncü taraflarla paylaşılmaz.",
  },
  {
    question: "Değerlendirme sonuçlarını nasıl dışa aktarabilirim?",
    answer:
      "Sonuçları Excel, PDF veya CSV formatında dışa aktarabilirsiniz. Ayrıca öğrenci bilgi sistemlerinizle entegrasyon için API desteği sunuyoruz.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground">
              Papirus AI Hakkında Merak Ettikleriniz
            </h2>
          </motion.div>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-white border border-border rounded-xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-secondary/50 transition-colors group">
                    <span className="text-base sm:text-lg text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className="w-5 h-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
