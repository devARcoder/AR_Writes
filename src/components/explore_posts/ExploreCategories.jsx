import React, { useState } from 'react'
import { blogData } from '../../data/blogDataStore'
import PostCards from './PostCards'
import Button from '../shared/common/Button'

const ExploreCategories = () => {
  const [visibleItems, setVisibleItems] = useState(9)
  const itemsPerLoad = 9
  const visibleBlogData = blogData.slice(0, visibleItems)

  const loadMore = () => {
   
    setVisibleItems(prev => prev + itemsPerLoad)
  }

  
  const hasMoreItems = visibleItems < blogData.length

  return (
    <>
    <div className="text-white bg-[#222] text-center py-6 md:py-8 md:py-12 px-4 md:px-14 space-y-2">
      <h1 className='text-3xl md:text-4xl font-bold'> Explore Without Limits</h1>
      <p className='text-gray-300'>Get inside the minds of writers, developers, designers, storytellers and more. Their words might spark your next idea.</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:space-x-3  bg-[#222] px-4 md:px-8 lg:px-14 py-4">
        {visibleBlogData.map((allBlogs, i) => (
          <PostCards key={i} blog={allBlogs}/>
        ))}
      </div>

<div className="bg-[#222] flex flex-col justifty-center items-center ">

      {hasMoreItems && (
        <Button name="Load More" onClick={loadMore} className="animate-bounce"/>
      )}
      </div>
    </>
  )
}

export default ExploreCategories