import React from "react";
import ReservationHeader from "../../../../components/DashboardComponents/DashboardHeaders/ReservationHeader/ReservationHeader";
import DashboardReserveTable from "../../../../components/DashboardComponents/DashboardTables/DashboardReserveTable/DashboardReserveTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";

function DashboardReservation() {
  const pageSizeOptions = [15, 30, 45];
  const tableOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const statusOptions = ["Pending", "Complete"];
  const [reservations, setReservations] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    table: "",
    status: "",
    pageNumber: 1,
    pageSize: pageSizeOptions[0],
  });

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
      date: '',
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
    console.log(value);
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      name: value,
    }));
  };

  useEffect(() => {
    const fetchReservations = async () => {
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
      const response = await fetch(
        `http://localhost:4000/api/reservations/allReservations/${queryString}`
      );
      const json = await response.json();

      if (response.ok) {
        setReservations(json.reservations);
      }

      setNumberOfPages(json.numberOfPages);

      setNumberOfReservations(json.numberOfReservations);
    };

    fetchReservations();
  }, [selectedParams]);

  return (
    <div className="bg-gray-600 pt-5 h-full px-3 py-10">
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
      />
      {reservations && (
        <DashboardReserveTable
          reservations={reservations}
          pageSize={selectedParams.pageSize}
          pageNumber={selectedParams.pageNumber}
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
  );
}

export default DashboardReservation;
