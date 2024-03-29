"use client";
import { motion } from "framer-motion";
import "../../components/carousel/style.scss";
// import Form from "@/components/form/form";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: "100%" },
  show: { y: "0%", transition: { duration: 0.5 } },
};
const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0">
        <img
          src="/sunset2.jpg"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/3 flex items-center justify-center text-6xl">
          <div>
            <motion.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl md:text-6xl text-white font-ovo "
            >
              Let's Connect
            </motion.h1>
          </div>
        </div>
      </div>
      {/* FORM CONTAINER */}
      <div className="my-48 overflow-hidden ">{/* <Form /> */}</div>
    </motion.div>
  );
};

export default Contact;
