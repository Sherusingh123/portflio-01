import React from "react";
import Image1 from "../../assets/p-1.jpg";
import Image2 from "../../assets/p-2.jpg";
import Image3 from "../../assets/p-3.jpg";
import Image4 from "../../assets/p-4.jpg";
import Image5 from "../../assets/p-5.jpg";
import Image6 from "../../assets/p-7.jpg";
import Image7 from "../../assets/p-9.jpg";

// Heading Component
const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center md:10 max-w-[600px] mx-auto space-y-2 mt-20 mb-20">
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

// Button Component (added for your hover button)
const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor}cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full reative z-10 mt-5`}
    >
      {text}
    </button>
  );
};

// Sample product data with actual image paths
const ProductData = [
  {
    id: 1,
    img1: Image1,
    title: "Boat Headphone",
    price: "420",
  },
  {
    id: 2,
    img1: Image2,
    title: "Sony Headphone",
    price: "520",
  },
  {
    id: 3,
    img1: Image3,
    title: "JBL Headphone",
    price: "620",
  },
  {
    id: 4,
    img1: Image4,
    title: "Beats Headphone",
    price: "720",
  },
];
const ProductData2 = [
  {
    id: 1,
    img1: Image5,
    title: "Boat Headphone",
    price: "125",
  },
  {
    id: 2,
    img1: Image6,
    title: "Sony Headphone",
    price: "405",
  },
  {
    id: 3,
    img1: Image7,
    title: "JBL Headphone",
    price: "680",
  },
  {
    id: 4,
    img1: Image4,
    title: "Beats Headphone",
    price: "520",
  },
];
// ProductCard Component
const ProductCard = ({ data }) => {
  return (
    <div className="md-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6 md-20">
        {/* card section */}
        {data.map((product) => (
          <div className="group" key={product.id}>
            <div className="relative ">
              <img
                src={product.img1}
                alt={product.title}
                className="h-[140px] w-[220px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                <Button
                  text="Add to Cart"
                  bgColor={"bg-secondary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7 mt-4">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="font-bold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Product Component
const Product = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <Heading title="Our Product" subtitle="Explore our Product" />

        {/* Body Section */}
        <ProductCard data={ProductData} />
        <div className="mt-20">
          <ProductCard data={ProductData2} />
        </div>
      </div>
    </div>
  );
};

export default Product;
