import React from 'react'
import Input from '../shared/common/Input'
import { Search } from 'lucide-react'

const ExploreTopics = () => {
  return (
    <>
      <div className="px-5 py-6">
        <h1 className='text-center font-bold text-gray-400 text-lg '>EXPLORE TRENDING TOPICS</h1>

        <div className="search relative flex items-center mx-12 py-6">
            <Search size={24} className='absolute left-4 text-gray-500 '/>
            <Input placeholder="Search for articles, authors, topics..." className="" type="text" />
        </div>

        <div className="topics flex-wrap">
            <div className="border border-gray-200 text-gray-400 flex space-x-2 w-fit px-5 py-3 rounded-full">
                💻 <h1>Technology</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default ExploreTopics
