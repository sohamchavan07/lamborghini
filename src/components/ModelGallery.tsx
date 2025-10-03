import { useState } from "react";
import gt350 from "@/assets/lamborghini-350gt.jpg";
import lm002 from "@/assets/lamborghini-lm002.jpg";
import urus from "@/assets/lamborghini-urus.jpg";
import gallardo from "@/assets/lamborghini-gallardo.jpg";
import murcielago from "@/assets/lamborghini-murcielago.jpg";
import huracan from "@/assets/lamborghini-huracan.jpg";
import aventadorSvj from "@/assets/lamborghini-aventador-svj.jpg";
import countach from "@/assets/lamborghini-countach.jpg";
import revuelto from "@/assets/lamborghini-revuelto.jpg";

interface Model {
  name: string;
  image: string;
  year: string;
  description: string;
}

const models: Model[] = [
  {
    name: "Lamborghini 350 GT",
    image: gt350,
    year: "1964-1966",
    description: "The original masterpiece that started the legend"
  },
  {
    name: "Lamborghini LM002",
    image: lm002,
    year: "1986-1993",
    description: "The Rambo Lambo - a V12-powered beast"
  },
  {
    name: "Lamborghini Urus",
    image: urus,
    year: "2018-Present",
    description: "The super-SUV redefining the segment"
  },
  {
    name: "Lamborghini Gallardo",
    image: gallardo,
    year: "2003-2013",
    description: "The best-selling legend with V10 power"
  },
  {
    name: "Lamborghini Murciélago",
    image: murcielago,
    year: "2001-2010",
    description: "The flagship that defined modern Lamborghini"
  },
  {
    name: "Lamborghini Huracán",
    image: huracan,
    year: "2014-Present",
    description: "The perfect balance of performance and technology"
  },
  {
    name: "Lamborghini Countach",
    image: countach,
    year: "1974-1990",
    description: "The definitive poster car with iconic scissor doors"
  },
  {
    name: "Lamborghini Aventador SVJ",
    image: aventadorSvj,
    year: "2011-2022",
    description: "The modern V12 icon with carbon monocoque chassis"
  },
  {
    name: "Lamborghini Revuelto",
    image: revuelto,
    year: "2024-Present",
    description: "The hybrid V12 flagship of the future"
  }
];

export const ModelGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="models" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-3 sm:mb-4 leading-tight">
          <span className="text-gradient">FEATURED MODELS</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto px-4">
          Nine Icons That Changed Everything
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card border-2 border-border transition-all duration-500 card-3d animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="text-primary text-xs sm:text-sm font-bold mb-1 sm:mb-2">{model.year}</div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-foreground group-hover:text-gradient transition-colors leading-tight">
                  {model.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">{model.description}</p>
              </div>

              {/* Hover effect border */}
              <div 
                className={`absolute inset-0 border-2 border-primary rounded-lg transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
