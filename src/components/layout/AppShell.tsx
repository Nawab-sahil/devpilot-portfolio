"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState, type ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

export default function AppShell({ children }: { children: ReactNode }) {
  const [contentVisible, setContentVisible] = useState(false);
  const handleLoaderComplete = useCallback(() => {
    setContentVisible(true);
  }, []);

  return (
    <ThemeProvider>
      <Loader
        onComplete={handleLoaderComplete}
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AnimatePresence>
          {contentVisible ? (
            <motion.main
              key="app-content"
              className="flex-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.main>
          ) : null}
        </AnimatePresence>
        {contentVisible ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
}