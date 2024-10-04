import React from "react";
import Slider from "react-slick";
import Button from "../share/Button";

// Import images
import UploadedImage from "../assets/headphone.png"; // replace with the actual image path
import Image2 from "../assets/vr.png";
import Image3 from "../assets/macbook.png";

// Hero data
const heroData = [
  {
    id: 1,
    img: UploadedImage, // Use the uploaded image
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Noise Cancelling",
    title2: "Virtual",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptop",
  },
];

function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px]  bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white  flex justify-center item-center">
        <div className="container pd-8 sm:pd-0">
          {/*Hero section*/}
          <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl  lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[70px] md:text-[90px] xl:text-[140px] font-bold">
                      {data.title2}
                    </h1>{" "}
                    {/* Fixed rendering title2 */}
                    <div>
                      <Button
                        text="Shop now Category"
                        bgColor="bg-secondary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img} // Fixed image rendering
                        alt={data.title2}
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
