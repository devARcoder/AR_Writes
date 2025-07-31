import { Bell, Menu, Search, SquarePen, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleWriteClick = () => {
    if (!isLogged) {
      navigate("/accounts");
    } else {
      console.log("Open Write Editor");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 sm:px-7 md:px-8 py-3 bg-[#222]">
        <div className="menu shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-2 py-2 rounded-md lg:hidden">
          <Menu
            onClick={toggleSidebar}
            size={28}
            className="text-white cursor-pointer "
          />
        </div>

        {/* Logo */}
        <Link to="/">
          <div className="side1 shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-1 py-1 rounded-full">
            <img
              className="w-20 h-20 object-fit"
              src="/images/arb.png"
              alt=""
            />
          </div>
        </Link>

        
        <div className="hidden lg:inline-block">
          <Navbar />
        </div>

        <div className="side2 flex items-center space-x-3">
          {isLogged ? (
            <div className="profile bg-gray-200 rounded-full p-4 md:p-6"></div>
          ) : (
            <div
              className="shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-2 py-2 rounded-md"
              onClick={handleWriteClick}
            >
              <SquarePen size={28} className="text-white" />
            </div>
          )}
        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40" onClick={closeSidebar} />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#222] shadow-lg transform transition-transform duration-300 ease-in-out z-50
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex justify-between items-center px-5 py-3">
          <Link to="/">
            <div className="side1 shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-1 py-1 rounded-full">
              <img
                className="w-20 h-20 object-fit"
                src="/images/arb.png"
                alt=""
              />
            </div>
          </Link>
          <div className="shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] px-2 py-2 rounded-md">
            <X
              className="text-white cursor-pointer"
              size={28}
              onClick={closeSidebar}
            />
          </div>
        </div>

        <Sidebar onClose={closeSidebar} />
      </div>
    </>
  );
};

export default Header;
