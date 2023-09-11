import React from "react";
import ReservationHeader from "../../../../components/DashboardComponents/DashboardHeaders/ReservationHeader/ReservationHeader";
import DashboardReserveTable from "../../../../components/DashboardComponents/DashboardTables/DashboardReserveTable/DashboardReserveTable";

function DashboardReservation() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <ReservationHeader />
      <DashboardReserveTable />
    </div>
  );
}

export default DashboardReservation;
