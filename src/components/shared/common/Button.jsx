import React from 'react'

const Button = ({name, className, onClick}) => {
  return (
    <>
      <button className={`border-none text-gray-100 focus:outline-none bg-[#222] rounded-full px-7 py-2 inset-shadow-sm inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out ${className}`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button
