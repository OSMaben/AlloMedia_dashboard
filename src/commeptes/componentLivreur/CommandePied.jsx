import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const CommandeStatistics = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    labels: ['Commandes Livrées', 'Commandes Refusées', 'Commandes Restaurées'],
    datasets: [
      {
        data: [25, 25, 25],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
      }
    ]
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/livreur/statistics`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const { commandesLivrees, commandesRefusees, commandesRestaures } = response.data;
        const totalCommandes = commandesLivrees + commandesRefusees + commandesRestaures;

        setData({
          labels: ['Commandes Livrées', 'Commandes Refusées', 'Commandes Restaurées'],
          datasets: [
            {
              data: [
                ((commandesLivrees / totalCommandes) * 100).toFixed(2),
                ((commandesRefusees / totalCommandes) * 100).toFixed(2),
                ((commandesRestaures / totalCommandes) * 100).toFixed(2)
              ],
              backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
              hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
            }
          ]
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des statistiques", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div>
      <h3>Statistiques des Commandes</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default CommandeStatistics;
