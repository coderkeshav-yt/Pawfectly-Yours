
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import BrandValues from "@/components/BrandValues";
import NewsletterSection from "@/components/NewsletterSection";
import InstagramFeed from "@/components/InstagramFeed";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <FeaturedProducts />
        <TestimonialsSection />
        <BrandValues />
        <NewsletterSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
