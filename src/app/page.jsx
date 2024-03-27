"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div>
      <div className="relative  h-screen text-white overflow-hidden">
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/910012/pexels-photo-910012.jpeg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center h-full font-ovo text-center">
            <h1 className="text-6xl  leading-tight mb-4">Lauren Powers</h1>
            <h2 className="text-5xl leading-tight mb-4">Travel Advisor</h2>
            <p className="text-lg text-gray-300 mb-8">
              Your gateway to the world
            </p>
            <a
              href="#"
              className="bg-white text-gray-900 hover:bg-neonPink-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
