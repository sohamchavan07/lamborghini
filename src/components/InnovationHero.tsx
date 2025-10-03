import { useEffect, useRef, useState } from "react";
import urusImg from "@/assets/lamborghini-urus.jpg";
import revueltoImg from "@/assets/lamborghini-revuelto.jpg";

interface TechFeature {
  icon: string;
  title: string;
  description: string;
  detail: string;
}

const techFeatures: TechFeature[] = [
  {
    icon: "⚡",
    title: "Hybrid V12 Technology",
    description: "1015 HP Combined Power",
    detail: "Revolutionary plug-in hybrid with electric motors on front axle"
  },
  {
    icon: "🔋",
    title: "E-Motor Integration",
    description: "Three Electric Motors",
    detail: "Instant torque delivery and enhanced performance dynamics"
  },
  {
    icon: "💎",
    title: "Carbon Fiber Monocoque",
    description: "Aerospace-Grade Materials",
    detail: "Ultra-lightweight chassis with maximum rigidity and safety"
  },
  {
    icon: "🎯",
    title: "Active Aerodynamics",
    description: "Adaptive Wing System",
    detail: "Real-time downforce adjustment for optimal performance"
  },
  {
    icon: "🧠",
    title: "LDVI System",
    description: "Predictive Vehicle Dynamics",
    detail: "AI-powered control system for unprecedented handling"
  },
  {
    icon: "⚙️",
    title: "8-Speed Dual-Clutch",
    description: "Lightning-Fast Shifts",
    detail: "Seamless power delivery with millisecond gear changes"
  }
];

const innovations = [
  { year: "2024", title: "Revuelto Hybrid V12", subtitle: "The Future Begins" },
  { year: "2020", title: "Sián FKP 37", subtitle: "First Hybrid" },
  { year: "2018", title: "Terzo Millennio", subtitle: "Concept of Tomorrow" },
  { year: "2011", title: "Aventador", subtitle: "Carbon Monocoque Era" }
];

export const InnovationHero = () => {
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
      id="innovation"
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-20 md:py-24 overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div
            className={`text-primary text-sm font-bold mb-4 tracking-widest transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            TECHNOLOGY & INNOVATION
          </div>
          <h2
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 transition-all duration-700 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-gradient glow-text">ENGINEERING</span> EXCELLENCE
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto transition-all duration-700 px-2 sm:px-4 leading-relaxed ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Pioneering the future of automotive excellence with groundbreaking hybrid technology,
            advanced aerodynamics, and revolutionary materials science
          </p>
        </div>

        {/* Hero Image Section */}
        <div
          className={`relative rounded-2xl overflow-hidden mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="relative h-[240px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] group">
            <img
              src={revueltoImg}
              alt="Lamborghini Revuelto"
              className="w-full h-full object-cover object-[50%_35%] sm:object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-3 sm:left-4 md:left-8 right-3 sm:right-4 md:right-8">
              <div className="bg-card/80 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg border border-primary/30">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black mb-1 sm:mb-2 text-gradient leading-tight">Lamborghini Revuelto</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">The world's first High Performance Electrified Vehicle (HPEV)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features Grid */}
        <div
          className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-border rounded-xl p-3 sm:p-4 md:p-6 hover:border-primary transition-all duration-500 card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-foreground group-hover:text-gradient transition-colors leading-tight">
                {feature.title}
              </h3>
              <div className="text-primary font-bold text-xs sm:text-sm mb-1 sm:mb-2">
                {feature.description}
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {feature.detail}
              </p>
              <div
                className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
            </div>
          ))}
        </div>

        {/* Innovation Timeline */}
        <div
          className={`bg-gradient-to-br from-card to-card/50 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 md:mb-8 text-center leading-tight">
            <span className="text-gradient">INNOVATION</span> MILESTONES
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border-2 border-border hover:border-primary transition-all duration-300">
                  <div className="text-primary text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                    {innovation.year}
                  </div>
                  <div className="font-bold text-foreground mb-1 text-xs sm:text-sm md:text-base leading-tight">
                    {innovation.title}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {innovation.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          {[
            { value: "1015", label: "Total HP", unit: "HP" },
            { value: "2.5", label: "0-100 km/h", unit: "SEC" },
            { value: "350", label: "Top Speed", unit: "KM/H" },
            { value: "25", label: "Electric Range", unit: "KM" }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-primary/20 text-center hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-gradient mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-primary font-bold mb-1">
                {stat.unit}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};