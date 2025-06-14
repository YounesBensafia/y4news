import React from "react";
import { Search } from "lucide-react"; // Ensure you have lucide-react installed
import { FaMoon } from "react-icons/fa"; // Ensure you have react-icons installed
import { Link } from 'react-router-dom';


const Navbar = () => {
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
    <nav className="fixed w-full bg-white z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
          <Link to="/" className="md:text-2xl text-lg font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition duration-400">
            News
          </Link>
          {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative bg-gray-200 p-2 rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="md:pl-10 pl-7 w-30 md:w-64 outline-none focus:outline-none"
            />
          </div>
          <button className="bg-gray-200 px-3 py-3 rounded-lg cursor-pointer">
            <FaMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
