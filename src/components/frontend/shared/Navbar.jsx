"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="shadow-md font-sans tracking-wide relative z-50">
        {/* Top Bar */}
        <section className="py-2 bg-blue-600 text-white text-right px-4 lg:px-10">
          <div className="text-sm flex flex-col md:flex-row md:justify-end gap-5 justify-start">
            <div>
            <strong className="mx-2 lg:mx-3">Address:</strong> SWF New York 185669
            </div>
            <div>
            <strong className="mx-2 lg:mx-3">Contact No:</strong> 1800333665
            </div>
          </div>
        </section>

        {/* Navbar */}
        <div className="flex items-center justify-between gap-4 px-4 lg:px-10 py-4 bg-white min-h-[70px]">
          {/* Logo */}
          <h1 className="font-bold text-lg">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </h1>

          {/* Navigation Links */}
          <motion.div
            animate={{
              x: isOpen ? 0 : "-100%",
            }}
            initial={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 50 }}
            className={`fixed lg:relative lg:flex lg:space-x-6 bg-white lg:bg-transparent w-2/3 lg:w-auto h-full lg:h-auto top-0 left-0 z-40 lg:z-auto shadow-lg lg:shadow-none p-6 lg:p-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-x-6">
              {["Home", "Team", "Feature", "Blog", "About", "Contact", "Source"].map(
                (item) => (
                  <li
                    key={item}
                    className="border-b lg:border-none py-3 lg:py-0"
                  >
                    <a
                      href="#"
                      className="hover:text-blue-600 text-gray-800 block font-bold text-base lg:text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 320.591 320.591"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
