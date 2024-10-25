import React, { useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  accepterResto,
  getRestoPending,
  refuseResto,
} from "../../redux/features/adminSlice";
const Table2 = () => {
  const dispatch = useDispatch();
  const { error, status, isLoading, resturs, restoCounter } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getRestoPending());
  }, [restoCounter]);

  const acceptedResto = (id) => {
    dispatch(accepterResto({ id }));
  };

  const refuserResto = (id) => {
    dispatch(refuseResto({ id }));
  };
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Restaurants Pending Approval</div>
      </div>
      <form action="" className="flex items-center mb-4">
        <div className="relative w-full mr-2">
          <input
            type="text"
            className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
            placeholder="Search..."
          />
          <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
        </div>
        <select className="text-sm py-2 pl-4 pr-10 bg-gray-50 border border-gray-100 rounded-md focus:border-blue-500 outline-none appearance-none bg-select-arrow bg-no-repeat bg-[length:16px_16px] bg-[right_16px_center]">
          <option value="">All</option>
        </select>
      </form>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                Restaurant
              </th>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Status
              </th>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Manager
              </th>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Cuisine
              </th>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {resturs?.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50 hover:text-gray-700 duration-300 transition-all cursor-default">
                <td className="py-2 px-4 border-b border-b-gray-50 hover:text-gray-700 duration-300 transition-all cursor-default">
                  <div className="flex items-center">
                    <img
                      src={item.logo}
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                    >
                      {item.restoname}
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50 hover:text-gray-700 duration-300 transition-all cursor-default">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50 ">
                  <span className="text-[13px] flex gap-2 items-center font-medium text-gray-400 hover:text-gray-700 duration-300 transition-all cursor-default">
                    <img
                      src={item.managerId.imgProfile.url}
                      alt="manager photo"
                      className="w-8 h-8 rounded-full object-cover block"
                    />
                    {item.managerId.name}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50 ">
                  <span className="text-[13px] font-medium text-gray-400 hover:text-gray-700 duration-300 transition-all cursor-default">
                    {item.type}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center space-x-2">
                    <button className="text-green-500 hover:text-green-700">
                      <FaCheck
                        className="w-4 h-4"
                        onClick={() => acceptedResto(item._id)}
                      />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTimes
                        className="w-4 h-4"
                        onClick={() => refuserResto(item._id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {/* Repeat the table row structure as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
