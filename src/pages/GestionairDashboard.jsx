import React from "react";
import AsideBare from "../commeptes/comepontesGestionair/AsideBare";
import MiniHeadre from "../commeptes/comepontesGestionair/MiniHeadre";
import Analiteque from "../commeptes/comepontesGestionair/Analiteque";
import TableRestoNo from "../commeptes/comepontesGestionair/TableRestoNo";
import Statistics from "../commeptes/comepontesGestionair/Statistics";
import AllRestaurants from "../commeptes/comepontesGestionair/AllRestaurants";
const Dashboards = () => {
  return (
    <>
      <AsideBare />

      <main className="w-full flex-1 md:w-[calc(100%-160px)]  md:ml-40  min-h-screen transition-all main">
        <MiniHeadre />
        <div className="p-6 w-full">
          <Analiteque />
          <TableRestoNo />
          <AllRestaurants />
          {/* <Statistics /> */}
        </div>
      </main>
    </>
  );
};

export default Dashboards;
