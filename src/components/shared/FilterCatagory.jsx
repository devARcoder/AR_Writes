import React from 'react';
import { blogData } from '../../data/blogDataStore';

const FilterCatagory = ({ categoryName }) => {
  // Filter data by category (case insensitive)
  const filteredData = blogData.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Handle case when no posts are found
  if (filteredData.length === 0) {
    return <div className="text-white">No posts found in the {categoryName} category.</div>;
  }

  return (
    <div className="category-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:space-x-3  bg-[#222] px-4 md:px-8 lg:px-14 py-4">
      {filteredData.map((post) => (
        <div className="text-white post-item" key={post.id || post.title}>
            <img className='w-40 h-40' src={post.coverImage} alt="" />
          <h1>{post.title}</h1>
          {/* Add other post details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FilterCatagory;