"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <h1>Services</h1>
    </motion.div>
  );
};

export default Services;
