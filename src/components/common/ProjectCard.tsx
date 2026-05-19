"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="group min-h-[193px] rounded-[14px] border border-[#2b2619] bg-[#0d0c09] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-dp-orange/35"
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`rounded-[4px] border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.16em] ${
            project.status === "completed"
              ? "border-dp-teal/45 bg-dp-teal/10 text-dp-teal"
              : "border-dp-amber/45 bg-dp-amber/10 text-dp-amber"
          }`}
        >
          {project.status}
        </span>
        {project.featured ? <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-dp-lime">featured</span> : null}
      </div>
      <h3 className="mt-4 text-[18px] font-semibold leading-[1.2] text-white transition group-hover:text-dp-orange">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[31ch] text-[13px] leading-6 text-dp-text-dark">{project.shortDesc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-[3px] border border-[#3a3324] bg-[#14120e] px-2.5 py-1 font-mono text-[10px] text-dp-text-secondary">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px]">
        <Link href={project.github} target="_blank" className="inline-flex items-center rounded-[4px] border border-[#3a3324] px-3 py-2 text-dp-text-secondary transition hover:border-dp-orange hover:text-dp-orange">
          GitHub
        </Link>
        <Link href={project.live} target="_blank" className="inline-flex items-center rounded-[4px] border border-[#3a3324] px-3 py-2 text-dp-text-secondary transition hover:border-dp-orange hover:text-dp-orange">
          Live Demo
        </Link>
        <span className="inline-flex items-center rounded-[4px] border border-[#3a3324] px-3 py-2 text-dp-text-secondary transition hover:border-dp-orange hover:text-dp-orange">
          Details <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.article>
  );
}