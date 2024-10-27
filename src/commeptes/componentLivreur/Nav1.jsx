import React from "react";
import { Link } from "react-router-dom";
import {
    AiFillHome,
    AiOutlineForm,
    AiFillShop,
    AiFillProfile,
    AiFillCheckCircle,


} from "react-icons/ai"; 

const Nav = () => {
  return (
    <nav
      aria-label="side bar"
      aria-orientation="vertical"
      className="flex-none flex flex-col items-center text-center bg-white text-black border-r w-14 shadow-lg h-screen" 
    >
      {/* Logo */}
      <div className="h-14 flex items-center justify-center w-full">
        <img
          className="h-7 w-7"
          src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png"
          alt="Logo"
        />
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col w-full">
        {[
          {
            to: "/dashboard/livreur",
            title: "tody-orders",
            icon: <AiFillHome size={20} />,
          },
          {
            // Gérer les commandes en attente (accepter ou refuser)
            to: "/dashboard/livreur/order-pending",
            title: "Pending",
            icon: <AiOutlineForm size={20} />,
          },
          {
            // Commandes bien livrées
            to: "/dashboard/livreur/commandes-accepted",
            title: "Accepted",
            icon: <AiFillCheckCircle size={20} />,
          },
          {
            // Afficher les statistiques des livreurs
            to: "/dashboard/livreur/statistique",
            title: "Statistics",
            icon: <AiFillProfile size={20} />,
          },
          {
            // Afficher les statistiques des livreurs
            to: "/dashboard/livreur/commandes",
            title: "commandes",
            icon: <AiFillShop size={20} />,
          },
        ].map((item, index) => (
          <li key={index} className="w-full">
            <Link
              title={item.title}
              to={item.to}
              className={`h-12 px-2 flex items-center justify-center text-sm ${
                window.location.pathname === item.to
                  ? "bg-teal-600 text-white"
                  : "hover:bg-black hover:text-white text-gray-600" // Changer la couleur de fond et de texte au hover
              } w-full transition-colors duration-300`}
            >
              <span>{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
