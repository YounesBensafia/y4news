const News = (country, category) => {
  const fetchAllNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  return <div className="h-screen bg-gray-200 dark:bg-black"></div>;
};

export default News;
