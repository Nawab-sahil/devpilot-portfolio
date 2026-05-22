import SectionHeader from "@/components/common/SectionHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { getProjectSchemaKind, projects, SITE_URL } from "@/data/portfolio";

export const metadata = {
  title: 'Engineering Projects | Full-Stack and DevOps-Focused Work by Nawab Sahil',
  description: 'Explore production-focused projects by Nawab Sahil across Next.js, MERN, PHP, Java, Docker, CI/CD, and technical SEO, including developer tooling initiatives.',
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="PROJECTS" title="Built for production delivery" count="09 / 09" />
      <ProjectGrid />

      {/* JSON-LD Project structured data for search engines */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#collection`,
        url: `${SITE_URL}/projects`,
        name: "Nawab Sahil - Engineering Projects",
        description: "Production-focused software projects by Nawab Sahil across full-stack engineering, technical SEO, and DevOps-oriented tooling.",
        inLanguage: "en",
        hasPart: projects.map((p) => ({
          "@type": getProjectSchemaKind(p),
          "@id": `${SITE_URL}/projects/${p.slug}#project`,
          name: p.title,
          description: p.shortDesc,
          url: `${SITE_URL}/projects/${p.slug}`,
          keywords: p.tags.join(", "),
        })),
      }) }} />
    </div>
  );
}