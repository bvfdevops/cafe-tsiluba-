import { Hero } from "@/components/sections/hero";
import { ExperienceIntro } from "@/components/sections/experience-intro";
import { Differentiators } from "@/components/sections/differentiators";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { LiteraryExperience } from "@/components/sections/literary-experience";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceIntro />
      <Differentiators />
      <FeaturedProducts />
      <LiteraryExperience />
      <GalleryPreview />
      <Testimonials />
      <Location />
      <FinalCta />
    </>
  );
}
