import React from "react";
import AsideBare from "../commeptes/comepontesAdmin/AsideBare";
import MiniHeadre from "../commeptes/comepontesAdmin/MiniHeadre";
import Analiteque from "../commeptes/comepontesAdmin/Analiteque";
import TableRestoNo from "../commeptes/comepontesAdmin/TableRestoNo";
import Statistics from "../commeptes/comepontesAdmin/Statistics";

const Dashboards = () => {
  return (
    <>
      <AsideBare />

      <main className="w-full flex-1 md:w-[calc(100%-160px)]  md:ml-40  min-h-screen transition-all main">
        <MiniHeadre />
        <div className="p-6 w-full">
          <Analiteque />
          <TableRestoNo />
          <Statistics />
        </div>
      </main>
    </>
  );
};

export default Dashboards;
