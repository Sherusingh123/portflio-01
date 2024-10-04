import React from "react";
import PartnerLogo1 from "../../assets/br-1.png"; // Add partner logos
import PartnerLogo2 from "../../assets/br-2.png"; // Replace with your partner images
import PartnerLogo3 from "../../assets/br-3.png";
import PartnerLogo4 from "../../assets/br-4.png";

const Partners = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {/* Partner Logos */}
          <div className="p-4">
            <img
              src={PartnerLogo1}
              alt="Partner 1"
              className="w-15 h-15 object-contain hover:scale-110 hover:rotate-3 hover:opacity-90 hover:shadow-lg transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <img
              src={PartnerLogo2}
              alt="Partner 2"
              className="w-15 h-15 object-contain hover:scale-110 hover:rotate-3 hover:opacity-90 hover:shadow-lg transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <img
              src={PartnerLogo3}
              alt="Partner 3"
              className="w-15 h-15 object-contain hover:scale-110 hover:rotate-3 hover:opacity-90 hover:shadow-lg transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <img
              src={PartnerLogo4}
              alt="Partner 4"
              className="w-15 h-15 object-contain hover:scale-110 hover:rotate-3 hover:opacity-90 hover:shadow-lg transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
