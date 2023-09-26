import React from "react";
import { useState, useEffect } from "react";
import AddStaffForm from "../../../../components/DashboardComponents/DashboardForms/AddStaffForm/AddStaffForm";
import EditStaffForm from "../../../../components/DashboardComponents/DashboardForms/EditStaffForm/EditStaffForm";
import ResetPasswordForm from "../../../../components/DashboardComponents/DashboardForms/ResetPasswordForm/ResetPasswordForm";
import StaffHeader from "../../../../components/DashboardComponents/DashboardHeaders/StaffHeader/StaffHeader";
import DashStaff from "../../../../components/DashboardComponents/DashboardStaff/DashStaff";

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
    const token = localStorage.getItem("nc_token");
    const response = await fetch(`http://localhost:4000/api/user/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      setStaffToEdit(json);
    }
  };

  const fetchDeleteStaffById = async (id) => {
    const token = localStorage.getItem("nc_token");
    const response = await fetch(
      `http://localhost:4000/api/user/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (response.ok) {
      console.log("deleted");
    }
  };

  useEffect(() => {
    const fetchStaff = async () => {
      let queryString = ``;
      if (clubId) {
        // Pass the clubId as a query parameter
        queryString += `?clubId=${clubId}`;
      }

      const token = localStorage.getItem("nc_token");
      const response = await fetch(
        `http://localhost:4000/api/user/all/${queryString}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setStaff(json);
      }
    };
    fetchStaff();
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
