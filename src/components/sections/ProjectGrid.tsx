"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/data/portfolio";

const filters = ["all", "featured", "completed", "in-progress"] as const;

type ProjectGridProps = {
  featuredOnly?: boolean;
};

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]>(featuredOnly ? "featured" : "all");

  const filteredProjects = useMemo(() => {
    if (featuredOnly || filter === "featured") {
      return projects.filter((project) => project.featured);
    }

    if (filter === "completed") {
      return projects.filter((project) => project.status === "completed");
    }

    if (filter === "in-progress") {
      return projects.filter((project) => project.status === "in-progress");
    }

    return projects;
  }, [featuredOnly, filter]);

  return (
    <div>
      {!featuredOnly ? (
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item
                  ? "border-dp-lime bg-dp-lime text-black"
                  : "border-dp-border-secondary bg-dp-bg-3 text-dp-text-secondary hover:border-dp-orange hover:text-dp-text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}