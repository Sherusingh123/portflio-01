import Navbar from "./Component/Navbar/Navbar";
import React from "react";
import Hero from "./hero/Hero";
import Category from "./Category/Category";
import Category2 from "./Category/Category2";
import Service from "./service/servic";
import Banner from "./Component/Banner/Banner";
import phone from "../../Frontend/src/assets/headphone.png";
import Product from "./Component/Product/Product";
import Banner2 from "./Component/Banner/Banner2";

import Watch from "../../Frontend/src/assets/smartwatch2-removebg-preview.png";
import Blog from "./Component/Blog/Blog";
import Partners from "./Component/Partner/perner2";
import Footer from "./Component/Partner/Partner";

const BannerData = {
  discount: "30% OFF",
  title: "Final sale",
  date: "10 Jan To 28 Jan",
  image: phone, // Access from the public folder
  productTitle:
    "Headphones are essential audio devices. They come in various styles, including over-ear, on-ear, and in-ear models, offering different options.",
  saleTitle: "Happy Hours",
  title1: "Winter Sale",
  title2: "Smart Sale",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy hours",
  date: "10 Jan To 28 Jan",
  image: Watch, // Corrected to 'image' for consistency
  productTitle:
    "Smartwatches offer a range of features, including health tracking, notifications, and GPS, making them a great companion.",
  saleTitle: "Final Sale",
  title1: "Winter Sale",
  title2: "Smart Solo",
  bgColor: "#2dcc6f",
};

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={BannerData} />
      <Product />
      <Banner2 data={BannerData2} />
      <Blog />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
