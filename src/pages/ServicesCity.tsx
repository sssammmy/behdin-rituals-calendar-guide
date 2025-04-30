
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CityServices from "@/components/services/CityServices";

const ServicesCity = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CityServices />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesCity;
