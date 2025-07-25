import React from 'react'
import { exploreTopicsData } from '../../data/data'
import { Search } from 'lucide-react'
import Input from '../shared/common/Input'
import BlogCard from '../Blogs/BlogCard'
import Blogs from '../Blogs/Blogs'
const ExploreTopics = () => {
  return (
    <>
     <div className="px-5 py-6">
      {/* Heading */}
      <h1 className="text-center font-bold text-gray-400 text-sm md:text-xl">
        EXPLORE TRENDING TOPICS
      </h1>

      {/* Search */}
      <div className="relative flex items-center  mx-6 sm:mx-32 md:mx-36 lg:mx-44 xl:mx-85 py-6">
        <Search size={24} className="absolute left-4 text-gray-500" />
        <Input
          placeholder="Search across all news..."
          type="text"
        />
      </div>

      
      <div className="flex flex-wrap px-3 lg:px-44 space-x-3 items-center justify-center">
        {exploreTopicsData.map((item) => {
          const Icon = item.icon;
          
          return (
            <div
              key={item.category}
              
              className={`flex items-center space-x-2 border border-[rgba(0,0,0,0.2)] 
                w-fit bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.3)] px-6 py-3 my-3 rounded-full cursor-pointer transition-all duration-300 
                `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-bold">{item.category}</span>
            </div>
          );
        })}
      </div>

      <Blogs/>
    </div> 
    </>
  )
}

export default ExploreTopics
