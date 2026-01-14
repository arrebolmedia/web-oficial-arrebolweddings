import type { Metadata } from "next";
import EmotionHero from "@/app/components/EmotionHero";
import ImageHero from "@/app/components/ImageHero";
import WhoWeAre from "@/app/components/WhoWeAre";
import GalleryPreview from "@/app/components/GalleryPreview";
import About from "@/app/components/About";
import Philosophy from "@/app/components/Philosophy";
import Process from "@/app/components/Process";
import Testimonials from "@/app/components/Testimonials";
import BlogPreview from "@/app/components/BlogPreview";
import FinalCta from "@/app/components/FinalCta";

export const metadata: Metadata = {
  title: "Arrebol Weddings | Fotografía y Video de Bodas en México",
  description:
    "Capturamos el tipo de recuerdos que se vuelven más valiosos con el tiempo. Fotografía y video de bodas en México con un estilo cercano, honesto y sin poses.",
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <EmotionHero />
      </div>
      <ImageHero />
      <WhoWeAre />
      <GalleryPreview />
      <About />
      <Philosophy />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FinalCta />
    </>
  );
}

