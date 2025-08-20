import React, { useState } from 'react';
import { exploreTopicsData } from '../../data/data';
import { blogData } from '../../data/blogDataStore';
import { Search } from 'lucide-react';
import Input from '../shared/common/Input';
import Blogs from '../Blogs/Blogs';
import { Link } from 'react-router-dom';

const ExploreTopics = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  

  // Create a flat list of searchable keywords (titles + author names)
  const keywords = [
    ...blogData.map((blog) => blog.title),
    ...blogData.map((blog) => blog.author.name),
  ];

  // Filter blogs based on title or author name
  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-suggestions based on input
  const filteredSuggestions = keywords.filter((word) =>
    word.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
    <>
    <div className="px-5 py-6 ">
      
      {/* Heading */}
      <h1 className="text-center font-bold text-gray-400 text-sm md:text-xl">
        EXPLORE TRENDING TOPICS
      </h1>

      {/* Search with Suggestions */}
      <div className="relative flex flex-col mx-6 sm:mx-32 md:mx-36 lg:mx-44 xl:mx-85 py-6">
        <div className="relative flex items-center">
          <Search size={24} className="absolute left-4 text-gray-500" />
          <Input
            placeholder="Search across all news..."
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(e.target.value.trim() !== '');
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onFocus={() => {
              if (searchQuery.trim() !== '') setShowSuggestions(true);
            }}
          />
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="absolute top-20 bg-[#1c1c1c] w-full rounded-lg shadow-lg border border-gray-700 z-50">
            {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
              <div
                key={index}
                className="px-4 py-2 text-gray-200 hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap px-3 lg:px-44 space-x-3 items-center justify-center">
        {exploreTopicsData.map((item) => {
          const Icon = item.icon;
          return (
            <Link to={item.to}>
            <div
              key={item.category}
              className="flex items-center space-x-2 border border-[rgba(0,0,0,0.2)] 
              w-fit bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.3)] px-6 py-3 my-3 rounded-full cursor-pointer transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="font-bold">{item.category}</span>
            </div>
              </Link>
          );
        })}
      </div>

      
      <Blogs blogs={filteredBlogs} />
    </div>
    </>
  );
};

export default ExploreTopics;
