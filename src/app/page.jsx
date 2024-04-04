"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/logo/Logo";

const Homepage = () => {
  return (
    <div>
      <div className="relative  h-screen text-white overflow-hidden">
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <img
              src="/capri.jpeg"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center h-full p-5 font-ovo text-center ">
            <Logo />

            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-neonPink-500 px-5 rounded-full text-lg flex font-semibold transition duration-300 ease-in-out font-ovo justify-center items-center transform hover:scale-105 hover:shadow-lg"
            >
              let&apos;s go{" "}
              <Image
                src="/plane.png"
                className="m-2 justify-center items-center"
                alt="plane icon"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
