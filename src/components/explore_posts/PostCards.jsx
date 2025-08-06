import React from 'react'
// import Button from "../shared/common/Button";
// import { AlarmClock } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const PostCards = ({blog}) => {
//       const navigate = useNavigate();

//   const handleDiscoverClick = () => {
//     navigate(`/blog/${blog.id}`); // Navigate to blog details using ID
//   };
  return (
    <>
     <div className="">
        <div className="relative">
        <img src={blog.coverImage} alt="" />
        <div className="absolute top-4 left-4 bg-[#222] text-white px-5 py-1 rounded-full text-sm">
            <p>{blog.category}</p>
        </div>
     </div>

     <div className="heading text-white">
        <h1>{blog.title}</h1>
        <p className='line-clamp-2'>{blog.content}</p>

        <div className="author flex items-center space-x-2">
            <img className='h-9 w-9 rounded-full object-cover' src={blog.author.avatar} alt="" />
            <div className="flex flex-col">
                <h1>{blog.author.name}</h1>
                <p>{blog.publishedAt}</p>
            </div>
        </div>
     </div>

     </div>
    </>
  )
}

export default PostCards
