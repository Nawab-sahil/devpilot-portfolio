import type { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'About | DevPortfolio',
  description:
    'Learn more about me, my background, interests, and what drives my passion for technology.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                I'm a passionate Full Stack Developer currently pursuing my MCA (Master of Computer Applications), 
                with a deep interest in modern web technologies, DevOps, cloud infrastructure, and AI integration.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                My journey in tech has been driven by a desire to build scalable, efficient, and user-centric 
                solutions. I love exploring new technologies and applying them to solve real-world problems.
              </p>
              <p className="text-lg text-gray-300">
                When I'm not coding, you'll find me exploring new DevOps tools, contributing to open-source projects, 
                or writing technical articles to share knowledge with the community.
              </p>
            </div>

            {/* Image/Avatar */}
            <div className="relative h-96 rounded-xl border border-gray-800 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
              <div className="text-6xl">👨‍💻</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Core <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Performance',
                description:
                  'Building fast, optimized applications that provide exceptional user experiences and meet modern performance standards.',
              },
              {
                icon: '🔒',
                title: 'Security',
                description:
                  'Implementing best practices and industry standards to ensure applications are secure and protect user data.',
              },
              {
                icon: '🎯',
                title: 'Scalability',
                description:
                  'Designing systems that can grow with business needs, leveraging cloud technologies and microservices architecture.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Interests</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-1">
                    Master of Computer Applications (MCA)
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Currently Pursuing</p>
                  <p className="text-gray-300">
                    Focus on Cloud Computing, DevOps, Advanced Database Systems, and AI/ML technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Key Interests</h3>
              <ul className="space-y-3">
                {[
                  '☁️ Cloud Computing & Infrastructure',
                  '🐳 DevOps & Containerization',
                  '🤖 Artificial Intelligence & Machine Learning',
                  '⚙️ System Design & Architecture',
                  '🔄 CI/CD Pipelines & Automation',
                  '📊 Data Engineering & Analytics',
                ].map((interest, index) => (
                  <li key={index} className="text-gray-300 flex items-center gap-2">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
