import React from "react";
import { Search } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = ({ setArticles }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const [open, setOpen] = React.useState(false);
  const handleSearch = async (event) => {
    const query = event.target.value;
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&token=${
          import.meta.env.VITE_API_KEY
        }`
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Theme changed to ${theme === "light" ? "dark" : "light"}`);
  };

  const links = [
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "World", path: "/world" },
    { name: "Health", path: "/health" },
    { name: "Science", path: "/science" },
    { name: "Sports", path: "/sports" },
    { name: "Technology", path: "/technology" },
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 z-10 shadow-sm border-b border-blue-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="md:text-3xl text-xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          News
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-500 dark:hover:text-blue-400 underline-offset-4 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Search and Dark Mode */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search..."
              className="md:w-64 w-32 pl-9 py-2 text-sm rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800 dark:text-gray-200"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>
      {/* Mobile Links */}
      {open && (
        <div className="md:hidden px-4 pb-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 dark:text-gray-300 font-medium hover:text-blue-500 dark:hover:text-blue-400 py-2"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
