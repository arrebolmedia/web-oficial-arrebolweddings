"use client";

import { useState } from "react";
import { blogPosts } from "@/lib/blog-data";
import BlogHero from "@/components/BlogHero";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const POSTS_PER_PAGE = 9;

const CATEGORIES = ["Todos", "Real Weddings", "Tips", "Inspiración"] as const;
type Category = typeof CATEGORIES[number];

interface BlogPageContentProps {
  currentPage: number;
}

export default function BlogPageContent({ currentPage }: BlogPageContentProps) {
  const { content } = useLanguage();
  const { blog } = content;
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  // Filter posts by category
  const filteredPosts = activeCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Use the first filtered post as the featured hero post (only on page 1)
  const featuredPost = filteredPosts[0];
  // Get all posts except the featured one for pagination
  const allGridPosts = filteredPosts.slice(1);
  
  // Calculate pagination
  const totalPosts = allGridPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = allGridPosts.slice(startIndex, endIndex);
  
  // Ensure current page is valid
  const validCurrentPage = Math.min(currentPage, totalPages || 1);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="block text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/50 mb-4">
            {blog.page.journal}
          </span>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl text-[var(--foreground)] mb-6">
            {blog.page.heroTitle}
          </h1>
          <p className="font-light text-[var(--foreground)]/70 max-w-2xl mx-auto">
            {blog.page.heroDescription}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[var(--foreground)] text-[var(--background)]"
                  : "border border-[var(--foreground)]/20 text-[var(--foreground)]/70 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post - Only show on first page and if there are posts */}
        {validCurrentPage === 1 && featuredPost && <BlogHero post={featuredPost} />}

        {/* Blog Grid */}
        <div className="mt-20 md:mt-32">
          <div className="flex items-end justify-between mb-12 border-b border-[var(--foreground)]/10 pb-6">
            <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-[var(--foreground)]">
              {validCurrentPage === 1 ? blog.page.latestPosts : `${blog.page.postsPage} ${validCurrentPage}`}
            </h2>
            <span className="hidden md:block text-xs tracking-widest uppercase text-[var(--foreground)]/50">
              {filteredPosts.length} {blog.page.articles}
            </span>
          </div>
          
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-[var(--foreground)]/50">
              <p className="text-lg">No hay artículos en esta categoría aún.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              {validCurrentPage > 1 && (
                <Link
                  href={validCurrentPage === 2 ? "/blog" : `/blog?page=${validCurrentPage - 1}`}
                  className="px-6 py-2 text-xs tracking-widest uppercase border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-colors duration-300"
                >
                  {blog.navigation.previous}
                </Link>
              )}
              
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={page === 1 ? "/blog" : `/blog?page=${page}`}
                    className={`w-10 h-10 flex items-center justify-center text-sm transition-colors duration-300 ${
                      page === validCurrentPage
                        ? "bg-[var(--foreground)] text-[var(--background)]"
                        : "hover:bg-[var(--foreground)]/10"
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {validCurrentPage < totalPages && (
                <Link
                  href={`/blog?page=${validCurrentPage + 1}`}
                  className="px-6 py-2 text-xs tracking-widest uppercase border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-colors duration-300"
                >
                  {blog.navigation.next}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Newsletter / CTA Section */}
        <div className="mt-32 py-20 bg-[var(--foreground)]/5 text-center rounded-sm md:w-[70%] mx-auto">
          <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl mb-4">
            {blog.page.ctaTitle}
          </h3>
          <p className="font-light mb-8 max-w-md mx-auto">
            {blog.page.ctaDescription}
          </p>
          <a 
            href={`https://wa.me/5217775001071?text=${encodeURIComponent(blog.page.ctaMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs tracking-widest uppercase bg-[var(--foreground)] text-[var(--background)] px-8 py-3 border border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors duration-300"
          >
            {blog.page.ctaButton}
          </a>
        </div>
      </div>
    </main>
  );
}
