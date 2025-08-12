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
    <>
      {filteredData.map((post) => (
        <div className="text-white post-item" key={post.id || post.title}>
            <img className='h-1/1 w-full object-cover' src={post.coverImage} alt="" />
          <h1>{post.title}</h1>
          {/* Add other post details as needed */}
        </div>
      ))}
    </>
  );
};

export default FilterCatagory;