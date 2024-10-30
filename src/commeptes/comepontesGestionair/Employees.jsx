import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOrders
} from "../../redux/features/ManagerSlice";


const EmployeeTable = () => {

  const [render, setRender] = useState(0);
  const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.manager); 

    useEffect(() => {
        dispatch(GetOrders());
    }, [render]);

    if (loading) return <p>Loading orders...</p>;
    if (error) return <p>Error: {error}</p>;

    const statusStyles = {
      pending: 'text-yellow-500',
      accepted: 'text-green-500',
      refused: 'text-red-500',
      delivered: 'text-blue-500',
  };

  async function AcceptOrder(OrderId) {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        `http://localhost:8080/api/v1/gestionair/acceptMenu/${OrderId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setRender(pre => pre+1)
    } catch (err) {
      console.error(`Error occurred: ${err.response ? err.response.data : err.message}`);
    }
  }



  async function RefuseOrder(OrderId) {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        `http://localhost:8080/api/v1/gestionair/RefuseMenu/${OrderId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setRender(pre => pre+1)
    } catch (err) {
      console.error(`Error occurred: ${err.response ? err.response.data : err.message}`);
    }
  }


  
  
  
  


  return (
    <>
    <div className="bg-white border overflow-x-auto border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
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
                  { orders ?orders?.map((order) => (
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
                        <td className="py-2 px-4 border-b border-gray-200 flex gap-8">
                            {/* Add actions here, e.g., buttons for edit/delete */}
                              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => AcceptOrder(order._id)} className="w-[1rem] cursor-pointer" fill="#008000" viewBox="0 0 448 512"><path className="width-[.1rem]" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => RefuseOrder(order._id)} className="w-[0.9rem] cursor-pointer" fill="#ff0000" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                        </td>
                    </tr>
                )):null}
              </tbody>
      </table>
        
        </div>
  </>
  );
};

export default EmployeeTable;
