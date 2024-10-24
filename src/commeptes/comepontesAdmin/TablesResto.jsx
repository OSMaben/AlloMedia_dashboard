import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRestaurant, getrestaurantsapproved } from "../../redux/features/adminSlice";
import { FaTrashAlt, FaBan } from "react-icons/fa";

const TablesResto = () => {
  const dispatch = useDispatch();
  const { restaurantsapproved, restoCounter } = useSelector(
    (state) => state.admin
  );
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsapproved);
  
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
    // dispatch(suspendResto({ id }));
  };

  return (
    <section className="flex flex-1 flex-col bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Accepted Restaurants</h1>
          <p className="mt-2 text-sm sm:text-lg">Manage approved restaurants here.</p>
        </div>
      </div>

      {/* Search Bar */}
      <nav className="bg-white py-4 px-6 flex flex-col sm:flex-row justify-between items-center shadow-md">
        <h2 className="text-base sm:text-lg font-semibold">Manage Restaurants</h2>
        <input
          onChange={searchByName}
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-2 mt-2 sm:mt-0 w-full sm:w-auto"
        />
      </nav>

      
      <section className="flex-1 px-4 py-6">
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full divide-y divide-gray-200 bg-white shadow-md border rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">Restaurant Name</th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">Manager</th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">Cuisine</th>
                <th className="px-4 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRestaurants?.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 py-2">{item.restoname}</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">{item.cuisine || "Italian"}</td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-4">
                      <button onClick={() => handleDelete(item._id)} className="text-red-600">
                        <FaTrashAlt />
                      </button>
                      <button onClick={() => handleSuspend(item._id)} className="text-yellow-500">
                        <FaBan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default TablesResto;
