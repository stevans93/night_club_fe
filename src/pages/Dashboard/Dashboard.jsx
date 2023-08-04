import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../../components/DashboardComponents/DashboardNavbar/DashboardNavbar';
import DashboardSidebar from '../../components/DashboardComponents/DashboardSidebar/DashboardSidebar';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <DashboardSidebar open={sidebarOpen}>
        <DashboardNavbar handleOpen={handleSidebarToggle}/>
        <Outlet />
      </DashboardSidebar>
    </div>
  )
}

export default Dashboard;