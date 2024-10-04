import React from "react";
import { FaCarSide } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-6xl text-secondary md:text-5xl" />, // Adjusted icon size and margin
    title: "Free Shipping",
    description: "Free Shipping on all order",
  },
  {
    id: 2,
    icon: (
      <IoIosCheckmarkCircle className="text-6xl text-secondary md:text-5xl " />
    ),
    title: "24/7 Support",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className="text-4xl text-secondary md:text-5xl" />,
    title: "Secure Payments",
    description: "hight Quality Sound",
  },
  {
    id: 4,
    icon: <FaWallet className="text-6xl text-secondary md:text-5xl " />,
    title: "Quality Guarantee",
    description: "All Payment Secure",
  },
];

function Service() {
  return (
    <div>
      <div className="container my-14 md:my-20 md-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {servicesData.map((data) => (
            <div>
              {data.icon}
              <div className="flex flex-col item-start sm:flex-row gap-4">
                <h1 className="lg:text-xl font bold">{data.title}</h1>

                <h1 className="text-gray-400 ">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
