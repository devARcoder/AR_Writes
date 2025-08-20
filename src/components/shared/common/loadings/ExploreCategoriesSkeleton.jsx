import React from 'react'

const ExploreCategoriesSkeleton = () => {
  return (
    <>
      
      <div className="text-white bg-[#222] text-center py-6 md:py-8 md:py-12 px-4 md:px-14 space-y-2">
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-white/10 to-white bg-clip-text text-transparent'> Explore Without Limits</h1>
        <p className='text-gray-300'>Get inside the minds of writers, developers, designers, storytellers and more. Their words might spark your next idea.</p>
      </div>
      {/* Blog Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:space-x-3 bg-[#222] px-4 md:px-8 lg:px-14 py-4">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg mb-6">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-700 rounded-xl"></div>
            
            <div className="p-4">
              {/* Title Skeleton */}
              <div className="h-5 bg-gray-700 rounded w-3/4 mb-3"></div>
              
              {/* Excerpt Skeleton */}
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-700 rounded w-full"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                <div className="h-3 bg-gray-700 rounded w-4/6"></div>
              </div>
              
              {/* Author & Date Skeleton */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-700 rounded-full mr-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-16"></div>
                </div>
                <div className="h-3 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button Skeleton */}
      <div className="bg-[#222] flex flex-col justify-center items-center py-6">
        <div className="h-10 bg-gray-700 rounded-full w-32"></div>
      </div>
    </>
  )
}

export default ExploreCategoriesSkeleton