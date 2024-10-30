import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import fastfoodImage from '../../assets/fastfood.jpg';

const CommndPending = () => {
  const [commandes, setCommandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingCommandes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/livreur/commandes-pending",
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
        setError("Erreur lors de la récupération des commandes");
        setLoading(false);
      }
    };

    fetchPendingCommandes();
  }, []);

  const handleAccept = async (commandeId) => {
    const token = localStorage.getItem("token");

    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous êtes sur le point d'accepter cette commande",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, accepter",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(`http://localhost:8080/api/livreur/accept-order/${commandeId}`, {}, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          setCommandes((prevCommandes) =>
            prevCommandes.filter((commande) => commande._id !== commandeId)
          );
          Swal.fire("Acceptée!", "La commande a été acceptée.", "success");
        } catch (err) {
          console.error("Erreur lors de l'acceptation de la commande:", err);
          setError("Erreur lors de l'acceptation de la commande");
        }
      }
    });
  };

  const handleRefuse = async (commandeId) => {
    const token = localStorage.getItem("token");

    Swal.fire({
      title: "Raison du refus",
      input: "text",
      inputLabel: "Veuillez indiquer la raison du refus",
      inputPlaceholder: "Raison de refus...",
      showCancelButton: true,
      confirmButtonText: "Refuser",
      cancelButtonText: "Annuler",
    }).then(async (result) => {
      if (result.isConfirmed && result.value) {
        try {
          await axios.patch(`http://localhost:8080/api/livreur/refuse-order/${commandeId}`, {
            refusalReason: result.value,
          }, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          setCommandes((prevCommandes) =>
            prevCommandes.filter((commande) => commande._id !== commandeId)
          );
          Swal.fire("Refusée!", "La commande a été refusée avec succès.", "success");
        } catch (err) {
          console.error("Erreur lors du refus de la commande:", err);
          setError("Erreur lors du refus de la commande");
        }
      }
    });
  };

  if (loading) return <p>Chargement des commandes...</p>;
  if (error) return <p>{error}</p>;
  if (commandes.length === 0) return <p>Aucune commande en attente.</p>; // Ajoutez cette ligne

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6  ml-64 bg-white ">
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
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Commande en attente</h1>
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
                onClick={() => handleAccept(commande._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Accepter
              </button>

              <button
                className="flex items-center px-4 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-red-600 rounded hover:bg-red-500 focus:outline-none"
                onClick={() => handleRefuse(commande._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Refuser
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommndPending;
