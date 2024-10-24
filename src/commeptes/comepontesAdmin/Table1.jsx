import React from "react";

const Table1 = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Manage orders</div>
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
      <div className="flex items-center mb-4 order-tab">
        <button
          type="button"
          data-tab="order"
          data-tab-page="active"
          className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tl-md rounded-bl-md hover:text-gray-600 active"
        >
          Active
        </button>
        <button
          type="button"
          data-tab="order"
          data-tab-page="completed"
          className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 hover:text-gray-600"
        >
          Completed
        </button>
        <button
          type="button"
          data-tab="order"
          data-tab-page="canceled"
          className="bg-gray-50 text-sm font-medium text-gray-400 py-2 px-4 rounded-tr-md rounded-br-md hover:text-gray-600"
        >
          Canceled
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="w-full">
          {/* Search bar */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Manager Information
            </h2>
            <input
              type="text"
              placeholder="Search Manager..."
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Table for displaying manager information */}
          <table className="w-full min-w-[540px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Manager Name
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Email
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Phone Number
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row for manager information */}
              <tr>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center">
                    <img
                      src="https://placehold.co/32x32"
                      alt="manager photo"
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                    >
                      John Doe
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    john.doe@resto.com
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    +1 234 567 890
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table
          className="w-full min-w-[540px] hidden"
          data-tab-for="order"
          data-page="completed"
        >
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Service
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Estimate
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Budget
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          className="w-full min-w-[540px] hidden"
          data-tab-for="order"
          data-page="canceled"
        >
          <thead>
            <tr>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Service
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Estimate
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Budget
              </th>
              <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Canceled
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Canceled
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Canceled
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Canceled
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/32x32"
                    alt=""
                    className="w-8 h-8 rounded object-cover block"
                  />
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Create landing page
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  3 days
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  $56
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="inline-block p-1 rounded bg-rose-500/10 text-rose-500 font-medium text-[12px] leading-none">
                  Canceled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;
