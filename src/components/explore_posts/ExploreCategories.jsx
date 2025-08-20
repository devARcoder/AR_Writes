import React, { useState, useEffect } from 'react'
import { blogData } from '../../data/blogDataStore'
import PostCards from './PostCards'
import Button from '../shared/common/Button'
import ExploreCategoriesSkeleton from '../shared/common/loadings/ExploreCategoriesSkeleton' // Import the skeleton

const ExploreCategories = () => {
  const [visibleItems, setVisibleItems] = useState(9)
  const [isLoading, setIsLoading] = useState(true) // Add loading state
  const itemsPerLoad = 9
  const visibleBlogData = blogData.slice(0, visibleItems)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Simulate 1.5 second loading time
    
    return () => clearTimeout(timer)
  }, [])

  const loadMore = () => {
    // Show loading when loading more items
    setIsLoading(true)
    setTimeout(() => {
      setVisibleItems(prev => prev + itemsPerLoad)
      setIsLoading(false)
    }, 800) // Simulate loading delay
  }

  const hasMoreItems = visibleItems < blogData.length

  // Show skeleton while loading
  if (isLoading) {
    return <ExploreCategoriesSkeleton />
  }

  return (
    <>
      <div className="text-white bg-[#222] text-center py-6 md:py-8 md:py-12 px-4 md:px-14 space-y-2">
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-white/10 to-white bg-clip-text text-transparent'> Explore Without Limits</h1>
        <p className='text-gray-300'>Get inside the minds of writers, developers, designers, storytellers and more. Their words might spark your next idea.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:space-x-3  bg-[#222] px-4 md:px-8 lg:px-14 py-4">
        {visibleBlogData.map((allBlogs, i) => (
          <PostCards key={i} blog={allBlogs}/>
        ))}
      </div>

      <div className="bg-[#222] flex flex-col justify-center items-center ">
        {hasMoreItems && (
          <Button name="Load More" onClick={loadMore} className="animate-bounce"/>
        )}
      </div>
    </>
  )
}

export default ExploreCategories