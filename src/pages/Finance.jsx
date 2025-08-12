import React from 'react'
import Breadcrumbs from '../components/shared/common/Breadcrumbs'
import FilterCatagory from '../components/shared/FilterCatagory'
import CataHeading from '../components/shared/common/CataHeading'

const Finance = () => {
    
  return (
    <>
      <div className="text-white bg-[#222] px-6 py-4 md:px-9 lg:px-16 lg:space-x-8">
        <Breadcrumbs cataName="Finance"/>

        <CataHeading heading="Finance" paragraph="Stay ahead of the curve with the newest developments in technology, from cutting-edge gadgets to breakthroughs in AI, cybersecurity, and beyond."/>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            <FilterCatagory categoryName="Finance"/>
        </div>
      </div>
    </>
  )
}

export default Finance
