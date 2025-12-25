import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review:
      "2 hafte use ke baad energy kaafi improve hui. Natural product hai, no side effects. Daily morning lene se din bhar active rehta hoon!",
    avatar: "R",
  },
  {
    name: "Amit Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "Pehle bahut thakan feel hoti thi, ab stamina bahut better hai. Wife bhi khush hai! Highly recommended for all men.",
    avatar: "A",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 4,
    review:
      "Ayurvedic hone ki wajah se trust tha, aur results bhi mil rahe hain. Gym performance improve hui hai significantly.",
    avatar: "V",
  },
  {
    name: "Suresh Patel",
    location: "Ahmedabad",
    rating: 5,
    review:
      "Office ke stress ke baad bhi fresh feel hota hoon. Best Ayurvedic supplement jo maine try kiya hai. Family ko bhi recommend kar diya.",
    avatar: "S",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1 bg-accent/20 rounded-full text-accent text-sm font-medium">
            ⭐ Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Hamare <span className="text-gradient">Customers</span> Kya Kehte Hain
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real people jo Longjack ka fayda le rahe hain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-olive flex items-center justify-center text-foreground font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2 opacity-0 animate-fade-up stagger-1">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">10,000+</p>
            <p className="text-muted-foreground text-sm">Happy Customers</p>
          </div>
          <div className="space-y-2 opacity-0 animate-fade-up stagger-2">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">4.8★</p>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </div>
          <div className="space-y-2 opacity-0 animate-fade-up stagger-3">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">100%</p>
            <p className="text-muted-foreground text-sm">Natural Ingredients</p>
          </div>
          <div className="space-y-2 opacity-0 animate-fade-up stagger-4">
            <p className="font-display text-3xl md:text-4xl font-bold text-gradient">5+ Years</p>
            <p className="text-muted-foreground text-sm">Trusted Brand</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
