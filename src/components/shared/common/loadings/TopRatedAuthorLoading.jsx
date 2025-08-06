import React from "react";

const TopRatedAuthorLoading = () => {
  return (
    <div className="bg-[#1c1c1c] w-full rounded-xl p-8 inset-shadow-sm animate-pulse">
      {/* Heading */}
      <div className="h-4 w-40 bg-gray-700 rounded"></div>

      {/* Author Info */}
      <div className="flex items-center space-x-3 pt-4">
        <div className="rounded-full bg-gray-700 w-14 h-14"></div>
        <div className="flex flex-col space-y-2">
          <div className="h-4 w-28 bg-gray-700 rounded"></div>
          <div className="h-3 w-20 bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Intro */}
      <div className="pt-4 space-y-2">
        <div className="h-3 w-full bg-gray-700 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
        <div className="h-3 w-4/6 bg-gray-700 rounded"></div>
      </div>

      {/* Location */}
      <div className="flex items-center space-x-2 pt-4">
        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
        <div className="h-3 w-32 bg-gray-700 rounded"></div>
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 items-center pt-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-6 h-6 bg-gray-700 rounded-full"></div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedAuthorLoading;
