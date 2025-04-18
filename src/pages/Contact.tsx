
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-24 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-brown mb-4">Contact Us</h1>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We're here to help with any questions, concerns, or feedback you might have
              </p>
            </div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-foreground/70">+91 98765 43210</p>
                <p className="text-foreground/70">+91 12345 67890</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-foreground/70">support@pawfectlyyours.in</p>
                <p className="text-foreground/70">info@pawfectlyyours.in</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Working Hours</h3>
                <p className="text-foreground/70">Monday - Friday: 9AM - 6PM</p>
                <p className="text-foreground/70">Saturday: 10AM - 4PM</p>
              </div>
            </div>
            
            {/* Contact Form and Map Section */}
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-border">
                  <h2 className="text-2xl font-bold text-brown mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-brown mb-6">Our Location</h2>
                  <div className="mb-4 flex-grow">
                    <div className="bg-muted h-48 md:h-64 rounded-lg mb-4 overflow-hidden relative">
                      {/* A placeholder for the map - in a real app, you'd use Google Maps or similar */}
                      <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center">
                        <MapPin size={32} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 flex items-center">
                        <MapPin size={16} className="mr-2 text-primary" />
                        Pawfectly Yours Headquarters
                      </h3>
                      <p className="text-foreground/70">
                        123 Pet Boulevard, Koramangala<br />
                        Bangalore, Karnataka 560034<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-foreground/70 text-sm">
                      If you're in the area, feel free to stop by our store. We're pet-friendly!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-brown text-center mb-8">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: "What are your shipping rates?",
                    a: "We offer free shipping on all orders above ₹999. For orders below that amount, a flat shipping fee of ₹99 is applied."
                  },
                  {
                    q: "What is your return policy?",
                    a: "We accept returns within 30 days of delivery. Items must be unused and in their original packaging."
                  },
                  {
                    q: "How can I track my order?",
                    a: "Once your order ships, you'll receive a tracking number via email that you can use to monitor its progress."
                  },
                  {
                    q: "Do you ship internationally?",
                    a: "Currently, we only ship within India. We're working on expanding our shipping options."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-foreground/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
