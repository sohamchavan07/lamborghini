export const Aventador3D = () => {
  return (
    <section id="three-d" className="py-8 sm:py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight">
            <span className="text-gradient">3D MODELS</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore Lamborghini's legendary designs in interactive 3D
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Aventador SVJ */}
          <div className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary transition-all duration-500 card-3d">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gradient leading-tight">Lamborghini Aventador SVJ</h3>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="Lamborghini Aventador SVJ SDC ( FREE )"
                  src="https://sketchfab.com/models/784e4656aca649cca55d6b18740a19b2/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Revuelto */}
          <div className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary transition-all duration-500 card-3d">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gradient leading-tight">Lamborghini Revuelto</h3>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="Free Lamborghini Revuelto"
                  src="https://sketchfab.com/models/cf52245eb68f48daa909c7ad2a8deaa3/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Countach */}
          <div className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary transition-all duration-500 card-3d">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gradient leading-tight">Lamborghini Countach (1989)</h3>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="1989 Lamborghini Countach"
                  src="https://sketchfab.com/models/525b7214f99247758f6532e4e8f79605/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Sián */}
          <div className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary transition-all duration-500 card-3d">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gradient leading-tight">Lamborghini Sián</h3>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="Lamborghini Sian"
                  src="https://sketchfab.com/models/aa95005d05d44338bf42364c3bab0143/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Huracán */}
          <div className="bg-card border-2 border-border rounded-xl p-4 sm:p-6 md:p-8 hover:border-primary transition-all duration-500 card-3d">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-gradient leading-tight">Lamborghini Huracán</h3>
            <div className="relative w-full">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  title="Lamborghini Huracan"
                  src="https://sketchfab.com/models/f4004ef10bd44845b3cece359e6a6b2e/embed"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

