import React from "react";
import { useState, useEffect } from "react";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import UserHeader from "../../../../components/DashboardComponents/DashboardHeaders/UsersHeader/UsersHeader";
import DashboardUsersTable from "../../../../components/DashboardComponents/DashboardTables/DashboardUsersTable/DashboardUsersTable";

function DashboardUserList() {
  const pageSizeOptions = [15, 30, 45];
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfUsers, setNumberOfUsers] = useState();
  const [users, setUsers] = useState(null);
  const [usersForExport, setUsersForExport] = useState();

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
      let queryString = ``;
      if (selectedParams) {
        for (const [index, [key, value]] of Object.entries(
          selectedParams
        ).entries()) {
          if (index === 0) {
            queryString += `?${key}=${value}`;
          } else {
            queryString += `&${key}=${value}`;
          }
        }
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
        setUsers(json.users);
        const toExp = json.users.map((x) => ({
          name: `${x.firstName} ${x.lastName}`,
          phone: x.mobilePhone,
          email: x.email,
        }));
        setUsersForExport(toExp);
      }

      setNumberOfPages(json.numberOfPages);
      setNumberOfUsers(json.numberOfUsers);
    };

    fetchUsers();
  }, [selectedParams]);

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
    </div>
  );
}

export default DashboardUserList;
