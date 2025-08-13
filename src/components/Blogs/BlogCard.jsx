import React from "react";
import Button from "../shared/common/Button";
import { AlarmClock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate(`/blog/${blog.id}`); // Navigate to blog details using ID
  };

  return (
    <div className="flex flex-col py-8 md:flex-row md:space-x-5 sm:mx-14 sm:my-8 md:mx-2 lg:my-0 border-b border-gray-600 group">
      <div className="side1 md:w-[50%] ">
        <div className="img relative cursor-pointer w-full h-48 sm:h-60 md:h-60 inset-shadow-gray-100 shadow-[inset_0_-20px_5px_rgba(0,0,0,0.6)] ">
          <img className="w-full h-full object-cover rounded-xl " src={blog.coverImage} alt="" />
          <div className="flex space-x-4 absolute top-4 left-4">
            <p className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">{blog.category}</p>
            <p className="bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg text-xs">{blog.slug}</p>
          </div>
          <p className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white font-semibold px-3 py-1 rounded-lg text-xs flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <AlarmClock className="mr-2" size={16} /> {blog.readTime}
          </p>
        </div>
      </div>

      <div className="side2 md:w-[50%]">
        <div className="flex space-x-2 mt-4 md:mt-0 items-center ">
          <h1 className="text-white font-semibold text-[17px] hover:text-gray-300 cursor-pointer">{blog.author.name}</h1>
          <p className="text-gray-200 text-[15px]"><span className="text-gray-200 text-[15px] pr-2">on</span>{blog.publishedAt}</p>
        </div>
        <div className="headings">
          <h1 className="text-2xl font-bold pb-1 hover:text-gray-300 cursor-pointer">{blog.title}</h1>
          <p className="text-gray-200 font-small line-clamp-3 md:line-clamp-2">{blog.excerpt}</p>
        </div>
        <div className="button mt-4 md:mt-10 lg:mt-16">
          <Button name="Discover More" onClick={handleDiscoverClick} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
