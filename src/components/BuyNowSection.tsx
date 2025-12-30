import { Button } from "@/components/ui/button";
import { Tag, Sparkles } from "lucide-react";
import UserInfoModal from "./UserInfoModal";

const BuyNowSection = () => {
  return (
    <section id="buy-now" className="py-5 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/30 rounded-full">
            <Tag className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">COMBO Pack Offer</span>
          </div>

          {/* Pricing Section */}
          <div className="space-y-4 max-w-xl mx-auto">
            {/* Prices */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg line-through">
                MRP: ₹3499/-
              </p>

              <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                Combo Price ₹1299/-
              </p>

              <p className="text-sm text-accent font-semibold">
                + Oil worth ₹1299 FREE
              </p>
            </div>

            {/* Sub Text */}
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Energy, stamina aur performance ko next level le jaane wala
              complete Ayurvedic combo. Limited time ke liye combo advantage.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <UserInfoModal>
                <Button
                  variant="gold"
                  size="xl"
                  className="w-full text-lg"
                >
                  ⚡ Buy Combo @ ₹1299
                </Button>
              </UserInfoModal>

              <p className="text-muted-foreground text-xs mt-4">
                Free Oil Included • COD Available • Free Shipping
              </p>
            </div>
          </div>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm pt-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Combo offer valid till stock lasts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyNowSection;
