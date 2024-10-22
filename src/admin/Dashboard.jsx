import React from "react";
import { Outlet } from "react-router-dom"; // استيراد Outlet من react-router-dom
import Nav from "../commeptes/comepontesAdmin/Nav1";
import Nav2 from "../commeptes/comepontesAdmin/Nav2";
import HeaderAdmin from "../commeptes/comepontesAdmin/HeaderAdmin";
import Notification from "../commeptes/comepontesAdmin/Notifications";

const Dashboard = () => {
  return (
    <div className="flex text-gray-800 bg-gray-100">
      <Nav />
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
