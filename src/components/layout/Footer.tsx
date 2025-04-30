
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
                <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                  <path d="M50,0c-1.04,21.68-16.8,38.63-30.06,45.41c11.3,8.19,17.24,10.95,30.06,10.95 c12.82,0,18.76-2.76,30.06-10.95C66.8,38.63,51.04,21.68,50,0z M50,65c-5.52,0-10-4.48-10-10s4.48-10,10-10s10,4.48,10,10 S55.52,65,50,65z M50,85c-0,0-10.34,15-10.34,15h20.67C60.34,100,50,85,50,85z" />
                  <path d="M50,15.26c0,0-35,15-35,45h70C85,30.26,50,15.26,50,15.26z M29.71,50.93 c-1.51-3.08-0.24-6.8,2.84-8.32c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32 C34.95,55.28,31.22,54.01,29.71,50.93z M50,60c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S52.76,60,50,60z M67.45,45.45 c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32c-3.08,1.51-6.8,0.24-8.32-2.84 C63.1,50.68,64.37,46.96,67.45,45.45z" />
                </svg>
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
              Please reach out if you need guidance or support.
            </p>
            <a href="mailto:info@behdinrituals.org" className="text-sm text-zoroastrian-cream hover:text-zoroastrian-gold transition block mb-1">
              info@behdinrituals.org
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
