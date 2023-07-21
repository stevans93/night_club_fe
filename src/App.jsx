import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/FooterComponents/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'http://localhost:4000/api';

function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
        <ToastContainer />
    </div>
  )
}

export default App;