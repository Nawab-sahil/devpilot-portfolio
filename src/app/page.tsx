import Hero from "@/components/sections/Hero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import SectionHeader from "@/components/common/SectionHeader";
import Terminal from "@/components/sections/Terminal";
import { projects } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader label="TERMINAL" title="Live build notes" count="01" />
        <Terminal />
      </section>
      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FEATURED WORK"
          title="Selected projects"
          count={`${projects.filter((project) => project.featured).length} items`}
        />
        <ProjectGrid featuredOnly />
      </section>
    </div>
  );
}
