import React, { use } from "react";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [articles, setArticles] = React.useState([]);
  const { theme } = React.useContext(ThemeContext);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News country="us" category="general" articles={articles} setArticles={setArticles}/>} />
        <Route path="/business" element={<News country="us" category="business" articles={articles} setArticles={setArticles}/>} />
        <Route path="/entertainment" element={<News country="us" category="entertainment" />} />
        <Route path="/general" element={<News country="us" category="general" />} />
        <Route path="/health" element={<News country="us" category="health" />} />
        <Route path="/science" element={<News country="us" category="science" />} />
        <Route path="/sports" element={<News country="us" category="sports" />} />
        <Route path="/technology" element={<News country="us" category="technology" />} />
      </Routes>
    </>
  );
};

export default App;
