import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CommandeDetails = () => {
  const { id } = useParams(); 
  const [commande, setCommande] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommandeDetails = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`http://localhost:8080/api/livreur/detail-order/${id}`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response)
        setCommande(response.data.commande);
      } catch (err) {
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommandeDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Détails de la Commande</h2>
      {commande && (
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Informations de la Commande</h3>
          <p><strong>Status:</strong> {commande.status}</p>
          <p><strong>Date:</strong> {new Date(commande.createdAt).toLocaleString()}</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Client</h3>
          <p><strong>Nom:</strong> {commande.client.name}</p>
          <p><strong>Téléphone:</strong> {commande.client.phone}</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Restaurant</h3>
          <p><strong>Nom:</strong> {commande.restaurant.restoname}</p>
          <p><strong>Adresse:</strong> {commande.restaurant.address}</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Articles</h3>
          <ul>
            {commande.items.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - Quantité: {item.quantity} - Prix: ${item.price}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Total</h3>
          <p>${commande.totalPrice}</p>
        </div>
      )}
    </section>
  );
};

export default CommandeDetails;
