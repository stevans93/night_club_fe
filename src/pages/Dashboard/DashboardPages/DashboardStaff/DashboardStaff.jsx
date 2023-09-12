import React from "react";
import StaffHeader from "../../../../components/DashboardComponents/DashboardHeaders/StaffHeader/StaffHeader";
import DashStaff from "../../../../components/DashboardComponents/DashboardStaff/DashStaff";

function DashboardStaff() {
  return (
    <div className="bg-gray-600 pt-5 h-full">
      <StaffHeader />
      <DashStaff />
    </div>
  );
}

export default DashboardStaff;
