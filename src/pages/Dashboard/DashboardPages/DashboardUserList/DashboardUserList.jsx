import React from "react";
import { useState, useEffect } from "react";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import UserHeader from "../../../../components/DashboardComponents/DashboardHeaders/UsersHeader/UsersHeader";
import DashboardUsersTable from "../../../../components/DashboardComponents/DashboardTables/DashboardUsersTable/DashboardUsersTable";
import UsersService from "../../../../services/userService";
import EditUserForm from "../../../../components/EditUserForm/EditUserForm";

function DashboardUserList() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfUsers, setNumberOfUsers] = useState();
  const [users, setUsers] = useState(null);
  const [usersForExport, setUsersForExport] = useState();
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const handlePageSizeChange = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageSize: value,
      pageNumber: 1,
    }));
  };

  const handleNextPage = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber + 1,
    }));
  };

  const handlePreviousPage = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber - 1,
    }));
  };

  const handleChangeName = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await UsersService.getAllUsers(
          selectedParams.pageNumber,
          selectedParams.pageSize,
          selectedParams.role
        );

        if (usersData) {
          setUsers(usersData.users);

          const toExp = usersData.users.map((x) => ({
            name: `${x.firstName} ${x.lastName}`,
            phone: x.mobilePhone,
            email: x.email,
          }));
          setUsersForExport(toExp);
          setNumberOfPages(usersData.numberOfPages);
          setNumberOfUsers(usersData.numberOfUsers);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching users:", error);
      }
    };

    fetchUsers();
  }, [selectedParams]);

  const fetchUserById = async (id) => {
    try {
      const response = await UsersService.getSingleUser(id);

      if (response) {
        // Handle success
        setUserToEdit(response); // Assuming setUserToEdit is a state updater function

        console.log("User fetched successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.log("Failed to fetch User");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while fetching the user:", error);
    }
  };

  const fetchDeleteUserById = async (id) => {
    try {
      const response = await UsersService.deleteUser(id);

      if (response) {
        // Handle success
        console.log("user deleted successfully");
        // You can perform additional actions if needed
      } else {
        // Handle failure
        console.error("Failed to delete user");
        // You can perform additional actions if needed
      }
    } catch (error) {
      // Handle any errors here
      console.error("An error occurred while deleting the user:", error);
    }
  };

  const handleDelete = async (id) => {
    await fetchDeleteUserById(id);
    setUsers(users.filter((e) => e._id !== id))
  };

  const handleEditModalClose = () => {
    setIsEditUserModalOpen(false);
  };

  const handleEditModalOpen = async (id) => {
    await fetchUserById(id);
    setIsEditUserModalOpen(true);
  };

  return (
    <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
      {usersForExport && (
        <UserHeader
          pageSizeOptions={pageSizeOptions}
          pageSize={selectedParams.pageSize}
          handlePageSizeChange={handlePageSizeChange}
          handleChangeName={handleChangeName}
          data={usersForExport}
        />
      )}

      {users && (
        <DashboardUsersTable
          users={users}
          pageSize={selectedParams.pageSize}
          pageNumber={selectedParams.pageNumber}
          handleEditModalOpen={handleEditModalOpen}
          handleDelete={handleDelete}
        />
      )}

      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        pageSize={selectedParams.pageSize}
        numberOfPages={numberOfPages}
        numberOfItems={numberOfUsers}
        selectedParams={selectedParams}
      />

      {userToEdit && (
        <EditUserForm
          isEditUserModalOpen={isEditUserModalOpen}
          handleEditModalClose={handleEditModalClose}
          user={userToEdit}
        />
      )}
    </div>
  );
}

export default DashboardUserList;
