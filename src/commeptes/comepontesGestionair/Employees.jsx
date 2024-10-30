import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOrders
} from "../../redux/features/ManagerSlice";


const EmployeeTable = () => {

  const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.manager); 

    useEffect(() => {
        dispatch(GetOrders());
    }, [dispatch]);

    if (loading) return <p>Loading orders...</p>;
    if (error) return <p>Error: {error}</p>;

    const statusStyles = {
      pending: 'text-yellow-500',  // Yellow for pending
      accepted: 'text-green-500',   // Green for accepted
      refused: 'text-red-500',      // Red for refused
      delivered: 'text-blue-500',    // Blue for delivered
  };
  return (
    <div className="bg-white border overflow-x-auto border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      {/* Search bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          All Orders
        </h2>
        <input
          type="text"
          placeholder="Search Manager..."
          className="py-2 px-2 bg-gray-50 outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
        />
      </div>
      
      {/* Table for displaying manager information */}
      <table className="w-full min-w-[540px] overflow-x-auto">
        <thead>
          <tr>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
              Order Item
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Price
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Client Name
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Client Location
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Client Email
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
              Client Number
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Status
            </th>
            <th className="text-[12px] hover:text-gray-700 duration-300 transition-all cursor-default  uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
              Action
            </th>
          </tr>
        </thead>
       
        <tbody>
                {orders.map((order) => (
                    <tr key={order._id}>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {order.items.map(item => item.name).join(', ')}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {order.totalPrice}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {order.client.name}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {/* Assuming you have a location field in your client model */}
                            {/* Replace 'location' with the correct field if different */}
                            {order.client.location || 'N/A'}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {order.client.email}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {order.client.phone}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            <span className={`${statusStyles[order.status]} font-bold`}>
                                {order.status}
                            </span>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                            {/* Add actions here, e.g., buttons for edit/delete */}
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
