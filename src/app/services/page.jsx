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
          <h1>Services</h1>
          <div className="flex flex-wrap font-ovo text-black sm:gap-1 lg:gap-6 justify-center mb-10 divide-y-2">
            <div className="relative flex flex-col mt-6  bg-white shadow-md bg-clip-border rounded-xl w-52">
              <div className="p-6  ">
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal ">
                  Booking
                </h5>
                <ul className="block  text-base antialiased  leading-relaxed text-inherit list-disc">
                  <li>Hotels</li>
                  <li>Vacation Packages</li>
                  <li>Cruises</li>
                  <li>Homes/Villas</li>
                  <li>Business</li>
                  <li>Transportation (airport, car rental)</li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col mt-6  bg-white shadow-md bg-clip-border rounded-xl w-52 ">
              <div className="p-6">
                <h5 className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal ">
                  Tours & Activites
                </h5>
                <ul className="block  text-base antialiased leading-relaxed text-inherit list-disc ">
                  <li>Destination Activities</li>
                  <li>Group Travel Tours</li>
                  <li>Safari</li>
                </ul>
              </div>
            </div>
            <div className="relative flex flex-col mt-6  bg-white shadow-md bg-clip-border rounded-xl w-52 ">
              <div className="p-6">
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal  ">
                  Tailored Itineraries
                </h5>
                <ul className="block  text-base antialiased  leading-relaxed text-inherit list-disc">
                  <li>Honeymoons</li>
                  <li>Group/Solo Travel</li>
                  <li>Long trips/Quick Getaways</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <Timeline />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
