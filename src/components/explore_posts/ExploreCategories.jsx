import React, { useState } from 'react'
import { blogData } from '../../data/blogDataStore'
import PostCards from './PostCards'

const ExploreCategories = () => {
  const [visibleItems, setVisibleItems] = useState(12)
  const itemsPerLoad = 7
  const visibleBlogData = blogData.slice(0, visibleItems)

  const loadMore = () => {
   
    setVisibleItems(prev => prev + itemsPerLoad)
  }

  
  const hasMoreItems = visibleItems < blogData.length

  return (
    <>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  bg-[#222] px-4 py-4">
        {visibleBlogData.map((allBlogs, i) => (
          <PostCards key={i} blog={allBlogs}/>
        ))}
      </div>

      {hasMoreItems && (
        <button 
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </>
  )
}

export default ExploreCategories