"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Globe } from "lucide-react";
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
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="dp-panel group rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-dp-orange/40"
    >
      <div className="flex items-center justify-between gap-4">
        <span className={`dp-chip ${project.status === "completed" ? "text-dp-teal" : "text-dp-amber"}`}>
          <span className={`h-2 w-2 rounded-full ${project.status === "completed" ? "bg-dp-teal" : "bg-dp-amber"}`} />
          {project.status}
        </span>
        <span className="font-mono text-[11px] tracking-[0.3em] text-dp-text-secondary">{project.year}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-dp-text-primary transition group-hover:text-dp-orange">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-dp-text-secondary">{project.shortDesc}</p>
      <p className="mt-4 text-sm leading-7 text-dp-text-dark">{project.fullDesc}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[11px] text-dp-text-secondary">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Link href={project.live} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-dp-lime px-4 py-2 text-sm font-medium text-black transition hover:bg-white">
          Live <Globe size={16} />
        </Link>
        <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-dp-border-secondary px-4 py-2 text-sm font-medium text-dp-text-primary transition hover:border-dp-orange hover:text-dp-orange">
          Code <Github size={16} />
        </Link>
        <span className="ml-auto inline-flex items-center gap-1 text-sm text-dp-text-secondary">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.article>
  );
}