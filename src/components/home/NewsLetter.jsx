import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col  mx-6">
        <h1 className="text-white font-bold text-2xl text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-gray-200 text-center">
          Subscribe to our email newsletter to get the latest posts delivered
          right to your email.
        </p>

        <div className=" m-6">
          <div className="w-full">
            <input
              placeholder="Enter Your Email"
              className="text-gray-300 focus:outline-none bg-[#1c1c1c] rounded-lg px-3 py-3 md:py-4 lg:py-5 md:text-xl lg:text-xl inset-shadow-sm w-full inset-shadow-sm inset-shadow-[#1c1c1c] shadow-[inset_0_-12px_9px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div className="btn mt-3">
            <button
              className="border-none text-gray-100 cursor-pointer focus:outline-none bg-[#222] rounded-lg px-7 py-1.5 inset-shadow-sm inset-shadow-[#1c1c1c] 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out w-[100%]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
