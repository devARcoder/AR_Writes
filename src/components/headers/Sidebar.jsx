import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../shared/common/Button'

const navigationLink = [
    {name: "Home", to: "/"},
    {name: "Explore", to: "/explorecategories"},
    {name: "Collaborate", to: "/collaborate"},
    {name: "About", to: "/about"},
    {name: "Contact", to: "/contact"},
]

const Sidebar = ({onClose}) => {
  
  return (
    <div className="text-white px-5 py-2 space-y-4">
      {navigationLink.map((navigate, i) => (
          <ul className="px-4" key={i}>
              <li className='text-xl font-semibold py-2'>
                  <NavLink 
                      to={navigate.to}
                      onClick={onClose}
                      className={({ isActive }) => 
                          isActive 
                              ? "text-gray-200 font-bold" 
                              : "hover:text-gray-200"
                      }
                  >
                      {navigate.name}
                  </NavLink>
              </li>
          </ul>
      ))}

      <div className="flex items-center pt-6 p-4">
          <Button name="Login" className="" />
          <Button name="Signup" className="mx-3" />
      </div>

      <div className="social">
          {/* Social icons can go here */}
      </div>
    </div>
  )
}

export default Sidebar