"use client";
import { motion } from "framer-motion";
import "../../components/carousel/style.scss";

import Link from "next/link";
import Image from "next/image";

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
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-4 md:px-12 lg:px-20 xl:px-48 ">
        {/* TEXT CONTAINER */}
        <div className="lg:h-full lg:w-1/2 flex items-center justify-center lg:text-4xl text-2xl ">
          <div>
            <motion.h1
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-5xl md:text-6xl text-black font-ovo "
            >
              Let&apos;s Connect
            </motion.h1>{" "}
            <h3 className="lg:text-4xl text-2xl lg:text-left text-black font-ovo ">
              Fill out this{" "}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd1ya_33-okUHjuiwVUhOZ8Ckn7MezMVD2xKY87l8H_Yg3TSQ/viewform?usp=sf_link"
                className="underline"
              >
                form
              </Link>{" "}
              to get started
            </h3>
          </div>
        </div>

        <div className="lg:h-full lg:w-1/2 flex items-center justify-center lg:text-4xl text-2xl">
          {/* FORM CONTAINER */}
          {/* <Form /> */}

          <Image
            src="/plane.jpg"
            alt="plane"
            width={350}
            height={467}
            className="rounded-lg m-5 "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
