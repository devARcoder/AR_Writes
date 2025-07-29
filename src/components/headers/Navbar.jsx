import React from 'react'
const navbarLinks = [
    {name: "Home"},
    {name: "Explore"},
    {name: "Collaborate"},
    {name: "About"},
    {name: "Contact"},
]
const Navbar = () => {
  return (
    <>
      <div className="text-white flex space-x-9">
        {navbarLinks.map((navigate, i)=> (
            <ul className="" key={i}>
                <li className='text-xl font-semibold hover:text-gray-200'>{navigate.name}</li>
            </ul>
        ))}
      </div>
    </>
  )
}

export default Navbar
