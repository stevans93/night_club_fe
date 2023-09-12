import React from "react";
import LiveOrderHeader from "../../../../components/DashboardComponents/DashboardHeaders/LiveOrderHeader/LiveOrderHeader";
import DashboardLiveTables from "../../../../components/DashboardComponents/DashboardLiveTables/DashboardLiveTables";

function DashboardLive() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <LiveOrderHeader />
      <DashboardLiveTables />
    </div>
  );
}

export default DashboardLive;
