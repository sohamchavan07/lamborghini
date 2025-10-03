import { useEffect, useRef, useState } from "react";
import gt350Img from "@/assets/lamborghini-350gt.jpg";

export const HeritageHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  // Track window scroll for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute a gentle parallax offset relative to this section
  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const relativeY = Math.max(0, scrollY - sectionTop);
  const parallaxY = Math.min(60, relativeY * 0.15);

  return (
    <section
      id="heritage"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      {/* Parallax decorative glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl opacity-60"
        style={{ transform: `translateY(${parallaxY * 0.6}px)` }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div
            className={`text-primary text-sm font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            SINCE 1963
          </div>
          <h2
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 md:mb-6 transition-all duration-700 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-gradient glow-text">LEGENDARY</span> HERITAGE
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto transition-all duration-700 px-2 sm:px-4 leading-relaxed ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            From tractors to supercars, Ferruccio Lamborghini's vision created an automotive empire
            that challenges convention and defines excellence.
          </p>
        </div>

        {/* Origin Story Callout */}
        <div
          className={`bg-gradient-to-br from-card to-card/60 border border-border rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16 shadow-[var(--shadow-soft)] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-tight">
              <span className="text-gradient">Origin Story</span>: Born From Defiance
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
              Ferruccio Lamborghini, a brilliant industrialist and tractor magnate, grew frustrated
              with frequent clutch failures and harsh road manners in his Ferrari 250 GT. After
              discovering the clutch was similar to his tractors’ but overstressed, he approached
              Enzo Ferrari with a fix—and was dismissed.
            </p>
            <blockquote className="relative border-l-4 border-primary pl-3 sm:pl-4 md:pl-6 py-1">
              <p className="text-foreground text-sm sm:text-base md:text-lg font-semibold">
                “Ferruccio, you may be able to drive a tractor, but you will never be able to handle a Ferrari properly.”
              </p>
            </blockquote>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
              Insulted yet inspired, Ferruccio vowed to build the perfect grand tourer—powerful like
              a Ferrari, but refined and reliable. In 1963 he founded Automobili Lamborghini in
              Sant’Agata Bolognese, recruiting top engineers like Giotto Bizzarrini. The 350 GT
              arrived first, followed by the revolutionary mid‑engined Miura—cementing Lamborghini as
              Ferrari’s audacious rival.
            </p>
          </div>
        </div>

        {/* Image and Timeline */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "600ms", transform: `translateY(${parallaxY * 0.4}px)` }}
          >
            <img
              src={gt350Img}
              alt="Lamborghini 350 GT"
              className="rounded-lg shadow-[var(--shadow-intense)] border-2 border-primary/20"
            />
          </div>

          <div
            className={`space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="border-l-4 border-primary pl-3 sm:pl-4 md:pl-6">
              <div className="text-primary font-black text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">1963</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">The Beginning</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                Ferruccio Lamborghini founded Automobili Lamborghini with one goal: to create the
                perfect grand touring car that would surpass all competitors.
              </p>
            </div>

            <div className="border-l-4 border-primary/60 pl-3 sm:pl-4 md:pl-6">
              <div className="text-primary/80 font-black text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">1966</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">The Revolution</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                The Miura changed everything. The world's first mid-engine supercar set a new
                standard that every manufacturer would follow.
              </p>
            </div>

            <div className="border-l-4 border-primary/40 pl-3 sm:pl-4 md:pl-6">
              <div className="text-primary/60 font-black text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">Today</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">The Legacy</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                With over 10,000 vehicles produced annually, Lamborghini continues to push the
                boundaries of performance, design, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
