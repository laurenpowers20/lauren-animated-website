"use client";
import Carousel from "@/components/carousel/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      // className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <h1 className="text-4xl md:text-6xl font-ovo justify-center p-5">
            About Lauren
          </h1>
          <Image
            src="/hero.png"
            alt="Lauren"
            width={150}
            height={150}
            className="float-left mr-4 "
          />
          <p className="p-5 font-latoReg text-1xl md:text-2xl">
            Once a solo hostel backpacker, I've since transformed into a luxe
            adventurer. My journey has taken me from exploring the cities of
            Europe, reveling in the world’s finest art museums and vibrant
            nightlife, to immersing myself in the tranquility of nature,
            eco-lodges and sharing unforgettable experiences with my husband by
            my side.
          </p>

          <p className="p-5 font-latoReg text-1xl md:text-2xl">
            I’ve planned many trips around the world and I’m eager to pass on my
            knowledge and expertise to others! I love listening to what excites
            people, what activities they like, and whats important .
          </p>
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          <div className=" items-center flex pb-10">
            <Carousel />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
