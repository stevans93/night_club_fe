import React from "react";
import CustomerHeader from "../../../../components/DashboardComponents/DashboardHeaders/CustomerHeader/CustomerHeader";
import DashboardCustomerTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCustomerTable/DashboardCustomerTable";

function DashboardCustomerList() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <CustomerHeader />
      <DashboardCustomerTable />
    </div>
  );
}

export default DashboardCustomerList;
