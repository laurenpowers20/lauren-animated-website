"use client";
import "./timeline.css";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <div>
      <motion.div
        className="h-full "
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="timeline">
          <ul>
            <li>
              <div className="content">
                <h3>Tell me what you're thinking</h3>
                <p>
                  First, fill out this form to get started! It's okay if you're
                  uncertain about the specifics of your destination, timing, or
                  travel companions. All I require to begin is a rough idea of
                  the atmosphere you're aiming for and a ballpark budget.
                </p>
              </div>
              <div className="time">
                <h4> Step One</h4>{" "}
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Let's Chat! </h3>
                <p>
                  We’ll schedule a time to talk. We’ll go a little more in-depth
                  about your travel style and what you want to get out of your
                  trip.
                </p>
              </div>
              <div className="time">
                <h4>Step Two</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>I’ll start the research </h3>
                <p>
                  I’ll compile a selection of accommodation options, activities,
                  restaurants…whatever we’ve decided you are going to need. By
                  exchanging feedback and working together, we'll craft the
                  ideal itinerary tailored to match your individual travel
                  preferences.
                </p>
              </div>
              <div className="time">
                <h4>Step Three</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Book it!</h3>
                <p> Once we are done collaborating, we'll proceed to make all the necessary bookings.s</p>
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
