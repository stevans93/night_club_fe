import React from "react";
import ReservationHeader from "../../../../components/DashboardComponents/DashboardHeaders/ReservationHeader/ReservationHeader";
import DashboardReserveTable from "../../../../components/DashboardComponents/DashboardTables/DashboardReserveTable/DashboardReserveTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";
import EditReservationForm from "../../../../components/DashboardComponents/DashboardForms/EditReservationForm/EditReservationForm";
import AddReservationForm from "../../../../components/DashboardComponents/DashboardForms/AddReservationForm/AddReservationForm";
import ReservationsService from "../../../../services/reservationsService";

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
    return `${year}-${month}-${date}`;
  };

  const [currentDate, setCurrentDate] = useState(getDate());
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfReservations, setNumberOfReservations] = useState();

  console.log(currentDate);

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
  };

  const handleChangeStatus = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      status: value,
    }));
  };

  const handleChangeName = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  const fetchReservationById = async (id) => {
    try {
      const reservation = await ReservationsService.getSingleReservation(id);
      setReservationToEdit(reservation);
      // Handle success, e.g., update the state with the fetched reservation
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("An error occurred while fetching the reservation:", error);
    }
  };

  const fetchDeleteReservationById = async (id) => {
    try {
      await ReservationsService.deleteReservation(id);
      console.log("Deleted");
      // Handle success, e.g., show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("An error occurred while deleting the reservation:", error);
    }
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsData = await ReservationsService.getAllReservations(
          selectedParams.name,
          selectedParams.date,
          selectedParams.table,
          selectedParams.pageNumber,
          selectedParams.pageSize,
          selectedParams.status
        );

        if (reservationsData) {
          setReservations(reservationsData.reservations);
          setNumberOfPages(reservationsData.numberOfPages);
          setNumberOfReservations(reservationsData.numberOfReservations);

          const toExp = reservationsData.reservations.map((x) => ({
            name: x.name,
            phone: x.phone,
            email: x.email,
          }));
          setReservationsForExport(toExp);
        }
      } catch (error) {
        // Handle any errors here
        console.error("An error occurred while fetching reservations:", error);
      }
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
