import { useState, useEffect } from "react";
import logo from "../assets/lambo-logo-removebg-preview.png";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key or outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Lamborghini logo" className="h-10 sm:h-12 md:h-14 w-auto select-none" draggable={false} />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("performance")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Performance
            </button>
            <button
              onClick={() => scrollToSection("models")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Models
            </button>
            <button
              onClick={() => scrollToSection("three-d")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base px-3 py-2 rounded-md hover:bg-primary/10"
            >
              3D
            </button>
            <button
              onClick={() => scrollToSection("heritage")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Heritage
            </button>
            <button
              onClick={() => scrollToSection("innovation")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm lg:text-base px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Innovation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-background/98 backdrop-blur-md border-t border-border shadow-lg">
            <div className="px-4 py-6 space-y-1">
              <button
                onClick={() => scrollToSection("performance")}
                className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10 text-base"
              >
                Performance
              </button>
              <button
                onClick={() => scrollToSection("models")}
                className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10 text-base"
              >
                Models
              </button>
              <button
                onClick={() => scrollToSection("three-d")}
                className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10 text-base"
              >
                3D Models
              </button>
              <button
                onClick={() => scrollToSection("heritage")}
                className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10 text-base"
              >
                Heritage
              </button>
              <button
                onClick={() => scrollToSection("innovation")}
                className="block w-full text-left text-foreground/90 hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-primary/10 text-base"
              >
                Innovation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
