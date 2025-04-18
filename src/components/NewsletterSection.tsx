
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast.success("You've successfully joined our pack! Check your email for a special treat.");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-peach to-lavender opacity-20 z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brown/5 rounded-full"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-mint/10 rounded-full"></div>
      
      {/* Paw print patterns */}
      <div className="absolute top-10 left-10 w-8 h-8 rounded-full border-2 border-brown/10 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full border-2 border-brown/10 transform rotate-12"></div>
      <div className="absolute top-1/2 right-40 w-10 h-10 rounded-full border-2 border-brown/10 transform -rotate-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Join the Pack!</h2>
          <p className="text-foreground/80 text-lg mb-8">
            Get exclusive discounts, pet care tips, and adorable pet pics straight to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-mint/20 border border-mint p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="bg-mint rounded-full p-3 mb-4">
                <Check size={24} className="text-green-700" />
              </div>
              <p className="text-foreground font-medium">Thanks for joining our pack! Check your email for a special treat.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary/10"
                onClick={() => setIsSubmitted(false)}
              >
                Subscribe another email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-full px-6 py-6 border-border focus-visible:ring-primary shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 shadow-md"
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
          )}
          
          <p className="text-foreground/60 text-sm mt-4">
            We respect your privacy and promise not to share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
