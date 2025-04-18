
import { ShieldCheck, Leaf, Truck, Headset } from "lucide-react";

const values = [
  {
    title: "Vet-Approved Products",
    description: "Every product in our collection is carefully selected and approved by veterinarians",
    icon: ShieldCheck,
    color: "bg-peach"
  },
  {
    title: "Eco-Friendly Packaging",
    description: "We're committed to sustainable practices with biodegradable and recyclable packaging",
    icon: Leaf,
    color: "bg-mint"
  },
  {
    title: "Fast & Reliable Shipping",
    description: "Free shipping on orders over $50 with delivery within 2-3 business days",
    icon: Truck,
    color: "bg-babyblue"
  },
  {
    title: "Paw-sitive Customer Support",
    description: "Our team of pet lovers is here to help 7 days a week for any questions you have",
    icon: Headset,
    color: "bg-lavender"
  }
];

const BrandValues = () => {
  return (
    <section className="py-16 bg-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Why Choose Pawfectly Yours?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">We go above and beyond to ensure happy pets and satisfied owners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white rounded-2xl p-8 border border-border hover-lift group">
              <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-transform duration-300 group-hover:scale-110`}>
                <value.icon size={28} className="text-foreground" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">{value.title}</h3>
              <p className="text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
