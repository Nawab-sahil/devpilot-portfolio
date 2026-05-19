"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

type ProjectGridProps = {
  featuredOnly?: boolean;
};

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const visible = featuredOnly ? projects.slice(0, 4) : projects.slice(0, 4);

  return (
    <section className="pt-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-1 gap-[10px] md:grid-cols-2"
      >
        {visible.map((p, index) => (
          <ProjectCard key={p.id} project={p} index={index} />
        ))}
      </motion.div>

      <div className="mt-6 text-center font-mono text-[13px] text-dp-orange">
        View All Projects →
      </div>
    </section>
  );
}
