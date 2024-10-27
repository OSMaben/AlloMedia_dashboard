import React, { useState } from "react";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-slate-50 h-16 px-6 shadow-md">
      {/* Search Bar */}
      <div className="relative w-64">
        <input
          title="Search Bar"
          aria-label="search bar"
          role="search"
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
          type="text"
          placeholder="Search..."
        />
        <AiOutlineSearch
          className="absolute left-3 top-2.5 text-gray-500"
          size={20}
        />
      </div>

      {/* Icons: Notification, Dark Mode, User Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <AiFillBell
          size={24}
          className="text-gray-600 cursor-pointer hover:text-black"
        />

        {/* Dark Mode Toggle */}
        <BsMoon
          size={24}
          className="text-gray-600 cursor-pointer hover:text-black"
        />

        {/* User Profile */}
        <div
          className="relative"
          onMouseEnter={() => setShowLogout(true)}
          onMouseLeave={() => setShowLogout(false)}
        >
          <FaUserCircle
            size={30}
            className="text-gray-600 cursor-pointer hover:text-black"
          />

          {/* Logout Dropdown */}
          {showLogout && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
