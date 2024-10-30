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
      className="fixed top-0 left-0 flex flex-col w-60 h-screen px-4 py-8 overflow-y-auto bg-black text-white border-r dark:bg-gray-900 dark:border-gray-700 m-100"
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
            title: "Today Orders",
            icon: <AiFillHome size={20} className="text-white" />,
          },
          {
            to: "/dashboard/livreur/order-pending",
            title: "Pending",
            icon: <AiOutlineForm size={20} className="text-white" />,
          },
          {
            to: "/dashboard/livreur/commandes-accepted",
            title: "Accepted",
            icon: <AiFillCheckCircle size={20} className="text-white" />,
          },
          {
            to: "/dashboard/livreur/statistique",
            title: "Statistics",
            icon: <AiFillProfile size={20} className="text-white" />,
          },
          {
            to: "/dashboard/livreur/commandes",
            title: "Orders",
            icon: <AiFillShop size={20} className="text-white" />,
          },
        ].map((item, index) => (
          <li key={index} className="w-full">
            <Link
              title={item.title}
              to={item.to}
              className={`h-12 px-2 flex items-center justify-start space-x-3 text-sm ${
                window.location.pathname === item.to
                  ? "bg-teal-600 text-white"
                  : "hover:bg-black hover:text-white text-gray-600"
              } w-full transition-colors duration-300`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
