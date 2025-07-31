import { ChevronRight, Linkedin, Twitter, Facebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";
import AboutAuthor from "./AboutAuthor";
import AuthorFeaturedPost from "./AuthorFeaturedPost";
import AuthotExperience from "./AuthorExperience";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p className="text-lg font-bold">Blog not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-700 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <> 
    <div className="flex flex-col lg:flex-row bg-[#222] px-6 py-4 md:px-9 lg:px-16 lg:space-x-8">

      <div className="lg:w-2/3">
        <div className="breadcrum flex items-center my-4 text-white text-sm md:text-md font-semibold">
          <Link to="/">Home</Link>
          <ChevronRight size={20} className="pt-1" />
          <Link to="/">{blog.category}</Link>
          <ChevronRight size={20} className="pt-1" />
          <Link className="line-clamp-1 text-gray-200" to="#">
            {blog.title}
          </Link>
        </div>

        <div className=" mr-3 ">
          <div className="img relative">
           
            <img
              className="w-full h-60 sm:h-73 md:h-85 lg:h-[25rem] rounded-xl md:rounded-2xl object-cover"
              src={blog.coverImage}
              alt={blog.title}
            />
            <div className="absolute top-0 left-0 h-full lg:h-[25rem] rounded-xl md:rounded-2xl w-full bg-black/30 z-10"></div>
            <div className="head absolute top-10 sm:top-16 md:top-20 lg:top-24 left-4 right-4 z-20 text-white text-center space-y-5">
              <p className="text-sm sm:text-lg md:text-xl text-white font-semibold">
                {blog.author.name}{" "}
                <span className="text-gray-100">on {blog.publishedAt}</span>
              </p>

              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:mx-24 font-bold md:mx-4 mt-1 line-clamp-3">
                {blog.title}
              </h1>

              <p className="hidden lg:block text-gray-100 text-lg">
                {blog.excerpt}
              </p>

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

        <div className="data text-white space-y-5 pt-8">
          <p>{blog.excerpt}</p>

          <p>{blog.content}</p>

          <h1 className="text-2xl font-bold">
            {blog.slug.charAt(0).toUpperCase() +
              blog.slug.slice(1)}
          </h1>
          <p>{blog.content.slice(1301)}</p>

          <p>{blog.content.slice(43, 320)}</p>
        </div>

        <div className="quotes bg-black/50 text-white mx-4 my-6 px-5 py-3 rounded-xl shadow-lg text-center">
          <span className="block text-4xl mb-1">“</span>
          <h1 className="text-lg md:text-xl font-semibold italic leading-relaxed">
            {blog.quotes}
          </h1>
          <span className="block text-4xl mt-1">”</span>
        </div>

        <p className="text-white">{blog.content.slice(100, 320)}</p>

        <div className="flex text-white justify-between items-center pt-12">
          <h1 className="font-bold">{blog.author.name}<span className="text-gray-200 text-sm font-semibold"> on {blog.publishedAt}</span></h1>

          <h1 className="bg-black/50 px-5 text-[17px] font-semibold py-0.5 border border-black/60 rounded-md">{blog.category}</h1>
        </div>


        <div className="flex items-center space-x-3 my-4 text-white">
          <h1 className="text-xl font-bold">Share Post on - </h1>
            <Linkedin className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            <Facebook className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            <Twitter className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-lg"/>
            
          </div>


      </div>
      <div className="lg:w-1/3 md:mr-25 lg:mr-0 lg:mt-6">

          <AboutAuthor/>
          <AuthorFeaturedPost/>
          <AuthotExperience/>
      </div>
    </div>
    </>
  );
};

export default BlogDetails;