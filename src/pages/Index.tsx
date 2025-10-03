import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PerformanceHero } from "@/components/PerformanceHero";
import { ModelGallery } from "@/components/ModelGallery";
import { HeritageHero } from "@/components/HeritageHero";
import { Aventador3D } from "@/components/3D";
import { Timeline } from "@/components/Timeline";
import { InnovationHero } from "@/components/InnovationHero";
import { Footer } from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <PerformanceHero />
      <ModelGallery />
      <Aventador3D />
      <HeritageHero />
      <Timeline />
      <InnovationHero />
      <Footer />
      <BackToTop />
    </main>
  );
};

export default Index;
