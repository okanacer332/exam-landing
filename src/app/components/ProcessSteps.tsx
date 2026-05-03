import { motion, useInView } from "motion/react";
import { Upload, ScanLine, Brain, BarChart3, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  {
    icon: Upload,
    title: "Sınav Kağıtlarını Yükleyin",
    description: "Taranan sınav kağıtlarınızı sisteme yükleyin",
  },
  {
    icon: ScanLine,
    title: "Otomatik Tarama",
    description: "Optik okuma ile cevaplar anında tanınır",
  },
  {
    icon: Brain,
    title: "AI Değerlendirme",
    description: "Yapay zeka cevapları analiz eder",
  },
  {
    icon: BarChart3,
    title: "Detaylı Raporlama",
    description: "Kapsamlı istatistikler ve grafikler oluşturulur",
  },
  {
    icon: CheckCircle,
    title: "Sonuçları Paylaşın",
    description: "Öğrencilerinizle kolayca sonuçları paylaşın",
  },
];

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (isInView) {
      let currentStep = 0;
      setActiveStep(-1);
      
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          if (currentStep < steps.length) {
            setActiveStep(currentStep);
            currentStep++;
          } else {
            clearInterval(interval);
          }
        }, 1200);
      }, 500);
    } else {
      setActiveStep(-1);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground">
              Beş Adımda Daha Düzenli Değerlendirme Süreci
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
              Sınav kağıtlarınızı yüklemekten sonuçları paylaşmaya kadar tüm süreci
              kolaylaştırıyoruz. Her adımda size rehberlik ediyoruz.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const isCompleted = index <= activeStep;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 z-0"
                    initial={{ backgroundColor: "#d4dce5" }}
                    animate={{
                      backgroundColor: index < activeStep ? "#1e3a5f" : "#d4dce5",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <div className="relative">
                  <motion.div
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10"
                    initial={{
                      backgroundColor: "rgba(30, 58, 95, 0.1)",
                      scale: 1
                    }}
                    animate={{
                      backgroundColor: isCompleted
                        ? "#1e3a5f"
                        : "rgba(30, 58, 95, 0.1)",
                      scale: index === activeStep ? 1.15 : 1,
                    }}
                    transition={{
                      backgroundColor: { duration: 0.5 },
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        color: isCompleted ? "#ffffff" : "#1e3a5f",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-10 h-10" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    initial={{
                      backgroundColor: "#1e3a5f",
                      color: "#ffffff",
                      scale: 1
                    }}
                    animate={{
                      backgroundColor: index === activeStep ? "#ffffff" : "#1e3a5f",
                      color: index === activeStep ? "#1e3a5f" : "#ffffff",
                      scale: index === activeStep ? 1.3 : 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      },
                      backgroundColor: { duration: 0.3 },
                      color: { duration: 0.3 }
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <h3 className="text-base mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
