
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Heart, MessageCircle, User } from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();
  
  // Sample blog posts data - in a real app this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for New Pet Parents",
      excerpt: "Bringing home a new pet? Here's everything you need to know to make the transition smooth for both of you.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
      date: "April 12, 2025",
      author: "Dr. Anika Patel",
      category: "Pet Care",
      comments: 24,
      likes: 156
    },
    {
      id: 2,
      title: "The Benefits of Natural Treats for Your Dog",
      excerpt: "Discover why switching to natural, preservative-free treats can improve your dog's health and happiness.",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
      date: "April 5, 2025",
      author: "Vikram Singh",
      category: "Nutrition",
      comments: 18,
      likes: 132
    },
    {
      id: 3,
      title: "Understanding Your Cat's Body Language",
      excerpt: "Learn to decode what your feline friend is trying to tell you through their subtle body language cues.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
      date: "March 28, 2025",
      author: "Priya Mehta",
      category: "Cat Behavior",
      comments: 36,
      likes: 210
    },
    {
      id: 4,
      title: "Essential Grooming Routines for Long-Haired Dogs",
      excerpt: "Keep your long-haired dog looking and feeling their best with these professional grooming tips.",
      image: "https://images.unsplash.com/photo-1577175889968-f551f5944abd?q=80&w=800&auto=format&fit=crop",
      date: "March 21, 2025",
      author: "Rahul Kapoor",
      category: "Grooming",
      comments: 14,
      likes: 98
    }
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  // Regular posts (rest of the posts)
  const regularPosts = blogPosts.slice(1);
  
  // Categories
  const categories = [
    "Pet Care", "Nutrition", "Training", "Health", "Grooming", 
    "Behavior", "Product Reviews", "Adoption Stories"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-24 bg-cream/20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brown mb-4">Pet Care Blog</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Expert advice, helpful tips, and heartwarming stories for pet lovers
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-border hover-lift mb-12">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <div className="mb-2">
                  <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-brown mb-4">{featuredPost.title}</h2>
                <p className="text-foreground/70 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center text-sm text-foreground/60 mb-6 mt-auto">
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <MessageCircle size={14} className="mr-1" />
                    <span>{featuredPost.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Heart size={14} className="mr-1" />
                    <span>{featuredPost.likes}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="mt-auto w-fit border-primary text-primary hover:bg-primary/10"
                  onClick={() => navigate(`/blog/post/${featuredPost.id}`)}
                >
                  Read More
                  <ChevronRight size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Regular Posts */}
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover-lift"
                onClick={() => navigate(`/blog/post/${post.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-foreground/60">
                    <div className="flex items-center mr-3">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={12} className="mr-1" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Categories & Subscribe */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-brown mb-6">Browse by Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map(category => (
                  <Button 
                    key={category} 
                    variant="outline" 
                    className="justify-start border-border hover:border-primary hover:bg-primary/5"
                    onClick={() => navigate(`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6">
              <h3 className="font-bold text-xl text-brown mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Get the latest pet care tips and product updates delivered straight to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
