import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
const Breadcrumbs = ({cataName}) => {
  return (
    <>
        <div className="breadcrum flex items-center text-white text-sm md:text-md font-semibold">
          <Link to="/">Home</Link>
          <ChevronRight size={20} className="pt-1" />
          <Link className='text-gray-300' to="/">{cataName}</Link>
        </div>
    </>
  )
}

export default Breadcrumbs
