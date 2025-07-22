// src/components/news/NewsCard.jsx
import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition p-3 bg-white">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-40 object-cover rounded-md"
        />
      )}
      <h2 className="font-bold text-lg mt-2 text-black">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-1">
        {article.description || "No description available."}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-500 hover:underline"
      >
        Read more →
      </a>
    </div>
  );
};

export default NewsCard;
