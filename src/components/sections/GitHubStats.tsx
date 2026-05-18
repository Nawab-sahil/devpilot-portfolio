'use client';

import { motion } from 'framer-motion';
import { Code2, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: Code2,
    label: 'Public Repos',
    value: '50+',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Users,
    label: 'GitHub Followers',
    value: '500+',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Zap,
    label: 'Total Contributions',
    value: '2.5K+',
    color: 'from-green-500 to-emerald-600',
  },
];

export function GitHubStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20">
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
            Open Source <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Activity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributing to the developer community through open-source projects
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="group relative p-8 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300"
          >
            <Code2 className="w-5 h-5" />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
