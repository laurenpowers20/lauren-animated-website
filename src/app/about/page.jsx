"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <h1>About</h1>
      <p>Here's about me. </p>
    </motion.div>
  );
};

export default About;