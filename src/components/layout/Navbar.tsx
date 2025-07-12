
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex-shrink-0 w-12 h-10">
              {/* Fravahar symbol */}
              <img 
                src="/lovable-uploads/3c453bc0-7fe0-4da1-98bc-8b8b4f961120.png" 
                alt="Fravahar" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-2xl font-semibold text-zoroastrian-blue">Behdin Rituals</span>
              <p className="text-xs text-zoroastrian-terracotta italic">Good Thoughts, Good Words, Good Deeds</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-zoroastrian-blue hover:text-zoroastrian-gold"
            onClick={toggleMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Home
            </Link>
            <Link to="/rituals" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Rituals
            </Link>
            <Link to="/how-to" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              How To
            </Link>
            <Link to="/calendar" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Calendar
            </Link>
            <Link to="/services" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Services
            </Link>
            <Link to="/avesta-streams" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Avesta Streams
            </Link>
            <Link to="/about" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              About
            </Link>
            <Link to="/contact" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-3">
              <Link 
                to="/" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/rituals" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Rituals
              </Link>
              <Link 
                to="/how-to" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How To
              </Link>
              <Link 
                to="/calendar" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Calendar
              </Link>
              <Link 
                to="/services" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/avesta-streams" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Avesta Streams
              </Link>
              <Link 
                to="/about" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
