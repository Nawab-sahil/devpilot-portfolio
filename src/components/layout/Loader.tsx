"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LoaderProps = {
  onExitComplete?: () => void;
};

export default function Loader({ onExitComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [secondaryProgress, setSecondaryProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const finishedRef = useRef(false);

  useEffect(() => {
    const startDelay = window.setTimeout(() => {
      const interval = window.setInterval(() => {
        setProgress((current) => {
          if (current >= 100) {
            return 100;
          }

          const next = Math.min(100, current + (2 + Math.floor(Math.random() * 3)));
          setSecondaryProgress(Math.min(108, next + (8 + Math.floor(Math.random() * 3))));

          if (next >= 100 && !finishedRef.current) {
            finishedRef.current = true;
            setIsLoading(false);
            setTimeout(() => setIsVisible(false), 180);
          }

          return next;
        });
      }, 55);

      const autoFinish = window.setTimeout(() => {
        window.clearInterval(interval);
        setProgress(100);
        setSecondaryProgress(108);
        if (!finishedRef.current) {
          finishedRef.current = true;
          setIsLoading(false);
          setTimeout(() => setIsVisible(false), 180);
        }
      }, 3000);

      return () => {
        window.clearInterval(interval);
        window.clearTimeout(autoFinish);
      };
    }, 300);

    return () => window.clearTimeout(startDelay);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (!isLoading) {
          onExitComplete?.();
        }
      }}
    >
      {isVisible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-[240px] w-full max-w-[420px] flex-col items-center justify-center gap-5 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[56px] font-bold leading-none tracking-[-0.04em] text-dp-orange"
            >
              S
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.28 }}
              className="font-mono text-[11px] tracking-[3px] text-dp-lime"
            >
              DEVPILOT — INITIALIZING
            </motion.div>

            <div className="w-[280px] space-y-3">
              <div className="h-[1.5px] overflow-hidden bg-dp-border-primary">
                <motion.div
                  className="h-full bg-dp-orange shadow-glow"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="h-[1.5px] overflow-hidden bg-dp-border-primary">
                <motion.div
                  className="h-full bg-dp-lime shadow-lime"
                  initial={{ width: 0 }}
                  animate={{ width: `${secondaryProgress}%` }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            <motion.div
              key={progress}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.18 }}
              className="font-mono text-[13px] leading-none text-dp-orange"
            >
              {String(progress).padStart(3, "0")}%
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}