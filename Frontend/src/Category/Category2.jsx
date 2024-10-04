import React from "react";
import Image1 from "../assets/gaming.png";
import Image2 from "../assets/vr.png";
import Image3 from "../assets/speaker.png";
import Button from "../share/Button";

function Category2() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90  to-gray-100  text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-3 mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-10">
                  Play Sation 5
                </p>

                <Button
                  text="Browse"
                  bgColor={"bg-secondary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[320px] absolute -right-5 bottom-0"
            />
          </div>
          {/* Second Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/60 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="md-{2px} text-white">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">
                  Vision Pro
                </p>

                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow/90"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="Earphone"
              className="w-[220px] absolute  -right-5 bottom-0 "
            />
          </div>
          {/* third Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-blue-500 to-blue/1000 text-white rounded-3xl relative h-[320px] flex items-end">
            {/* Your content here */}
            <div>
              <div className="mb-4">
                <p className="md-{2px} text-white">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                  Speaker
                </p>

                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-blue-500"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[250px] absolute  -right-10 bottom-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category2;
