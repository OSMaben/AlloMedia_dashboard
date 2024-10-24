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

      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
      {/* end: Sidebar */}
      {/* start: Main */}
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
        <MiniHeadre />
        <div className="p-6">
          <Analiteque />
          <TableRestoNo />
          <Statistics />
        </div>
      </main>
    </>
  );
};

export default Dashboards;
