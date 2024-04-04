"use client";
import "./timeline.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Timeline = () => {
  return (
    <div>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <h1 className="tracking-tighter">Process</h1>
        <div className="timeline">
          <ul>
            <li>
              <div className="content">
                <h3>Tell me what you&apos;re thinking</h3>
                <p>
                  First, fill out
                  <Link
                    className="underline"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd1ya_33-okUHjuiwVUhOZ8Ckn7MezMVD2xKY87l8H_Yg3TSQ/viewform?usp=sf_link"
                  >
                    {" "}
                    this form
                  </Link>{" "}
                  to get started! It&apos;s okay if you&apos;re uncertain about
                  the specifics of your destination, timing, or travel
                  companions. All I need to begin is a rough idea of the
                  atmosphere you&apos;re aiming for and a ballpark budget.
                </p>
              </div>
              <div className="time">
                <h4>Step One</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Let&apos;s Chat! </h3>
                <p>
                  We&apos;ll schedule a time to talk. We&apos;ll go a little
                  more in-depth about your travel style and what you want to get
                  out of your trip.
                </p>
              </div>
              <div className="time">
                <h4>Step Two</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>I&apos;ll start the research </h3>
                <p>
                  I&apos;ll compile a selection of accommodation options,
                  activities, restaurants…whatever we&apos;ve decided you will
                  need. By exchanging feedback and working together, we&apos;ll
                  craft the ideal itinerary tailored to match your individual
                  travel preferences.
                </p>
              </div>
              <div className="time">
                <h4>Step Three</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Book it!</h3>
                <p>
                  Once we are done collaborating, we&apos;ll proceed to make all
                  the necessary bookings.
                </p>
              </div>
              <div className="time">
                <h4>Step Four</h4>
              </div>
            </li>

            <div className="bottom"></div>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
