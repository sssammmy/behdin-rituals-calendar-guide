
import React from "react";
import { Link } from "react-router-dom";

const RitualIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-zoroastrian-blue mb-8 text-center">
            Zoroastrian Funeral Rituals
          </h2>
          
          <div className="mb-12">
            <p className="text-gray-700 mb-4">
              When a Zoroastrian passes away, the community follows specific rituals and prayers that 
              have been practiced for thousands of years. These ceremonies help guide the soul of the 
              departed to the next world and provide comfort to the bereaved family.
            </p>
            <p className="text-gray-700 mb-4">
              In the diaspora, especially in places like the United States, these ancient traditions have 
              been adapted to modern circumstances while maintaining their spiritual significance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zoroastrian-light p-6 rounded-lg animate-fade-in">
              <h3 className="font-serif text-xl font-semibold text-zoroastrian-blue mb-4">Initial Prayers</h3>
              <p className="text-gray-700 text-sm mb-4">
                Prayers that should be recited immediately after passing, followed by the Sachkar ceremony 
                conducted by priests.
              </p>
              <Link 
                to="/rituals#initial-prayers" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>
            
            <div className="bg-zoroastrian-light p-6 rounded-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-serif text-xl font-semibold text-zoroastrian-blue mb-4">Memorial Services</h3>
              <p className="text-gray-700 text-sm mb-4">
                Prayer ceremonies conducted on specific days after passing, including the important 
                Chahrum, Doshmeh, and Siroza observances.
              </p>
              <Link 
                to="/rituals#memorial-services" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>
            
            <div className="bg-zoroastrian-light p-6 rounded-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-serif text-xl font-semibold text-zoroastrian-blue mb-4">Annual Remembrances</h3>
              <p className="text-gray-700 text-sm mb-4">
                Yearly ceremonies including Salroz (death anniversary) and the Muktad days to honor 
                and remember departed souls.
              </p>
              <Link 
                to="/rituals#annual-remembrances" 
                className="text-zoroastrian-blue hover:text-zoroastrian-gold transition text-sm font-medium"
              >
                Learn more →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/rituals" 
              className="inline-block bg-zoroastrian-blue text-white px-8 py-3 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
            >
              View All Rituals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualIntro;
