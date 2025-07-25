import React from 'react'

const AboutAuthor = () => {
  return (
    <>
      <div className="bg-[#1c1c1c] w-[44%] rounded-xl p-8">
        <h1 className='text-gray-400 text-md font-semibold'>About</h1>

        <div className="flex items-center space-x-3 pt-4">
            <div className="img">
                <img className='rounded-full border-2 border-green-500 w-14 h-14 object-cover' src="https://randomuser.me/api/portraits/men/31.jpg" alt="" />
            </div>
            <div className="head">
                <h1 className='font-bold text-white text-lg'>Ali Raza</h1>
                <p className='text-gray-300'>Tech journalist</p>
            </div>
        </div>

        <p className='pt-4 text-gray-300'>Ali shares thoughtful insights and reflections on life, culture, and personal growth. His work explores the intersections of creativity and experience, offering readers unique perspectives.</p>

        <div className="flex items-center space-x-3">
            
        </div>

        <div className="flex space-x-3 items-center">

        </div>
      </div>
    </>
  )
}

export default AboutAuthor
