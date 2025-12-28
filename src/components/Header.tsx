import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import vistarLogo from "@/assets/vistar-logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <img
              src={vistarLogo}
              alt="Vistar Ayurveda Logo"
              className="h-10 md:h-12 w-auto rounded-lg"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Button
              variant="hero"
              size="default"
              onClick={() => scrollToSection("cta")}
            >
              Order Now
            </Button>
          </nav>

          <Button
            variant="hero"
            size="sm"
            className="md:hidden"
            onClick={() => scrollToSection("cta")}
          >
            Order
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
