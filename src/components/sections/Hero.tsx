"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";

const intro = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-dp-border-primary">
      <div className="absolute inset-0 dp-grid-bg opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.25fr_0.85fr] lg:px-8 lg:py-28">
        <motion.div variants={intro} initial="hidden" animate="show" className="relative z-10 max-w-3xl">
          <motion.div variants={item} className="dp-chip mb-5 w-fit text-dp-lime">
            <Sparkles size={14} /> Full-stack developer portfolio
          </motion.div>
          <motion.p variants={item} className="font-mono text-[11px] tracking-[0.36em] text-dp-text-secondary">
            DESIGNING FAST, BOLD, MOTION-RICH INTERFACES
          </motion.p>
          <motion.h1 variants={item} className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Building sharp digital products with a <span className="text-dp-orange">premium orange-lime</span> visual pulse.
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-dp-text-secondary">
            DevPilot Portfolio is a production-style developer showcase for shipping dashboards, full-stack systems, and polished interfaces that feel fast from the first frame.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-dp-orange px-5 py-3 text-sm font-medium text-black transition hover:bg-dp-orange-dark">
              View Projects <ArrowUpRight size={16} />
            </Link>
            <Link href="/resume" className="inline-flex items-center gap-2 rounded-full border border-dp-border-secondary px-5 py-3 text-sm font-medium text-dp-text-primary transition hover:border-dp-lime hover:text-dp-lime">
              Download Resume <Download size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="dp-panel relative overflow-hidden rounded-[32px] p-6 shadow-glow">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-dp-orange/10 blur-2xl" />
            <div className="font-mono text-[11px] tracking-[0.32em] text-dp-text-secondary">LIVE SYSTEM STATUS</div>
            <div className="mt-5 rounded-3xl border border-dp-border-secondary bg-dp-bg-3 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-dp-text-secondary">Terminal</span>
                <span className="dp-chip text-dp-teal">online</span>
              </div>
              <div className="mt-6 space-y-3 font-mono text-sm leading-7 text-dp-text-primary">
                <p><span className="text-dp-lime">$</span> npm run build</p>
                <p><span className="text-dp-orange">▲</span> next build completed successfully</p>
                <p><span className="text-dp-teal">✓</span> motion pipeline ready</p>
                <p><span className="text-dp-amber">■</span> 6 projects loaded</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
              {[
                ["06", "Projects"],
                ["04", "Blog Posts"],
                ["01", "Portfolio"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-dp-border-secondary bg-dp-bg-3 px-3 py-4">
                  <div className="text-2xl font-semibold text-dp-lime">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-dp-text-secondary">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}