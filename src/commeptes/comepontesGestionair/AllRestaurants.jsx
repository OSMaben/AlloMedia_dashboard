import { useEffect, useState } from "react";
import { FaCheck, FaTimes, FaTrashAlt } from "react-icons/fa";
import {
  deleteRestaurant,
  getrestaurantsapproved,
  suspendResto,
} from "../../redux/features/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const AllRestaurants = () => {
  const dispatch = useDispatch();
  const { restaurantsapproved, restoCounter } = useSelector(
    (state) => state.admin
  );
  console.log(restaurantsapproved);

  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantsapproved);

  // Fetch restaurants and filter list when updated
  useEffect(() => {
    dispatch(getrestaurantsapproved());
  }, [restoCounter]);

  useEffect(() => {
    setFilteredRestaurants(restaurantsapproved);
  }, [restaurantsapproved]);

  const searchByName = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = restaurantsapproved.filter((item) =>
      item.restoname.toLowerCase().includes(searchTerm)
    );
    setFilteredRestaurants(filtered);
  };

  const handleDelete = (id) => {
    dispatch(deleteRestaurant({ id }));
  };

  const handleSuspend = (id) => {
    console.log(id);

    dispatch(suspendResto({ id }));
  };

  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium text-lg">All Restaurants</div>
        <form action="" className="flex items-center mb-4">
          <div className="relative w-full mr-2">
            <input
              type="text"
              onChange={(e)=> searchByName(e)}
              className="py-2 px-2  bg-gray-50  outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
              placeholder="Search by name..."
            />
            <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          </div>
          <select className="text-sm py-2 pl-4 pr-10 bg-gray-50 border border-gray-100 rounded-md focus:border-blue-500 outline-none">
            <option value="">All</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Japanese">Japanese</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
          </select>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[540px]">
          <thead>
            <tr>
              <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
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
            {filteredRestaurants.map((restaurant) => (
              <tr
                key={restaurant.id}
                className="hover:bg-gray-50 duration-300 transition-all cursor-default"
              >
                <td className="py-2 px-4 border-b border-b-gray-50 ">
                  <div className="flex items-center">
                    <img
                      src={restaurant.logo}
                      alt={restaurant.restoname}
                      className="w-8 h-8 rounded object-cover block"
                    />
                    <a
                      href="#"
                      className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                    >
                      {restaurant.restoname}
                    </a>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  {restaurant.isVisible === true ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Visible
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400 flex gap-2 items-center ">
                    <img
                      src={restaurant.managerId.imgProfile.url}
                      alt="manager photo"
                      className="w-8 h-8 rounded-full object-cover block"
                    />
                    {restaurant.managerId.name}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <span className="text-[13px] font-medium text-gray-400">
                    {restaurant.type}
                  </span>
                </td>
                <td className="py-2 px-4 border-b border-b-gray-50">
                  <div className="flex items-center space-x-2">
                    <button className="text-yellow-500 hover:text-yellow-700">
                      {restaurant.isVisible === true ? (
                        <FaTimes
                          className="w-4 h-4"
                          onClick={() => handleSuspend(restaurant._id)}
                        />
                      ) : (
                        <FaCheck className="w-4 h-4" />
                      )}
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrashAlt className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRestaurants;
