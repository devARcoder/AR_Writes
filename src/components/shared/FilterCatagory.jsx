import React from 'react';
import { blogData } from '../../data/blogDataStore';
import { useNavigate } from "react-router-dom";

const FilterCatagory = ({ categoryName }) => {
    const navigate = useNavigate();

  const viewBlogDeatils = (id) => {
    navigate(`/blog/${id}`); // Navigate to blog details using ID
  };
  
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
        <div 
  onClick={() => viewBlogDeatils(post.id)} 
  className="text-white post-item cursor-pointer group" 
  key={post.id || post.title}
>
  <div className="relative overflow-hidden rounded-xl">
    <img 
      className='h-55 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={post.coverImage} 
      alt="" 
    />
    <h3 className='absolute top-6 left-6 bg-white text-black text-sm px-2 py-1 rounded-md font-semibold'>{post.category}</h3>
  </div>

  <div className="flex space-x-2 mt-4 md:mt-3 items-center">
    <h1 className="text-white font-semibold text-[15px] hover:text-gray-300 cursor-pointer">{post.author.name}</h1>
    <p className="text-gray-200 text-[13px]">
      <span className="text-gray-200 text-[13px] pr-2">on</span>{post.publishedAt}
    </p>
  </div>
  <h1 className="text-2xl font-bold pb-1 hover:text-gray-300 cursor-pointer">{post.title}</h1>
  <p className="text-gray-200 font-small line-clamp-3 md:line-clamp-2">{post.excerpt}</p>
</div>
      ))}
    </>
  );
};

export default FilterCatagory;