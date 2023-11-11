import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../../components/DashboardComponents/DashboardNavbar/DashboardNavbar";
import DashboardSidebar from "../../components/DashboardComponents/DashboardSidebar/DashboardSidebar";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex w-full">
      <DashboardSidebar open={sidebarOpen} />
      <div className="flex flex-col w-full px-3">
        <DashboardNavbar handleOpen={handleSidebarToggle} />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
