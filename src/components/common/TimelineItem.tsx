"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineItemProps = {
  year: string;
  title: string;
  subtitle: string;
};

export default function TimelineItem({ year, title, subtitle }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative flex gap-4 rounded-3xl border border-dp-border-primary bg-dp-bg-2/80 p-5"
    >
      <div className="relative flex w-28 shrink-0 items-start justify-center">
        <span className="mt-2 h-3 w-3 rounded-full bg-dp-orange shadow-glow" />
        <span className="absolute left-1/2 top-5 h-full w-px bg-dp-border-secondary" />
      </div>
      <div>
        <div className="font-mono text-xs tracking-[0.3em] text-dp-lime">{year}</div>
        <h3 className="mt-2 text-xl font-semibold text-dp-text-primary">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-dp-text-secondary">{subtitle}</p>
      </div>
    </motion.div>
  );
}