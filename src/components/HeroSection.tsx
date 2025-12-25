import { Button } from "@/components/ui/button";
import heroProduct from "@/assets/hero-product.jpg";
import { Leaf, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-primary/30">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Natural Ayurvedic</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Natural Energy aur{" "}
              <span className="text-gradient">Strength</span> ka{" "}
              <span className="text-gradient">Ayurvedic Solution</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Vistar Ayurveda Longjack – Rozana stamina, confidence aur wellness ke liye. 
              Aapki daily energy ko naturally boost karne ka trusted tarika.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Quality Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-accent" />
                <span>Fast Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Pure Herbal</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("cta")}
                className="group"
              >
                Try Longjack Today
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("benefits")}
                className="border-primary/30 text-foreground hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative opacity-0 animate-fade-up stagger-2">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
              <img
                src={heroProduct}
                alt="Vistar Ayurveda Longjack Premium Herbal Supplement"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
