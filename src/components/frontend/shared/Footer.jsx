import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:pt-16 lg:pt-24 shadow-xl rounded-lg">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6 lg:gap-x-12">
            {/* Logo and Description Section */}
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
              <img
                className="w-auto h-9"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt="Logo"
              />
              <p className="text-base leading-relaxed text-gray-600 mt-7">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
              </p>

              <ul className="flex items-center space-x-3 mt-9">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600 shadow-md"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523..."></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Newsletter
              </p>
              <form className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none shadow-md focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-lg transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section className="bg-gray-100 py-4 text-center text-black border-t border-black">
        <p>© Copyright 2021, All Rights Reserved by Donation</p>
      </section>
    </div>
  );
};

export default Footer;
