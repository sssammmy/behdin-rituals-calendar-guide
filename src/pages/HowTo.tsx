
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Book, 
  Flame, 
  FlowerIcon, 
  Apple, 
  Scissors, 
  Droplets, 
  Shell, 
  Utensils, 
  CandlestickIcon
} from "lucide-react";

const HowTo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                How To Prepare for Zoroastrian Ceremonies
              </h1>
              <p className="text-gray-700 text-lg">
                A practical guide to setting up prayer tables and preparing for important rituals.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                  The Prayer Table (Sofreh)
                </h2>
                <p className="text-gray-700 mb-8">
                  The prayer table, or sofreh, is central to Zoroastrian ceremonies. Setting it up correctly 
                  shows respect for traditions passed down through generations and creates a proper 
                  environment for prayer and ceremony.
                </p>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-12">
                  <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">Essential Items for the Prayer Table</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Book className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Avesta (Holy Book)</h4>
                        <p className="text-gray-600">
                          The sacred texts of Zoroastrianism placed in a prominent position on the table.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Flame className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Fire in an Afrinagan</h4>
                        <p className="text-gray-600">
                          A small fire burning on coal or special wood, often placed in a metal container called an afrinagan.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <CandlestickIcon className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Candles</h4>
                        <p className="text-gray-600">
                          Two or more candles, symbolizing the light of wisdom and the divine presence.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Apple className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Fresh Fruits</h4>
                        <p className="text-gray-600">
                          A selection of seasonal fruits representing fertility and the bounties of creation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <FlowerIcon className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Fresh Flowers</h4>
                        <p className="text-gray-600">
                          Symbolizing beauty and the goodness of Ahura Mazda's creation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Shell className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Sandalwood (Sukhad)</h4>
                        <p className="text-gray-600">
                          Small pieces of sandalwood or sandalwood powder to be offered to the sacred fire.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Utensils className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Metal Tray</h4>
                        <p className="text-gray-600">
                          A small silver or metal tray for offering sandalwood to the fire.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-zoroastrian-light p-3 rounded-full mr-4">
                        <Droplets className="w-6 h-6 text-zoroastrian-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">Rose Water</h4>
                        <p className="text-gray-600">
                          Used for purification before and during certain ceremonies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">Setting Up the Prayer Table</h3>
                  
                  <ol className="space-y-6">
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Choose a Clean, Quiet Space</h4>
                        <p className="text-gray-600">
                          Select a clean, peaceful area in your home where the ceremony won't be disturbed. The prayer table should preferably face east or a window where light enters.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Lay a Clean White Cloth</h4>
                        <p className="text-gray-600">
                          Cover the table with a clean white cloth, symbolizing purity. Ensure the cloth is freshly washed and ironed.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Place the Sacred Fire</h4>
                        <p className="text-gray-600">
                          Position the afrinagan (fire holder) in the center or slightly toward the back of the table. The fire should be prepared by the priest or someone familiar with the proper protocols.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Arrange Candles</h4>
                        <p className="text-gray-600">
                          Place candles on either side of the fire, lighting them before the ceremony begins.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Arrange Other Items</h4>
                        <p className="text-gray-600">
                          Position the Avesta, flowers, fruits, rose water, and other items in an orderly manner on the table. Traditionally, the Avesta is placed on a small stand.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="bg-zoroastrian-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">6</span>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Prepare Seating</h4>
                        <p className="text-gray-600">
                          Arrange clean seating for the priest and attendees facing the prayer table. Traditionally, a clean white sheet or carpet is laid for the priest to sit on.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                  Preparing for a Funeral Ceremony
                </h2>
                <p className="text-gray-700 mb-8">
                  For funeral ceremonies, additional preparation is required beyond the standard prayer table setup.
                </p>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                  <h3 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">Additional Considerations</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-zoroastrian-light p-2 rounded-full mr-3 mt-1">
                        <div className="w-3 h-3 bg-zoroastrian-blue rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Photo of the Deceased:</span> Place a framed photograph of the deceased person on the table, often adorned with a garland of flowers.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-zoroastrian-light p-2 rounded-full mr-3 mt-1">
                        <div className="w-3 h-3 bg-zoroastrian-blue rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Sudreh and Kusti:</span> If the deceased was a practicing Zoroastrian, place their sudreh (sacred shirt) and kusti (sacred thread) near their photo.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-zoroastrian-light p-2 rounded-full mr-3 mt-1">
                        <div className="w-3 h-3 bg-zoroastrian-blue rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">White Clothing:</span> Family members traditionally wear white or light-colored clothing to funeral ceremonies.
                      </p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="bg-zoroastrian-light p-2 rounded-full mr-3 mt-1">
                        <div className="w-3 h-3 bg-zoroastrian-blue rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Personal Items:</span> Sometimes, small personal items that were significant to the deceased may be placed on the table.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <p className="text-gray-600 italic mb-8">
                  "May good thoughts, good words, and good deeds guide our prayers and ceremonies."
                </p>
                <p className="text-gray-700">
                  For more specific guidance or to schedule a priest for your ceremony, 
                  please visit our <a href="/services" className="text-zoroastrian-blue hover:underline">Services</a> page 
                  to find Zoroastrian resources in your area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowTo;
