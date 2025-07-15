import { AlignCenter, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import SearchBox from './SearchBox';

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearchBox, setIsOpenSearchBox] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(true);
  };

  const toggleSearchBox = () => {
    setIsOpenSearchBox(!isOpenSearchBox);
  };

  const toggleClosebar = () => {
    setIsOpen(false);
    setIsOpenSearchBox(false);
  };

  return (
    <>
      {/* Header */}
      <div className={`relative transition-all duration-300 ${isOpen || isOpenSearchBox ? 'blur-xs' : ''}`}>
        <div className="flex justify-between items-center p-6 bg-white z-20 relative">
          <div className="menu">
            <AlignCenter onClick={toggleSidebar} size={32} className="cursor-pointer" />
          </div>

          <div className="name">
            <h1 className='text-3xl'>devARcoder</h1>
          </div>

          <div className="search">
            <Search onClick={toggleSearchBox} size={32} className='rotate-90 cursor-pointer' />
          </div>
        </div>
      </div>

      {/* Slide-down SearchBox */}
      <div className={`absolute top-20 left-0 w-full z-40 transition-transform duration-500 ease-in-out ${isOpenSearchBox ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-white shadow-md p-6 w-64 sm:w-85 max-w-3xl mx-auto rounded-md">
            <div className="flex flex-col justify-center items-center">
                <X onClick={toggleClosebar} size={32} className="cursor-pointer" />
            </div>
          <SearchBox />
        </div>
      </div>

      {/* Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className='text-2xl'>Menu</h1>
          <X onClick={toggleClosebar} size={32} className="cursor-pointer" />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Headers;
