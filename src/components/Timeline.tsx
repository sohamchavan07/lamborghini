import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  model: string;
  years: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    model: "Lamborghini 350 GT",
    years: "1964–1966",
    title: "The Original",
    description: "Lamborghini's first production vehicle. It established the company's commitment to building a comfortable, powerful V12 Grand Tourer (GT) to rival Ferrari."
  },
  {
    model: "Lamborghini Miura",
    years: "1966–1973",
    title: "The World's First Supercar",
    description: "It pioneered the revolutionary mid-engine, two-seater layout that became the template for all modern high-performance sports cars. Widely regarded as one of the most beautiful cars ever made."
  },
  {
    model: "Lamborghini Countach",
    years: "1974–1990",
    title: "The Definitive Poster Car",
    description: "It introduced the extreme, wedge-shaped design and the iconic Scissor Doors, cementing the brand's reputation for outrageous, futuristic style. It defined the look of the 1980s supercar."
  },
  {
    model: "Lamborghini LM002",
    years: "1986–1993",
    title: "The 'Rambo Lambo'",
    description: "Lamborghini's first SUV/off-road vehicle. It was a bizarre, military-inspired high-performance truck powered by a Countach V12, paving the way for the modern super-SUV segment."
  },
  {
    model: "Lamborghini Diablo",
    years: "1990–2001",
    title: "The First 200 MPH Lamborghini",
    description: "It successfully replaced the Countach and brought Lamborghini into the modern age of extreme speed. The last pure V12 flagship developed before the Audi takeover."
  },
  {
    model: "Lamborghini Murciélago",
    years: "2001–2010",
    title: "The Audi Era's First V12",
    description: "It was the first flagship model developed under Volkswagen Group/Audi ownership, combining traditional, dramatic V12 power and styling with a new level of German build quality and technology."
  },
  {
    model: "Lamborghini Gallardo",
    years: "2003–2013",
    title: "The Best-Selling Lamborghini",
    description: "It was a game-changer for the brand, offering a more accessible V10 model that vastly increased production volume and saved the company financially, cementing its place in the modern market."
  },
  {
    model: "Lamborghini Aventador",
    years: "2011–2022",
    title: "The Modern V12 Icon",
    description: "It replaced the Murciélago and featured an all-new V12 engine and a full carbon fiber monocoque chassis. Its stealth-fighter design and raw power made it the quintessential Lamborghini of the 2010s."
  },
  {
    model: "Lamborghini Huracán",
    years: "2014–Present",
    title: "The Modern V10 Successor",
    description: "It built upon the Gallardo's success, becoming one of the most technologically advanced and widely customized supercars in history, known for its incredible performance balance."
  },
  {
    model: "Lamborghini Urus",
    years: "2018–Present",
    title: "The Commercial Powerhouse",
    description: "The Super-SUV that dramatically increased Lamborghini's annual sales and manufacturing capacity, becoming the fastest-selling model in the company's history."
  }
];

export const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-carbon relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-3 sm:mb-4 leading-tight">
          <span className="text-gradient">ICONIC TIMELINE</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          The Evolution of Automotive Perfection
        </p>

        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary to-transparent" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(index);
            
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative mb-6 sm:mb-8 md:mb-16 ${
                  // On mobile, stack all items to the left with offset
                  // On desktop, alternate left/right
                  isLeft ? "md:flex md:justify-start" : "md:flex md:justify-end"
                }`}
              >
                {/* Timeline dot - positioned differently for mobile vs desktop */}
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-2 sm:border-4 border-background z-10 animate-glow-pulse mb-3 sm:mb-4 md:mb-0" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 bg-card border-2 border-border p-3 sm:p-4 md:p-6 rounded-lg transition-all duration-700 ${
                    isVisible 
                      ? `opacity-100 translate-x-0` 
                      : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
                  } hover:border-primary card-3d`}
                >
                  <div className="text-primary text-xs sm:text-sm font-bold mb-1 sm:mb-2">{item.years}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-foreground leading-tight">{item.model}</h3>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold text-primary/80 mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
