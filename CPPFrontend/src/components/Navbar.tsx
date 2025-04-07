import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  // Placeholder for authentication state
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAboutClick = () => {
    if (isHomePage) {
      // If on home page, scroll to About section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to the About Us page
      navigate('/about-us');
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle login/logout
  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      navigate('/login');
    }
    setIsMobileMenuOpen(false);
  };
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-agri-green-dark">
            AgriPredict
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/predict"
            className="text-gray-700 hover:text-agri-green-dark font-medium transition-colors"
          >
            Predict Price
          </Link>
          <Link
            to="/crop-advisory"
            className="text-gray-700 hover:text-agri-brown-dark font-medium transition-colors"
          >
            Crop Advisory
          </Link>
          <Link
            to="/weather"
            className="text-gray-700 hover:text-agri-blue-dark font-medium transition-colors"
          >
            Weather
          </Link>
          <button
            onClick={handleAboutClick}
            className="text-gray-700 hover:text-agri-green-dark font-medium transition-colors"
          >
            About Us
          </button>

          {/* Auth Button or User Menu */}
          { isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-agri-green-light/10">
                  <User className="h-5 w-5 text-agri-green-dark" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleAuth}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={handleAuth}
              variant="outline"
              className="border-agri-green hover:bg-agri-green-light/10"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login/Signup
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link
              to="/predict"
              className="text-gray-700 hover:text-agri-green-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Predict Price
            </Link>
            <Link
              to="/crop-advisory"
              className="text-gray-700 hover:text-agri-brown-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Crop Advisory
            </Link>
            <Link
              to="/weather"
              className="text-gray-700 hover:text-agri-blue-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Weather
            </Link>
            <button
              onClick={handleAboutClick}
              className="text-left text-gray-700 hover:text-agri-green-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
            >
              About Us
            </button>

            {/* Auth Button */}
            { isAuthenticated ? (
              <div className="border-t pt-4 mt-2">
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-agri-green-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="text-gray-700 hover:text-agri-green-dark font-medium px-4 py-2 hover:bg-gray-50 rounded-md block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={handleAuth}
                  className="text-left text-red-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-md w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Button
                onClick={handleAuth}
                variant="outline"
                className="mx-4 border-agri-green"
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login/Signup
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
