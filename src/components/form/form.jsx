"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "./LoadingSpinner";

function Form() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="h-2/3 lg:h-full lg:w-2/3 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 font-ovo"
      >
        <label>Your name:</label>
        <input type="text" name="user_name" className="bg-slate-300 h-30 " />

        <label>Where do you want to go? (If you have somewhere in mind!)</label>
        <input type="text" name="user_destination" className="bg-slate-300 h-30 " />

        <label>E-mail:</label>
        <input name="user_email" type="email" className="bg-gray-300 " />

        <button className=" buttons bg-neonPink-500 rounded-xl font-semibold text-white p-4">
          SEND
        </button>
        {success && (
          <span className="text-green-600 font-semibold">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-600 font-semibold">
            Something went wrong!
          </span>
        )}
      </form>
    </>
  );
}

export default Form;
