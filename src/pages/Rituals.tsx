import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Info } from "lucide-react";

const Rituals = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-zoroastrian-light py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-zoroastrian-blue mb-6">
                Zoroastrian Funeral Rituals
              </h1>
              <p className="text-gray-700 text-lg mb-6">
                A comprehensive guide to the important ceremonies and prayers following the passing of a loved one.
              </p>
            </div>
          </div>
        </section>

        {/* Persian Zoroastrian Funeral and Mourning Rituals */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-zoroastrian-blue/5 to-zoroastrian-gold/5 p-8 rounded-lg border border-zoroastrian-blue/20 mb-8">
                <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-4">
                  Persian Zoroastrian Funeral and Mourning Rituals
                </h2>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg mb-6 italic">
                    This document provides a structured translation of Zoroastrian rituals and prayers related to death, funerals, and mourning. 
                    These are based on the text compiled by the Anjoman-e-Mobedan Tehran, originally in Persian. This guide is intended for use 
                    in a website helping Zoroastrians understand and observe end-of-life ceremonies for their loved ones.
                  </p>

                  <h3 className="text-xl font-semibold text-zoroastrian-blue mb-4">
                    1. Immediate Steps After Death
                  </h3>
                  <p className="mb-4">
                    Upon the passing of a Zoroastrian individual, the following actions are traditionally taken as soon as possible:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Close the eyes of the deceased and tie the feet and hands gently together.</li>
                    <li>Cover the body with a clean white sheet.</li>
                    <li>Place a lit oil lamp or candle and a pair of scissors near the head.</li>
                    <li>Inform a Mobed (Zoroastrian priest) and begin preparations for the proper recitation of prayers.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-zoroastrian-blue mb-4">
                    2. The Four-Day Ritual Cycle
                  </h3>
                  <p className="mb-6">
                    Zoroastrian belief holds that the soul remains near the body for three nights and departs on the morning of the fourth day. 
                    Rituals and prayers are conducted during this time to guide the soul toward the afterlife with dignity and light.
                  </p>

                  <h3 className="text-xl font-semibold text-zoroastrian-blue mb-4">
                    3. Prayer Sequence Overview
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li><strong>Day 1:</strong> Srosh Baj - recited to comfort the soul and guard against evil.</li>
                    <li><strong>Day 2:</strong> Continued recitation of Srosh Baj, followed by specific Avesta passages.</li>
                    <li><strong>Day 3:</strong> Patet prayers (confession and repentance), special recitations for the deceased.</li>
                    <li><strong>Day 4 Morning before sunrise:</strong> Final prayers, including the recitation of Yasna Haptanghaiti and other key verses. The soul is symbolically guided across the Chinvat Bridge.</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-zoroastrian-blue mb-4">
                    4. Post-Funeral Observances
                  </h3>
                  <p className="mb-4">
                    Additional rituals such as Chahrom (4th day), Dahom (10th day), and Sal (1-year anniversary) are performed, 
                    often with family and community present. These may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                    <li>Lighting of the fire</li>
                    <li>Offering of flowers and incense</li>
                    <li>Recitation of Avesta passages</li>
                    <li>Acts of charity in the name of the deceased</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-zoroastrian-blue/5 to-zoroastrian-gold/5 p-8 rounded-lg border border-zoroastrian-blue/20">
                <h2 className="font-serif text-2xl font-semibold text-zoroastrian-blue mb-6">
                  Explanation of Death Ritual Observance in the Zoroastrian Tradition
                </h2>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    In the Zoroastrian tradition, the day of a person's passing is observed according to the Zoroastrian calendar. 
                    It begins at <strong>Hāvan Gāh</strong> (sunrise) on the day of death and continues until the end of 
                    <strong>Ushahin Gāh</strong> (just before sunrise the following day).
                  </p>
                  
                  <p className="mb-6">
                    Once the date of passing is determined, the counting of days for ceremonies—such as the 3rd, 4th, 10th, 
                    30th-day rituals, and annual memorial—starts from the day of death itself as <strong>Day 1</strong>. 
                    The monthly <strong>Rōz-e</strong> (day-of-month) commemorations are also observed on the corresponding 
                    Zoroastrian calendar day in the following months.
                  </p>

                  <h3 className="text-xl font-semibold text-zoroastrian-blue mb-4">
                    Special Notes Regarding the Month of Esfand and the Five Gatha Days (Panjeh Māneh)
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="pl-4 border-l-4 border-zoroastrian-blue/30">
                      <p className="font-medium text-zoroastrian-blue mb-2">🔹 If death occurs on any of the 30 regular days of the month of Esfand:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The 30th-day ritual is observed exactly 30 days after the date of death.</li>
                        <li>The monthly Rōz-e ceremonies continue to be observed on the same Zoroastrian calendar day in the following months.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-4 border-zoroastrian-gold/50">
                      <p className="font-medium text-zoroastrian-blue mb-2">🔹 If death occurs during the five Gatha days (Panjeh Māneh):</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The 30th-day ritual is also held exactly 30 days after the date of death.</li>
                        <li>Since the Gatha days do not have corresponding days in the month of Farvardin, no Rōz-e is observed in that month.</li>
                        <li>However, from the month of Ordibehesht onward, the Rōz-e is held each month on the same Farvardin day of the Zoroastrian calendar.</li>
                        <li>The annual memorial is also observed in the following year on the same Gatha day as the original date of passing.</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-4 border-zoroastrian-terracotta/50">
                      <p className="font-medium text-zoroastrian-blue mb-2">🔹 If death occurs on Avardād Day (the 30th day of Esfand during leap years):</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>The 30th-day ritual is observed exactly 30 days later.</li>
                        <li>The monthly Rōz-e is observed on the same Farvardin day in the following months.</li>
                        <li>The annual memorial is held on the last Gatha day (Vehishtoish Gāh) in subsequent years.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-zoroastrian-cream/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Alert className="border-zoroastrian-terracotta bg-zoroastrian-terracotta/10">
                <AlertCircle className="h-4 w-4 text-zoroastrian-terracotta" />
                <AlertTitle className="text-zoroastrian-terracotta font-medium font-serif">Important Dietary Practice</AlertTitle>
                <AlertDescription className="text-gray-700">
                  <p className="my-1">According to Zoroastrian traditions, relatives and friends of the deceased should refrain from eating any meat for the first 3 days after the death of a loved one.</p>
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        <section id="initial-prayers" className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-8 border-zoroastrian-blue bg-zoroastrian-blue/10">
                <Info className="h-4 w-4 text-zoroastrian-blue" />
                <AlertTitle className="text-zoroastrian-blue font-medium font-serif">Regional Differences in North America & Europe</AlertTitle>
                <AlertDescription className="text-gray-700">
                  <p className="my-1">Please note that the Sachkar Ceremony and Geh Sarna are usually not performed in the traditional manner in North America and Europe. The process of washing and clothing the body, as well as the timing of funeral services, is typically determined by local funeral homes, cemeteries, and customs. Always consult with local Zoroastrian priests for guidance on how to adapt these rituals.</p>
                </AlertDescription>
              </Alert>
              
              <div className="prose max-w-none">
                <p>
                  When a Zoroastrian passes away, several important prayers and rituals should be performed immediately. 
                  These ceremonies help guide the soul of the departed on its journey and provide comfort to the grieving family.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Sachkar Ceremony</h3>
                <p>
                  The Sachkar ceremony is one of the first rituals performed after death. This ceremony should ideally 
                  be performed within the first few hours of passing. During this ceremony, the body is ritually washed 
                  and prepared for funeral services.
                </p>
                <p>
                  <strong>Who performs it:</strong> Traditionally performed by family members of the same gender as the deceased, 
                  but in many communities outside Iran, this may be performed by funeral home professionals with guidance from a priest.
                </p>
                <p>
                  <strong>Key prayers:</strong> Sarosh Baj, portions of the Avesta
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Geh Sarna</h3>
                <p>
                  This is a prayer ceremony performed before the funeral, usually at a funeral home or temple. The priest recites 
                  prayers over the body before it is taken for funeral services.
                </p>
                <p>
                  <strong>Timing:</strong> Usually performed within 24 hours of passing, but may vary based on local customs and practical considerations.
                </p>
                <p>
                  <strong>Key prayers:</strong> Ahunavaiti Gatha, Ustavaiti Gatha, Sarosh Yasht
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Funeral Service</h3>
                <p>
                  The funeral service combines traditional Zoroastrian elements with local customs and regulations.
                </p>
                <p>
                  <strong>Elements:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Recitation of prayers by priests (Mobeds)</li>
                  <li>Eulogies and remembrances from family and friends</li>
                  <li>Final viewing</li>
                  <li>Committal ceremony</li>
                </ul>
                <p>
                  <strong>Notes for services outside Iran:</strong> While traditional Zoroastrian practice involves exposure of the body (dakhmenashini), 
                  in most countries outside Iran, burial or cremation is practiced. Most Zoroastrians in North America opt for cremation as it is closer to 
                  the traditional practice of not polluting the earth with burial.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="memorial-services" className="py-16 bg-zoroastrian-cream/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-8">
                Memorial Services
              </h2>
              
              <div className="prose max-w-none">
                <p>
                  After the funeral, several memorial services are held at specific intervals. These are crucial ceremonies 
                  in Zoroastrian tradition, marking the soul's journey after death.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Chahrum (Fourth Day Ceremony)</h3>
                <p>
                  The Chahrum is held on the fourth day after death, marking a significant transition for the soul. 
                  According to Zoroastrian belief, the soul remains near the body for three days before crossing the 
                  Chinvat Bridge on the fourth day, where it faces judgment.
                </p>
                <p>
                  <strong>Timing:</strong> Dawn of the fourth day after passing
                </p>
                <p>
                  <strong>Key prayers:</strong> Afringan, Baj, and Stum
                </p>
                <p>
                  <strong>Significance:</strong> This is one of the most important ceremonies, as it marks the soul's judgment and transition to the spiritual realm.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Dahum (Tenth Day)</h3>
                <p>
                  This ceremony is performed on the tenth day after passing.
                </p>
                <p>
                  <strong>Key prayers:</strong> Afringan, Baj, and Stum
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Siroza (Thirtieth Day)</h3>
                <p>
                  The Siroza ceremony is held on the thirtieth day after death, marking another important transition for the soul.
                </p>
                <p>
                  <strong>Key prayers:</strong> Afringan, Baj, and Stum
                </p>
                <p>
                  <strong>Notes:</strong> In some communities, this ceremony may be combined with a gathering where family and friends 
                  share memories of the deceased and a communal meal.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="annual-remembrances" className="py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-8">
                Annual Remembrances
              </h2>
              
              <div className="prose max-w-none">
                <p>
                  Zoroastrians continue to honor their departed loved ones through annual ceremonies and during 
                  specific religious periods.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Salroz (Death Anniversary)</h3>
                <p>
                  The Salroz marks the anniversary of passing and is observed each year.
                </p>
                <p>
                  <strong>Ceremonies:</strong> Jashan (thanksgiving ceremony), Afringan, and Baj
                </p>
                <p>
                  <strong>Customs:</strong> Family may gather for prayers, visit the cemetery or crematorium, and share a meal in honor of the deceased.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Muktad (Fravardegan Days)</h3>
                <p>
                  The Muktad or Fravardegan days are the last ten days of the Zoroastrian calendar, dedicated to remembering 
                  all the departed souls. These days are considered particularly sacred for commemorating ancestors.
                </p>
                <p>
                  <strong>Timing:</strong> Last ten days of the Zoroastrian year (varies by calendar)
                </p>
                <p>
                  <strong>Customs:</strong>
                </p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Homes and temples are thoroughly cleaned</li>
                  <li>Flowers and food offerings are prepared</li>
                  <li>Special prayers are recited daily</li>
                  <li>Family members gather to honor departed souls</li>
                </ul>
                <p>
                  <strong>Significance:</strong> It is believed that during this period, the fravashis (guardian spirits) of the 
                  departed descend to earth and visit their families.
                </p>
                
                <h3 className="text-2xl font-serif font-medium text-zoroastrian-blue mt-8 mb-4">Monthly Remembrances</h3>
                <p>
                  Some families also observe monthly remembrances, especially during the first year after passing.
                </p>
                <p>
                  <strong>Customs:</strong> Lighting a lamp or candle, reciting prayers, or preparing the deceased's favorite food.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-zoroastrian-light text-center">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl font-semibold text-zoroastrian-blue mb-6">
                Need Help Planning These Ceremonies?
              </h2>
              <p className="text-gray-700 mb-8">
                Our calendar tool can help you organize and schedule all necessary rituals based on the date of passing. 
                We can also connect you with local priests and resources.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="/calendar" 
                  className="bg-zoroastrian-blue text-white px-8 py-3 rounded-md hover:bg-zoroastrian-blue/90 transition font-medium"
                >
                  Use Prayer Calendar
                </a>
                <a 
                  href="/services" 
                  className="bg-zoroastrian-gold text-zoroastrian-blue px-8 py-3 rounded-md hover:bg-zoroastrian-gold/90 transition font-medium"
                >
                  Find Local Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rituals;
