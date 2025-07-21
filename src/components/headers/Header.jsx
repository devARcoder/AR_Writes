import { Bell, Menu, Search, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import Input from '../shared/common/Input'
import SearchBar from './SearchBar';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen ] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSearchBar = () => {
        setIsSearchOpen(prev => !prev)
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }


  return (
    <>
      <div className="flex justify-between items-center px-5 sm:px-7 md:px-8 py-3 border-none bg-[#222]">
        <div className="menu">
          <Menu onClick={toggleSidebar} size={26} className='text-white cursor-pointer'  />
        </div>
        <div className="side1  ">
            <h1 className='text-white text-3xl font-bold'>ARwrite</h1>
            {/* <div className="hidden sm:inline-block relative flex items-center">
                <Search strokeWidth={1} size={23} className='absolute  left-4 top-2 text-white'/>
                <Input placeholder="Search" type="text" className="border border-gray-400 text-gray-100 focus:outline-none bg-[#222] focus:shadow-md shadow-gray-400  rounded-full pl-13 pr-3 py-2 inset-shadow-sm focus:inset-shadow-gray-400" />
            </div> */}
        </div>

        <div className="side2 flex items-center space-x-3">
            <div className="writes hidden md:flex items-center space-x-1">
                <SquarePen strokeWidth={1} className='text-white' size={24}/>
                <p className='text-white'>write</p>
            </div>
            <Search onClick={toggleSearchBar} className='hidden sm:text-white' size={24}/>
            <Bell strokeWidth={1} className='hidden text-white' size={24}/>

            <div className="profile bg-gray-200 rounded-full p-4">
                
            </div>
        </div>
      </div>

      {isSearchOpen && <SearchBar/>}
    </>
  )
}

export default Header
