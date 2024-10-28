import React, { useEffect, useState } from "react";
import { FaBell, FaUserCircle, FaChevronDown, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import {
  addNotification,
  getListNotification,
  updutListNotification,
} from "../../redux/features/adminSlice";
import formatDate from "../../utils/formateData";
import { Link } from "react-router-dom";

const MiniHeader = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    error,
    status,
    unreadCount,
    isLoading,
    resturs,
    restoCounter,
    ListNotification,
  } = useSelector((state) => state.admin);
  const { user } = useSelector((state) => state.auth);
  console.log(unreadCount);

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
      console.log(unreadCount);

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
    <div className="py-2 sm:px-6 px-2 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-600 sidebar-toggle">
        <i className="ri-menu-line" />
      </button>
      <ul className="flex items-center text-sm sm:ml-4">
        <li className="mr-2">
          <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">
            Dashboard
          </a>
        </li>
      </ul>
      <ul className="ml-auto flex items-center">
        {/* Notification Dropdown */}
        <li className="mr-4 relative">
          <button
            type="button"
            onClick={() => setNotificationOpen(!isNotificationOpen)}
            className="text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-gray-600 bg-gray-100"
          >
            <FaBell onClick={() => dispatch(updutListNotification())} />
            {unreadCount > 0 && (
              <span className="text-white bg-red-500 h-4 w-4 font-bold rounded-full text-[9px] text-center absolute -top-1 -right-2">
                {unreadCount}
              </span>
            )}
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
                      <div className="flex-1 gap-1">
                        <span className="font-semibold text-gray-900">
                          {notification.mangerId.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">
                          A new restaurant has been created with the name{" "}
                          <span className="font-medium text-gray-700">
                            {notification.message}
                          </span>
                        </p>
                        <span className="font-medium text-xs text-gray-500">
                          {formatDate(notification.createdAt)}{" "}
                        </span>
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
          <Link to="admin">
            <img
              src={user.user.imgProfile.url}
              className="h-8 w-8 rounded-full"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiniHeader;
