import React from "react";
import { useState, useEffect } from "react";
import AddStaffForm from "../../../../components/DashboardComponents/DashboardForms/AddStaffForm/AddStaffForm";
import EditStaffForm from "../../../../components/DashboardComponents/DashboardForms/EditStaffForm/EditStaffForm";
import ResetPasswordForm from "../../../../components/DashboardComponents/DashboardForms/ResetPasswordForm/ResetPasswordForm";
import StaffHeader from "../../../../components/DashboardComponents/DashboardHeaders/StaffHeader/StaffHeader";
import DashStaff from "../../../../components/DashboardComponents/DashboardStaff/DashStaff";
import UsersService from "../../../../services/userService";

function DashboardStaff() {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : null;

  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);
  const [isEditStaffModalOpen, setIsEditStaffModalOpen] = useState(false);
  const [isResetStaffPasswordModalOpen, setIsResetStaffPasswordModalOpen] =
    useState(false);
  const [staffToEdit, setStaffToEdit] = useState(null);
  const [staff, setStaff] = useState(null);

  const handleResetStaffPasswordModalOpen = async (id) => {
    await fetchStaffById(id);
    setIsResetStaffPasswordModalOpen(true);
  };

  const handleResetStaffPasswordModalClose = async (id) => {
    setIsResetStaffPasswordModalOpen(false);
  };

  const handleEditStaffModalOpen = async (id) => {
    await fetchStaffById(id);
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

  const handleDelete = async (id) => {
    await fetchDeleteStaffById(id);
  };

  const fetchStaffById = async (id) => {
    try {
      const staffData = await UsersService.getSingleUser(id); // Use the UsersService to fetch staff by ID

      if (staffData) {
        setStaffToEdit(staffData); // Set the staff data to state
        console.log("Success");
      }
    } catch (error) {
      // Handle errors
      console.error("An error occurred while fetching staff data:", error);
      // Display an error message if needed
    }
  };

  const fetchDeleteStaffById = async (id) => {
    try {
      await UsersService.deleteUser(id); // Use the UsersService to delete staff by ID

      console.log("Deleted"); // Log a message if the deletion is successful
    } catch (error) {
      // Handle errors
      console.error("An error occurred while deleting staff:", error);
      // Display an error message if needed
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffData = await UsersService.getAllUsers();

        if (staffData) {
          setStaff(staffData.users);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching staff:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      <StaffHeader handleAddStaffModalOpen={handleAddStaffModalOpen} />
      {staff && (
        <DashStaff
          handleResetStaffPasswordModalOpen={handleResetStaffPasswordModalOpen}
          handleEditStaffModalOpen={handleEditStaffModalOpen}
          handleDelete={handleDelete}
          staff={staff}
        />
      )}
      <AddStaffForm
        isAddStaffModalOpen={isAddStaffModalOpen}
        handleAddStaffModalClose={handleAddStaffModalClose}
      />
      {staffToEdit && (
        <EditStaffForm
          isEditStaffModalOpen={isEditStaffModalOpen}
          handleEditStaffModalClose={handleEditStaffModalClose}
          staff={staffToEdit}
        />
      )}

      {staffToEdit && (
        <ResetPasswordForm
          isResetStaffPasswordModalOpen={isResetStaffPasswordModalOpen}
          handleResetStaffPasswordModalClose={
            handleResetStaffPasswordModalClose
          }
          staff={staffToEdit}
        />
      )}
    </div>
  );
}

export default DashboardStaff;
