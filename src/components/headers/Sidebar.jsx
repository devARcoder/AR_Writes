import React from 'react'
import Button from '../shared/common/Button'

const navigationLink = [
    {name: "Home"},
    {name: "About"},
    {name: "Trending"},
    {name: "Contact"},
]
const Sidebar = () => {
  return (
    <>
      <div className="text-white px-5 py-2 space-y-4">
        {navigationLink.map((navigate, i)=> (
            <ul className="px-4" key={i}>
                <li className='text-xl font-semibold hover:text-gray-200 py-2'>{navigate.name}</li>
            </ul>
        ))}

        <div className="flex items-center pt-6 p-4">
            <Button name="Login" className="" />
            <Button name="Signup" className="mx-3" />
        </div>

        <div className="social">

        </div>
      </div>
    </>
  )
}

export default Sidebar
 {/* <div className="hidden sm:inline-block relative flex items-center">
                <Search strokeWidth={1} size={23} className='absolute  left-4 top-2 text-white'/>
                <Input placeholder="Search" type="text" className="border border-gray-400 text-gray-100 focus:outline-none bg-[#222] focus:shadow-md shadow-gray-400  rounded-full pl-13 pr-3 py-2 inset-shadow-sm focus:inset-shadow-gray-400" />
            </div> */}