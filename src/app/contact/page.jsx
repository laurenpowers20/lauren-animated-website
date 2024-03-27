"use client";
import { motion } from "framer-motion";
import "../../components/carousel/style.scss";
import Form from "@/components/form/form";

const Contact = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/3 flex items-center justify-center text-6xl">
          <div>
            <h1 className="text-5xl md:text-6xl font-ovo pb-5 ">
              Let's Connect
            </h1>
          </div>
        </div>
        {/* FORM CONTAINER */}
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
