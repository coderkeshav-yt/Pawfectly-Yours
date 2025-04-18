
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Max",
    owner: "Sarah L.",
    text: "Max absolutely loves his new interactive puzzle toy! It keeps him occupied for hours and he's always excited when I bring it out.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop",
    product: "Interactive Puzzle Toy"
  },
  {
    id: 2,
    name: "Luna",
    owner: "James K.",
    text: "The Cozy Cloud Pet Bed has been a game-changer for Luna. She sleeps soundly through the night and her joint pain seems much improved!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1577175889968-f551f5944abd?q=80&w=500&auto=format&fit=crop",
    product: "Cozy Cloud Pet Bed"
  },
  {
    id: 3,
    name: "Oliver",
    owner: "Emily R.",
    text: "I was skeptical about premium pet food, but Oliver's coat has never been shinier since switching to the Organic Chicken & Rice Kibble.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop",
    product: "Organic Chicken & Rice Kibble"
  },
  {
    id: 4,
    name: "Bella",
    owner: "Michael T.",
    text: "The Natural Oatmeal Shampoo has completely eliminated Bella's itching and dry skin. Plus she smells amazing after bath time!",
    rating: 4,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop",
    product: "Natural Oatmeal Shampoo"
  }
];

const TestimonialsSection = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoPlay && api) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % testimonials.length;
        api.scrollTo(nextIndex);
        setActiveIndex(nextIndex);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoPlay, activeIndex, api]);

  const handleSelect = () => {
    if (api) {
      const selectedIndex = api.selectedScrollSnap();
      setActiveIndex(selectedIndex);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Loved by Pets and Their Humans</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">See what our furry customers and their humans have to say about their Pawfectly Yours experience</p>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          onSelect={handleSelect}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-2">
                <Card className="border border-border bg-background/50 overflow-hidden h-full shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-0 h-full">
                    <div className="flex flex-col h-full">
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                            />
                          ))}
                        </div>
                        <div className="flex mb-4">
                          <Quote size={24} className="text-primary/30 mr-2 flex-shrink-0" />
                          <p className="text-foreground/80 italic flex-grow">"{testimonial.text}"</p>
                        </div>
                        <div className="mt-auto pt-4 border-t border-border/50">
                          <p className="font-semibold text-foreground">
                            {testimonial.name} & {testimonial.owner}
                          </p>
                          <p className="text-sm text-foreground/60">
                            Purchased: {testimonial.product}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 bg-background shadow-sm hover:bg-primary/10 hover:text-primary" />
            <div className="flex justify-center items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeIndex === index ? "bg-primary w-4" : "bg-muted"
                  }`}
                  onClick={() => {
                    if (api) {
                      api.scrollTo(index);
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative static ml-2 bg-background shadow-sm hover:bg-primary/10 hover:text-primary" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
