import React from "react";
import { Outlet } from "react-router-dom"; // استيراد Outlet من react-router-dom
import Nav from "../commeptes/componentLivreur/Nav1";
import Nav2 from "../commeptes/componentLivreur/Nav2";

 
const Dashboard = () => {
  return (
    <div className="flex text-gray-800 bg-gray-100">
      <Nav/>
      <div className="flex-1 flex flex-col">
        <Nav2 />
        <main className="flex min-h-0 border-t flex-wrap mb-32">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
