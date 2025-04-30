
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-zoroastrian-light py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto w-24 h-24 mb-6">
            {/* Fravahar symbol */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-zoroastrian-blue">
              <path d="M50,0c-1.04,21.68-16.8,38.63-30.06,45.41c11.3,8.19,17.24,10.95,30.06,10.95 c12.82,0,18.76-2.76,30.06-10.95C66.8,38.63,51.04,21.68,50,0z M50,65c-5.52,0-10-4.48-10-10s4.48-10,10-10s10,4.48,10,10 S55.52,65,50,65z M50,85c-0,0-10.34,15-10.34,15h20.67C60.34,100,50,85,50,85z" />
              <path d="M50,15.26c0,0-35,15-35,45h70C85,30.26,50,15.26,50,15.26z M29.71,50.93 c-1.51-3.08-0.24-6.8,2.84-8.32c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32 C34.95,55.28,31.22,54.01,29.71,50.93z M50,60c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S52.76,60,50,60z M67.45,45.45 c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32c-3.08,1.51-6.8,0.24-8.32-2.84 C63.1,50.68,64.37,46.96,67.45,45.45z" />
            </svg>
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
