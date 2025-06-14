import React from "react";
import { Search } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(`Theme changed to ${theme === "light" ? "dark" : "light"}`);
  };

  const links = [
    { name: "Business", path: "/business" },
    { name: "Entertainment", path: "/entertainment" },
    { name: "General", path: "/general" },
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
              type="text"
              placeholder="Search..."
              className="md:w-64 w-32 pl-9 py-2 text-sm rounded-full bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
            />
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-400" />}
          </button>
          <button className="md:hidden text-gray-800 dark:text-gray-200">
            <Menu size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
