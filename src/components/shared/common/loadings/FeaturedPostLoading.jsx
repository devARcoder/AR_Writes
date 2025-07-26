import React from "react";

const FeaturedPostLoading = () => {
  return (
    <div className="lg:sticky lg:top-10 overflow-hidden animate-pulse">
      {/* Heading */}
      <div className="h-4 w-32 bg-gray-700 rounded mb-4"></div>

      {/* Image Skeleton */}
      <div className="relative w-full h-64 bg-gray-700 rounded-xl">
        {/* Category Tag Placeholder */}
        <div className="absolute top-4 left-4 h-5 w-16 bg-gray-600 rounded-full"></div>

        {/* Text Content */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <div className="h-3 w-1/3 bg-gray-600 rounded"></div>
          <div className="h-5 w-3/4 bg-gray-600 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-600 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostLoading;
