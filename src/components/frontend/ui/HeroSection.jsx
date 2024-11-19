"use client"
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-white shadow-lg">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Join hands to support those in need and bring hope to lives.
                            </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Make a Difference Today
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Join hands to support those in need and bring hope to lives.
              Your contributions can create a lasting impact.
              </p>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                role="button"
              >
               Donate Now
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.a>
            </motion.div>

            {/* Right Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                alt="Hero"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
