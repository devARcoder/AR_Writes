import React from 'react'
import BlogCard from './BlogCard'
import AboutAuthor from './AboutAuthor'
import FeaturedPost from './FeaturedPost'

const Blogs = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:space-x-3">

        <BlogCard/>
        <AboutAuthor/>
      </div>
      <FeaturedPost/>
    </>
  )
}

export default Blogs
