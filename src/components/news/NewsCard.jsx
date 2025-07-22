// src/components/news/NewsCard.jsx
import React from "react";
import Button from "../shared/common/Button";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <>
    <div className="">
      <div className="imgs relative my-6">
        <img className="w-full object-cover rounded-lg" src={article.urlToImage} alt="" />
        {article.category && (
          <div className="absolute z-40 top-5 left-5 flex space-x-2 text-black text-sm">
            <p className="bg-gray-100 px-3 py-0.5 rounded-lg">
              {article.category}
            </p>
          </div>
        )}
      </div>

      <h3 className="text-white font-bold">{article.author} <span className="text-gray-200 font-semibold">on {article.publishedAt}</span></h3>

      <h1 className="text-white font-bold text-xl line-clamp-2">{article.title}</h1>
      <p className="text-gray-300 line-clamp-3 py-2">{article.description}</p>

      <div className="pt-3">
        <a href={article.url} target="_blank">
        <Button name="Discover More" className="" />
        </a>
      </div>
    </div>
    </>
  );
};

export default NewsCard;
