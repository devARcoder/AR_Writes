import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import BlogCardLoading from '../shared/common/loadings/BlogCardLoading';
import TopRatedAuthor from './TopRatedAuthor';
import TopRatedAuthorLoading from '../shared/common/loadings/TopRatedAuthorLoading';
import FeaturedPost from './FeaturedPost';
import FeaturedPostLoading from '../shared/common/loadings/FeaturedPostLoading';
import { blogData } from '../../data/blogDataStore';
import { topRatedAuthor, featuredPostData } from '../../data/data';

const Blogs = ({ blogs }) => {
  const [loading, setLoading] = useState(true);       // Page loading state
  const [visibleBlogs, setVisibleBlogs] = useState(5); // Start with 5 blogs
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleBlogs((prev) => prev + 5);
      setIsLoadingMore(false);
    }, 1200); // Simulate a network delay
  };

  // Blogs to display
  const displayBlogs = blogs !== undefined ? blogs.slice(0, visibleBlogs) : blogData.slice(0, visibleBlogs);

  // Suggestions for "no blogs found"
  const suggestions = blogData.slice(0, 3).map((blog) => blog.title);
  const authorSuggestions = blogData.slice(0, 2).map((blog) => blog.author.name);
  const combinedSuggestions = [...suggestions, ...authorSuggestions];

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:mx-8">
      {/* Left Column - Blog Cards */}
      <div className="lg:w-2/3">
        {loading ? (
          Array(3).fill(null).map((_, i) => <BlogCardLoading key={i} />)
        ) : displayBlogs.length > 0 ? (
          <>
            {displayBlogs.map((blog, i) => (
              <BlogCard key={blog.id || i} blog={blog} />
            ))}

            {/* Load More Button */}
            {visibleBlogs < blogData.length && (
              <div className="text-center py-6">
                {isLoadingMore ? (
                  <BlogCardLoading />
                ) : (
                  <button
                    onClick={handleLoadMore}
                    className="px-5 py-2 bg-gray-700 text-white rounded-lg animate-bounce hover:bg-gray-600 transition"
                  >
                    Load More
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10 text-gray-400">
            <p className="font-semibold text-lg">No blogs found.</p>
            <p className="mt-2">
              Try using keywords like{' '}
              {combinedSuggestions.map((word, index) => (
                <span key={index} className="text-gray-200 font-medium">
                  {`"${word}"`}
                  {index < combinedSuggestions.length - 1 ? ', ' : ''}
                </span>
              ))}
              .
            </p>
          </div>
        )}
      </div>

      {/* Right Column - Author & Featured Posts */}
      <div className="lg:w-1/3 flex flex-col space-y-6 mt-6 lg:mt-0">
        {loading ? <TopRatedAuthorLoading /> : <TopRatedAuthor {...topRatedAuthor} />}
        {loading ? <FeaturedPostLoading /> : <FeaturedPost {...featuredPostData} />}
      </div>
    </div>
  );
};

export default Blogs;
