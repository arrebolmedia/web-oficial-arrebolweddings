"use client";

import { getBlogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const { content, language } = useLanguage();
  const { blog } = content;
  
  const blogPosts = getBlogPosts(language);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--background)] pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-[var(--font-heading)] mb-4">
            {language === "es" ? "Post no encontrado" : "Post not found"}
          </h1>
          <Link href="/blog" className="text-[var(--accent-wine)] hover:underline">
            {language === "es" ? "Volver al blog" : "Back to blog"}
          </Link>
        </div>
      </div>
    );
  }

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Get random related posts (excluding current, prev, and next)
  const excludeIds = [post.id, prevPost?.id, nextPost?.id].filter(Boolean);
  const availablePosts = blogPosts.filter((p) => !excludeIds.includes(p.id));
  
  // Shuffle and pick 3
  const shuffled = [...availablePosts].sort(() => Math.random() - 0.5);
  const relatedPosts = shuffled.slice(0, 3);

  // Helper function to process inline markdown (**bold**)
  const processInlineMarkdown = (text: string): React.ReactNode => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-medium text-[var(--foreground)]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  // Helper function to process a paragraph that may contain bullet lists
  const processParagraphWithLists = (paragraph: string, keyPrefix: number): React.ReactNode[] => {
    const lines = paragraph.split('\n');
    const result: React.ReactNode[] = [];
    let currentListItems: string[] = [];
    let regularLines: string[] = [];
    let subKey = 0;

    const flushRegularLines = () => {
      if (regularLines.length > 0) {
        result.push(
          <p key={`${keyPrefix}-p-${subKey++}`} className="whitespace-pre-line">
            {processInlineMarkdown(regularLines.join('\n'))}
          </p>
        );
        regularLines = [];
      }
    };

    const flushList = () => {
      if (currentListItems.length > 0) {
        result.push(
          <ul key={`${keyPrefix}-ul-${subKey++}`} className="list-disc list-inside space-y-2 my-6 ml-4">
            {currentListItems.map((item, idx) => (
              <li key={idx} className="text-[var(--foreground)]/70">{processInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        currentListItems = [];
      }
    };

    for (const line of lines) {
      const bulletMatch = line.match(/^[•\-\*]\s+(.+)$/);
      if (bulletMatch) {
        flushRegularLines();
        currentListItems.push(bulletMatch[1].trim());
      } else {
        flushList();
        regularLines.push(line);
      }
    }
    
    flushRegularLines();
    flushList();
    
    return result;
  };

  return (
    <article className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex items-center space-x-4 text-xs tracking-[0.2em] uppercase mb-6">
            <span>{post.category}</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="prose prose-lg prose-headings:font-[var(--font-heading)] prose-a:text-[var(--accent-wine)] max-w-none">
          <p className="lead text-xl md:text-2xl font-light text-[var(--foreground)]/80 mb-12 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="space-y-6 text-[var(--foreground)]/70 font-light">
            {post.content && post.content.split('\n\n').map((paragraph, index) => {
              // Check if this is a h2 heading (starts with "## ")
              if (paragraph.startsWith('## ')) {
                const headingText = paragraph.slice(3);
                return (
                  <h2 key={index} className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mt-10 mb-5">
                    {processInlineMarkdown(headingText)}
                  </h2>
                );
              }
              
              // Check if this is a h1 heading (starts with "# ")
              if (paragraph.startsWith('# ')) {
                const headingText = paragraph.slice(2);
                return (
                  <h2 key={index} className="font-[var(--font-heading)] text-3xl text-[var(--foreground)] mt-12 mb-6">
                    {headingText}
                  </h2>
                );
              }
              
              // Check if paragraph starts with a number (like "1. ", "2. ", etc.)
              if (paragraph.match(/^\d+\./)) {
                return (
                  <h3 key={index} className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mt-8 mb-4">
                    {processInlineMarkdown(paragraph)}
                  </h3>
                );
              }

              // Process paragraph with potential bullet lists
              return <div key={index}>{processParagraphWithLists(paragraph, index)}</div>;
            })}
          </div>
        </div>

        {/* Meta Info */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between text-sm text-[var(--foreground)]/60">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="text-left p-6 border border-[var(--border-subtle)] hover:border-[var(--foreground)] transition-colors"
            >
              <div className="text-xs uppercase tracking-widest text-[var(--foreground)]/60 mb-2">
                {blog.navigation.previous}
              </div>
              <div className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                {prevPost.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="text-right p-6 border border-[var(--border-subtle)] hover:border-[var(--foreground)] transition-colors"
            >
              <div className="text-xs uppercase tracking-widest text-[var(--foreground)]/60 mb-2">
                {blog.navigation.next}
              </div>
              <div className="font-[var(--font-heading)] text-lg text-[var(--foreground)]">
                {nextPost.title}
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="font-[var(--font-heading)] text-3xl text-center mb-12">
            {blog.relatedPosts}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-xs uppercase tracking-widest text-[var(--foreground)]/60 mb-2">
                  {relatedPost.category}
                </div>
                <h3 className="font-[var(--font-heading)] text-xl text-[var(--foreground)] mb-2">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-[var(--foreground)]/60 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
