import React from "react";

const UsersListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 lg:gap-y-6 gap-y-4 animate-pulse">
      {[...Array(6)].map((_, i) => (
        <div className="flex justify-between items-center space-y-5 space-x-3 border-b border-gray-600 pt-4" key={i}>
          <div className="flex items-center space-x-2">
            {/* Avatar Skeleton */}
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            
            <div className="flex flex-col items-start space-y-2">
              {/* Name Skeleton */}
              <div className="h-4 bg-gray-700 rounded w-20"></div>
              
              {/* Technologies Skeleton */}
              <div className="h-3 bg-gray-700 rounded w-24"></div>
            </div>
          </div>

          {/* Connect Button Skeleton */}
          <div className="flex items-center space-x-2 border border-gray-700 px-2 py-1 rounded-xl bg-gray-800">
            <div className="w-4 h-4 bg-gray-700 rounded"></div>
            <div className="h-3 bg-gray-700 rounded w-12"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersListSkeleton;