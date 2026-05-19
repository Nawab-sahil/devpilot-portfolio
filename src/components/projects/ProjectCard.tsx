"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className={`group relative rounded-[8px] border border-dp-border-secondary bg-dp-bg-3 p-[14px] transition-transform duration-200 hover:border-dp-orange-dark`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
    >
      {/* top accent line (animated on hover) */}
      <div className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 transform bg-gradient-to-r from-dp-orange to-dp-lime transition-transform duration-200 group-hover:scale-x-100" style={{ borderRadius: 0 }} />

      {/* status badge */}
      <div className="absolute left-3 -top-3">
        <div
          style={{ fontSize: 10 }}
          className={`font-mono px-[6px] py-[4px] rounded-sm font-semibold ${
            project.status === "completed" ? "bg-dp-teal text-black" : "bg-dp-amber text-black"
          }`}
        >
          {project.status === "completed" ? "COMPLETED" : "IN PROGRESS"}
        </div>
      </div>

      {/* featured label */}
      {project.featured ? (
        <div className="absolute right-3 -top-3">
          <div className="font-mono text-[10px] text-dp-lime">featured</div>
        </div>
      ) : null}

      <h3 className="text-[14px] font-semibold text-white mt-3">{project.title}</h3>

      <p className="mt-2 text-[11px] text-dp-text-secondary line-clamp-2">{project.shortDesc}</p>

      <div className="mt-3 flex flex-wrap items-center gap-[5px]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{ borderWidth: 0.5 }}
            className="font-mono text-[10px] text-dp-text-secondary bg-dp-bg-3 border-dp-border-secondary px-[7px] py-[2px] rounded-[3px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] border border-dp-border-secondary px-3 py-1 rounded-sm hover:text-dp-orange hover:border-dp-orange transition"
        >
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] border border-dp-border-secondary px-3 py-1 rounded-sm hover:text-dp-orange hover:border-dp-orange transition"
        >
          Live Demo
        </a>

        <Link
          href={`/projects/${project.slug}`}
          className="ml-auto text-[11px] border border-dp-border-secondary px-3 py-1 rounded-sm hover:text-dp-orange hover:border-dp-orange transition"
        >
          Details →
        </Link>
      </div>
    </motion.article>
  );
}
