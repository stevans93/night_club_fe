import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/FooterComponents/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/userSlice";

axios.defaults.baseURL = "http://localhost:4000/api";

axios.interceptors.request.use((config) => {
  if (localStorage.hasOwnProperty("nc_token")) {
    config.headers.authorization = localStorage.getItem("nc_token");
  }

  return config;
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser(JSON.parse(localStorage.getItem("nc_user"))));
  }, []);

  return (
    <div>
      {/* <Header />
        <Navbar /> */}
      <Outlet />
      <Footer clubId='64ee53cb2744ff39426bddff' />
      <ToastContainer />
    </div>
  );;
}

export default App;
