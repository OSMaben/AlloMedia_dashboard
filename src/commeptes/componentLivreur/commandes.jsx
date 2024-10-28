import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommandesLivreur = () => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noCommandesMessage, setNoCommandesMessage] = useState(null); // State for no commandes message
  const [selectedStatus, setSelectedStatus] = useState('pending'); 

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-500';
      case 'accepted':
        return 'text-green-500';
      case 'refused':
        return 'text-red-500';
      case 'delivered':
        return 'text-blue-500';
      case 'restord':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to track mount status
    const fetchCommandes = async () => {
      try {
        const token = localStorage.getItem('token');
        const params = { status: selectedStatus }; 

        const response = await axios.get("http://localhost:8080/api/livreur/orders", {
          params,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (isMounted) {
          setCommandes(response.data.commandes); 
          setNoCommandesMessage(null); // Reset the message
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setNoCommandesMessage(error.response.data.message); // Set no commandes message
        } else {
          setError(error.response ? error.response.data.message : "Erreur de connexion");
          console.error("Fetch error: ", error); // Log error for debugging
        }
      } finally {
        if (isMounted) {
          setLoading(false); 
        }
      }
    };

    fetchCommandes(); 
    return () => { isMounted = false; }; // Cleanup function
  }, [selectedStatus]); 

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setLoading(true); 
  };

  if (loading) return <div className="spinner">Loading...</div>; 
  if (error) return <div>{error}</div>; 

  return (
    <div className="p-6 bg-gray-100">
    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Commandes du Livreur
    </h1>
  
    <label htmlFor="status-select" className="block mb-2 font-medium text-gray-700">
      Filtrer par statut :
    </label>
    <select
      id="status-select"
      value={selectedStatus}
      onChange={handleStatusChange}
      className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="pending">Pending</option>
      <option value="accepted">Accepted</option>
      <option value="refused">Refused</option>
      <option value="delivered">Delivered</option>
      <option value="restord">Restored</option>
    </select>
  
    {noCommandesMessage && (
      <div className="bg-red-500 text-white p-2 mb-4 rounded text-center">
        {noCommandesMessage}
      </div>
    )}
  
    <section className="container mx-auto flex justify-center">
      <div className="flex flex-col w-full max-w-4xl"> {/* Set a max-width for the table */}
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left">
                      Client
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left">
                      Total Price
                    </th>
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
                  {commandes.length === 0 && !noCommandesMessage && (
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
  </div>
  
   
  );
};

export default CommandesLivreur;
