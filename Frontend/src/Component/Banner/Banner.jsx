import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center item-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center text-white rounded-3xl"
        >
          {/* First-col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          {/* Second-col */}
          <div className="h-full flex item-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-{250px} md:w-{340px} mx-auto  drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third-col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className="font-bold text-3xl sm:text-5xl ">{data.title1}</p>
            <p className="text-sm  tracking-wide leading-5">
              {data.productTitle}
            </p>
            <div>
              <button className="bg-white  text-secondary py-2 px-4 rounded-2xl mt-5">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
