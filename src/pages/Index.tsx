import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductDetails from "@/components/ProductDetails";
import BentoGrid from "@/components/BentoGrid";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <ProductDetails />
        <BentoGrid />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
