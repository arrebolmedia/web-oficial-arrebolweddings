"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { useLanguage } from "../context/LanguageContext";

const Stories = () => {
  const { content } = useLanguage();
  const { stories } = content.home;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader title={stories.title} subtitle={stories.subtitle} />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.featured.map((story, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[var(--accent-blush)] to-[var(--accent-terracotta)]" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-[var(--font-heading)] text-2xl mb-2">
                    {story.couple}
                  </h3>
                  <p className="text-sm text-white/90 mb-4">{story.venue}</p>
                  <Button 
                    href="/galeria" 
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm py-2 px-6 border-white text-white hover:bg-white hover:text-[var(--foreground)]"
                  >
                    {stories.viewStory}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
