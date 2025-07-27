import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // // Find the blog by ID
  const blog = blogData.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p className="text-lg font-bold">Blog not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-gray-700 rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="bg-[#222] px-6 py-4 md:px-9 lg:px-16">
      <div className="breadcrum flex items-center my-4 text-white">
        <Link to="/">Home</Link>
        <ChevronRight size={20} className="pt-1"/>
        <Link to="/">{blog.category}</Link>
        <ChevronRight size={20} className="pt-1"/>
        <Link className="line-clamp-1" to="#">{blog.title}</Link>
      </div>

      <div className=" mr-3">
        <div className="img relative">
        {/* Background Image */}
        <img className="w-full h-70 sm:h-85 md:h-96 lg:h-[33rem] rounded-xl md:rounded-2xl object-cover" src={blog.coverImage} alt={blog.title} />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full lg:h-[33rem] rounded-xl md:rounded-2xl w-full bg-black/30 z-10"></div>

        {/* Text Content */}
        <div className="head absolute flex flex-col justify-center items-center top-15 sm:top-24 lg:top-34 left-4 right-4 z-20 text-white text-center space-y-5">
          <p className="text-md sm:text-lg md:text-xl text-white">
            {blog.author.name}  <span className="text-gray-300">on {blog.publishedAt}</span>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:mx-24 font-bold md:mx-4 mt-1 line-clamp-3">{blog.title}</h1>

          <div className="flex space-x-3 items-center md:mt-8">
  {blog.tags.map((tag, index) => (
    <p
      key={index}
      className="bg-black/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm sm:text-[16px] cursor-pointer hover:bg-white/30 transition"
    >
      {tag}
    </p>
  ))}
</div>

          
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default BlogDetails;
{/* <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      >
        Back to Blogs
      </button> */}