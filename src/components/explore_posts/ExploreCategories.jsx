import React from 'react'
import { blogData } from '../../data/blogDataStore'
const ExploreCategories = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {blogData.map((allData, i) => (
            <div className="" key={i}>
                <h1>{allData.title}</h1>
            </div>
        ))}
      </div>
    </>
  )
}

export default ExploreCategories
