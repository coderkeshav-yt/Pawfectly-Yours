
import { Cat, Dog, Cookie, Gamepad, Scissors, Bed, Shirt, Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Food & Treats",
    icon: Cookie,
    color: "bg-peach text-brown",
    description: "Nutritious & delicious",
    path: "/shop/food-treats"
  },
  {
    name: "Toys & Play",
    icon: Gamepad,
    color: "bg-babyblue text-blue-700",
    description: "Fun for every pet",
    path: "/shop/toys-play"
  },
  {
    name: "Grooming & Care",
    icon: Scissors,
    color: "bg-mint text-green-700",
    description: "Keep them looking their best",
    path: "/shop/grooming-care"
  },
  {
    name: "Beds & Comfort",
    icon: Bed,
    color: "bg-lavender text-purple-700",
    description: "Cozy spaces to relax",
    path: "/shop/beds-comfort"
  },
  {
    name: "Apparel & Accessories",
    icon: Shirt,
    color: "bg-cream text-brown",
    description: "Stylish pet fashion",
    path: "/shop/apparel-accessories"
  },
  {
    name: "Training & Travel",
    icon: Flag,
    color: "bg-tan text-brown",
    description: "Tools for adventures",
    path: "/shop/training-travel"
  }
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Shop by Category</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Find exactly what your furry, feathery, or scaly friend needs with our easy-to-browse categories</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <div key={category.name} className="hover-lift">
              <button 
                onClick={() => navigate(category.path)}
                className="flex flex-col items-center p-6 rounded-2xl h-full border border-border bg-white/50 w-full transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className={`${category.color} p-4 rounded-full mb-4 transition-transform duration-300 transform hover:scale-110`}>
                  <category.icon size={28} />
                </div>
                <h3 className="font-semibold text-foreground text-lg text-center">{category.name}</h3>
                <p className="text-foreground/60 text-sm text-center mt-2">{category.description}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
