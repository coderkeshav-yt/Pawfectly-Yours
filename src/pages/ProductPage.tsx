
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Truck, ArrowLeft, Star } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

// This would normally come from an API
const allProducts = [
  {
    id: 1,
    name: "Organic Chicken & Rice Kibble",
    description: "Premium grain-free formula for adult dogs of all breeds. Made with real chicken and brown rice for a balanced and nutritious meal that supports overall health. Rich in omega fatty acids for a shiny coat and healthy skin.",
    price: 899,
    image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?q=80&w=500&auto=format&fit=crop",
    category: "Food & Treats",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    features: [
      "100% Organic Ingredients",
      "Grain-Free Formula",
      "Rich in Omega Fatty Acids",
      "No Artificial Preservatives"
    ]
  },
  {
    id: 2,
    name: "Interactive Puzzle Toy",
    description: "Keep your pet mentally stimulated and entertained for hours with this challenging interactive puzzle toy. Designed to engage your pet's problem-solving skills while providing a fun way to earn treats. Suitable for dogs and cats of all sizes.",
    price: 499,
    image: "https://images.unsplash.com/photo-1535008652995-e95986556e32?q=80&w=500&auto=format&fit=crop",
    category: "Toys & Play",
    rating: 4.6,
    reviews: 89,
    stock: 23,
    features: [
      "Durable Construction",
      "Multiple Difficulty Levels",
      "Dishwasher Safe",
      "Suitable for All Breeds"
    ]
  },
  {
    id: 3,
    name: "Cozy Cloud Pet Bed",
    description: "Ultra-soft, washable bed that provides joint support and comfort for your pet. The plush material mimics the comfort of sleeping on a cloud, while the ergonomic design relieves pressure on joints. Available in multiple sizes to fit all breeds.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=500&auto=format&fit=crop",
    category: "Beds & Comfort",
    rating: 4.9,
    reviews: 156,
    stock: 8,
    features: [
      "Memory Foam Base",
      "Removable, Washable Cover",
      "Non-Slip Bottom",
      "Orthopedic Support"
    ]
  },
  {
    id: 4,
    name: "Natural Oatmeal Shampoo",
    description: "Gentle, soothing formula for pets with sensitive skin. Made with natural oatmeal and aloe vera to moisturize and calm irritated skin. Cleans effectively while maintaining your pet's natural skin oils. Pleasant vanilla and almond scent.",
    price: 349,
    image: "https://images.unsplash.com/photo-1594635276217-02e8a88fdc51?q=80&w=500&auto=format&fit=crop",
    category: "Grooming & Care",
    rating: 4.7,
    reviews: 112,
    stock: 30,
    features: [
      "pH Balanced for Pets",
      "Soap and Paraben Free",
      "Made with Organic Ingredients",
      "Cruelty-Free"
    ]
  },
  {
    id: 5,
    name: "Premium Cat Food",
    description: "Balanced nutrition for adult cats with real fish as the primary ingredient. Enhanced with taurine for heart and eye health, and omega-3 fatty acids for a healthy coat. Grain-free formula helps reduce hairballs and digestive issues.",
    price: 699,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=500&auto=format&fit=crop",
    category: "Food & Treats",
    rating: 4.5,
    reviews: 78,
    stock: 20,
    features: [
      "Real Fish as First Ingredient",
      "Enhanced with Taurine",
      "Grain-Free Formula",
      "Supports Hairball Control"
    ]
  },
  {
    id: 6,
    name: "Adjustable Pet Collar",
    description: "Comfortable and stylish collar with reflective strips for visibility in low light. Made from durable, weather-resistant materials with a secure, quick-release buckle. Adjustable to fit a range of sizes with a comfortable padded interior.",
    price: 249,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500&auto=format&fit=crop",
    category: "Apparel & Accessories",
    rating: 4.4,
    reviews: 65,
    stock: 25,
    features: [
      "Reflective for Night Safety",
      "Weather-Resistant Material",
      "Quick-Release Buckle",
      "Adjustable Fit"
    ]
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProduct = allProducts.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/shop");
      toast.error("Product not found");
    }
  }, [id, navigate]);

  if (!product) {
    return null;
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description
    });
    
    toast.success(`Added ${product.name} to your cart!`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      toast.success("Added to favorites!");
    } else {
      toast.info("Removed from favorites");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-cream/20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 text-foreground/70 hover:text-primary"
            onClick={() => navigate("/shop")}
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Shop
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-border aspect-square">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-foreground hover:bg-white hover:text-primary"
                onClick={toggleFavorite}
              >
                <Heart 
                  size={20} 
                  className={isFavorite ? "fill-primary text-primary" : ""}
                />
              </Button>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-foreground/70 bg-muted px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-brown mb-4">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-amber-500 mr-2">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={16} 
                        className={index < Math.floor(product.rating) ? "fill-amber-500" : ""}
                      />
                    ))}
                  </div>
                  <span className="text-foreground/70">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold text-brown mb-6">₹{product.price}</p>
                <p className="text-foreground/70 mb-6">{product.description}</p>
              </div>
              
              <div className="border-t border-border py-6 mb-6">
                <div className="flex items-center mb-6">
                  <span className="text-foreground/70 mr-4">Quantity:</span>
                  <div className="flex items-center border border-border rounded-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-foreground/70 hover:text-primary"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-foreground/70 hover:text-primary"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      +
                    </Button>
                  </div>
                  <span className="text-foreground/70 ml-4">
                    {product.stock} available
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 flex-grow md:flex-grow-0"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 flex-grow md:flex-grow-0"
                    onClick={() => {
                      handleAddToCart();
                      navigate("/cart");
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg flex items-center mb-6">
                <Truck size={18} className="text-primary mr-3" />
                <span className="text-sm text-foreground/70">
                  Free shipping on orders above ₹999
                </span>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
