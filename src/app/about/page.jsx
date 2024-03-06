"use client";

import { motion, useInView, useScroll } from "framer-motion";

const About = () => {

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* {CONTAINER} */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:32 lg:48: xl:64">
          {/* BIOGRAPHY */}
          <div className="flex flex-col justify-center">
            {/* TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* DESCRIPTION */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        </div>
        {/* SKILLS */}
        <div className="">
          SKILLS
          {/* SKILL LIST */}
         
        </div>
        {/* EXPERIENCE */}
        <div className="">EXPERIENCE</div>
      </div>
      {/* SVG CONTAINER */}
      <div className="hidden"></div>
    </motion.div>
  );
};

export default About;
