import React from 'react'
import { Link } from 'react-router-dom'
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
        {navbarLinks.map((navigate, i)=> (
            <ul className="" key={i}>
                <li className='text-xl font-semibold hover:text-gray-200'><Link to={navigate.to}>{navigate.name}</Link></li>
            </ul>
        ))}
      </div>
    </>
  )
}

export default Navbar
