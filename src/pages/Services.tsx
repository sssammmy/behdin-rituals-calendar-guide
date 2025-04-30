
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const cities = [
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Orange County", slug: "orange-county" },
    { name: "San Diego", slug: "san-diego" },
    { name: "San Jose", slug: "san-jose" },
    { name: "Seattle", slug: "seattle" },
    { name: "Vancouver", slug: "vancouver" },
    { name: "Toronto", slug: "toronto" },
    { name: "Houston", slug: "houston" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Washington DC", slug: "washington-dc" }
  ];

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                Zoroastrian Services Directory
              </h1>
              <p className="text-gray-700 text-lg">
                Find temples, priests, funeral homes, and other services in your area to assist with traditional ceremonies.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6 text-center">
                  Find Services by City
                </h2>
                <div className="max-w-md mx-auto">
                  <Input 
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredCities.map((city) => (
                  <Link 
                    key={city.slug} 
                    to={`/services/${city.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition flex items-center"
                  >
                    <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-zoroastrian-blue" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">{city.name}</span>
                  </Link>
                ))}
              </div>
              
              {filteredCities.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No cities match your search. Try a different term or browse all cities.</p>
                </div>
              )}
              
              <div className="mt-16">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6 text-center">
                  Service Types
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zoroastrian-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                          <path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></path>
                          <path d="M2 9h20"></path>
                          <path d="M2 15h20"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Mabed (Zoroastrian Temples)</h3>
                        <p className="text-gray-600 text-sm">Find local Zoroastrian temples where ceremonies can be performed.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <MapPin className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Cemeteries</h3>
                        <p className="text-gray-600 text-sm">Cemeteries with Zoroastrian sections or that accommodate Zoroastrian practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zoroastrian-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Funeral Homes</h3>
                        <p className="text-gray-600 text-sm">Funeral services familiar with Zoroastrian traditions and practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zoroastrian-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Mobeds (Priests)</h3>
                        <p className="text-gray-600 text-sm">Contact information for Zoroastrian priests who can perform ceremonies.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zoroastrian-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a9 9 0 0 0-9 9c0 3.6 3.96 7.814 9 11 5.04-3.186 9-7.4 9-11a9 9 0 0 0-9-9"></path>
                          <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Flower Shops</h3>
                        <p className="text-gray-600 text-sm">Local florists familiar with requirements for Zoroastrian ceremonies.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-zoroastrian-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">Other Services</h3>
                        <p className="text-gray-600 text-sm">Additional resources including ritual supplies and support services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h2 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-4">
                  Don't See What You're Looking For?
                </h2>
                <p className="text-gray-700 mb-6">
                  Our directory is continually growing. If you know of services or resources that should be included, 
                  please let us know.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-zoroastrian-blue text-white px-8 py-3 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
                >
                  Submit a Resource
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
