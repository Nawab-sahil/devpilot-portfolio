import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: 'Projects — Nawab Sahil | WordPress, PHP, Java & SEO Work',
  description: 'Selected projects by Nawab Sahil from Jamnagar, including taxi booking platforms, SEO growth work, academic systems, WordPress sites, and DevBox.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="PROJECTS" title="Built to rank, built to scale" count="09 / 09" />
      <ProjectGrid />

      {/* JSON-LD Project structured data for search engines */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Sahil — Projects",
        description: "Portfolio projects by Nawab Sahil — WordPress, PHP, Java, ASP.NET, SEO, and DevOps work.",
        hasPart: projects.map(p => ({
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