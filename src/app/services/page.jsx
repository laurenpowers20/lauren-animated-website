"use client";

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
          <h1 className="text-5xl md:text-6xl  justify-center pb-5">
            Services
          </h1>
          <div>
            <table class="table-auto">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5">
                    {" "}
                    <h2 className="pb-5 text-2xl md:text-3xl  justify-center ">
                      Destination Research
                    </h2>
                    <p className=" font-ovo text-1xl md:text-2xl pb-5">
                      If you know where you want to go and just need help
                      booking hotels, resorts, villas, and cruises{" "}
                    </p>
                  </td>
                  <td>
                    <p className="font-ovo text-1xl md:text-2xl">
                      Starting at $0*{" "}
                      <p className="text-sm">
                        Free when booking qualifying hotels, resorts, villas,
                        and cruises
                      </p>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="p-5">
                    {" "}
                    <h2 className=" text-2xl md:text-3xl  justify-center ">
                      Activites & More
                    </h2>
                    <p className=" font-ovo text-1xl md:text-2xl">
                      You booked your flight and hotel, but want some
                      recommendations on activities and restaurant
                    </p>
                  </td>
                  <td className="font-ovo text-1xl md:text-2xl">
                    Starting at $75
                  </td>
                </tr>
                <tr>
                  <td className="p-5">
                    <h2 className=" text-2xl md:text-3xl  justify-center ">
                      Full Service Hotel & Activities Itinerary
                    </h2>
                    <p className=" font-ovo text-1xl md:text-2xl">
                      Book accommodation, activities, airport transportation
                    </p>
                  </td>
                  <td className="font-ovo text-1xl md:text-2xl">
                    Starting at $100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
