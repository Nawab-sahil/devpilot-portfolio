import type { Metadata } from 'next';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume | DevPortfolio',
  description: 'Download my professional resume and CV.',
};

export default function Resume() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                Download my professional resume to learn more about my experience, skills, and qualifications.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 whitespace-nowrap"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Summary */}
          <div className="mb-12 p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with expertise in modern web technologies and cloud infrastructure. 
              Currently pursuing MCA with a focus on DevOps, Cloud Computing, and AI integration. 
              Passionate about building scalable applications and contributing to the open-source community.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Full Stack Developer',
                  company: 'Tech Company',
                  period: '2023 - Present',
                  description: [
                    'Built responsive web applications using React and Next.js',
                    'Developed RESTful APIs using Node.js and Express',
                    'Implemented CI/CD pipelines using GitHub Actions',
                  ],
                },
                {
                  title: 'Junior Developer',
                  company: 'Startup Inc',
                  period: '2022 - 2023',
                  description: [
                    'Contributed to frontend development using React',
                    'Assisted in database design and optimization',
                    'Participated in code reviews and team discussions',
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.title}</h3>
                      <p className="text-cyan-400">{job.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm whitespace-nowrap">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
            <div className="space-y-4">
              {[
                {
                  degree: 'Master of Computer Applications (MCA)',
                  school: 'University Name',
                  year: '2023 - Present',
                },
                {
                  degree: 'Bachelor of Science (CS)',
                  school: 'University Name',
                  year: '2020 - 2023',
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-800 bg-gray-900/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-cyan-400">{edu.school}</p>
                    </div>
                    <span className="text-gray-400 text-sm">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'AWS Solutions Architect Associate',
                'Docker Certified Associate',
                'Kubernetes Application Developer',
                'Google Cloud Associate Cloud Engineer',
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-800 bg-gray-900/50 flex items-center gap-3"
                >
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="p-8 rounded-xl border border-gray-800 bg-gray-900/50">
            <h2 className="text-2xl font-bold text-white mb-6">Key Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: 'Frontend',
                  skills: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
                },
                {
                  category: 'Backend',
                  skills: 'Node.js, Express, Python, FastAPI, GraphQL',
                },
                {
                  category: 'DevOps & Cloud',
                  skills: 'Docker, Kubernetes, AWS, GCP, Azure, CI/CD',
                },
                {
                  category: 'Databases',
                  skills: 'PostgreSQL, MongoDB, Redis, Elasticsearch',
                },
              ].map((skill, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold mb-2">{skill.category}</h3>
                  <p className="text-gray-400 text-sm">{skill.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
