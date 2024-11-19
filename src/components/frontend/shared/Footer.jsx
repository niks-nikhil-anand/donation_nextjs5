import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="py-10 bg-gray-100 sm:pt-16 lg:pt-24 shadow-xl rounded-lg">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
      <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
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
                <path
                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                ></path>
              </svg>
            </a>
          </li>
          {/* Other social media icons */}
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
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
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
              className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
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
          <div className="flex items-center space-x-2">
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
