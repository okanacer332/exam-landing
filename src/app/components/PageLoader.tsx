import { AnimatePresence, motion } from "motion/react";
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0B] text-[#F5F5F7]"
      >
        <div className="space-y-6 text-center">
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
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl shadow-[#2997FF]/25"
          >
            <img src="/brand/papirus-mark.svg" alt="Papirus AI" className="h-20 w-20" />
          </motion.div>

          <div>
            <h2 className="mb-2 text-2xl text-[#F5F5F7]">Papirus AI</h2>
            <p className="text-[#F5F5F7]/60">Premium çalışma alanı hazırlanıyor...</p>
          </div>

          <div className="mx-auto h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-[#2997FF]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div className="text-sm text-[#F5F5F7]/50">%{progress}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
