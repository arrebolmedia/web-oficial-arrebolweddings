import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  language: "es" | "en";
}

const BlogCard = ({ post, language }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[var(--foreground)]/60">
          <span>{post.category}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] group-hover:text-[var(--accent-wine)] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--foreground)]/70 line-clamp-2 font-light">
          {post.excerpt}
        </p>
        <div className="pt-2">
          <span className="text-xs tracking-widest uppercase border-b border-[var(--foreground)]/30 pb-1 group-hover:border-[var(--accent-wine)] group-hover:text-[var(--accent-wine)] transition-all duration-300">
            {language === "es" ? "Leer historia" : "Read story"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
