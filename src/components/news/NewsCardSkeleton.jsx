// src/components/news/NewsCardSkeleton.jsx
import React from "react";

const NewsCardSkeleton = () => {
  return (
    <div className=" rounded-lg overflow-hidden shadow p-3 bg-none animate-pulse">
      <div className="w-full h-50 bg-gray-300 rounded-md"></div>
      <div className="mt-3 h-5 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-full"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-2/3"></div>
    </div>
  );
};

export default NewsCardSkeleton;
