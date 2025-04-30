
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                About Behdin Rituals
              </h1>
              <p className="text-gray-700 text-lg">
                Supporting the global Zoroastrian community through guidance, education, and resources.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                    Our Mission
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Behdin Rituals was created to provide accurate, accessible information about Zoroastrian funeral rituals 
                    and ceremonies to the global Iranian Zoroastrian diaspora community. Our mission is to help families 
                    honor their loved ones according to tradition, even when they are far from their ancestral homeland.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We recognize that one of the most difficult times in a family's life is made even more challenging when 
                    navigating cultural and religious practices in a foreign land. By providing clear guidance, practical tools, 
                    and connections to local resources, we aim to ease this burden and ensure that proper rituals are observed.
                  </p>
                  <p className="text-gray-700">
                    In line with the Zoroastrian principles of "Good Thoughts, Good Words, Good Deeds" (Humata, Hukhta, Huvarshta), 
                    we strive to be a compassionate, reliable resource for our community in times of need.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-zoroastrian-cream rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                      alt="Candle memorial" 
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <blockquote className="italic text-gray-700">
                        "To help another in their time of grief is to honor one's own spirit and the divine spark within us all."
                      </blockquote>
                      <p className="text-right mt-2 text-sm text-gray-600">- Zoroastrian teaching</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-zoroastrian-blue opacity-20">
                      <path d="M50,0c-1.04,21.68-16.8,38.63-30.06,45.41c11.3,8.19,17.24,10.95,30.06,10.95 c12.82,0,18.76-2.76,30.06-10.95C66.8,38.63,51.04,21.68,50,0z M50,65c-5.52,0-10-4.48-10-10s4.48-10,10-10s10,4.48,10,10 S55.52,65,50,65z M50,85c-0,0-10.34,15-10.34,15h20.67C60.34,100,50,85,50,85z" />
                      <path d="M50,15.26c0,0-35,15-35,45h70C85,30.26,50,15.26,50,15.26z M29.71,50.93 c-1.51-3.08-0.24-6.8,2.84-8.32c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32 C34.95,55.28,31.22,54.01,29.71,50.93z M50,60c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S52.76,60,50,60z M67.45,45.45 c3.08-1.51,6.8-0.24,8.32,2.84c1.51,3.08,0.24,6.8-2.84,8.32c-3.08,1.51-6.8,0.24-8.32-2.84 C63.1,50.68,64.37,46.96,67.45,45.45z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-20">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                  About Zoroastrianism
                </h2>
                <p className="text-gray-700 mb-4">
                  Zoroastrianism is one of the world's oldest continuously practiced religions, founded by the prophet 
                  Zarathustra (also known as Zoroaster) in ancient Persia (modern-day Iran). At its core are the principles 
                  of good thoughts, good words, and good deeds, with a strong emphasis on personal responsibility and ethical choices.
                </p>
                <p className="text-gray-700 mb-4">
                  While once the dominant religion of several Persian empires, today Zoroastrians are a small but vibrant global 
                  community, with significant populations in Iran, India (where they are known as Parsis), and diaspora communities 
                  throughout North America, Europe, and Australia.
                </p>
                <p className="text-gray-700">
                  Death rituals hold special significance in Zoroastrian tradition, as they mark the soul's transition to the 
                  spiritual realm and judgment before Ahura Mazda (the wise lord). The proper performance of these rituals is 
                  considered important for both the departed soul and the wellbeing of those who remain.
                </p>
              </div>
              
              <div className="mt-20">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                  Our Team
                </h2>
                <p className="text-gray-700 mb-8">
                  Behdin Rituals was created by a team of Zoroastrians from diverse backgrounds, including priests, 
                  community leaders, and those who have experienced the challenge of organizing traditional ceremonies 
                  outside of Iran. We collaborate with Zoroastrian associations and religious authorities across North America 
                  to ensure the accuracy of our information.
                </p>
                
                <div className="bg-zoroastrian-light p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-medium text-zoroastrian-blue mb-4">Connect With Us</h3>
                  <p className="text-gray-700 mb-4">
                    We welcome contributions, corrections, and suggestions to improve our resources. If you have knowledge 
                    to share or wish to help expand our services directory, please reach out through our contact page.
                  </p>
                  <div className="text-center">
                    <a 
                      href="/contact" 
                      className="inline-block bg-zoroastrian-blue text-white px-6 py-2 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
