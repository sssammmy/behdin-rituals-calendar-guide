
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
            <div className="flex-shrink-0 w-10 h-10">
              {/* Fravahar symbol */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-zoroastrian-blue">
                <path d="M50,0c-1.04,21.68-16.8,38.63-30.06,45.41c11.3,8.19,17.24,10.95,30.06,10.95 c12.82,0,18.76-2.76,30.06-10.95C66.8,38.63,51.04,21.68,50,0z M50,65c-5.52,0-10-4.48-10-10s4.48-10,10-10s10,4.48,10,10 S55.52,65,50,65z M50,85c-0,0-10.34,15-10.34,15h20.67C60.34,100,50,85,50,85z" />
                <path d="M50,15.26c0,0-35,15-35,45h70C85,30.26,50,15.26,50,15.26z M29.71,50.93 c-1.51-3.08-0.24-6.8,2.84-8.32c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32 C34.95,55.28,31.22,54.01,29.71,50.93z M50,60c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S52.76,60,50,60z M67.45,45.45 c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32c-3.08,1.51-6.8,0.24-8.32-2.84 C63.1,50.68,64.37,46.96,67.45,45.45z" />
              </svg>
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
            <Link to="/calendar" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Calendar
            </Link>
            <Link to="/services" className="text-zoroastrian-blue hover:text-zoroastrian-gold transition font-medium">
              Services
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
