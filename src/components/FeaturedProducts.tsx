
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Organic Chicken & Rice Kibble",
    description: "Premium grain-free formula for adult dogs of all breeds",
    price: 899,
    image: "https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?q=80&w=500&auto=format&fit=crop",
    tag: "Bestseller",
    category: "Food"
  },
  {
    id: 2,
    name: "Interactive Puzzle Toy",
    description: "Keep your pet mentally stimulated and entertained for hours",
    price: 499,
    image: "https://images.unsplash.com/photo-1535008652995-e95986556e32?q=80&w=500&auto=format&fit=crop",
    tag: "Customer Favorite",
    category: "Toys"
  },
  {
    id: 3,
    name: "Cozy Cloud Pet Bed",
    description: "Ultra-soft, washable bed that provides joint support and comfort",
    price: 1299,
    image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?q=80&w=500&auto=format&fit=crop",
    tag: "New Arrival",
    category: "Beds"
  },
  {
    id: 4,
    name: "Natural Oatmeal Shampoo",
    description: "Gentle, soothing formula for pets with sensitive skin",
    price: 349,
    image: "https://images.unsplash.com/photo-1594635276217-02e8a88fdc51?q=80&w=500&auto=format&fit=crop",
    tag: "Eco-Friendly",
    category: "Grooming"
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addToCart } = useCart();

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

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
      toast.info("Removed from favorites");
    } else {
      setFavorites([...favorites, productId]);
      toast.success("Added to favorites!");
    }
  };

  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Top Picks from Happy Pets</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Our most-loved products that pets (and their humans) can't get enough of</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-border hover-lift group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => navigate(`/product/${product.id}`)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-white font-medium">{product.tag}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-0 text-foreground font-medium">
                    {product.category}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-14 right-4 bg-white/80 backdrop-blur-sm text-foreground hover:bg-white hover:text-primary"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart 
                    size={18} 
                    className={favorites.includes(product.id) ? "fill-primary text-primary" : ""}
                  />
                </Button>
              </div>
              <div className="p-5">
                <h3 
                  className="font-bold text-lg mb-2 text-foreground hover:text-primary transition-colors cursor-pointer"
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
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 font-medium rounded-full px-8 shadow-sm"
            onClick={() => navigate("/shop")}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
