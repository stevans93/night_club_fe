import React from "react";
import ReservationHeader from "../../../../components/DashboardComponents/DashboardHeaders/ReservationHeader/ReservationHeader";
import DashboardReserveTable from "../../../../components/DashboardComponents/DashboardTables/DashboardReserveTable/DashboardReserveTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";
import EditReservationForm from "../../../../components/DashboardComponents/DashboardForms/EditReservationForm/EditReservationForm";
import AddReservationForm from "../../../../components/DashboardComponents/DashboardForms/AddReservationForm/AddReservationForm";

function DashboardReservation() {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));
  const clubId = ncUser ? ncUser.clubId : undefined;

  const pageSizeOptions = [15, 30, 45];
  const tableOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const statusOptions = ["Pending", "Complete"];
  const [reservations, setReservations] = useState(null);
  const [reservationsForExport, setReservationsForExport] = useState(null);
  const [selectedParams, setSelectedParams] = useState({
    table: "",
    status: "",
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [reservationToEdit, setReservationToEdit] = useState(null);

  const [isAddReservationModalOpen, setIsAddReservationModalOpen] =
    useState(false);

  const handleAddReservationModalOpen = () => {
    setIsAddReservationModalOpen(true);
  };

  const handleAddReservationModalClose = () => {
    setIsAddReservationModalOpen(false);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleEditModalOpen = async (id) => {
    await fetchReservationById(id);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (id) => {
    await fetchDeleteReservationById(id);
  };

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-0${month}-${date}`;
  };

  const [currentDate, setCurrentDate] = useState(getDate());
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfReservations, setNumberOfReservations] = useState();

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

  const handleChangeDate = (value) => {
    console.log(value);
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: value,
    }));
  };

  const handleTodaysReservations = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: currentDate,
    }));
  };

  const handleAllReservations = () => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      date: "",
    }));
  };

  const handleChangeTable = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      table: value,
    }));
    console.log(typeof value);
  };

  const handleChangeStatus = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      status: value,
    }));
  };

  const handleChangeName = (value) => {
    console.log(value);
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  const fetchReservationById = async (id) => {
    const token = localStorage.getItem("nc_token");
    const response = await fetch(
      `http://localhost:4000/api/reservations/singleReservation/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      setReservationToEdit(json);
    }
  };

  const fetchDeleteReservationById = async (id) => {
    const token = localStorage.getItem("nc_token");
    const response = await fetch(
      `http://localhost:4000/api/reservations/delete/${id}`,
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
    const fetchReservations = async () => {
      let queryString = ``;
      if (clubId !== undefined) {
        queryString += `?clubId=${clubId}`;
      }
      if (selectedParams) {
        for (const [index, [key, value]] of Object.entries(
          selectedParams
        ).entries()) {
          if (index === 0 && !clubId) {
            queryString += `?${key}=${value}`;
          } else {
            queryString += `&${key}=${value}`;
          }
        }
      }
      console.log(queryString);
      const token = localStorage.getItem("nc_token");
      const response = await fetch(
        `http://localhost:4000/api/reservations/allReservations/${queryString}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        setReservations(json.reservations);
        const toExp = json.reservations.map((x) => ({
          name: x.name,
          phone: x.phone,
          email: x.email,
        }));
        setReservationsForExport(toExp);
      }

      setNumberOfPages(json.numberOfPages);

      setNumberOfReservations(json.numberOfReservations);
    };

    fetchReservations();
  }, [selectedParams]);

  return (
    <>
      <div className="bg-[#F9F9F9] pt-5 h-full px-3 py-10 shadow-lg">
        {reservations && (
          <ReservationHeader
            pageSizeOptions={pageSizeOptions}
            tableOptions={tableOptions}
            statusOptions={statusOptions}
            pageSize={selectedParams.pageSize}
            handlePageSizeChange={handlePageSizeChange}
            selectedTable={selectedParams.selectedTable}
            selectedStatus={selectedParams.selectedStatus}
            handleChangeDate={handleChangeDate}
            handleChangeTable={handleChangeTable}
            handleChangeStatus={handleChangeStatus}
            handleChangeName={handleChangeName}
            handleTodaysReservations={handleTodaysReservations}
            handleAllReservations={handleAllReservations}
            handleAddReservationModalOpen={handleAddReservationModalOpen}
            data={reservationsForExport}
          />
        )}
        {reservations && (
          <DashboardReserveTable
            reservations={reservations}
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
          numberOfItems={numberOfReservations}
          selectedParams={selectedParams}
        />
      </div>
      {reservationToEdit && (
        <EditReservationForm
          isEditModalOpen={isEditModalOpen}
          handleEditModalClose={handleEditModalClose}
          reservation={reservationToEdit}
        />
      )}
      <AddReservationForm
        isAddReservationModalOpen={isAddReservationModalOpen}
        handleAddReservationModalClose={handleAddReservationModalClose}
      />
    </>
  );
}

export default DashboardReservation;
