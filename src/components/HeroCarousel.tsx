import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const productImages = [
  {
    src: product1,
    alt: "Vistar Ayurveda Longjack Premium Bottle",
    title: "Premium Ayurvedic Formula",
  },
  {
    src: product2,
    alt: "Natural Herbal Capsules",
    title: "Pure Herbal Capsules",
  },
  {
    src: product3,
    alt: "Organic Wellness Product",
    title: "Traditional Ayurvedic Blend",
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  const autoplay = useCallback(() => {
    if (!api) return;
    if (api.canScrollNext()) {
      api.scrollNext();
    } else {
      api.scrollTo(0);
    }
  }, [api]);

  useEffect(() => {
    const interval = setInterval(autoplay, 4000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="opacity-0 animate-fade-up">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-primary/20 aspect-square object-cover"
                        />
                      </div>
                      <p className="mt-6 text-xl font-display text-gradient font-semibold">
                        {image.title}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Brand Badge */}
          <div className="text-center mt-10 opacity-0 animate-fade-up stagger-2">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient">Vistar Ayurveda</span> Longjack
            </h1>
            <p className="text-muted-foreground text-lg">
              Natural Energy & Strength ka Ayurvedic Solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
