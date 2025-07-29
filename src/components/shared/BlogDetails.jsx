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
      <div className="breadcrum flex items-center my-4 text-white text-sm md:text-md font-semibold">
        <Link to="/">Home</Link>
        <ChevronRight size={20} className="pt-1"/>
        <Link to="/">{blog.category}</Link>
        <ChevronRight size={20} className="pt-1"/>
        <Link className="line-clamp-1 text-gray-200" to="#">{blog.title}</Link>
      </div>

      <div className=" mr-3 ">
        <div className="img relative">
        {/* Background Image */}
        <img className="w-full h-60 sm:h-73 md:h-85 lg:h-[25rem] rounded-xl md:rounded-2xl object-cover" src={blog.coverImage} alt={blog.title} />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full lg:h-[25rem] rounded-xl md:rounded-2xl w-full bg-black/30 z-10"></div>

        {/* Text Content */}
        <div className="head absolute top-10 sm:top-16 md:top-20 lg:top-24 left-4 right-4 z-20 text-white text-center space-y-5">
          <p className="text-sm sm:text-lg md:text-xl text-white font-semibold">
            {blog.author.name}  <span className="text-gray-100">on {blog.publishedAt}</span>
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:mx-24 font-bold md:mx-4 mt-1 line-clamp-3">{blog.title}</h1>

          <p className="hidden lg:block text-gray-100 text-lg">{blog.excerpt}</p>

          <div className="flex flex-wrap justify-center space-y-1 space-x-3 items-center md:mt-8">
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


      <div className="data text-white">
        <p>{blog.excerpt}</p>
        <p>{blog.content}</p>
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