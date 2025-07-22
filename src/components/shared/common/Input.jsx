import React from 'react'

const Input = ({value, onChange, placeholder, type, className}) => {
  return (
    <>
      <input value={value} onChange={onChange} placeholder={placeholder} type={type} className={`border-none text-gray-100 focus:outline-none bg-[#222] rounded-full pl-12 pr-3 py-3 md:py-4 lg:py-5 md:text-xl lg:text-xl inset-shadow-sm w-full  inset-shadow-white 
  shadow-[inset_0_-12px_9px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_-12px_9px_rgba(0,0,0,0.8)] transform transition-transform duration-800 ease-in-out ${className}`} />
    </>
  )
}

export default Input
