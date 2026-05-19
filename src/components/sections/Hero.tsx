"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Terminal from "./Terminal";

const roles = [
  "MERN Stack Developer",
  "Next.js Engineer",
  "Cloud Learner",
  "Open Source Builder",
];

export default function Hero() {
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = window.setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        const nextIndex = charIndex + 1;
        setDisplayedRole(currentRole.slice(0, nextIndex));
        setCharIndex(nextIndex);
      } else if (isDeleting && charIndex > 0) {
        const nextIndex = charIndex - 1;
        setDisplayedRole(currentRole.slice(0, nextIndex));
        setCharIndex(nextIndex);
      } else if (charIndex === currentRole.length) {
        window.setTimeout(() => setIsDeleting(true), 1600);
      } else if (charIndex === 0) {
        setRoleIndex((index) => (index + 1) % roles.length);
        setIsDeleting(false);
      }
    }, isDeleting ? 36 : 72);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="grid grid-cols-1 gap-8 px-7 py-16 lg:grid-cols-2">
      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <div className="h-0.5 w-5 bg-dp-lime" />
          <span className="font-mono text-xs tracking-[2px] text-dp-lime">FULL-STACK DEVELOPER</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl font-bold leading-tight tracking-[-1px] text-dp-text-primary">
          <span>Hi, I&apos;m </span>
          <span className="text-dp-orange">Sahil</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="font-mono text-sm text-dp-lime">
          {displayedRole}
          <span className="ml-1 inline-block h-3.5 w-0.5 animate-pulse bg-dp-lime align-middle" />
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-sm text-sm leading-relaxed text-dp-text-secondary">
          MCA student at DDU Nadiad. I build modern web apps and developer tools. Passionate about clean code and cloud-native solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-2.5">
          <a href="#projects" className="rounded-md bg-dp-orange px-5 py-2.5 text-xs font-bold text-black transition-opacity hover:opacity-85">
            View Projects
          </a>
          <a href="/resume.pdf" className="rounded-md border border-dp-lime/35 bg-transparent px-5 py-2.5 text-xs font-medium text-dp-lime transition-colors hover:bg-dp-lime-light">
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <Terminal />
      </motion.div>

      <div className="grid grid-cols-1 border-t border-dp-border-primary sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        {([
          ["06+", "Projects Built", "text-dp-orange"],
          ["03+", "Open Source", "text-dp-orange"],
          ["08+", "Technologies", "text-dp-orange"],
          ["Live", "Available Now", "text-dp-teal"],
        ] as const).map(([value, label, valueClass]) => (
          <div key={label} className="border-b border-r border-dp-border-primary px-5 py-8 last:border-r-0 sm:last:border-r lg:border-b-0">
            <div className={`font-mono text-[34px] font-bold leading-none ${valueClass}`}>{value}</div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-dp-text-secondary">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
