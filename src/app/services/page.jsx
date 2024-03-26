"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="h-full flex flex-col font-ovo lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div>
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl  justify-center pb-5">
            Services
          </h1>
          <div>
            <h2 className="text-2xl md:text-3xl  justify-center pb-5">
              Destination Research
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
