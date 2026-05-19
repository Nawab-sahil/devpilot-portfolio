import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="PROJECTS" title="Six systems, one visual language" count="06 / 06" />
      <ProjectGrid />
    </div>
  );
}