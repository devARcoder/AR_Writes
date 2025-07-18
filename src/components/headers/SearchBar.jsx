import { Search } from 'lucide-react'
import React from 'react'
import Input from '../shared/common/Input'

const SearchBar = () => {
  return (
    <div className="w-full px-4 py-3 bg-white rounded-lg shadow mt-4 space-y-5">
      <div className="relative w-full mb-4 px-3">
        <Search
          strokeWidth={1}
          size={20}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <Input
          placeholder="Search"
          type="text"
          className="w-full border border-gray-200 focus:outline-none rounded-full pl-12 pr-4 py-2"
        />
      </div>
      
      <div className="px-4 py-5">
        <h1 className="font-semibold text-2xl text-gray-800 mb-1">Recent searches</h1>
      <p className="text-gray-500 text-sm">You have no recent searches</p>
      </div>
    </div>
  )
}

export default SearchBar
