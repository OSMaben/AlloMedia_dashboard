import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { io } from "socket.io-client";
import { Link } from "react-router-dom"; // Import Link if using react-router

// Connect to the Socket.IO backend server
const socket = io("http://localhost:8080");

const NavBar = () => {

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // WebSocket connection to receive notifications
  useEffect(() => {
    socket.on("notification", (newNotification) => {
      setNotifications((prev) => [newNotification, ...prev]);
    });

    return () => {
      socket.off("notification");
    };
  }, []);

  return (
    <nav className=" flex items-center justify-between h-16 px-6 shadow-md flex-1 mb-20 p-4 bg-white ml-64 ">
    

      {/* Notification, Dark Mode, User Profile Icons */}
      <div className="flex items-center space-x-6">
        {/* Notification Dropdown */}
        <div className="relative inline-block">
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:outline-none"
          >
            <AiFillBell
              size={24}
              className="text-gray-600 cursor-pointer hover:text-black"
            />
          </button>

          {/* Notification Dropdown Menu */}
          {isNotificationOpen && (
            <div
              className="absolute right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
              onMouseLeave={() => setIsNotificationOpen(false)}
            >
              <div className="py-2">
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center px-4 py-3 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                    >
                      <img
                        className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt="avatar"
                      />
                      <p className="mx-2 text-sm text-gray-600 dark:text-white">
                        <span className="font-bold">{notification.sender}</span>{" "}
                        {notification.message}.{" "}
                        <span className="text-blue-500 hover:underline">
                          {notification.time}
                        </span>
                      </p>
                    </a>
                  ))
                ) : (
                  <p className="text-center text-gray-600 dark:text-white py-2">
                    Pas de nouvelles notifications.
                  </p>
                )}
              </div>
              <a
                href="#"
                className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
              >
                Voir toutes les notifications
              </a>
            </div>
          )}
        </div>

        

        {/* User Profile Link */}
        <Link to="/dashboard/livreur/profile" className="flex items-center space-x-2">
          <FaUserCircle
            size={30}
            className="text-gray-600 cursor-pointer hover:text-black"
          />
        
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
