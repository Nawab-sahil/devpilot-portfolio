'use client';

import { floatingAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10">
            <span className="text-cyan-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I&apos;m a{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Full Stack Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Crafting modern, scalable web applications with a passion for clean code, innovative
          design, and cutting-edge technologies. Specialized in DevOps, Cloud Computing, and
          AI integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 inline-block"
          >
            View My Projects
          </Link>
          <a
            href="/contact"
            className="px-8 py-3 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-block"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Docker', 'Kubernetes'].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs md:text-sm bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-cyan-500/50 transition-colors duration-200"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={floatingAnimation}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
