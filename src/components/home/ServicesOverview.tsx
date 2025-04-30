
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Church, Book, Flower, Users } from "lucide-react";

const ServicesOverview = () => {
  const cities = [
    "Los Angeles",
    "Orange County",
    "San Diego",
    "San Jose",
    "Seattle",
    "Vancouver",
    "Toronto",
    "Houston",
    "Phoenix",
    "Washington DC"
  ];

  const serviceTypes = [
    { name: "Mabed (Zoroastrian Temples)", icon: <Church className="w-6 h-6 text-zoroastrian-blue" /> },
    { name: "Cemeteries", icon: <MapPin className="w-6 h-6 text-zoroastrian-blue" /> },
    { name: "Funeral Homes", icon: <Users className="w-6 h-6 text-zoroastrian-blue" /> },
    { name: "Mobeds (Priests)", icon: <Book className="w-6 h-6 text-zoroastrian-blue" /> },
    { name: "Flower Shops", icon: <Flower className="w-6 h-6 text-zoroastrian-blue" /> }
  ];

  return (
    <section className="py-16 bg-zoroastrian-cream/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-zoroastrian-blue mb-4">
            Services By Location
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find Zoroastrian funeral services and support in cities across North America. 
            We've compiled resources to help you locate temples, priests, cemeteries, and other essential services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">Available Cities</h3>
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <Link 
                  key={city}
                  to={`/services/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center text-gray-700 hover:text-zoroastrian-gold transition"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{city}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">Service Categories</h3>
            <div className="space-y-4">
              {serviceTypes.map((service) => (
                <div key={service.name} className="flex items-center">
                  <div className="mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{service.name}</h4>
                    <p className="text-sm text-gray-600">Available in select locations</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-block bg-zoroastrian-gold text-zoroastrian-blue px-8 py-3 rounded-md hover:bg-zoroastrian-gold/90 transition font-medium"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
