// affiche comman f dash d liveur
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurantsapproved } from "../../redux/features/adminSlice";
import { FaTrashAlt, FaBan } from "react-icons/fa";

import axios from "axios";

const TableCommand = () => {
    console.log("test")
    const [commandes, setCommandes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchCommandes = async () => {

            try {
                const token = localStorage.getItem('token')
                console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
                const response = await axios.get("http://localhost:8080/api/livreur/commandes-today", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("commande", response.data.commandes);
                setCommandes(response.data.commandes);
            } catch (err) {
                setError(err.response ? err.response.data.message : err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCommandes();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    const getStatusStyle = (status) => {
        switch (status) {
          case "pending":
            return "text-yellow-500"; 
          case "accepted":
            return "text-green-500";  
          case "refused":
            return "text-red-500";    
          case "delivered":
            return "text-blue-500";   
          case "restord":
            return "text-gray-500";   
          default:
            return "text-yellow-500";   
        }
      };
      
    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Time</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Status</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Client</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Total Price</th>
                                        <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Details</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {commandes.map((commande) => (
    
                                        <tr key={commande._id}>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                {new Date(commande.createdAt).toLocaleTimeString()} 
                                            </td>
                                            <td className={`px-4 py-4 text-sm ${getStatusStyle(commande.status)} whitespace-nowrap`}>
  {commande.status}
</td>

                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                {commande.client.name}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                ${commande.totalPrice} 
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
  <button className="text-blue-500 hover:text-indigo-500 focus:outline-none">
    <a href={`/dashboard/livreur/order-detail/${commande._id}`}>Détails de la commande</a>
  </button>
</td>
                                      </tr>
                                    ))}
                                    {commandes.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">
                                                Aucune commande trouvée pour aujourd'hui.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableCommand;
