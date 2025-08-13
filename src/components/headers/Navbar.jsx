import React from 'react'
import { NavLink } from 'react-router-dom'

const navbarLinks = [
    {name: "Home", to: "/"},
    {name: "Explore", to: "/explorecategories"},
    {name: "Collaborate", to: "/collaborate"},
    {name: "About", to: "/about"},
    {name: "Contact", to: "/contact"},
]

const Navbar = () => {
  return (
    <>
      <div className="text-white flex space-x-5">
        {navbarLinks.map((navigate, i) => (
            <ul className="" key={i}>
                <li className='text-xl font-semibold'>
                    <NavLink 
                        to={navigate.to}
                        className={({ isActive }) => 
                            isActive ? "text-gray-200 font-bold bg-black/30 px-5 py-1.5 rounded-lg" : "hover:text-gray-200 px-5 py-1.5"
                        }
                    >
                        {navigate.name}
                    </NavLink>
                </li>
            </ul>
        ))}
      </div>
    </>
  )
}

export default Navbar