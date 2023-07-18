import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/FooterComponents/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default App;