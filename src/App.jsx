import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "./components/FooterComponents/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/userSlice";
import ClubHeader from "./components/ClubHeader/ClubHeader";

function App() {
  const dispatch = useDispatch();

  const { clubId } = useParams();

  useEffect(() => {
    dispatch(restoreUser(JSON.parse(localStorage.getItem("nc_user"))));
  }, []);

  return (
    <div>
      {clubId ? <ClubHeader /> : <Header />}
      {!clubId && <Navbar />}
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
