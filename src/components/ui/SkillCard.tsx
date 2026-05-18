'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: number;
  index?: number;
}

export function SkillCard({ name, level, index = 0 }: SkillCardProps) {
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
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="group"
    >
      <div className="space-y-2">
        {/* Skill Name and Level */}
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
            {name}
          </h4>
          <span className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-200">
            {level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 rounded-full bg-gray-800 overflow-hidden border border-gray-700">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.05 + 0.3,
              ease: 'easeOut',
            }}
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
