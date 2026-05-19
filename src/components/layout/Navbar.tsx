"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["Blog", "/#blog"],
  ["Contact", "/#contact"],
];

export default function Navbar({ isVisible }: { isVisible: boolean }) {
  const [activeHash, setActiveHash] = useState("home");

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash.replace("#", "") || "home");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 h-[60px] border-b-[0.5px] border-[color:var(--border)] bg-[color:var(--bg)]"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        <Link href="/#home" className="font-mono text-[15px] tracking-[0.5px] text-dp-cyan transition hover:text-dp-t1">
          <span className="text-dp-t3">&lt;</span> Sahil <span className="text-dp-t3">/&gt;</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([label, href]) => {
            const sectionId = href.split("#")[1] ?? "home";

            return (
              <Link
                key={href}
                href={href}
                className={[
                  "text-[13px] transition-colors duration-200",
                  activeHash === sectionId ? "text-dp-cyan" : "text-dp-t3 hover:text-dp-t1",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="font-mono text-[11px] text-dp-green bg-[rgba(0,228,160,0.08)] border border-[rgba(0,228,160,0.25)] px-[10px] py-[4px] rounded-full flex items-center gap-2">
          <span className="h-[5px] w-[5px] rounded-full bg-dp-green animate-pulse" />
          Open to Work
        </div>
      </div>
    </motion.header>
  );
}