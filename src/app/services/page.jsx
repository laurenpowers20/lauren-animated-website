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
          <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <p className="p-5 ">
              There’s a variety of ways we can work together! We can go all-in
              and I can plan a day-by-day itinerary, or we could collaborate
              with ideas that you already have.{" "}
            </p>
            <div className="cardcontainer justify-center flex gap-5">
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Booking
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <ul className="list-disc ">
                    <li>Hotels</li>
                    <li>Homes/Villas</li>
                    <li>Restaurants</li>
                    <li>Cruises</li>
                  </ul>
                </div>
              </div>
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Itineraries
                </h5>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <ul className="list-disc ">
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
