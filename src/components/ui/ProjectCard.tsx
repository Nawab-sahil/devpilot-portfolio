'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={hoverVariants}
        className="group relative h-full rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs bg-gray-800/50 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded text-xs text-gray-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-gray-800">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-sm font-bold text-cyan-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
            <Link
              href={`/projects/${project.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-200 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Details
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
