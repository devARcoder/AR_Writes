import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import BlogCardLoading from '../shared/common/loadings/BlogCardLoading';
import TopRatedAuthor from './TopRatedAuthor';
import TopRatedAuthorLoading from '../shared/common/loadings/TopRatedAuthorLoading';
import FeaturedPost from './FeaturedPost';
import FeaturedPostLoading from '../shared/common/loadings/FeaturedPostLoading';
import { blogData } from '../../data/blogDataStore';
import { topRatedAuthor, featuredPostData } from '../../data/data';

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:mx-8">
      {/* Left Column - Blog Cards */}
      <div className="lg:w-2/3">
        {loading
          ? Array(3).fill(null).map((_, i) => <BlogCardLoading key={i} />)
          : blogData.slice(0, 5).map((blog, i) => <BlogCard key={blog.id || i} blog={blog} />)}
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
