
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import RitualIntro from "@/components/home/RitualIntro";
import ServicesOverview from "@/components/home/ServicesOverview";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <RitualIntro />
        
        {/* Donation Section */}
        <section className="py-12 bg-zoroastrian-light/50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Heart className="w-8 h-8 text-zoroastrian-terracotta" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-4">
                Support Our Community
              </h3>
              <p className="text-gray-700 mb-6">
                Help us maintain and improve this resource for the global Zoroastrian community
              </p>
              <Button 
                className="bg-zoroastrian-terracotta hover:bg-zoroastrian-terracotta/90 text-white px-8 py-3 font-medium"
                onClick={() => window.open('https://paypal.me/shahrammehraban', '_blank')}
              >
                Make a Donation
              </Button>
              <p className="text-xs text-gray-600 mt-3 italic">
                Donations of any amount are welcome for upkeep and maintenance of the site
              </p>
            </div>
          </div>
        </section>
        
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
