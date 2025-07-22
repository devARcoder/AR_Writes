import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../shared/common/Input";
import { Search, X } from "lucide-react";
import { exploreTopicsData } from "../../data/data";
import NewsCard from "../news/NewsCard";
import NewsCardSkeleton from "../news/NewsCardSkeleton";

const API_KEY = "0a9584b34eab4cb3929218488e65af44";
const PAGE_SIZE = 6;

const ExploreTopics = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams(); // Read category from URL
  const [selectedCategory, setSelectedCategory] = useState(categoryName || "General");

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch News
  const fetchNews = async (category, query = "", pageNumber = 1, append = false) => {
    setLoading(true);
    try {
      const endpoint = query
        ? `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&page=${pageNumber}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category.toLowerCase()}&page=${pageNumber}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`;

      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.articles) {
        setNews((prev) => (append ? [...prev, ...data.articles] : data.articles));
        setHasMore(data.articles.length === PAGE_SIZE);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  // When category changes (URL or click)
  useEffect(() => {
    setSelectedCategory(categoryName || "General");
    setSearchInput("");
    setPage(1);
    fetchNews(categoryName || "General", "", 1);
  }, [categoryName]);

  // Auto-search
  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchInput) {
        setPage(1);
        fetchNews(selectedCategory, searchInput, 1);
      } else {
        fetchNews(selectedCategory, "", 1);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [searchInput]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(selectedCategory, searchInput, nextPage, true);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    fetchNews(selectedCategory, "", 1);
  };

  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<mark class="bg-yellow-300">$1</mark>`);
  };

  return (
    <div className="px-5 py-6">
      {/* Heading */}
      <h1 className="text-center font-bold text-gray-400 text-md md:text-xl">
        EXPLORE TRENDING TOPICS
      </h1>

      {/* Search */}
      <div className="relative flex items-center mx-6 sm:mx-32 md:mx-36 lg:mx-44 xl:mx-85 py-6">
        <Search size={24} className="absolute left-4 text-gray-500" />
        <Input
          placeholder="Search across all news..."
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput && (
          <X
            size={20}
            className="absolute right-4 text-gray-500 cursor-pointer hover:text-gray-700"
            onClick={handleClearSearch}
          />
        )}
      </div>

      {/* Topics */}
      <div className="flex flex-wrap px-3 lg:px-44 space-x-3 items-center justify-center">
        {exploreTopicsData.map((item) => {
          const Icon = item.icon;
          const isActive = selectedCategory === item.category;
          return (
            <div
              key={item.category}
              onClick={() => navigate(`/category/${item.category}`)}
              className={`flex items-center space-x-2 border border-[rgba(0,0,0,0.2)] 
                w-fit px-6 py-3 my-3 rounded-full cursor-pointer transition-all duration-300 
                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "bg-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.3)]"
                }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-bold">{item.category}</span>
            </div>
          );
        })}
      </div>

      {/* News */}
      <div className="mt-8 px-3 lg:px-44">
        {loading && page === 1 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        ) : news.length > 0 ? (
          <>
            <div className="">
              {news.map((article, index) => (
                <NewsCard
                  key={index}
                  article={{
                    ...article,
                    title: (article.title || "", searchInput),
                    description: highlightText(article.description || "", searchInput),
                  }}
                />
              ))}
            </div>
            {hasMore && !loading && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Load More
                </button>
              </div>
            )}
            {loading && page > 1 && (
              <div className="">
                {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                  <NewsCardSkeleton key={i} />
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">
            No news found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExploreTopics;
