"use client";

import { useEffect, useState } from "react";
import { X, Tag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const SHOW_TIMES = [10000, 45000];
const STORAGE_KEY = "buyNowPopupCount";

const BuyNowModal = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = Number(sessionStorage.getItem(STORAGE_KEY) || 0);
    setCount(stored);

    if (stored >= 2) return;

    const timer = setTimeout(() => {
      setOpen(true);
      const newCount = stored + 1;
      sessionStorage.setItem(STORAGE_KEY, String(newCount));
      setCount(newCount);
    }, SHOW_TIMES[stored]);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="p-0 max-w-lg overflow-hidden rounded-2xl border border-border bg-background"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 p-8 text-center space-y-6">
          {/* Offer Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/20 border border-accent/30 rounded-full">
            <Tag className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">
              COMBO Pack Offer
            </span>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg line-through">
              MRP ₹3499/-
            </p>

            <p className="font-display text-4xl font-bold text-gradient">
              Combo Price ₹1299/-
            </p>

            <p className="text-sm text-accent font-semibold">
              + Oil worth ₹1299 FREE
            </p>
          </div>

          {/* Copy */}
          <p className="text-muted-foreground text-sm">
            Energy, stamina aur performance ko next level le jaane wala
            powerful Ayurvedic combo. Limited time ke liye combo advantage.
          </p>

          {/* CTA */}
          <Button
            variant="gold"
            size="xl"
            className="w-full text-lg"
            onClick={() => window.open("#buy-now", "_self")}
          >
            ⚡ Buy Combo @ ₹1299
          </Button>

          <p className="text-muted-foreground text-xs">
            Free Oil Included • COD Available • Secure Payment • Free Shipping
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm pt-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Combo offer valid till stock lasts</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyNowModal;
