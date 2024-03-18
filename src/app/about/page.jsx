"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import DownArrow from "@/components/down";

const About = () => {
  const containerRef = useRef();
  // const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-5 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero.png"
              alt=""
              width={200}
              height={200}
              className="w-50 h-50 object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-rakkasReg text-3xl">ABOUT ME</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-xl font-latoReg">
              Once a solo hostel backpacker, I`ve since transformed into a luxe
              adventurer. My journey has taken me from exploring the cities of
              Europe, reveling in the world`s finest art museums and vibrant
              nightlife, to immersing myself in the tranquility of nature, eco
              lodges, and sharing unforgettable experiences with my husband by
              my side.
            </p>

            {/* BIOGRAPHY SCROLL SVG */}

            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-10 my-10"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <DownArrow />
            </motion.div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* {TITLE} */}
            <motion.h1
              initial={{ x: "-500px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-rakkasReg text-3xl"
            >
              I HAVE EXPERIENCE IN
            </motion.h1>
            {/* SKILL LIST */}
            <div>
              <p>Heres some more informations</p>
            </div>
            {/* SKILL SCROLL SVG */}
            {/* BIOGRAPHY SCROLL SVG */}

            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-10 "
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <DownArrow />
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-38"
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-100px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-rakkasReg text-3xl"
            >
              FUN FACTS
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <ul>
                <motion.li>Bullet POInt 1</motion.li>
                <motion.li
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                >
                  Bullet POInt 2
                </motion.li>
                <motion.li
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                >
                  Bullet POInt 3
                </motion.li>
                <motion.li
                  initial={{ x: "-300px" }}
                  animate={isExperienceRefInView ? { x: "0" } : {}}
                >
                  Bullet POInt 4
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
        {/* Picture*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 justify-center">
          {/* <Image src="/hero.png" alt="" fill className="object-contain" /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
