import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contactus = () => {
  const form = useRef();
  const [state, handleSubmit] = useForm("https://formspree.io/f/xnnjgere"); // Replace with your Formspree ID

  return (
    <div
      style={{ animation: "slideInFromLeft 1s ease-out", backgroundColor: "transparent" }}
      className="max-w-md mx-auto mt-36 rounded-xl shadow-2xl overflow-hidden p-8 space-y-6"
    >
      {state.succeeded ? (
        <h2 className="text-center text-2xl font-bold text-white">Thank You!</h2>
      ) : (
        <>
          <h2
            style={{ animation: "appear 2s ease-out" }}
            className="text-center text-3xl font-extrabold text-white"
          >
            Contact Us
          </h2>
          <p
            style={{ animation: "appear 3s ease-out" }}
            className="text-center text-gray-300"
          >
            Fill out the form and we will get back to you.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                placeholder="Your Name"
                className="peer h-10 w-full border-b-2 border-gray-500 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="name"
                name="name"
                type="text"
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
                htmlFor="name"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                placeholder="Your Email"
                className="peer h-10 w-full border-b-2 border-gray-500 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="email"
                name="email"
                type="email"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <label
                className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
                htmlFor="email"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                placeholder="Your Message"
                className="peer h-24 w-full border-b-2 border-gray-500 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id="message"
                name="message"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <label
                className="absolute left-0 -top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-400 peer-focus:text-sm"
                htmlFor="message"
              >
                Message
              </label>
            </div>

            <button
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Contactus;
