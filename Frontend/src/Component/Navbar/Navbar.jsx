import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaCaretDown } from "react-icons/fa"; // Added import for caret down
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "#shop" },
  { id: 3, name: "About", link: "/#About" },
  { id: 4, name: "Blogs", link: "/#Blogs" },
];

const DropdownLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "#shop" },
  { id: 3, name: "About", link: "/#About" },
  { id: 4, name: "Blogs", link: "/#Blogs" },
];

const Navbar = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="container flex justify-between items-center">
          {/* Logo and link Section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-secondary font-semibold tracking-wide text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex space-x-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 mt-2"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* DropDown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-gray-500 dark:hover:text-white py-2 "
                  >
                    Quick Links
                    <FaCaretDown className="group-hover:rotate-180 duration-300  " />
                  </a>
                  {/* Drop Down links */}
                  <div className="absolute z-50 hidden group-hover:block w-48 rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="block px-4 py-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white durartion-200 inline-block w-full p-2 hover:bg-secondary/20 rounded-md font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar right section */}
          <div className="flex items-center gap-4">
            {/* Search bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search"
                className="w-0 group-hover:w-48 transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-secondary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Order button section */}
            <button className="relative p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              {/* Optional: Add a badge for item count */}
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                4
              </span>
            </button>
            {/* Dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
