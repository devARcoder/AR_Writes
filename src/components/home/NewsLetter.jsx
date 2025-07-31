import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col px-6 border-b border-gray-700 pb-6 bg-[#222] text-white py-10 md:py-16 lg:py-20">
        <h1 className="text-white font-bold text-2xl text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-gray-200 text-center">
          Subscribe to our email newsletter to get the latest posts delivered
          right to your email.
        </p>

        {/* Wrapper for input and button */}
        <div className="mx-6 my-4 flex flex-col sm:flex-row sm:items-center sm:relative lg:justify-center sm:mx-auto md:mx-auto lg:mx-auto md:w-2/4 lg:w-1/3">
          <div className="w-full relative">
            <input
              placeholder="Enter Your Email"
              className="text-gray-300 border border-gray-600 focus:outline-none bg-[#1c1c1c] rounded-lg 
                px-3 py-3 text-base 
                md:py-2.5 md:text-sm 
                lg:py-3 lg:text-base 
                w-full shadow-[inset_0_-12px_9px_rgba(0,0,0,0.2)] pr-28 sm:pr-36"
            />
            {/* Button inside the input for larger screens */}
            <button
              className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-1 border-none text-gray-100 cursor-pointer 
                focus:outline-none bg-[#222] rounded-lg 
                px-4 py-2 text-sm 
                md:px-5 md:py-2 md:text-sm 
                lg:px-6 lg:py-3 lg:text-base 
                shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out"
            >
              Subscribe
            </button>
          </div>
          {/* Button for mobile below input */}
          <button
            className="sm:hidden mt-3 border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-lg 
              px-5 py-2 text-sm 
              shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out"
          >
            Subscribe
          </button>
        </div>
        <h1 className="text-white font-bold text-sm text-center">Pure inspiration, zero spam ✨</h1>
      </div>
    </>
  );
};

export default NewsLetter;
