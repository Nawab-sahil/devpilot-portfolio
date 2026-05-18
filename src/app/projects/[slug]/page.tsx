import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Code2, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | DevPortfolio`,
    description: project.longDescription,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Project Hero */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 text-sm"
          >
            ← Back to Projects
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 capitalize">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-gray-300 mb-6">{project.longDescription}</p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs bg-gray-800/50 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              {project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-lg border border-gray-800 bg-gray-900/50">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-cyan-400">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 font-medium"
                >
                  <Code2 className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
              <p className="text-gray-400 mt-4">
                This project demonstrates full-stack development capabilities, modern architecture patterns, 
                and best practices in building production-ready applications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {[
                  'Responsive and modern user interface',
                  'Scalable backend architecture',
                  'Real-time data processing',
                  'Cloud-native deployment',
                  'Comprehensive error handling',
                  'Performance optimized',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">
              Related <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  className="group rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{relatedProject.description}</p>
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
