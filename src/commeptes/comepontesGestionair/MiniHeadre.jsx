import React, { useEffect, useState } from "react";
import { FaBell, FaUserCircle, FaChevronDown, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  addNotification,
  getListNotification,
} from "../../redux/features/adminSlice";

const MiniHeader = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const { error, status, isLoading, resturs, restoCounter, ListNotification } =
    useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getListNotification());
  }, [dispatch]);
  console.log(ListNotification);

  useEffect(() => {
    const socket = io("http://localhost:8080", {
      query: { role: "admin" },
    });

    socket.on("connect", () => {
      console.log(`Connected with ID: ${socket.id}`);
    });

    socket.on("newRestaurantNotification", (data) => {
      console.log("New Restaurant Notification:", data);
      dispatch(addNotification(data));
    });

    socket.on("disconnect", (reason) => {
      console.log(`Disconnected from server: ${reason}`);
    });

    return () => {
      socket.off("connect");
      socket.off("newRestaurantNotification");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, []);

  return (
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-600 sidebar-toggle">
        <i className="ri-menu-line" />
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="mr-2">
          <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">
            Dashboard
          </a>
        </li>
        <li className="text-gray-600 mr-2 font-medium">/</li>
        <li className="text-gray-600 mr-2 font-medium">Analytics</li>
      </ul>
      <ul className="ml-auto flex items-center">
        {/* Search Icon */}
        <li className="mr-1">
          <button
            type="button"
            className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          >
            <FaSearch />
          </button>
        </li>

        {/* Notification Dropdown */}
        <li className="mr-4 relative">
          <button
            type="button"
            onClick={() => setNotificationOpen(!isNotificationOpen)}
            className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
          >
            <FaBell />
          </button>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-4 w-72 bg-white shadow-lg rounded-lg z-50">
              <ul className="py-2 text-gray-700 text-sm max-h-80 overflow-y-auto">
                {ListNotification.length > 0 ? (
                  ListNotification.map((notification, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 hover:bg-gray-50 transition-colors duration-200 flex items-center border-b last:border-b-0"
                    >
                      <img
                        src={notification.mangerId?.imgProfile.url}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover mr-3 shadow-md"
                      />
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">
                          {notification.mangerId.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          A new restaurant has been created with the name{" "}
                          <span className="font-medium text-gray-700">
                            {notification.message}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-center text-gray-500">
                    No notifications
                  </li>
                )}
              </ul>
            </div>
          )}
        </li>

        {/* Profile Dropdown */}
        <li className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen(!isProfileOpen)}
            className="flex items-center text-gray-400 hover:text-gray-600"
          >
            <FaUserCircle className="text-2xl" />
            <FaChevronDown className="ml-1 text-sm" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
              <ul className="py-1 text-gray-700 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MiniHeader;
