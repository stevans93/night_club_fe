import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <div>
        <main>
            <Outlet />
            <ToastContainer />
        </main>
    </div>
  )
}

export default MainLayout;