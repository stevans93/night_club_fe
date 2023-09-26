import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Clubs from "./pages/Clubs/Clubs";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import MainLayout from "./pages/MainLayout/MainLayout";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Events from "./pages/Events/Events";
import { Provider } from "react-redux";
import store from "./store/store";
import DashboardMenu from "./pages/Dashboard/DashboardPages/DashboardMenu/DashboardMenu";
import DashboardCustomerList from "./pages/Dashboard/DashboardPages/DashboardCustomerList/DashboardCustomerList";
import Club from "./pages/Club/Club";
import DashboardReservation from "./pages/Dashboard/DashboardPages/DashboardReservation/DashboardReservation";
import DashboardPayment from "./pages/Dashboard/DashboardPages/DashboardPayment/DashboardPayment";
import DashboardConfiguration from "./pages/Dashboard/DashboardPages/DashboardConfiguration/DashboardConfiguration";
import DashboardCoupon from "./pages/Dashboard/DashboardPages/DashboardCoupon/DashboardCoupon";
import DashboardStaff from "./pages/Dashboard/DashboardPages/DashboardStaff/DashboardStaff";
import DashboardLive from "./pages/Dashboard/DashboardPages/DashboardLive/DashboardLive";
import DashboardEvents from "./pages/Dashboard/DashboardPages/DashboardEvents/DashboardEvents";
import DashboardUserList from "./pages/Dashboard/DashboardPages/DashboardUserList/DashboardUserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/clubs",
        element: <Clubs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/club/:clubId",
        element: <Club />,
      },
    ],
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main/login",
        element: <Login />,
      },
      {
        path: "/main/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      ,
      {
        path: "",
        element: <DashboardReservation />,
      },
      {
        path: "payment",
        element: <DashboardPayment />,
      },
      {
        path: "menu",
        element: <DashboardMenu />,
      },
      {
        path: "club-config",
        element: <DashboardConfiguration />,
      },
      {
        path: "coupon",
        element: <DashboardCoupon />,
      },
      {
        path: "customer-list",
        element: <DashboardCustomerList />,
      },
      {
        path: "staff",
        element: <DashboardStaff />,
      },
      {
        path: "live-order",
        element: <DashboardLive />,
      },
      {
        path: "events",
        element: <DashboardEvents />,
      },
      {
        path: "user-list",
        element: <DashboardUserList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
