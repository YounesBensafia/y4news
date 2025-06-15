import React, { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { Loader2 } from "lucide-react";

const News = ({ country, category, articles, setArticles }) => {
  const [loading, setLoading] = React.useState(false);


  const fetchAllNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=10&token=${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setArticles(data.articles);
    } catch (error) {
      console.warn("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, [country, category]);

  
  return (
    <>
      {loading && (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 dark:text-gray-100 mb-4" />
          <h1 className="text-gray-800 text-xl font-semibold dark:text-gray-100">Loading...</h1>
        </div>
      )}

      {!loading && (
        <div className="min-h-screen bg-gradient-to-br from-gray-00 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default News;

