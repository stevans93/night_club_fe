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

axios.defaults.baseURL = "http://localhost:4000/api";

axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("nc_token")) {
    config.headers.authorization = localStorage.getItem("nc_token");
  }

  return config;
});

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
