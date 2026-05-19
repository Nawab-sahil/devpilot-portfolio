"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Database, LayoutGrid, Server, Workflow } from "lucide-react";
import type { SkillCategory } from "@/data/portfolio";

const icons = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
  workflow: Workflow,
} as const;

export default function SkillGroup({ category, icon, items }: SkillCategory) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = useMemo(() => icons[icon as keyof typeof icons] ?? LayoutGrid, [icon]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="dp-panel rounded-[28px] p-6"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-dp-border-secondary bg-dp-bg-3 text-dp-lime">
          <Icon size={20} />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-dp-text-primary">{category}</h3>
          <p className="font-mono text-[11px] tracking-[0.28em] text-dp-text-secondary">3 focused skills</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-dp-text-primary">{item.name}</span>
              <span className="font-mono text-dp-text-secondary">{item.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-dp-bg-3">
              <motion.div
                className="h-full rounded-full bg-dp-orange"
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.level}%` } : { width: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}