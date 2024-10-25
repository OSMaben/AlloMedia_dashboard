// Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import TablesResto from "../commeptes/comepontesAdmin/TablesResto";

const Profile = () => {
  return (
    <div className="bg-gray-100">
      <TablesResto/>
      <div className="mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/94.jpg"
                  alt="User Avatar"
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-700">Software Developer</p>
              </div>
              <hr className="my-6 border-t border-gray-300" />
              <nav className="flex flex-col bg-gradient-to-r bg-gray-50   p-6 rounded-lg shadow-xl space-y-4 transform hover:scale-105 transition-transform duration-300 ease-out">
                <Link
                  to="/profile"
                  className="group flex items-center text-gray-500  transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 group-hover:animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A6 6 0 1116.95 6.05a6 6 0 01-11.829 11.754zM12 14v1.5m0-6v1.5"
                    />
                  </svg>
                  About
                </Link>
                <div className="border-t border-white opacity-30"></div>
                <Link
                  to="/profile/modifier-password"
                  className="group flex items-center text-gray-500  transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 group-hover:animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3a3 3 0 100 6z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 13v7m3-4H9m6 4V5h4a2 2 0 012 2v8a2 2 0 01-2 2h-4"
                    />
                  </svg>
                  Update Password
                </Link>
                <div className="border-t border-white opacity-30"></div>
                <Link
                  to="/profile/contact"
                  className="group flex items-center text-gray-500  transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 group-hover:animate-bounce"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.88a4.002 4.002 0 005.356.57l4.284-4.284a4 4 0 00-5.358-5.357L8 7l-4.877 5.207A4.002 4.002 0 013 8z"
                    />
                  </svg>
                  Contact
                </Link>
                <div className="border-t border-white opacity-30"></div>
                <Link
                  to="/profile/skills"
                  className="group flex items-center text-gray-500  transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 mr-3 group-hover:animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                  Skills
                </Link>
              </nav>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
