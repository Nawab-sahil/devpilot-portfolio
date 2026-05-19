import SectionHeader from "@/components/common/SectionHeader";
import BlogCard from "@/components/common/BlogCard";
import { blog } from "@/data/portfolio";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader label="BLOG" title="Field notes on building" count="04 POSTS" />
      <div className="grid gap-6 md:grid-cols-2">
        {blog.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}