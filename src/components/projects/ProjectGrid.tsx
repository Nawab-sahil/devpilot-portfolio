"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";
import Link from "next/link";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

type ProjectGridProps = {
  featuredOnly?: boolean;
};

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  let visible = [] as typeof projects;

  if (featuredOnly) {
    visible = projects.filter((p) => p.featured).slice(0, 4);
  } else {
    // show exactly 4 cards with 2 featured highlighted
    const featured = projects.filter((p) => p.featured).slice(0, 2);
    const nonFeatured = projects.filter((p) => !p.featured).slice(0, 2);
    visible = [...featured, ...nonFeatured].slice(0, 4);
  }

  return (
    <section className="px-[28px] py-[44px]">
      <motion.div
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-[10px]"
      >
        {visible.map((p) => (
          <motion.div key={p.id} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-6 text-right">
        <Link href="/projects" className="font-mono text-[13px] text-dp-lime">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
