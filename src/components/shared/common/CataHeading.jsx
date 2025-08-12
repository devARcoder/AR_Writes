import React from 'react'

const CataHeading = ({heading, paragraph}) => {
  return (
    <>
      <div className="text-white pt-6 space-y-2">
        <h1 className='text-3xl font-bold'>{heading}</h1>
        <p className='text-gray-300 w-[70%] md:w-[50%]'>{paragraph}</p>
      </div>
    </>
  )
}

export default CataHeading
