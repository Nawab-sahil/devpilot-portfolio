"use client";

import type { SkillCategory } from "@/data/portfolio";
import SkillCard from "@/components/common/SkillGroup";

type Props = {
  categories: SkillCategory[];
};

export default function SkillGroup({ categories }: Props) {
  return (
    <div className="grid grid-cols-2 gap-[10px]">
      {categories.map((cat, i) => (
        <SkillCard key={cat.category} {...cat} index={i} />
      ))}
    </div>
  );
}
