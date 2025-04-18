
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-peach/30 to-white py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brown leading-tight mb-4">
              Everything Your Pet <span className="font-handwritten text-primary">Deserves</span>, All in One Place
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
              Shop hand-picked, high-quality products your furry friend will love. Because they're more than pets—they're family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 shadow-md"
                onClick={() => navigate("/shop")}
              >
                Explore the Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-medium rounded-full px-8"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy cat and dog together" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating paw prints with enhanced animation */}
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-peach rounded-full opacity-60 animate-float shadow-md" />
            <div className="absolute top-1/4 -left-8 w-8 h-8 bg-babyblue rounded-full opacity-60 animate-float shadow-md" style={{ animationDelay: "1s" }} />
            <div className="absolute bottom-20 -right-6 w-10 h-10 bg-lavender rounded-full opacity-60 animate-float shadow-md" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
      
      {/* Enhanced background elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-mint rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lavender rounded-full opacity-30 blur-3xl" />
    </section>
  );
};

export default HeroSection;
