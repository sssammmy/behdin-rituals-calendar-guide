
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RitualCalendar from "@/components/rituals/RitualCalendar";

const Calendar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                Prayer Calendar Calculator
              </h1>
              <p className="text-gray-700 text-lg">
                Generate a customized schedule of all required ceremonies and prayers based on the date of passing.
              </p>
            </div>
          </div>
        </section>
        
        <RitualCalendar />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-8 text-center">
                Understanding the Prayer Calendar
              </h2>
              
              <div className="prose max-w-none">
                <p>
                  The Zoroastrian tradition includes specific ceremonies and prayers that should be performed at 
                  exact intervals following the passing of a loved one. Our calendar calculator helps you determine the 
                  correct dates for these important observances.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">How Dates Are Calculated</h3>
                <p>
                  Our calculator considers:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>The exact date and time of passing</li>
                  <li>Geographical location (for sunrise/sunset times)</li>
                  <li>Traditional intervals for Zoroastrian ceremonies</li>
                </ul>
                <p>
                  For ceremonies tied to specific times of day (like dawn), we calculate these based on the actual 
                  sunrise time at the location you provide.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Key Ceremonies in the Calendar</h3>
                <p>
                  Your generated calendar will include dates for:
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Initial prayers (Sarosh Baj, Sachkar)</li>
                  <li>Chahrum (fourth day ceremony)</li>
                  <li>Dahum (tenth day ceremony)</li>
                  <li>Siroza (thirtieth day ceremony)</li>
                  <li>Salroz (one-year anniversary)</li>
                  <li>And other important observances</li>
                </ul>
                
                <p>
                  The calendar also provides brief descriptions of each ceremony and the prayers typically recited, 
                  helping families prepare appropriately for each observance.
                </p>
                
                <div className="bg-zoroastrian-light p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium text-zoroastrian-blue mb-3">Note for Families</h4>
                  <p className="text-sm">
                    While this calendar provides accurate dates for traditional observances, we recommend consulting with a 
                    local Zoroastrian priest (Mobed) for guidance specific to your family traditions and community practices. 
                    Different Zoroastrian communities may have slight variations in their practices.
                  </p>
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

export default Calendar;
