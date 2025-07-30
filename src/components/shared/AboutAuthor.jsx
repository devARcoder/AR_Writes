import { MapPin, Linkedin, Github, Facebook, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blogData } from "../../data/blogDataStore";

const AboutAuthor = () => {
    const { id } = useParams();
    
      // // Find the blog by ID
      const blog = blogData.find((b) => String(b.id) === id);
  return (
    <div className=" bg-[#1c1c1c] w-full rounded-xl p-8 inset-shadow-xs w-full  inset-shadow-black/20 lg:mt-6">
      {/* Heading */}
      <h1 className="text-gray-400 text-md font-semibold">About Author</h1>

      {/* Author Info */}
      <div className="flex items-center space-x-3 pt-4">
        <div className="img">
          <img
            className="rounded-full w-18 h-14 object-cover"
            src={blog.author.avatar}
            alt={blog.author.name}
          />
        </div>
        <div className="head">
          <h1 className="font-bold text-white text-lg">{blog.author.name}</h1>
          <p className="text-gray-300 text-sm">{blog.author.bio}</p>
        </div>
      </div>

      {/* Intro */}
      <p className="pt-4 text-gray-300 text-md leading-relaxed">{blog.excerpt}</p>

      {blog.author.location ? (
  <div className="flex items-center space-x-2 pt-4 text-gray-300">
    <MapPin className="w-5 h-5" />
    <span className="text-sm">
      {blog.author.location.country}, {blog.author.location.city}
    </span>
  </div>
) : (
  <p className="text-gray-400 pt-4 text-sm">Location Not Found</p>
)}


      <div className="flex items-center space-x-3 mt-5 text-white">
                
                  <Linkedin className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-full"/>
                  <Github className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-full"/>
                  <Facebook className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-full"/>
                  <Twitter className="w-9 h-9 hover:text-white/50 border border-white/50 p-2 hover:bg-white/10 rounded-full"/>
                  
                </div>
    </div>
  );
};

export default AboutAuthor;
