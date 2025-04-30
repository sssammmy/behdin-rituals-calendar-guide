
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  MapPin, 
  Church, 
  Book, 
  Flower, 
  Users, 
  Star 
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Sample data - in a real app, this would come from a database
const citiesData: Record<string, {
  name: string;
  temples: Array<{name: string; address: string; phone?: string; contact?: string; website?: string}>;
  cemeteries: Array<{name: string; address: string; phone?: string; details?: string}>;
  funeralHomes: Array<{name: string; address: string; phone?: string; website?: string}>;
  priests: Array<{name: string; phone?: string; email?: string; languages?: string[]}>;
  flowerShops: Array<{name: string; address: string; phone?: string; website?: string}>;
  otherServices: Array<{name: string; type: string; details: string; contact?: string}>;
}> = {
  "los-angeles": {
    name: "Los Angeles",
    temples: [
      {
        name: "California Zoroastrian Center",
        address: "8952 Hazard Ave, Westminster, CA 92683",
        phone: "(714) 893-4737",
        website: "czc.org",
        contact: "info@czc.org"
      },
      {
        name: "Zoroastrian Association of California",
        address: "1424 E Walnut Ave, Orange, CA 92867",
        phone: "(714) 998-8012",
        website: "zacla.org",
        contact: "info@zacla.org"
      }
    ],
    cemeteries: [
      {
        name: "Rose Hills Memorial Park",
        address: "3888 Workman Mill Rd, Whittier, CA 90601",
        phone: "(562) 699-0921",
        details: "Has a dedicated Zoroastrian section"
      },
      {
        name: "Forest Lawn Memorial Park",
        address: "1712 S Glendale Ave, Glendale, CA 91205",
        phone: "(888) 204-3131",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "Forest Lawn Funeral Homes",
        address: "1712 S Glendale Ave, Glendale, CA 91205",
        phone: "(888) 204-3131",
        website: "forestlawn.com"
      },
      {
        name: "Rose Hills Mortuary",
        address: "3888 Workman Mill Rd, Whittier, CA 90601",
        phone: "(562) 699-0921",
        website: "rosehills.com"
      }
    ],
    priests: [
      {
        name: "Mobed Bahram Shahzadi",
        phone: "(714) 893-4737",
        email: "bshahzadi@czc.org",
        languages: ["English", "Persian"]
      },
      {
        name: "Mobed Zarrir Bhandara",
        phone: "(714) 998-8012",
        languages: ["English", "Persian", "Gujarati"]
      }
    ],
    flowerShops: [
      {
        name: "Jacob Maarse Florists",
        address: "655 E Green St, Pasadena, CA 91101",
        phone: "(626) 449-0246",
        website: "jacobmaarse.com"
      },
      {
        name: "Rose Hills Flower Shop",
        address: "3888 Workman Mill Rd, Whittier, CA 90601",
        phone: "(562) 699-0921",
        website: "rosehills.com/flowers"
      }
    ],
    otherServices: [
      {
        name: "Traditional Cloth Supplier",
        type: "Ritual Supplies",
        details: "Supplies traditional sudra, kusti, and other ceremonial items",
        contact: "John Doe, (323) 555-6789"
      },
      {
        name: "Zoroastrian Youth Group of Los Angeles",
        type: "Community Support",
        details: "Provides volunteer support for funeral and memorial services",
        contact: "youth@zacla.org"
      }
    ]
  },
  "san-jose": {
    name: "San Jose",
    temples: [
      {
        name: "Zoroastrian Association of Northern California",
        address: "1400 Parkside Dr, Sunnyvale, CA 94087",
        phone: "(408) 446-0786",
        website: "zanc.org",
        contact: "info@zanc.org"
      }
    ],
    cemeteries: [
      {
        name: "Oak Hill Memorial Park",
        address: "300 Curtner Ave, San Jose, CA 95125",
        phone: "(408) 297-2447",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "Darling & Fischer Funeral Homes",
        address: "471 E Santa Clara St, San Jose, CA 95112",
        phone: "(408) 998-2226",
        website: "darlingfischer.com"
      }
    ],
    priests: [
      {
        name: "Mobed Rustom Kanga",
        phone: "(408) 446-0786",
        languages: ["English", "Persian", "Gujarati"]
      }
    ],
    flowerShops: [
      {
        name: "Citti's Florist",
        address: "2109 S Bascom Ave, Campbell, CA 95008",
        phone: "(408) 371-9300",
        website: "cittisflorist.com"
      }
    ],
    otherServices: []
  },
  "orange-county": {
    name: "Orange County",
    temples: [
      {
        name: "California Zoroastrian Center",
        address: "8952 Hazard Ave, Westminster, CA 92683",
        phone: "(714) 893-4737",
        website: "czc.org",
        contact: "info@czc.org"
      }
    ],
    cemeteries: [
      {
        name: "Pacific View Memorial Park",
        address: "3500 Pacific View Drive, Corona Del Mar, CA 92625",
        phone: "(949) 644-2700",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "Pacific View Mortuary",
        address: "3500 Pacific View Dr, Corona Del Mar, CA 92625",
        phone: "(949) 644-2700",
        website: "pacificviewmortuary.com"
      }
    ],
    priests: [
      {
        name: "Mobed Zarrir Bhandara",
        phone: "(714) 998-8012",
        languages: ["English", "Persian", "Gujarati"]
      }
    ],
    flowerShops: [
      {
        name: "Flowerfusion",
        address: "18430 Brookhurst St, Fountain Valley, CA 92708",
        phone: "(714) 962-8997",
        website: "flowerfusionoc.com"
      }
    ],
    otherServices: []
  },
  "san-diego": {
    name: "San Diego",
    temples: [
      {
        name: "Zoroastrian Community of San Diego",
        address: "8787 Complex Dr, San Diego, CA 92123",
        phone: "(858) 565-0901",
        website: "zcsd.org",
        contact: "info@zcsd.org"
      }
    ],
    cemeteries: [
      {
        name: "Greenwood Memorial Park",
        address: "4300 Imperial Ave, San Diego, CA 92113",
        phone: "(619) 264-3131",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "El Camino Memorial",
        address: "5600 Carroll Canyon Rd, San Diego, CA 92121",
        phone: "(858) 458-6564",
        website: "dignitymemorial.com"
      }
    ],
    priests: [
      {
        name: "Mobed Rustom Kevala",
        phone: "(619) 555-4321",
        languages: ["English", "Persian", "Gujarati"]
      }
    ],
    flowerShops: [
      {
        name: "Allen's Flowers & Plants",
        address: "7770 Regents Rd, San Diego, CA 92122",
        phone: "(858) 454-7374",
        website: "allensflowers.com"
      }
    ],
    otherServices: []
  },
  "vancouver": {
    name: "Vancouver",
    temples: [
      {
        name: "Zoroastrian Society of British Columbia",
        address: "6900 Halifax St, Burnaby, BC V5B 2R5, Canada",
        phone: "(604) 420-3500",
        website: "zsbc.org",
        contact: "info@zsbc.org"
      }
    ],
    cemeteries: [
      {
        name: "Valley View Memorial Gardens",
        address: "14644 72 Ave, Surrey, BC V3S 2E7, Canada",
        phone: "(604) 596-8866",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "Hamilton Harron Funeral Home",
        address: "5390 Fraser St, Vancouver, BC V5W 2Z3, Canada",
        phone: "(604) 325-7441",
        website: "hamiltonharron.com"
      }
    ],
    priests: [
      {
        name: "Mobed Ervad Yazdi",
        phone: "(604) 420-3500",
        languages: ["English", "Persian"]
      }
    ],
    flowerShops: [
      {
        name: "GardenWorks",
        address: "6250 Lougheed Hwy, Burnaby, BC V5B 2Z9, Canada",
        phone: "(604) 299-0621",
        website: "gardenworks.ca"
      }
    ],
    otherServices: []
  },
  "washington-dc": {
    name: "Washington DC",
    temples: [
      {
        name: "Zoroastrian Association of Metropolitan Washington",
        address: "20675 Fernbank Ct, Sterling, VA 20165",
        phone: "(703) 444-9134",
        website: "zamwi.org",
        contact: "info@zamwi.org"
      }
    ],
    cemeteries: [
      {
        name: "Rock Creek Cemetery",
        address: "201 Allison St NW, Washington, DC 20011",
        phone: "(202) 726-2080",
        details: "Accommodates Zoroastrian funeral practices"
      }
    ],
    funeralHomes: [
      {
        name: "Joseph Gawler's Sons Funeral Directors",
        address: "5130 Wisconsin Ave NW, Washington, DC 20016",
        phone: "(202) 966-6400",
        website: "dignitymemorial.com"
      }
    ],
    priests: [
      {
        name: "Mobed Mehraban Firouzgary",
        phone: "(703) 444-9134",
        languages: ["English", "Persian"]
      }
    ],
    flowerShops: [
      {
        name: "Lee's Flower Shop",
        address: "1026 U St NW, Washington, DC 20001",
        phone: "(202) 265-4070",
        website: "leesflowerandcard.com"
      }
    ],
    otherServices: []
  }
};

// Default data for cities not yet in the database
const defaultCityData = {
  name: "",
  temples: [],
  cemeteries: [],
  funeralHomes: [],
  priests: [],
  flowerShops: [],
  otherServices: []
};

const CityServices = () => {
  const { city } = useParams<{ city: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Use city data if available, otherwise use default empty data
  const cityData = city && citiesData[city] ? citiesData[city] : {...defaultCityData, name: city ? city.replace(/-/g, ' ') : ""};

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Function to filter services based on search term
  const filterServices = <T extends { name: string }>(services: T[]): T[] => {
    if (!searchTerm) return services;
    return services.filter(service => 
      service.name.toLowerCase().includes(searchTerm)
    );
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "temples": return <Church className="w-5 h-5" />;
      case "cemeteries": return <MapPin className="w-5 h-5" />;
      case "funeralHomes": return <Users className="w-5 h-5" />;
      case "priests": return <Book className="w-5 h-5" />;
      case "flowerShops": return <Flower className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-zoroastrian-blue mb-4">
            {cityData.name ? `Zoroastrian Services in ${cityData.name}` : "City Services"}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Find temples, priests, and funeral services in your area to assist with traditional Zoroastrian ceremonies.
          </p>
        </div>

        <div className="mb-6">
          <Input 
            placeholder="Search for services..." 
            value={searchTerm} 
            onChange={handleSearch} 
            className="max-w-md mx-auto"
          />
        </div>

        <Tabs defaultValue="temples" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="temples" className="flex flex-col items-center gap-1 py-3">
              <Church className="w-5 h-5" />
              <span className="text-xs">Temples</span>
            </TabsTrigger>
            <TabsTrigger value="cemeteries" className="flex flex-col items-center gap-1 py-3">
              <MapPin className="w-5 h-5" />
              <span className="text-xs">Cemeteries</span>
            </TabsTrigger>
            <TabsTrigger value="funeralHomes" className="flex flex-col items-center gap-1 py-3">
              <Users className="w-5 h-5" />
              <span className="text-xs">Funeral Homes</span>
            </TabsTrigger>
            <TabsTrigger value="priests" className="flex flex-col items-center gap-1 py-3">
              <Book className="w-5 h-5" />
              <span className="text-xs">Priests</span>
            </TabsTrigger>
            <TabsTrigger value="flowerShops" className="flex flex-col items-center gap-1 py-3">
              <Flower className="w-5 h-5" />
              <span className="text-xs">Flower Shops</span>
            </TabsTrigger>
            <TabsTrigger value="otherServices" className="flex flex-col items-center gap-1 py-3">
              <Star className="w-5 h-5" />
              <span className="text-xs">Other</span>
            </TabsTrigger>
          </TabsList>

          {/* Temples Tab */}
          <TabsContent value="temples">
            <ServiceList 
              title="Zoroastrian Temples (Mabed)" 
              services={filterServices(cityData.temples)}
              emptyMessage="No temples listed for this area yet."
              icon={<Church className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>

          {/* Cemeteries Tab */}
          <TabsContent value="cemeteries">
            <ServiceList 
              title="Cemeteries" 
              services={filterServices(cityData.cemeteries)}
              emptyMessage="No cemeteries listed for this area yet."
              icon={<MapPin className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>

          {/* Funeral Homes Tab */}
          <TabsContent value="funeralHomes">
            <ServiceList 
              title="Funeral Homes" 
              services={filterServices(cityData.funeralHomes)}
              emptyMessage="No funeral homes listed for this area yet."
              icon={<Users className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>

          {/* Priests Tab */}
          <TabsContent value="priests">
            <ServiceList 
              title="Zoroastrian Priests (Mobeds)" 
              services={filterServices(cityData.priests)}
              emptyMessage="No priests listed for this area yet."
              icon={<Book className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>

          {/* Flower Shops Tab */}
          <TabsContent value="flowerShops">
            <ServiceList 
              title="Flower Shops" 
              services={filterServices(cityData.flowerShops)}
              emptyMessage="No flower shops listed for this area yet."
              icon={<Flower className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>

          {/* Other Services Tab */}
          <TabsContent value="otherServices">
            <ServiceList 
              title="Other Services" 
              services={filterServices(cityData.otherServices)}
              emptyMessage="No additional services listed for this area yet."
              icon={<Star className="w-6 h-6 text-zoroastrian-blue" />}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Don't see what you're looking for? Please contact us to suggest additional services.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-zoroastrian-blue text-white px-6 py-2 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
          >
            Submit a Resource
          </a>
        </div>
      </div>
    </div>
  );
};

// Generic component to display lists of services
interface ServiceListProps<T> {
  title: string;
  services: T[];
  emptyMessage: string;
  icon: React.ReactNode;
}

function ServiceList<T extends { name: string; address?: string; phone?: string; website?: string; email?: string; details?: string; contact?: string; type?: string; languages?: string[] }>({ 
  title, 
  services, 
  emptyMessage,
  icon
}: ServiceListProps<T>) {
  if (services.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">{icon}</div>
          <p>{emptyMessage}</p>
          <p className="text-sm text-gray-500 mt-2">
            Contact us if you know of resources to add to this listing.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <div className="grid gap-4">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <CardHeader className="bg-zoroastrian-light py-3 px-6">
              <CardTitle className="text-lg font-medium flex items-center">
                {icon}
                <span className="ml-2">{service.name}</span>
                {service.type && <span className="ml-2 text-sm text-gray-500">({service.type})</span>}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                {service.address && (
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-500" />
                    <span>{service.address}</span>
                  </div>
                )}
                
                {service.phone && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{service.phone}</span>
                  </div>
                )}
                
                {service.email && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{service.email}</span>
                  </div>
                )}
                
                {service.website && (
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href={service.website.startsWith('http') ? service.website : `https://${service.website}`} target="_blank" rel="noopener noreferrer" className="text-zoroastrian-blue hover:underline">
                      {service.website}
                    </a>
                  </div>
                )}
                
                {service.details && (
                  <div className="mt-2 text-gray-700">
                    <p>{service.details}</p>
                  </div>
                )}

                {service.contact && (
                  <div className="mt-2 text-gray-700">
                    <p>Contact: {service.contact}</p>
                  </div>
                )}

                {service.languages && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      Languages: {service.languages.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CityServices;
