
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, PawPrint, ShieldCheck } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-24 bg-cream/20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-peach/30 to-white py-12 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brown mb-6">About Pawfectly Yours</h1>
              <p className="text-lg text-foreground/80 mb-8">
                Founded in 2022, Pawfectly Yours is dedicated to providing premium quality products for pets and their humans. 
                Our journey began with a simple belief: our pets deserve the best.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brown mb-6">Our Story</h2>
              <p className="text-foreground/80 mb-4">
                Pawfectly Yours began when our founder, Ananya Sharma, couldn't find high-quality, ethically-sourced products for her rescue dog, Luna. Frustrated by the lack of options that prioritized both pet health and environmental sustainability, she decided to create her own solution.
              </p>
              <p className="text-foreground/80 mb-4">
                What started as a small online store has grown into a beloved brand trusted by pet parents across India. Our commitment remains the same: to create products that are good for pets, people, and the planet.
              </p>
              <p className="text-foreground/80">
                Today, we offer a curated selection of premium pet food, toys, accessories, and more – all designed with your pet's wellbeing in mind.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1535008652995-e95986556e32?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy pets" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-secondary/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-muted py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brown text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PawPrint size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-4">Pet-First Approach</h3>
                <p className="text-foreground/70">
                  Every product we offer is designed with your pet's health, safety, and happiness as our top priority.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={28} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-4">Quality Assurance</h3>
                <p className="text-foreground/70">
                  We rigorously test all our products and only source from trusted, ethical manufacturers who share our values.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={28} className="text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-brown mb-4">Community Impact</h3>
                <p className="text-foreground/70">
                  We donate 5% of our profits to animal welfare organizations and actively support pet adoption initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown mb-4">Meet Our Team</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We're a team of passionate pet lovers dedicated to making the lives of pets and their humans better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Ananya Sharma", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1535008652995-e95986556e32?q=80&w=500&auto=format&fit=crop" },
              { name: "Rahul Kapoor", role: "Product Development", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop" },
              { name: "Priya Mehta", role: "Customer Experience", img: "https://images.unsplash.com/photo-1577175889968-f551f5944abd?q=80&w=500&auto=format&fit=crop" },
              { name: "Vikram Singh", role: "Head of Operations", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover-lift">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-foreground/70 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brown mb-4">Ready to give your pet the best?</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Explore our collection of premium pet products designed with love and care.
            </p>
            <Button 
              onClick={() => navigate("/shop")}
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 py-3 shadow-md"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
