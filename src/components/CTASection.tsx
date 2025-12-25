import { Button } from "@/components/ui/button";
import { Leaf, Shield, Truck, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/30 rounded-full animate-pulse">
            <Gift className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Limited Time Offer - Special Discount!</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight opacity-0 animate-fade-up">
            Apni Daily Energy Ko{" "}
            <span className="text-gradient">Naturally</span> Boost Karein
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            Hazaron logon ne Longjack se apni life improve ki hai. Ab aapki baari! 
            Pure Ayurvedic, safe, aur effective – aaj hi try karein.
          </p>
          
          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 py-6 opacity-0 animate-fade-up stagger-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>100% Safe</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span>Pure Ayurvedic</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              <span>Fast Delivery</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="opacity-0 animate-fade-up stagger-3">
            <Button
              variant="gold"
              size="xl"
              className="text-lg px-12"
              onClick={() => window.open("#", "_blank")}
            >
              🌿 Order Longjack Now
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              COD Available • Secure Payment • Easy Returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
