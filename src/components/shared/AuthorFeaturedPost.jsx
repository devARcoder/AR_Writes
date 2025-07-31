import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";
const AuthorFeaturedPost = () => {
   const { id } = useParams();
      
        // // Find the blog by ID
        const blog = blogData.find((b) => String(b.id) === id);
  return (

    <div className="lg:sticky lg:top-6 rounded-xl overflow-hidden bg-[#1c1c1c] my-6 lg:mt-6 ">
      <h1 className="text-gray-400 text-md font-semibold pb-3 px-4 pt-3">Featured Post</h1>
      <div className="img relative rounded-xl mx-4 mb-3">
        {/* Background Image */}
        <img className="w-full h-64 rounded-xl object-cover" src={blog.author.featurePost.coverImage} alt={blog.author.featurePost.title} />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 rounded-xl"></div>

        {/* Category Tag */}
        <p className="absolute top-4 left-4 mt- bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full font-bold z-20 text-white">
          {blog.category}
        </p>

        {/* Text Content */}
        <div className="head absolute bottom-12 left-4 right-4 z-20 text-white">
          <p className="text-md font-medium text-gray-100">
            {blog.author.name} on <span>{blog.author.featurePost.date}</span>
          </p>

          <h1 className="text-3xl font-bold mt-1 line-clamp-2">{blog.author.featurePost.title}</h1>
          {/* <p className="text-sm sm:text-md text-gray-100 mt-2">{blog.author.featurePost.}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AuthorFeaturedPost;
