import { Button } from "@/components/ui/button";
import { Leaf, Shield, Zap } from "lucide-react";

const ProductDetails = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="details" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-primary/30 opacity-0 animate-fade-up">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Natural Ayurvedic</span>
          </div>
          
          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight opacity-0 animate-fade-up stagger-1">
            Natural Energy aur{" "}
            <span className="text-gradient">Strength</span> ka{" "}
            <span className="text-gradient">Ayurvedic Solution</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-2">
            Vistar Ayurveda Longjack – Rozana stamina, confidence aur wellness ke liye. 
            Aapki daily energy ko naturally boost karne ka trusted tarika.
          </p>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 justify-center opacity-0 animate-fade-up stagger-3">
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
              <Shield className="w-5 h-5 text-primary" />
              <span>Quality Tested</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
              <Zap className="w-5 h-5 text-accent" />
              <span>Fast Results</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full border border-border">
              <Leaf className="w-5 h-5 text-primary" />
              <span>Pure Herbal</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-up stagger-4">
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
      </div>
    </section>
  );
};

export default ProductDetails;
