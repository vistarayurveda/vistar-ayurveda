import { Button } from "@/components/ui/button";
import { Leaf, Shield, Truck, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
          <div className="pt-4 opacity-0 animate-fade-up stagger-3">
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
          
          {/* Product Guarantee */}
          <div className="mt-12 p-6 bg-card/50 border border-border rounded-2xl max-w-xl mx-auto opacity-0 animate-fade-up stagger-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-olive flex items-center justify-center">
                <Shield className="w-8 h-8 text-foreground" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-lg">Quality Guarantee</p>
                <p className="text-muted-foreground text-sm">
                  Agar product se khush nahi, toh money back. No questions asked!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
