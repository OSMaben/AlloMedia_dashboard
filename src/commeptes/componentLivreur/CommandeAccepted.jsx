import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import fastfoodImage from '../../assets/fastfood.jpg';

const AcceptedCommandes = () => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcceptedCommandes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/livreur/commandes-accepted",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCommandes(response.data.pendingCommandes);
        setLoading(false);
      } catch (err) {
        setError("Erreur lors de la récupération des commandes acceptées");
        setLoading(false);
      }
    };

    fetchAcceptedCommandes();
  }, []);

  const handleConfirmDelivery = async (commandeId) => {
    const token = localStorage.getItem("token");

    Swal.fire({
      title: "Confirmation de livraison",
      text: "Êtes-vous sûr de confirmer la livraison de cette commande ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, livrée",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(`http://localhost:8080/api/livreur/confirm-delivery/${commandeId}`, {}, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          setCommandes((prevCommandes) =>
            prevCommandes.filter((commande) => commande._id !== commandeId)
          );
          Swal.fire("Livrée!", "La commande a été livrée avec succès.", "success");
        } catch (err) {
          console.error("Erreur lors de la confirmation de la livraison:", err);
          setError("Erreur lors de la confirmation de la livraison");
        }
      }
    });
  };
  const handleRestoreOrder = async (commandeId) => {
    const token = localStorage.getItem("token");
  
    Swal.fire({
      title: "Raison du retour",
      input: "text",
      inputLabel: "Veuillez indiquer la raison du retour",
      inputPlaceholder: "Raison du retour...",
      showCancelButton: true,
      confirmButtonText: "Restaurer",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        try {
          await axios.patch(
            `http://localhost:8080/api/livreur/restord-order/${commandeId}`,
            {
              restordReason: result.value,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          setCommandes((prevCommandes) =>
            prevCommandes.filter((commande) => commande._id !== commandeId)
          );
          Swal.fire("Restaurée!", "La commande a été restaurée avec succès.", "success");
        } catch (err) {
          console.error("Erreur lors du retour de la commande:", err);
          setError("Erreur lors du retour de la commande");
        }
      }
    });
  };
  

  if (loading) return <p>Chargement des commandes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {commandes.map((commande) => (
        <div
          key={commande._id}
          className="flex flex-col max-w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <div
            className="h-48 bg-cover"
            style={{
              backgroundImage: `url(${fastfoodImage})`
            }}
          ></div>

          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Commande Acceptée</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <strong>Client:</strong> {commande.client.name} <br />
              <strong>Restaurant:</strong> {commande.restaurantName} <br />
              <strong>Adresse:</strong> {commande.adress} <br />
              <strong>Heure:</strong> {new Date(commande.createdAt).toLocaleString()} <br />
              <strong>Total:</strong> {commande.totalPrice} MAD
            </p>

            <div className="flex justify-between mt-4">
              <button
                className="flex items-center px-4 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-green-600 rounded hover:bg-green-500 focus:outline-none"
                onClick={() => handleConfirmDelivery(commande._id)}
              >
                Confirmer Livraison
              </button>

              <button
                className="flex items-center px-4 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded hover:bg-red-500 focus:outline-none"
                onClick={() => handleRestoreOrder(commande._id)}
              >
                Retourner
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcceptedCommandes;
