import React from "react";
import Image from "../assets/email-subscribe.jpg";

const EmailSubscribe = () => {
  return (
    // Background Container
    <div className="h-screen bg-zinc-700 flex justify-center items-center">
      {/* Card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* Image */}
          <img
            src={Image}
            alt="Email Subscribe"
            className="object-fill rounded-xl h-80 md:h-64 md:rounded-r-none transform hover:scale-105 hover:rounded-l-xl duration-200"
          />
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="text-xl font-medium text-center text-white md:text-left">
              Get Diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
              Eat better and exercise better. Sign up for the Diet & Fitness
              newsletter
            </p>
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs outline-none focus:border-zinc-400 md:text-left md:placeholder:text-left"
              />
              <button className="px-5 py-3 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
