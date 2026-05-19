import SectionHeader from "@/components/common/SectionHeader";
import SkillGroup from "@/components/skills/SkillGroup";
import { skills } from "@/data/portfolio";

export const metadata = {
  title: 'Skills — Nawab Sahil | WordPress, PHP, Java, SEO & DevOps',
  description: 'Skills of Nawab Sahil from Jamnagar: WordPress, PHP, Java, ASP.NET, SEO, Google Ads, MySQL, SQL Server, Docker, and modern web development.',
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="SKILLS" title="2x2 capability map" count="04 GROUPS" />
      <SkillGroup categories={skills} />
    </div>
  );
}