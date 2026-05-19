"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  count?: string;
};

export default function SectionHeader({ label, title, count }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-8 flex items-end justify-between gap-4"
    >
      <div>
        <div className="font-mono text-[11px] tracking-[0.36em] text-dp-lime">{"// "}{label}</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-dp-text-primary sm:text-4xl">{title}</h2>
      </div>
      {count ? <div className="dp-chip hidden md:inline-flex">{count}</div> : null}
    </motion.div>
  );
}