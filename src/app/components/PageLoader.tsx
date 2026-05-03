import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-background via-white to-secondary flex items-center justify-center"
      >
        <div className="text-center space-y-6">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-2xl"
          >
            <img src="/papirus-logo.svg" alt="Papirus AI" className="w-10 h-10 brightness-0 invert" />
          </motion.div>

          <div>
            <h2 className="text-2xl text-foreground mb-2">Papirus AI</h2>
            <p className="text-muted-foreground">Sisteminiz hazırlanıyor...</p>
          </div>

          <div className="w-64 h-2 bg-border rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="text-sm text-muted-foreground">%{progress}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
