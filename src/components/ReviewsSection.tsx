import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    review:
      "2 हफ्ते इस्तेमाल करने के बाद मेरी एनर्जी में काफी सुधार आया है। यह पूरी तरह प्राकृतिक प्रोडक्ट है और कोई साइड इफेक्ट नहीं हुआ। रोज़ सुबह लेने से पूरे दिन एक्टिव रहता हूँ।",
    avatar: "R",
  },
  {
    name: "Amit Sharma",
    location: "Mumbai",
    rating: 5,
    review:
      "पहले बहुत थकान महसूस होती थी, लेकिन अब स्टैमिना काफी बेहतर हो गया है। पत्नी भी खुश है! सभी पुरुषों के लिए बहुत अच्छा प्रोडक्ट है।",
    avatar: "A",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 4,
    review:
      "आयुर्वेदिक होने की वजह से भरोसा था और रिज़ल्ट भी दिख रहे हैं। जिम में मेरी परफॉर्मेंस पहले से काफी बेहतर हो गई है।",
    avatar: "V",
  },
  {
    name: "Suresh Patel",
    location: "Ahmedabad",
    rating: 5,
    review:
      "ऑफिस के तनाव के बाद भी खुद को फ्रेश महसूस करता हूँ। अब तक का सबसे अच्छा आयुर्वेदिक सप्लीमेंट जो मैंने इस्तेमाल किया है। परिवार वालों को भी रिकमेंड किया है।",
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
              className="group bg-card border border-border rounded-2xl p-6
                         flex flex-col justify-between min-h-[250px]
                         hover:border-primary/50 transition-all duration-300
                         hover:shadow-lg hover:shadow-primary/10
                         opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Top Content */}
              <div>
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.review}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 mt-6 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-olive flex items-center justify-center text-foreground font-bold">
                  {review.avatar}
                </div>

                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {review.location}
                  </p>
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
