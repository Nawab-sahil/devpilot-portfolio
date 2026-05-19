import SectionHeader from "@/components/common/SectionHeader";
import SkillGroup from "@/components/common/SkillGroup";
import { skills } from "@/data/portfolio";

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="SKILLS" title="2x2 capability map" count="04 GROUPS" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <SkillGroup key={group.category} {...group} />
        ))}
      </div>
    </div>
  );
}