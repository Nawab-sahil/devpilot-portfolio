'use client';

import { experiences } from '@/data/content';
import { motion } from 'framer-motion';

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my growth, learning, and achievements in web development and technology
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full" />

          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="mb-12 md:mb-16 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gray-950 border-4 border-cyan-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-8' : 'md:mr-auto md:pl-8'} ml-16 md:ml-0`}>
                <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      {experience.type}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{experience.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{experience.title}</h3>
                  <p className="text-gray-400 text-sm">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
