
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative w-10 h-10 mr-2 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-peach rounded-full shadow-sm"></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <span className="text-brown font-handwritten text-xl font-bold">P</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-brown">
                Pawfectly <span className="font-handwritten">Yours</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              Home
            </Link>
            <Link to="/shop" className="text-foreground/80 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              Shop
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              About
            </Link>
            <Link to="/blog" className="text-foreground/80 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              Blog
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background" onClick={() => navigate("/search")}>
              <Search size={20} />
            </Button>
            
            {user ? (
              <div className="relative group">
                <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background">
                  <User size={20} />
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border border-border z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-3 border-b border-border">
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-sm text-foreground/70 truncate">{user.email}</p>
                  </div>
                  <div className="p-2">
                    <button 
                      className="w-full text-left px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary rounded-md transition-colors"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background" onClick={() => navigate("/login")}>
                <User size={20} />
              </Button>
            )}
            
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background relative" onClick={() => navigate("/cart")}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background relative mr-2" onClick={() => navigate("/cart")}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with improved animation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/blog" className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-background" onClick={() => {
                navigate("/search");
                setIsMenuOpen(false);
              }}>
                <Search size={20} />
              </Button>
              
              {user ? (
                <div className="flex-grow">
                  <div className="p-3 mb-2 bg-muted rounded-lg">
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-sm text-foreground/70 truncate">{user.email}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-foreground/80 hover:text-primary"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  className="flex-grow justify-center text-foreground/80 hover:text-primary"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
