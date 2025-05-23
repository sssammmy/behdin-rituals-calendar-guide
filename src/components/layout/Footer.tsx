
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zoroastrian-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-shrink-0 w-10 h-10">
                {/* Fravahar symbol */}
                <img 
                  src="/lovable-uploads/3c453bc0-7fe0-4da1-98bc-8b8b4f961120.png" 
                  alt="Fravahar" 
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-semibold">Behdin Rituals</span>
                <p className="text-xs text-zoroastrian-cream italic">Good Thoughts, Good Words, Good Deeds</p>
              </div>
            </div>
            <p className="text-sm text-zoroastrian-cream opacity-90">
              Providing guidance and support to the global Iranian Zoroastrian community during difficult times.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rituals" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  Rituals
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zoroastrian-cream hover:text-zoroastrian-gold transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-zoroastrian-cream mb-2">
              Please send any feedback or corrections to:
            </p>
            <a href="mailto:sssammmy@gmail.com" className="text-sm text-zoroastrian-cream hover:text-zoroastrian-gold transition block mb-1">
              sssammmy@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-zoroastrian-cream/30 mt-8 pt-6 text-center text-sm text-zoroastrian-cream">
          <p>© {new Date().getFullYear()} Behdin Rituals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
