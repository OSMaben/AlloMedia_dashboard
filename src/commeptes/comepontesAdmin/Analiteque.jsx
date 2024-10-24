import React from "react";

const Analiteque = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-2xl font-semibold mb-1">10</div>
            <div className="text-sm font-medium text-gray-400">
              Active orders
            </div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle text-gray-400 hover:text-gray-600"
            >
              <i className="ri-more-fill" />
            </button>
            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-full bg-gray-100 rounded-full h-4">
            <div
              className="h-full bg-blue-500 rounded-full p-1"
              style={{ width: "60%" }}
            >
              <div className="w-2 h-2 rounded-full bg-white ml-auto" />
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 ml-4">60%</span>
        </div>
      </div>
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div className="flex justify-between mb-4">
          <div>
            <div className="flex items-center mb-1">
              <div className="text-2xl font-semibold">324</div>
              <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
                +30%
              </div>
            </div>
            <div className="text-sm font-medium text-gray-400">Visitors</div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle text-gray-400 hover:text-gray-600"
            >
              <i className="ri-more-fill" />
            </button>
            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded-full object-cover block"
          />
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded-full object-cover block -ml-3"
          />
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded-full object-cover block -ml-3"
          />
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded-full object-cover block -ml-3"
          />
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="w-8 h-8 rounded-full object-cover block -ml-3"
          />
        </div>
      </div>
      <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
        <div className="flex justify-between mb-6">
          <div>
            <div className="text-2xl font-semibold mb-1">
              <span className="text-base font-normal text-gray-400 align-top">
                $
              </span>
              2,345
            </div>
            <div className="text-sm font-medium text-gray-400">
              Active orders
            </div>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-toggle text-gray-400 hover:text-gray-600"
            >
              <i className="ri-more-fill" />
            </button>
            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          className="text-blue-500 font-medium text-sm hover:text-blue-600"
        >
          View details
        </a>
      </div>
    </div>
  );
};

export default Analiteque;
