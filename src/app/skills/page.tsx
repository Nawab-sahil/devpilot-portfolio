import SectionHeader from "@/components/common/SectionHeader";
import SkillGroup from "@/components/skills/SkillGroup";
import { skills } from "@/data/portfolio";

export const metadata = {
  title: 'Skills | Nawab Sahil | Full-Stack Engineering, Data, and DevOps',
  description: 'Technical skills of Nawab Sahil across Next.js, React, TypeScript, PHP, Java, PostgreSQL, MongoDB, Docker, GitHub Actions, WordPress architecture, and technical SEO.',
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="SKILLS" title="2x2 capability map" count="04 GROUPS" />
      <SkillGroup categories={skills} />
    </div>
  );
}