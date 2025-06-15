import React, { useEffect } from "react";
import NewsCard from "../components/NewsCard";
import { Loader2 } from "lucide-react";
const News = ({ country, category, articles, setArticles }) => {
  const [loading, setLoading] = React.useState(false);
  const fetchAllNews = async () => {
    try {
      setLoading(true);
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
    finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllNews();
  }, [country, category]);
  return (
    <>
      {loading && <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin dark:text-gray-200"/>
        <h1 className="text-gray-800 text-xl font-semibold dark:text-gray-200">Loading...</h1>
        </div>}
      <div className="bg-gray-200 dark:bg-black py-24 px-4 md:py-25">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
          {articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
