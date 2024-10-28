import React, { useState } from "react";
import { AiOutlineForm, AiOutlineRight } from "react-icons/ai";
import {
  RiMenuLine,
  RiHome2Line,
  RiInstanceLine,
  RiSettings2Line,
  RiFlashlightLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const AsideBare = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="hidden md:flex">
        <div className="fixed left-0 top-0 w-40 h-full bg-gray-900 p-4 z-50 transition-transform transform translate-x-0">
          <a
            href="#"
            className="flex items-center pb-4 border-b border-b-gray-800"
          >
            <img
              src="https://placehold.co/32x32"
              alt="Logo"
              className="w-8 h-8 rounded object-cover"
            />
            <span className="text-lg font-bold text-white ml-3">Logo</span>
          </a>

          <ul className="mt-4">
            <li className="mb-1 group">
              <Link
                to=""
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <RiHome2Line className="mr-3 text-lg" />
                <span className="text-sm">Dashboard</span>
              </Link>
            </li>
            <li className="mb-1 group">
              <Link
                to="admin"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <RiInstanceLine className="mr-3 text-lg" />
                <span className="text-sm">Profile</span>
                <RiArrowRightSLine className="ml-auto" />
              </Link>
            </li>
            <li className="mb-1 group">
              <Link
                to="form"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <AiOutlineForm className="mr-3 text-lg" />
                <span className="text-sm">Create</span>
                <RiArrowRightSLine className="ml-auto" />
              </Link>
            </li>
            <li className="mb-1 group">
              <a
                href="#"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <RiFlashlightLine className="mr-3 text-lg" />
                <span className="text-sm">Services</span>
                <RiArrowRightSLine className="ml-auto" />
              </a>
            </li>
            <li className="mb-1 group">
              <a
                href="#"
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
              >
                <RiSettings2Line className="mr-3 text-lg" />
                <span className="text-sm">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex relative md:hidden">
        {isSidebarOpen && (
          <div className="fixed duration-200  left-0 top-0 w-40 h-full bg-gray-900 opacity-90 p-4 z-50 transition-transform transform translate-x-0">
            <a
              href="#"
              className="flex items-center pb-4 border-b border-b-gray-800"
            >
              <img
                src="https://placehold.co/32x32"
                alt="Logo"
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-lg font-bold text-white ml-3">Logo</span>
            </a>

            <ul className="mt-4">
              <li className="mb-1 group">
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                >
                  <RiHome2Line className="mr-3 text-lg" />
                  <span className="text-sm">Dashboard</span>
                </a>
              </li>
              <li className="mb-1 group">
                <Link
                  to="admin"
                  className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                >
                  <RiInstanceLine className="mr-3 text-lg" />
                  <span className="text-sm">Profile</span>
                  <RiArrowRightSLine className="ml-auto" />
                </Link>
              </li>

              <li className="mb-1 group">
                <Link
                  to="/form"
                  className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                >
                  <RiInstanceLine className="mr-3 text-lg" />
                  <span className="text-sm">Create</span>
                  <RiArrowRightSLine className="ml-auto" />
                </Link>
              </li>
              <li className="mb-1 group">
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                >
                  <RiFlashlightLine className="mr-3 text-lg" />
                  <span className="text-sm">Services</span>
                  <RiArrowRightSLine className="ml-auto" />
                </a>
              </li>
              <li className="mb-1 group">
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"
                >
                  <RiSettings2Line className="mr-3 text-lg" />
                  <span className="text-sm">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Toggle Button (Always visible) */}
        <button
          className={`p-1 m-4 duration-100 md:hidden bg-gray-900 text-white rounded-md transition-transform top-8 fixed z-50 ${
            isSidebarOpen ? "translate-x-32" : "-translate-x-5"
          }`}
          onClick={toggleSidebar}
        >
          <AiOutlineRight className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default AsideBare;
