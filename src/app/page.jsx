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
          <motion.h1
            className="text-5xl md:text-6xl font-ovo justify-center"
            h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            LAUREN POWERS
          </motion.h1>

          {/* DESC */}
          <h2 className="md:text-xl flex text-latoReg">
            {" "}
            <Image
              src="/fora.png"
              alt="fora logo"
              width={55}
              height={55}
              className="object-contain pr-2"
            />
            TRAVEL ADVISOR
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
