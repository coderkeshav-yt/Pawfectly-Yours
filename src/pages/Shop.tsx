
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const Shop = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { addToCart } = useCart();
  
  // Sample products data - in a real app this would come from an API
  // Updated products data with 10 items per category
  const products = [
    // Food & Treats Category
    {
      id: 1,
      name: "Organic Chicken & Rice Kibble",
      description: "Premium grain-free formula for adult dogs of all breeds",
      price: 899,
      image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 2,
      name: "Premium Salmon Cat Food",
      description: "Wild-caught salmon recipe for healthy skin and coat",
      price: 799,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 3,
      name: "Natural Dog Biscuits",
      description: "Wholesome treats made with natural ingredients",
      price: 299,
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 4,
      name: "Fresh Dental Chews",
      description: "Mint-flavored chews for dental hygiene",
      price: 449,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 5,
      name: "Gourmet Cat Treats",
      description: "Premium seafood-flavored treats",
      price: 199,
      image: "https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 6,
      name: "Puppy Growth Formula",
      description: "Specially formulated for growing puppies",
      price: 999,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 7,
      name: "Senior Dog Diet",
      description: "Easy-to-digest formula for senior dogs",
      price: 849,
      image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 8,
      name: "Weight Management Kibble",
      description: "Low-calorie formula for weight control",
      price: 799,
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 9,
      name: "Freeze-Dried Treats",
      description: "100% pure meat treats for training",
      price: 399,
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },
    {
      id: 10,
      name: "Grain-Free Cat Kibble",
      description: "Premium grain-free formula for adult cats",
      price: 699,
      image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?q=80&w=500&auto=format&fit=crop",
      category: "Food & Treats"
    },

    // Toys & Play Category
    {
      id: 11,
      name: "Interactive Puzzle Toy",
      description: "Mental stimulation puzzle for pets",
      price: 499,
      image: "https://images.unsplash.com/photo-1535008652995-e95986556e32?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 12,
      name: "Plush Squeaky Toy",
      description: "Soft plush toy with built-in squeaker",
      price: 299,
      image: "https://images.unsplash.com/photo-1577347040928-4fb032c5cd5f?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 13,
      name: "Laser Pointer Cat Toy",
      description: "Interactive laser toy for cats",
      price: 199,
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 14,
      name: "Rope Tug Toy",
      description: "Durable rope toy for interactive play",
      price: 249,
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 15,
      name: "Catnip Mouse",
      description: "Stuffed mouse toy with catnip",
      price: 149,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 16,
      name: "Fetch Ball Set",
      description: "Set of 3 durable rubber balls",
      price: 349,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 17,
      name: "Climbing Tower",
      description: "Multi-level cat climbing tower",
      price: 1499,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 18,
      name: "Treat Dispenser Ball",
      description: "Interactive treat-dispensing toy",
      price: 399,
      image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 19,
      name: "Chew Bone",
      description: "Durable nylon chew toy",
      price: 279,
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },
    {
      id: 20,
      name: "Feather Wand",
      description: "Interactive feather toy for cats",
      price: 199,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=500&auto=format&fit=crop",
      category: "Toys & Play"
    },

    // Grooming & Care Category
    {
      id: 21,
      name: "Natural Oatmeal Shampoo",
      description: "Gentle formula for sensitive skin",
      price: 349,
      image: "https://images.unsplash.com/photo-1594635276217-02e8a88fdc51?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 22,
      name: "Professional Grooming Kit",
      description: "Complete set of grooming tools",
      price: 1299,
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 23,
      name: "Nail Clippers",
      description: "Safe and easy-to-use nail clippers",
      price: 249,
      image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 24,
      name: "Deshedding Tool",
      description: "Professional grade deshedding brush",
      price: 599,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 25,
      name: "Pet Wipes",
      description: "Gentle cleansing wipes for pets",
      price: 199,
      image: "https://images.unsplash.com/photo-1583511655826-05700442982d?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 26,
      name: "Dental Care Kit",
      description: "Complete oral hygiene set",
      price: 449,
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 27,
      name: "Ear Cleaner",
      description: "Gentle ear cleaning solution",
      price: 299,
      image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 28,
      name: "Tick & Flea Shampoo",
      description: "Natural anti-parasitic shampoo",
      price: 399,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 29,
      name: "Grooming Gloves",
      description: "Massage and grooming gloves",
      price: 299,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },
    {
      id: 30,
      name: "Pet Cologne",
      description: "Fresh and long-lasting fragrance",
      price: 249,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Grooming & Care"
    },

    // Beds & Comfort Category
    {
      id: 31,
      name: "Cozy Cloud Pet Bed",
      description: "Ultra-soft washable bed",
      price: 1299,
      image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 32,
      name: "Orthopedic Mattress",
      description: "Memory foam support bed",
      price: 1999,
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 33,
      name: "Heated Pet Bed",
      description: "Thermoregulated comfort bed",
      price: 1599,
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 34,
      name: "Window Perch",
      description: "Suction-mounted cat bed",
      price: 799,
      image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 35,
      name: "Cooling Mat",
      description: "Gel-infused cooling pad",
      price: 699,
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 36,
      name: "Cave Bed",
      description: "Cozy enclosed pet bed",
      price: 899,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 37,
      name: "Travel Bed",
      description: "Portable folding pet bed",
      price: 599,
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 38,
      name: "Elevated Cot",
      description: "Breathable mesh pet bed",
      price: 899,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 39,
      name: "Plush Donut Bed",
      description: "Round calming pet bed",
      price: 999,
      image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },
    {
      id: 40,
      name: "Premium Pet Sofa",
      description: "Luxurious pet furniture",
      price: 2499,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Beds & Comfort"
    },

    // Apparel & Accessories Category
    {
      id: 41,
      name: "Winter Jacket",
      description: "Warm waterproof coat",
      price: 799,
      image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 42,
      name: "Reflective Collar",
      description: "Safety collar with LED",
      price: 399,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 43,
      name: "Bow Tie Set",
      description: "Elegant pet bow ties",
      price: 249,
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 44,
      name: "Rain Boots",
      description: "Waterproof pet shoes",
      price: 599,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 45,
      name: "Summer Cooling Vest",
      description: "Breathable cooling wear",
      price: 699,
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 46,
      name: "Designer Bandana",
      description: "Stylish pet accessory",
      price: 199,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 47,
      name: "ID Tag Set",
      description: "Custom engraved tags",
      price: 299,
      image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 48,
      name: "Party Costume",
      description: "Festive pet outfit",
      price: 599,
      image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 49,
      name: "Leather Harness",
      description: "Premium leather gear",
      price: 899,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },
    {
      id: 50,
      name: "Sports Jersey",
      description: "Team-themed pet wear",
      price: 499,
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?q=80&w=500&auto=format&fit=crop",
      category: "Apparel & Accessories"
    },

    // Training & Travel Category
    {
      id: 51,
      name: "Training Clicker",
      description: "Professional training tool",
      price: 199,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 52,
      name: "Travel Carrier",
      description: "Airline-approved carrier",
      price: 1499,
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 53,
      name: "Training Leash",
      description: "Professional training lead",
      price: 399,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 54,
      name: "Portable Bowl Set",
      description: "Collapsible travel bowls",
      price: 299,
      image: "https://images.unsplash.com/photo-1602584386319-fa8eb4361c2c?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 55,
      name: "Training Pads",
      description: "Absorbent training pads",
      price: 499,
      image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 56,
      name: "Car Safety Harness",
      description: "Vehicle safety restraint",
      price: 799,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 57,
      name: "Training Treats Pouch",
      description: "Hands-free treat bag",
      price: 299,
      image: "https://images.unsplash.com/photo-1583511666445-775f1f2116f5?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 58,
      name: "Behavior Training Kit",
      description: "Complete training set",
      price: 999,
      image: "https://images.unsplash.com/photo-1583512603806-077998240c7a?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 59,
      name: "GPS Tracker",
      description: "Pet location tracker",
      price: 1999,
      image: "https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    },
    {
      id: 60,
      name: "Travel First Aid Kit",
      description: "Emergency care kit",
      price: 599,
      image: "https://images.unsplash.com/photo-1583512603784-a8e3ea8355b4?q=80&w=500&auto=format&fit=crop",
      category: "Training & Travel"
    }
  ];

  // Filter products based on category if applicable
  const filteredProducts = category 
    ? products.filter(p => p.category.toLowerCase().replace(/\s+/g, '-') === category)
    : products;

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description
    });
    toast.success(`Added ${product.name} to your cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-24 bg-cream/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-brown">
                {category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "All Products"}
              </h1>
              <p className="text-foreground/70 mt-2">
                {filteredProducts.length} products available
              </p>
            </div>
            
            <div className="flex mt-4 md:mt-0 space-x-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
              
              <div className="flex border rounded-md overflow-hidden">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid size={16} />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border border-border hover-lift ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  <div 
                    className={`${viewMode === 'list' ? 'md:w-1/3 cursor-pointer' : 'cursor-pointer'}`}
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`w-full ${viewMode === 'list' ? 'h-40 md:h-full object-cover' : 'h-48 object-cover'}`}
                    />
                  </div>
                  <div className={`p-4 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                    <h3 
                      className="font-bold text-lg mb-2 text-foreground cursor-pointer hover:text-primary transition-colors"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-brown">₹{product.price}</span>
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white rounded-full flex items-center gap-1.5"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingBag size={16} />
                        <span>Add to Cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-muted inline-flex p-6 rounded-full mb-4">
                <ShoppingBag size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-foreground/70 mb-6">We couldn't find any products matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
