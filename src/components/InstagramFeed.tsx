
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=400&auto=format&fit=crop",
    alt: "Dog playing with toy",
    likes: 243,
    url: "https://instagram.com/pawfectlyyours"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=400&auto=format&fit=crop",
    alt: "Cat sleeping on bed",
    likes: 319,
    url: "https://instagram.com/pawfectlyyours"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=400&auto=format&fit=crop",
    alt: "Puppy in a colorful collar",
    likes: 452,
    url: "https://instagram.com/pawfectlyyours"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=400&auto=format&fit=crop",
    alt: "Dog wearing bandana",
    likes: 217,
    url: "https://instagram.com/pawfectlyyours"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=400&auto=format&fit=crop",
    alt: "Cat with green eyes",
    likes: 386,
    url: "https://instagram.com/pawfectlyyours"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&auto=format&fit=crop",
    alt: "Dog with birthday hat",
    likes: 509,
    url: "https://instagram.com/pawfectlyyours"
  }
];

const InstagramFeed = () => {
  const openInstagram = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Follow Us @PawfectlyYours</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Join our community of pet lovers and share your Pawfectly Yours moments</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="relative aspect-square overflow-hidden rounded-xl group hover-lift cursor-pointer"
              onClick={() => openInstagram(post.url)}
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                <div className="flex items-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="white" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-full px-8 flex items-center gap-2 shadow-md"
            onClick={() => window.open("https://instagram.com/pawfectlyyours", "_blank")}
          >
            <Instagram size={18} />
            <span>Follow on Instagram</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
