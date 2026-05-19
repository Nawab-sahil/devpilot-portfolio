"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { SkillCategory } from "@/data/portfolio";
import {
  Database as DatabaseIcon,
  Layout as LayoutIcon,
  Server as ServerIcon,
  Workflow as WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layout: LayoutIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  workflow: WorkflowIcon,
};

function iconFor(name?: string) {
  if (!name) return WorkflowIcon;
  return iconMap[name.toLowerCase()] ?? WorkflowIcon;
}

function colorForCategory(cat: string) {
  switch (cat.toLowerCase()) {
    case "frontend":
      return { tileBg: "var(--orange)", fill: "var(--orange)" };
    case "backend":
      return { tileBg: "var(--lime)", fill: "var(--lime)" };
    case "database":
      return { tileBg: "var(--amber)", fill: "var(--amber)" };
    default:
      return { tileBg: "var(--teal)", fill: "var(--teal)" };
  }
}

function labelForCategory(category: string) {
  const normalized = category.toLowerCase();
  if (normalized.includes("frontend")) return "FRONTEND";
  if (normalized.includes("backend")) return "BACKEND";
  if (normalized.includes("database")) return "DATABASE";
  return "TOOLS";
}

type SkillGroupProps = SkillCategory & {
  index?: number;
};

export default function SkillGroup({ category, icon, items, index = 0 }: SkillGroupProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const Icon = iconFor(icon);
  const colors = colorForCategory(category);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = window.setTimeout(() => setInView(true), index * 100);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      obs.disconnect();
    };
  }, [index]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="rounded-[18px] border border-dp-border-secondary bg-dp-bg-3 p-5"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[8px]" style={{ background: colors.tileBg }}>
          <Icon aria-hidden className="h-5 w-5" style={{ color: colors.fill }} />
        </div>
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-dp-text-primary">
          {labelForCategory(category)}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-[13px] leading-none text-dp-text-secondary">{skill.name}</div>
              <div className="font-mono text-[11px] leading-none text-dp-text-dark">{skill.level}%</div>
            </div>

            <div className="mt-2 h-[2px] overflow-hidden rounded-[2px] bg-dp-bg-4">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{
                  duration: 1.4,
                  delay: index * 0.1 + skillIndex * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="h-full rounded-[2px]"
                style={{ background: colors.fill }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}