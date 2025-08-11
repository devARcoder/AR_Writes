import React from 'react'
import Breadcrumbs from '../components/shared/common/Breadcrumbs'
import FilterCatagory from '../components/shared/FilterCatagory'
const News = () => {
  return (
    <>
      <div className="text-white bg-[#222] px-6 py-4 md:px-9 lg:px-16 lg:space-x-8">
              <Breadcrumbs cataName="News"/>
              
      
              <div className="grid grid-cols-1 md:grid-cols-2">
                  <FilterCatagory categoryName="News"/>
              </div>
            </div>
    </>
  )
}

export default News
