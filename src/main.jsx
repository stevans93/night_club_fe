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
import DashboardMenu from "./pages/DashboardMenu/DashboardMenu";
import DashboardSettings from "./pages/DashboardSettings/DashboardSettings";
import Club from "./pages/Club/Club";

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
        path: "/club",
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
      {
        path: "/dashboard/menu",
        element: <DashboardMenu />,
      },
      {
        path: "/dashboard/settings",
        element: <DashboardSettings />,
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
