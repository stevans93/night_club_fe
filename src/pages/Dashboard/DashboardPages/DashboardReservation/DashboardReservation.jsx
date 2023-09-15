import React from "react";
import ReservationHeader from "../../../../components/DashboardComponents/DashboardHeaders/ReservationHeader/ReservationHeader";
import DashboardReserveTable from "../../../../components/DashboardComponents/DashboardTables/DashboardReserveTable/DashboardReserveTable";
import TablePagination from "../../../../components/TablePagination/TablePagination";
import { useState, useEffect } from "react";

function DashboardReservation(props) {
  const [reservations, setReservations] = useState(null);

  const [selectedParams, setSelectedParams] = useState({
    pageNumber: 1,
    pageSize: 15,
  });
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [numberOfReservations, setNumberOfReservations] = useState();

  const handleNextPage = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber + 1,
    }));
  };

  const handlePreviousPage = (value) => {
    setSelectedParams((selectedParams) => ({
      ...selectedParams,
      pageNumber: selectedParams.pageNumber - 1,
    }));
  };

  useEffect(() => {
    const fetchReservations = async () => {
      let queryString = ``;
      if (props.params) {
        for (const [index, [key, value]] of Object.entries(
          props.params
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
  }, [props.params]);

  return (
    <div className="bg-gray-600 pt-5 h-full px-3 py-10">
      <ReservationHeader />
      {reservations && <DashboardReserveTable reservations={reservations} />}
      <TablePagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        numberOfPages={numberOfPages}
        numberOfReservations={numberOfReservations}
      />
    </div>
  );
}

export default DashboardReservation;
