import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            We are a leading technology solutions provider, offering innovative
            products that empower people and organizations worldwide.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-pink-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Cloud Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter and get the latest updates, news, and
            offers right to your inbox.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto flex justify-between items-center text-sm text-gray-500">
          <p>© 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
