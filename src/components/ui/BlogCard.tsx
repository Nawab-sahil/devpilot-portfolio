'use client';

import { BlogPost } from '@/types';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
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
    rest: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3 } },
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
        className="group rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
      >
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute top-3 right-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min read
            </div>
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs bg-gray-800/50 text-gray-300 border border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
          >
            Read Article
            <span className="ml-2">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
