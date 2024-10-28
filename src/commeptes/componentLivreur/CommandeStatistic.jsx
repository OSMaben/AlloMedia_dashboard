import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import CommandeStatistics from './CommandePied';

const LivreurStatistics = () => {
  const [statistics, setStatistics] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/livreur/statistics`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setStatistics(response.data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  if (!statistics) return <p>Loading...</p>;

  const data = [
    { name: 'Total Commandes', value: statistics.totalCommandes },
    { name: 'Commandes Livrées', value: statistics.commandesLivrees },
    { name: 'Commandes Refusées', value: statistics.commandesRefusees },
    { name: 'Commandes Acceptées', value: statistics.commandesAcceptees },
    { name: 'Taux de Livraison (%)', value: parseFloat(statistics.tauxDeLivraison) },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f', borderRadius: '10px' ,width:'100%',height: '100%',margin: '0px'}}>

      <div>
        <h3>Statistiques Générales des Commandes</h3>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* Diagramme circulaire pour les pourcentages de commandes */}
      <div>
        <h3>Répartition des Commandes</h3>
        <CommandeStatistics livreurId={statistics.livreurId} />
      </div>
    </div>
  );
};

export default LivreurStatistics;
