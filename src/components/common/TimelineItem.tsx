"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineItemProps = {
  index?: number;
  year: string;
  title: string;
  subtitle: string;
};

const dotColors = ["var(--orange)", "var(--lime)", "var(--amber)", "var(--teal)"];

export default function TimelineItem({ index = 0, year, title, subtitle }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const dotColor = dotColors[index % dotColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center self-stretch pt-1">
        <span className="h-2 w-2 rounded-full" style={{ background: dotColor }} />
        <span className="mt-2 flex-1 w-[0.5px] bg-[color:var(--border)]" />
      </div>

      <div className="pb-10 pt-[2px]">
        <div className="mb-[2px] font-mono text-[10px] uppercase tracking-[0.28em] text-dp-orange">{year}</div>
        <h3 className="mb-[2px] text-[12px] font-bold leading-5 text-dp-text-primary">{title}</h3>
        <p className="text-[11px] leading-6 text-dp-text-dark">{subtitle}</p>
      </div>
    </motion.div>
  );
}