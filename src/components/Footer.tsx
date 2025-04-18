
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cream pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center mb-4 group">
              <div className="relative w-10 h-10 mr-2 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-peach rounded-full"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <span className="text-brown font-handwritten text-xl font-bold">P</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-brown">
                Pawfectly <span className="font-handwritten">Yours</span>
              </span>
            </Link>
            <p className="text-foreground/70 mb-6">
              We believe every pet deserves love, comfort, and care. That's what we're here for.
            </p>
            <div className="flex items-center space-y-2">
              <div className="flex items-center text-brown/80">
                <MapPin size={18} className="mr-2" />
                <span>123 Pet Street, Pawsville, CA 90210</span>
              </div>
            </div>
            <div className="flex items-center space-y-2">
              <div className="flex items-center text-brown/80">
                <Phone size={18} className="mr-2" />
                <span>(800) PAW-FECT</span>
              </div>
            </div>
            <div className="flex items-center space-y-2">
              <div className="flex items-center text-brown/80">
                <Mail size={18} className="mr-2" />
                <span>hello@pawfectlyyours.com</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-brown hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm hover-lift">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brown hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm hover-lift">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brown hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm hover-lift">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brown hover:text-primary transition-colors bg-white/80 p-2 rounded-full shadow-sm hover-lift">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-brown">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop/dogs" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Dog Products</Link></li>
              <li><Link to="/shop/cats" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Cat Products</Link></li>
              <li><Link to="/shop/small-pets" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Small Pet Items</Link></li>
              <li><Link to="/shop/new" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>New Arrivals</Link></li>
              <li><Link to="/shop/sale" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Sale Items</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-brown">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>About Us</Link></li>
              <li><Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Blog</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Careers</Link></li>
              <li><Link to="/press" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Press</Link></li>
              <li><Link to="/partners" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6 text-brown">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Contact Us</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>FAQ</Link></li>
              <li><Link to="/shipping" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Shipping & Returns</Link></li>
              <li><Link to="/track-order" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Track Order</Link></li>
              <li><Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brown/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Pawfectly Yours. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-foreground/60 text-sm hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-foreground/60 text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/sitemap" className="text-foreground/60 text-sm hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
