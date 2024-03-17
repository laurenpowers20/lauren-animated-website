"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-latoReg">Lauren Powers</h1>

          {/* DESC */}
          <h2 className="md:text-xl flex">
            {" "}
            <Image
              src="/fora.png"
              alt="fora logo"
              width={55}
              height={55}
              className="object-contain pr-2"
            />
            Travel Advisor
          </h2>
          {/* BUTTONS */}
          <div className="w-full flex gap-4"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
