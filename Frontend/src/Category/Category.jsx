import React from "react";
import Image1 from "../assets/earphone.png";
import Image2 from "../assets/watch.png";
import Image3 from "../assets/macbook.png";
import Button from "../share/Button";

function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="md-{2px} text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">
                  Earphone
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
              alt="Earphone"
              className="w-[320px] absolute bottom-0"
            />
          </div>
          {/* Second Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-yellow-500/70  to-yellow-500/70 to-yellow-500/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="md-{2px} text-white">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-3">
                  Gadget
                </p>

                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-yellow-500"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[250px] absolute -right-4 lg:top-[0px]"
            />
          </div>
          {/* Third Col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-secondary  to-secondary/90 to-yellow-500/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-3 mb-4">
                <p className=" text-white">Enjoy</p>
                <p className="text-2xl font-semibold md-{2px}">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-10">
                  Laptop
                </p>

                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-secondary/90"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[320px] absolute -right-5 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
