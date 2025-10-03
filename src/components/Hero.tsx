import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-lamborghini.jpg";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100svh] sm:h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-[position:50%_30%] sm:bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${Math.min(scrollY * 0.3, 40)}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 sm:mb-4 md:mb-6 animate-slide-up leading-tight">
          <span className="text-gradient glow-text">LAMBORGHINI</span>
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-light mb-2 sm:mb-3 md:mb-4 text-foreground/90 animate-slide-up px-2 sm:px-4 leading-tight" style={{ animationDelay: "0.2s" }}>
          THE LEGEND OF AUTOMOTIVE EXCELLENCE
        </p>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl animate-slide-up px-2 sm:px-4 leading-relaxed" style={{ animationDelay: "0.4s" }}>
          A case study exploring the evolution of supercar perfection
        </p>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 animate-float">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
