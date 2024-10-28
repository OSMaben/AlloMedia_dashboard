import React from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import AllRestaurants from "./AllRestaurants";
import EmployeeTable from "./Employees";

const TableRestoNo = () => {
  return (
    <div className="grid grid-cols-1  gap-6 mb-6">
      {/* <Table2 />
      <AllRestaurants/>  */}
      {/* <Table1 /> */}
      <EmployeeTable/>
      
    </div>
  );
};

export default TableRestoNo;
