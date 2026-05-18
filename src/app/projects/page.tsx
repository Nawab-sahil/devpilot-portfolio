import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects | DevPortfolio',
  description: 'Explore my portfolio of innovative projects showcasing full-stack development, DevOps, and cloud computing expertise.',
};

export default function Projects() {
  const categories = ['All', 'devops', 'ai', 'cloud', 'frontend', 'backend'] as const;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work featuring innovative solutions built with modern technologies 
            and best practices in software engineering.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200 capitalize"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
