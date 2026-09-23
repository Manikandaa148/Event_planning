import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Services } from "@/components/home/Services";
import { FeaturedPortfolio } from "@/components/home/FeaturedPortfolio";
import { PhotographyGallery } from "@/components/home/PhotographyGallery";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { Packages } from "@/components/home/Packages";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedPortfolio />
      <PhotographyGallery />
      <Process />
      <Testimonials />
      <Packages />
      <FinalCTA />
    </>
  );
}
