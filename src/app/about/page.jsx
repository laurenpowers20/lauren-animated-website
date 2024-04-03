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
          <h1 className="text-5xl md:text-6xl font-ovo justify-center pb-5">
            About Lauren
          </h1>
          <Image
            src="/hero.png"
            alt="Lauren"
            width={150}
            height={150}
            className="float-left mr-4 border-2 border-neonPink-500 rounded-full"
          />
          <p className="p-4 font-ovo text-1xl md:text-2xl">
            Once a solo hostel backpacker, I&apos;ve since transformed into a
            luxe adventurer. My journey has taken me from exploring the cities
            of Europe, reveling in the world&apos;s finest art museums and
            vibrant nightlife, to immersing myself in the tranquility of nature,
            eco-lodges and sharing unforgettable experiences with my husband by
            my side.
          </p>

          <p className="p-4 font-ovo text-1xl md:text-2xl">
            I&apos;ve planned many trips around the world and I&apos;m eager to pass
            on my knowledge and expertise to others! I love listening to what
            excites people, what activities they like, and what&apos;s important
            to them.
          </p>

          <div className="p-5 font-ovo text-1xl md:text-2xl">
            I have expertise in:
            <ul className="list-disc ml-10 gap-8 columns-2">
              <li>Mexico</li>
              <li>Central America</li>
              <li>Europe</li>
              <li>Southeast Asia</li>
              <li>Pacific Northwest</li>
              <li>Couples Travel (romance/honeymoons)</li>
              <li>Adventure</li>
              <li>Scuba Destinations</li>
              <li>Solo Travel</li>
            </ul>
          </div>
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
