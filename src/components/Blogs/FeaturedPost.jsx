import React from "react";
import { featuredPostData } from "../../data/data";

const FeaturedPost = () => {
  const { category, title, author, date, coverImage, excerpt } = featuredPostData;

  return (

    <div className="lg:sticky lg:top-10 rounded-xl overflow-hidden">
      <h1 className="text-gray-400 text-md font-semibold pb-4">Featured Post</h1>
      <div className="img relative">
        {/* Background Image */}
        <img className="w-full h-64 object-cover rounded-xl" src={coverImage} alt={title} />

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Category Tag */}
        <p className="absolute top-4 left-4 mt- bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full font-bold z-20 text-white">
          {category}
        </p>

        {/* Text Content */}
        <div className="head absolute bottom-4 left-4 right-4 z-20 text-white">
          <p className="text-sm font-medium text-gray-100">
            {author} on <span>{date}</span>
          </p>

          <h1 className="text-xl font-bold mt-1 line-clamp-2">{title}</h1>
          <p className="text-sm sm:text-md text-gray-100 mt-2">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
