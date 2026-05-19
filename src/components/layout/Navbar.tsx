"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Resume", "/resume"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-dp-border-primary bg-[color:var(--bg)]/92 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dp-border-secondary bg-dp-bg-3 font-mono text-sm text-dp-lime shadow-lime">
            DP
          </span>
          <div>
            <div className="text-sm font-semibold tracking-[0.24em] text-dp-text-primary">DEVPILOT</div>
            <div className="font-mono text-[10px] tracking-[0.32em] text-dp-text-secondary">PORTFOLIO</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm text-dp-text-secondary transition hover:text-dp-text-primary">
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-dp-orange/40 bg-dp-orange px-4 py-2 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-dp-orange-dark"
        >
          Hire Me
        </Link>
      </div>
    </motion.header>
  );
}