
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-zoroastrian-light py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto w-48 h-48 mb-6">
            {/* Fravahar symbol - now 100% larger (from w-24 h-24 to w-48 h-48) */}
            <img 
              src="/lovable-uploads/3c453bc0-7fe0-4da1-98bc-8b8b4f961120.png" 
              alt="Fravahar" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-zoroastrian-blue mb-6">
            Honoring Zoroastrian Traditions
          </h1>
          
          <p className="text-zoroastrian-terracotta italic text-xl mb-8">
            Good Thoughts, Good Words, Good Deeds
          </p>
          
          <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
            Providing guidance and support for the global Iranian Zoroastrian community 
            during the difficult times of mourning and remembrance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/calendar" 
              className="bg-zoroastrian-blue text-white px-8 py-3 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
            >
              Prayer Calendar
            </Link>
            <Link 
              to="/rituals" 
              className="bg-zoroastrian-gold text-zoroastrian-blue px-8 py-3 rounded-md hover:bg-zoroastrian-gold/90 transition font-medium"
            >
              Explore Rituals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
