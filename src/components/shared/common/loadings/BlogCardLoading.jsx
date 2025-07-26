import React from "react";

const BlogCardLoading = () => {
  return (
    <div className="flex flex-col py-8 md:flex-row md:space-x-5 sm:mx-14 sm:my-8 md:mx-2 lg:my-0 border-b border-gray-600 animate-pulse">
      {/* Left Side Skeleton */}
      <div className="side1 md:w-[50%]">
        <div className="relative w-full h-48 sm:h-60 md:h-60 bg-gray-700 rounded-xl"></div>
      </div>

      {/* Right Side Skeleton */}
      <div className="side2 md:w-[50%] mt-4 md:mt-0 space-y-4">
        <div className="flex space-x-2 items-center">
          <div className="h-4 w-24 bg-gray-700 rounded"></div>
          <div className="h-4 w-16 bg-gray-700 rounded"></div>
        </div>
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
        </div>
        <div className="h-10 w-32 bg-gray-700 rounded mt-4 md:mt-10 lg:mt-16"></div>
      </div>
    </div>
  );
};

export default BlogCardLoading;
