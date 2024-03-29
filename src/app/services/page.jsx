"use client";
import Timeline from "@/components/timeline/Timeline";
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
          {" "}
          <div className="flex flex-col justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="cardcontainer justify-center flex gap-5">
              <div className="block max-w-sm p-6 w-64 bg-white border border-gray-200 rounded-lg shadow hover:bg-neonBlue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Booking
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <ul className="list-disc text-1xl md:text-2xl">
                    <li>Hotels</li>
                    <li>Homes/Villas</li>
                    <li>Restaurants</li>
                    <li>Cruises</li>
                    <li>Tours</li>
                  </ul>
                </div>
              </div>
              <div className="block max-w-sm p-6 w-64 bg-white border border-gray-200 rounded-lg shadow hover:bg-neonBlue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Itineraries
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <ul className="list-disc text-1xl md:text-2xl">
                    <li>Activities & Events</li>
                    <li>Dining & Drinking</li>
                    <li>Transportation</li>
                    <li>Site-seeing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Timeline />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
