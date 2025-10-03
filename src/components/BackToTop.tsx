import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg border border-border hover:brightness-110 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/60 w-12 h-12 flex items-center justify-center"
      style={{ boxShadow: "var(--shadow-intense)" }}
    >
      ↑
    </button>
  );
};

export default BackToTop;


