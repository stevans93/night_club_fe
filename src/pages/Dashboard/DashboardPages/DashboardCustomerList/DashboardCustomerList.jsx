import React from "react";
import AddCustomerForm from "../../../../components/DashboardComponents/DashboardForms/AddCustomerForm/AddCustomerForm";
import CustomerHeader from "../../../../components/DashboardComponents/DashboardHeaders/CustomerHeader/CustomerHeader";
import DashboardCustomerTable from "../../../../components/DashboardComponents/DashboardTables/DashboardCustomerTable/DashboardCustomerTable";
import { useState } from "react";
import EditCustomerForm from "../../../../components/DashboardComponents/DashboardForms/EditCustomerForm/EditCustomerForm";

function DashboardCustomerList() {
  const [isAddCustomerModalOpen, setIsAddCustomerModalOpen] = useState(false);
  const [isEditCustomerModalOpen, setIsEditCustomerModalOpen] = useState(false);

  const handleEditCustomerOpen = () => {
    setIsEditCustomerModalOpen(true);
  };

  const handleEditCustomerClose = () => {
    setIsEditCustomerModalOpen(false);
  };

  const handleAddCustomerClose = () => {
    setIsAddCustomerModalOpen(false);
  };

  const handleAddCustomerOpen = () => {
    console.log("here");
    setIsAddCustomerModalOpen(true);
  };
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <CustomerHeader handleAddCustomerOpen={handleAddCustomerOpen} />
      <DashboardCustomerTable handleEditCustomerOpen={handleEditCustomerOpen} />
      <AddCustomerForm
        isAddCustomerModalOpen={isAddCustomerModalOpen}
        handleAddCustomerClose={handleAddCustomerClose}
      />
      <EditCustomerForm
        isEditCustomerModalOpen={isEditCustomerModalOpen}
        handleEditCustomerClose={handleEditCustomerClose}
      />
    </div>
  );
}

export default DashboardCustomerList;
