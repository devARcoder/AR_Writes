import { Bell, Menu, Search, SquarePen, X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../shared/common/Input'
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import Button from '../shared/common/Button';
import Navbar from './Navbar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false); // Manage user login state
    const navigate = useNavigate();

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
    const closeSidebar = () => setIsSidebarOpen(false);

    // When Write is clicked
    const handleWriteClick = () => {
        if (!isLogged) {
            navigate('/accounts'); // Redirect to accounts if not logged in
        } else {
            console.log('Open Write Editor');
        }
    };


    return (
        <>
            <div className="flex justify-between items-center px-5 sm:px-7 md:px-8 py-3 bg-[#222]">
                {/* Sidebar Toggle for Mobile */}
                <div className="menu shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-1 py-1 rounded-md lg:hidden">
                    <Menu onClick={toggleSidebar} size={26} className="text-white cursor-pointer " />
                </div>

                {/* Logo */}
                <div className="side1">
                    <h1 className="text-white text-3xl font-bold">ARwrite</h1>
                </div>

                {/* Navbar for Desktop */}
                <div className="hidden lg:inline-block">
                  <Navbar />
                </div>

                {/* Right Side: Profile or Write Button */}
                <div className="side2 flex items-center space-x-3">
                    {isLogged ? (
                        <div className="profile bg-gray-200 rounded-full p-4"></div>
                    ) : (
                        <Button name="Get Started" onClick={handleWriteClick} />
                    )}

                    
                </div>
            </div>

            {/* Sidebar Overlay (click outside to close) */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-40" onClick={closeSidebar} />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-[#222] shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Sidebar Header */}
                <div className="flex justify-between items-center px-5 py-3">
                    <h1 className="text-white text-3xl font-bold">ARwrite</h1>
                    <div className="shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-1 py-1 rounded-md">
                        <X className="text-white cursor-pointer" size={28} onClick={closeSidebar} />
                    </div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Header;
