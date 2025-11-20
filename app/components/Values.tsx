import FadeIn from "@/components/FadeIn";
import { content } from "@/lib/content";

const Values = () => {
  const { values } = content.home;

  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="text-center">
                <h3 className="font-[var(--font-heading)] text-2xl text-[var(--foreground)] mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
