import React from "react";
import { useState } from "react";
import AddStaffForm from "../../../../components/DashboardComponents/DashboardForms/AddStaffForm/AddStaffForm";
import EditStaffForm from "../../../../components/DashboardComponents/DashboardForms/EditStaffForm/EditStaffForm";
import StaffHeader from "../../../../components/DashboardComponents/DashboardHeaders/StaffHeader/StaffHeader";
import DashStaff from "../../../../components/DashboardComponents/DashboardStaff/DashStaff";

function DashboardStaff() {
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);

  const handleEditStaffModalOpen = () => {
    setIsEditStaffModalOpen(true);
  };

  const handleEditStaffModalClose = () => {
    setIsEditStaffModalOpen(false);
  };

  const handleAddStaffModalOpen = () => {
    setIsAddStaffModalOpen(true);
  };

  const handleAddStaffModalClose = () => {
    setIsAddStaffModalOpen(false);
  };
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <StaffHeader handleAddStaffModalOpen={handleAddStaffModalOpen} />
      <DashStaff handleEditStaffModalOpen={handleEditStaffModalOpen} />
      <AddStaffForm
        isAddStaffModalOpen={isAddStaffModalOpen}
        handleAddStaffModalClose={handleAddStaffModalClose}
      />
      <EditStaffForm
        isEditStaffModalOpen={isEditStaffModalOpen}
        handleEditStaffModalClose={handleEditStaffModalClose}
      />
    </div>
  );
}

export default DashboardStaff;
