"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.06, duration: 0.28 },
    },
  };

  const itemVariants = {
    hidden: { x: 12, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.18 } },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-dp-border-primary bg-dp-bg"
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-7">
        <Link href="/" aria-label="Sahil — Home" title="Sahil — Home" className="font-mono text-[26px] sm:text-[30px] md:text-[34px] leading-none font-semibold tracking-tight text-dp-text-dark flex items-center gap-2">
          <span className="text-dp-t3 text-lg">&lt;</span>
          <span className="text-dp-orange">Sahil</span>
          <span className="text-dp-t3 text-lg">/&gt;</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "font-mono text-sm font-medium text-dp-lime" : "font-mono text-sm font-medium text-dp-text-dark transition-colors hover:text-dp-text-primary"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop social icons + hire button */}
          <div className="flex items-center gap-2">
            <a href="https://github.com/Nawab-sahil/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full p-2 shadow-md bg-gradient-to-tr from-dp-orange via-dp-amber to-dp-lime text-black hover:scale-105 transition-transform" aria-label="GitHub" title="GitHub">
              <Github size={16} />
            </a>
            <a href="https://leetcode.com/u/nawabsahil/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full p-2 shadow-md bg-gradient-to-tr from-dp-orange via-dp-amber to-dp-lime text-black hover:scale-105 transition-transform" aria-label="LeetCode" title="LeetCode">
              <Code size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sahil-nawab" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full p-2 shadow-md bg-gradient-to-tr from-dp-orange via-dp-amber to-dp-lime text-black hover:scale-105 transition-transform" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin size={16} />
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex rounded-xl border border-dp-border-secondary bg-dp-bg-2 px-4 py-1.5 font-mono text-sm font-semibold text-dp-text-primary transition-colors hover:border-dp-lime hover:text-dp-lime"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-dp-text-dark hover:text-dp-text-primary"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile menu overlay */}
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            className="fixed inset-0 z-50"
          >
            <div className="flex h-full">
              {/* click area to close but keep background visible */}
              <div className="flex-1" onClick={() => setOpen(false)} />
              <motion.aside className="w-80 max-w-[85%] h-full bg-[color:var(--bg2)] p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <Link href="/" className="font-mono text-[22px] font-medium text-dp-text-dark">
                    &lt; <span className="text-dp-orange">Sahil</span> /&gt;
                  </Link>
                  <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
                    <X size={22} />
                  </button>
                </div>

                <motion.nav variants={menuVariants} className="flex flex-col gap-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={pathname === item.href ? "font-mono text-lg font-medium text-dp-lime" : "font-mono text-lg font-medium text-dp-text-dark"}
                    >
                      <motion.span variants={itemVariants}>{item.label}</motion.span>
                    </Link>
                  ))}
                </motion.nav>

                <div className="mt-auto flex items-center gap-4">
                  <motion.a variants={itemVariants} href="https://github.com/Nawab-sahil/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dp-text-dark hover:text-dp-text-primary">
                    <Github /> GitHub
                  </motion.a>
                  <motion.a variants={itemVariants} href="https://leetcode.com/u/nawabsahil/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dp-text-dark hover:text-dp-text-primary">
                    <Code /> LeetCode
                  </motion.a>
                  <motion.a variants={itemVariants} href="https://www.linkedin.com/in/sahil-nawab" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-dp-text-dark hover:text-dp-text-primary">
                    <Linkedin /> LinkedIn
                  </motion.a>
                </div>
              </motion.aside>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}