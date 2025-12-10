import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogHeroProps {
  post: BlogPost;
}

const BlogHero = ({ post }: BlogHeroProps) => {
  return (
    <section className="relative w-full py-12 md:py-20 border-b border-[var(--foreground)]/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-gray-100 order-2 md:order-1">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex flex-col justify-center space-y-6 order-1 md:order-2 md:pl-12">
          <div className="flex items-center space-x-4 text-xs tracking-[0.2em] uppercase text-[var(--foreground)]/60">
            <span>{post.category}</span>
          </div>
          
          <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--foreground)]">
            <Link href={`/blog/${post.slug}`} className="hover:text-[var(--accent-wine)] transition-colors duration-300">
              {post.title}
            </Link>
          </h1>
          
          <p className="text-lg text-[var(--foreground)]/70 font-light max-w-md leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="pt-4">
            <Link 
              href={`/blog/${post.slug}`}
              className="inline-block text-sm tracking-widest uppercase border border-[var(--foreground)] px-8 py-4 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
            >
              Leer Art├¡culo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
