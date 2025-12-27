import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BentoGrid />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
