import React, { useState } from 'react'
import { blogData } from '../../data/blogDataStore'

const ExploreCategories = () => {
  const [visibleItems, setVisibleItems] = useState(12) // Start with 12 items
  const itemsPerLoad = 7 // How many more items to load each time

  // Slice the data based on how many items are currently visible
  const visibleBlogData = blogData.slice(0, visibleItems)

  const loadMore = () => {
    // Increase the number of visible items
    setVisibleItems(prev => prev + itemsPerLoad)
  }

  // Check if there are more items to load
  const hasMoreItems = visibleItems < blogData.length

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {visibleBlogData.map((allBlogs, i) => (
          <div className="" key={i}></div>
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