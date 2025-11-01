export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4">
          <span className="text-gradient">LAMBORGHINI LEGACY</span>
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
          A case study in automotive excellence and engineering perfection
        </p>
        <div className="flex flex-col xs:flex-row justify-center items-center space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-8 text-xs sm:text-sm text-muted-foreground">
          <div>© 2025 Case Study Project</div>
          <div className="hidden xs:block">|</div>
          <div>Educational Purpose</div>
        </div>
        <div className="mt-6 sm:mt-8 text-xs text-muted-foreground max-w-4xl mx-auto px-2">
       <p>
            &copy; Made by{" "}
            <a
              href="https://www.sohamchavan.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soham Chavan website"
              className="text-yellow-600 hover:text-yellow-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              SOHAM
            </a>
            .
          </p>        </div>
      </div>
    </footer>
  );
};
