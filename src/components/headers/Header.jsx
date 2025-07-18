import { Bell, Search, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import Input from '../shared/common/Input'
import SearchBar from './SearchBar';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen ] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchOpen(prev => !prev)
    }
  return (
    <>
      <div className="flex justify-between items-center px-5 sm:px-7 md:px-8 py-3 border border-gray-200">
        <div className="side1 flex items-center space-x-4">
            <h1 className='text-gray-800 text-3xl font-bold'>ARwrite</h1>
            <div className="hidden sm:inline-block relative flex items-center">
                <Search strokeWidth={1} size={23} className='absolute  left-4 top-2 text-gray-500'/>
                <Input placeholder="Search" type="text" className="border-none focus:outline-none bg-gray-100 rounded-full pl-13 pr-3 py-2" />
            </div>
        </div>

        <div className="side2 flex items-center space-x-8">
            <div className="writes hidden md:flex items-center space-x-1">
                <SquarePen strokeWidth={1} className='text-gray-600' size={24}/>
                <p className='text-gray-700'>write</p>
            </div>
            <Search onClick={toggleSearchBar} className='text-gray-600 sm:hidden' size={24}/>
            <Bell strokeWidth={1} className='text-gray-600' size={24}/>

            <div className="profile bg-gray-200 rounded-full p-4">
                
            </div>
        </div>
      </div>

      {isSearchOpen && <SearchBar/>}
    </>
  )
}

export default Header
