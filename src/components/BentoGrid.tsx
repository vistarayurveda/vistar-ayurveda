import { Leaf, Zap, Brain, FlaskConical, ShieldCheck, Heart } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Herbal & Ayurvedic",
    description: "Pure natural ingredients, parampara se banaya gaya",
    className: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    icon: Zap,
    title: "Energy & Stamina",
    description: "Rozana ki energy ko boost karein",
    className: "md:col-span-1",
    featured: false,
  },
  {
    icon: Brain,
    title: "Focus & Confidence",
    description: "Mental clarity aur confidence badhaye",
    className: "md:col-span-1",
    featured: false,
  },
  {
    icon: FlaskConical,
    title: "Quality-tested Ingredients",
    description: "Lab-tested, safe aur effective formula",
    className: "md:col-span-1",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "No Harmful Chemicals",
    description: "Koi side effects nahi, bilkul natural",
    className: "md:col-span-1",
    featured: false,
  },
  {
    icon: Heart,
    title: "Overall Wellness",
    description: "Complete health aur vitality support",
    className: "md:col-span-2",
    featured: false,
  },
];

const BentoGrid = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium">
            🌿 Benefits
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Kyun Chunein <span className="text-gradient">Longjack</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ayurvedic science aur modern quality standards ka perfect combination
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl border border-border
                bg-card hover:bg-card/80 transition-all duration-500
                hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                ${benefit.className}
                opacity-0 animate-scale-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-6 md:p-8 h-full flex flex-col ${benefit.featured ? "justify-center items-center text-center" : ""}`}>
                <div
                  className={`
                    inline-flex items-center justify-center rounded-xl
                    bg-gradient-to-br from-primary/20 to-accent/20
                    group-hover:from-primary/30 group-hover:to-accent/30
                    transition-colors duration-300
                    ${benefit.featured ? "w-20 h-20 mb-6" : "w-12 h-12 mb-4"}
                  `}
                >
                  <benefit.icon
                    className={`text-primary ${benefit.featured ? "w-10 h-10" : "w-6 h-6"}`}
                  />
                </div>
                
                <h3
                  className={`font-display font-bold text-foreground mb-2 ${
                    benefit.featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                  }`}
                >
                  {benefit.title}
                </h3>
                
                <p
                  className={`text-muted-foreground ${
                    benefit.featured ? "text-base md:text-lg" : "text-sm md:text-base"
                  }`}
                >
                  {benefit.description}
                </p>
                
                {benefit.featured && (
                  <div className="mt-6 flex items-center gap-2 text-primary">
                    <Leaf className="w-5 h-5" />
                    <span className="font-medium">Traditional Ayurvedic Formula</span>
                  </div>
                )}
              </div>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
