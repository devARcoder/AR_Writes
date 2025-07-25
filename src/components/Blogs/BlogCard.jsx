import React from "react";
import Button from "../shared/common/Button";
import { AlarmClock } from "lucide-react";
const BlogCard = () => {
  return (
    <div className="flex flex-col py-8 md:flex-row md:space-x-5 sm:mx-14 sm:my-8 md:mx-2 lg:my-0 border-b border-gray-600 group">
      <div className="side1 md:w-[50%]">
        <div className="img relative cursor-pointer  w-full h-48 sm:h-60 md:h-60">
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg"
            alt=""
          />
          <div className="flex space-x-4 absolute top-4 left-4">
            <p className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">
              BUSINESS
            </p>
            <p className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">
              NEWS
            </p>
          </div>
          <p
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white font-semibold px-3 py-1 rounded-lg text-sm flex items-center
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <AlarmClock className="mr-2" size={18} /> 6 Min Read
          </p>
        </div>
      </div>

      <div className="side2 md:w-[50%]">
        <div className="flex space-x-2 mt-4 md:mt-0 items-center ">
          <h1 className="text-white font-semibold text-[17px] hover:text-gray-300 cursor-pointer">Author name</h1>
          <p className="text-gray-200 text-[15px]">on july 16, 2025</p>
        </div>
        <div className="headings">
          <h1 className="text-2xl font-bold pb-1 hover:text-gray-300 cursor-pointer">
            How Tech Shapes the Future of Work in 2025
          </h1>
          <p className="text-gray-200 font-small line-clamp-3 md:line-clamp-2">
            In today’s ever-evolving world, storytelling has become a powerful
            tool for connection. Revision provides a unique platform for
            individuals to share their stories.
          </p>
        </div>
        <div className="button mt-4 md:mt-10 lg:mt-16">
          <Button name="Discover More" className="" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
