import React from 'react'
import { blogData } from '../../data/blogDataStore'
const TopViewsUsers = () => {
  const topViews = blogData.filter((views) => views.views >= 550 )
  // const cata = blogData.filter((views) => views.category === "News" )
  
  return (
    <>
      <div className="">
        {topViews.map((users, i) => (
          <div className="" key={i}>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default TopViewsUsers
