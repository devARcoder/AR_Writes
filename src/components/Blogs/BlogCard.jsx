import React from 'react'

const BlogCard = () => {
  return (
    <div className=''>
     <di className="img relative">
      <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg" alt="" />
      <div className="flex space-x-4 absolute top-8 left-8">
        <p className='bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm'>BUSINESS</p>
        <p className='bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm'>NEWS</p>
      </div>
     </di>

     <div className="flex space-x-4">
      <h1 className='text-white'>Author name</h1>
      <p className='text-gray-200'>on july 16, 2025</p>
     </div>

     <div className="headings">
      <h1>How Tech Shapes the Future of Work in 2025</h1>
      <p>In today’s ever-evolving world, storytelling has become a powerful tool for connection. Revision provides a unique platform for individuals to share their stories.</p>
     </div>
     
    </div>
  )
}

export default BlogCard
