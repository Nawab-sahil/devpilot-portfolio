import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | DevPortfolio`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Article Hero */}
      <section className="pt-20 pb-12 border-b border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 text-sm"
          >
            ← Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          {/* Article Meta */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-96 rounded-xl overflow-hidden border border-gray-800 mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {post.description}
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This article covers important concepts and best practices related to {post.title.toLowerCase()}. 
              We&apos;ll explore various aspects and provide practical insights that you can apply to your projects.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Key Points
            </h2>
            <ul className="space-y-3 text-gray-300 mb-6">
              {[
                'Understanding core concepts and fundamentals',
                'Best practices and industry standards',
                'Real-world implementation strategies',
                'Common pitfalls and how to avoid them',
                'Performance optimization techniques',
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Practical Example
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Here&apos;s a practical example demonstrating the concepts discussed in this article. 
              This will help you understand how to apply these techniques in your own projects.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6 overflow-x-auto">
              <code className="text-sm text-gray-300 font-mono">
                {`// Example code snippet
const example = () => {
  console.log('Practical implementation');
  return true;
};`}
              </code>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
              Conclusion
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              In this article, we&apos;ve explored the key concepts and best practices related to {post.title.toLowerCase()}. 
              Remember to apply these techniques in your projects and continue learning new approaches as the technology landscape evolves.
            </p>
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-cyan-500/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Info */}
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm mb-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
                👨‍💻
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{post.author}</h3>
                <p className="text-gray-400 text-sm">
                  Full Stack Developer with a passion for building scalable applications and sharing knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <span className="text-cyan-400 hover:text-cyan-300 text-sm font-medium inline-flex items-center gap-1">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
