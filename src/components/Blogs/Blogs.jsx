import React from 'react'
import BlogCard from './BlogCard'
import TopRatedAuthor from './TopRatedAuthor'
import FeaturedPost from './FeaturedPost'
import { blogData } from '../../data/blogDataStore'

const Blogs = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:mx-8">
      {/* Left Column - Blog Cards */}
      <div className="lg:w-2/3">
        {blogData.slice(0, 5).map((blog, i) => (
          <BlogCard key={blog.id || i} blog={blog} />
        ))}
      </div>

      {/* Right Column - Author & Featured Posts */}
      <div className="lg:w-1/3 flex flex-col space-y-6 mt-6 lg:mt-0">
        <TopRatedAuthor />
        <FeaturedPost />
      </div>
    </div>
  )
}

export default Blogs
