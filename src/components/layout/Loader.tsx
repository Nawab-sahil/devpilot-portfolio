"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const finishedRef = useRef(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + (Math.floor(Math.random() * 4) + 2), 100);

        if (next === 100 && !finishedRef.current) {
          finishedRef.current = true;
          window.clearInterval(interval);
          window.setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 400);
        }

        return next;
      });
    }, 55);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dp-bg"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-10 font-sans text-6xl font-bold leading-none text-dp-orange"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            S
          </motion.div>

          <motion.div
            className="mb-5 font-mono text-xs tracking-[3px] text-dp-text-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            DEVPILOT — INITIALIZING
          </motion.div>

          <div className="mb-4 w-[280px] overflow-hidden rounded-sm bg-dp-border-primary">
            <motion.div
              className="h-[1.5px] rounded-sm bg-dp-orange"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          <div className="mb-2 font-mono text-sm tracking-[2px] text-dp-orange">{progress}%</div>

          <div className="w-[280px] overflow-hidden rounded-sm bg-dp-lime-light">
            <motion.div
              className="h-[1.5px] rounded-sm bg-dp-lime"
              style={{ width: `${Math.min(progress + 8, 100)}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}