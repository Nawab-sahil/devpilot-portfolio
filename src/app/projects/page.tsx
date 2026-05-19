import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: 'Projects — Sahil — Full-Stack Developer',
  description: 'Selected projects including MERN, DevOps dashboards, and AI tooling. View code and live demos.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="PROJECTS" title="Six systems, one visual language" count="06 / 06" />
      <ProjectGrid />

      {/* JSON-LD Project structured data for search engines */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Sahil — Projects",
        description: "Portfolio projects by Sahil — Full-Stack Developer.",
        hasPart: projects.slice(0, 6).map(p => ({
          "@type": "SoftwareSourceCode",
          name: p.title,
          description: p.shortDesc,
          url: p.live || p.github,
          programmingLanguage: p.tags.join(', '),
        })),
      }) }} />
    </div>
  );
}