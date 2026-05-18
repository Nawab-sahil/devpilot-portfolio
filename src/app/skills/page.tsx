import type { Metadata } from 'next';
import { SkillCard } from '@/components/ui/SkillCard';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills | DevPortfolio',
  description:
    'Explore my technical skills and expertise in web development, DevOps, cloud computing, and more.',
};

const skillCategoryTitles: Record<string, string> = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Storage',
  devops: 'DevOps & Infrastructure',
  cloud: 'Cloud Platforms',
  tools: 'Development Tools',
};

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies 
            and programming paradigms.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
                  {skillCategoryTitles[skillGroup.category]}
                </h3>

                <div className="space-y-6">
                  {skillGroup.skills.map((skill, index) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Specializations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Full Stack Development',
                description:
                  'Building end-to-end web applications with modern frameworks and best practices',
                icon: '🌐',
              },
              {
                title: 'DevOps & Cloud',
                description:
                  'Infrastructure automation, containerization, and cloud deployment strategies',
                icon: '☁️',
              },
              {
                title: 'System Design',
                description:
                  'Architecting scalable, maintainable systems with modern design patterns',
                icon: '⚙️',
              },
              {
                title: 'API Development',
                description: 'Creating robust RESTful and GraphQL APIs with comprehensive documentation',
                icon: '🔗',
              },
              {
                title: 'Database Design',
                description:
                  'Designing efficient databases with proper indexing and optimization strategies',
                icon: '🗄️',
              },
              {
                title: 'Performance Optimization',
                description: 'Optimizing applications for speed, scalability, and resource efficiency',
                icon: '⚡',
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{spec.title}</h3>
                <p className="text-gray-400 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
