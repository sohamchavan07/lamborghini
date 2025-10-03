import { useEffect, useRef, useState } from "react";
import murcielagoImg from "@/assets/lamborghini-murcielago.jpg";

export const PerformanceHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative h-[100svh] sm:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={murcielagoImg}
          alt="Lamborghini Performance"
          className={`w-full h-full object-cover object-[50%_35%] sm:object-center transition-all duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <div
            className={`text-primary text-sm font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            PURE PERFORMANCE
          </div>
          <h2
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 transition-all duration-700 leading-tight ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="text-gradient glow-text">ENGINEERED</span>
            <br />
            FOR SPEED
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 transition-all duration-700 px-2 sm:px-4 md:px-0 leading-relaxed ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Every Lamborghini is a masterpiece of aerodynamics, power, and precision engineering.
            From 0 to legend in seconds.
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-primary/20 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-primary">760+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Horsepower</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-primary/20 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-primary">2.8s</div>
              <div className="text-xs sm:text-sm text-muted-foreground">0-60 MPH</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-primary/20 text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-primary">217</div>
              <div className="text-xs sm:text-sm text-muted-foreground">MPH Top Speed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
