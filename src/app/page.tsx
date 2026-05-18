import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Timeline } from '@/components/sections/Timeline';
import { GitHubStats } from '@/components/sections/GitHubStats';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Home | DevPortfolio',
  description:
    'Welcome to my portfolio. I am a Full Stack Developer specializing in modern web technologies, DevOps, and Cloud Computing.',
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my best work showcasing modern architecture, clean code, and innovative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <a
              href="/projects"
              className="inline-flex px-8 py-3 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <GitHubStats />

      {/* Timeline Section */}
      <Timeline />

      {/* Contact CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's work <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you have any questions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-block"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="px-8 py-3 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-block"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
