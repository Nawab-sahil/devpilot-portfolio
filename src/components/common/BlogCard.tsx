"use client";

import { CalendarDays, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { BlogPost } from "@/data/portfolio";

type BlogCardProps = {
  post: BlogPost;
  index?: number;
};

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className="dp-panel rounded-[28px] p-6 transition hover:-translate-y-1 hover:border-dp-lime/40"
    >
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-dp-border-secondary bg-dp-bg-3 px-3 py-1 font-mono text-[11px] text-dp-text-secondary">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-dp-text-primary">{post.title}</h3>
      <p className="mt-3 text-sm leading-7 text-dp-text-secondary">{post.excerpt}</p>
      <div className="mt-6 flex items-center gap-4 text-sm text-dp-text-secondary">
        <span className="inline-flex items-center gap-2"><CalendarDays size={15} />{post.date}</span>
        <span className="inline-flex items-center gap-2"><Clock size={15} />{post.readTime}</span>
      </div>
    </motion.article>
  );
}