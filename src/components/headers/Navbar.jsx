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
      <div className="text-white flex space-x-9">
        {navbarLinks.map((navigate, i) => (
            <ul className="" key={i}>
                <li className='text-xl font-semibold'>
                    <NavLink 
                        to={navigate.to}
                        className={({ isActive }) => 
                            isActive ? "text-gray-200 font-bold" : "hover:text-gray-200"
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