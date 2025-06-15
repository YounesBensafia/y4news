import React, { useEffect } from "react";
import NewsCard from "../components/NewsCard";
const News = ({ country, category, articles, setArticles }) => {
  const fetchAllNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    fetchAllNews();
  }, []);
  return (
    <div className="bg-gray-200 dark:bg-black py-24 px-4 md:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
