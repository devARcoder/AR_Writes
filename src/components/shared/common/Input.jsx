import React from 'react'

const Input = ({placeholder, type, className}) => {
  return (
    <>
      <input placeholder={placeholder} type={type} className={`border-none text-gray-100 focus:outline-none bg-[#222] rounded-full pl-12 pr-3 py-3 inset-shadow-sm w-full  inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out ${className}`} />
    </>
  )
}

export default Input
