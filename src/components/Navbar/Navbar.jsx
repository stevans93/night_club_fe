import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/where2go.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../store/userSlice";
import { toast } from "react-toastify";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
    toast.success("You have successfully logged out!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const ncUser = JSON.parse(localStorage.getItem("nc_user"));

  // Get the user's role from the parsed user object
  const userRole = ncUser ? ncUser.role : null;

  // Extract the clubId if ncUser is available
  const clubId = ncUser ? ncUser.clubId : null;

  if (clubId) {
    // Do something with clubId
    console.log("The value of clubId is:", clubId);
  } else {
    // Handle the case when clubId is not found in ncUser
    console.log("clubId not found in ncUser");
  }

  return (
    <>
      <nav className="bg-secondary">
        <div className="relative flex justify-between items-center container mx-auto px-4 py-5 text-sm">
          <a href="/" className="m-2">
            <img src={logo} alt="where2go" className="w-[150px]" />
          </a>

          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              position="right"
              onClick={handleOpen}
            >
              <GiHamburgerMenu
                className="block h-7 w-7 fill-current"
                position="right"
              />
            </button>
          </div>

          {localStorage.hasOwnProperty("nc_user") ? (
            <div className="hidden lg:flex lg:justify-center lg:items-center">
              <NavLink to="/" className="m-2">
                Početna
              </NavLink>
              <NavLink to="/clubs" className="m-2">
                Ugostiteljski Objekti
              </NavLink>
              <NavLink to="/about" className="m-2">
                O Nama
              </NavLink>
              <NavLink to="/contact" className="m-2">
                Kontakt
              </NavLink>
              <NavLink
                to="/events"
                className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2"
              >
                Događaji
              </NavLink>
              {userRole !== "user" && (
                <NavLink
                  to={`/dashboard`}
                  className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
                >
                  Dashboard
                </NavLink>
              )}
              <button
                onClick={handleLogOut}
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
              >
                Log Out
              </button>
              <select className="bg-secondary ml-2">
                <option>SR</option>
                <option>EN</option>
              </select>
            </div>
          ) : (
            <div className="hidden lg:inline-block">
              <NavLink to="/" className="m-2">
                Početna
              </NavLink>
              <NavLink to="/clubs" className="m-2">
                Ugostiteljski Objekti
              </NavLink>
              <NavLink to="/about" className="m-2">
                O Nama
              </NavLink>
              <NavLink to="/contact" className="m-2">
                Kontakt
              </NavLink>
              <NavLink
                to="/events"
                className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2"
              >
                Događaji
              </NavLink>
              <NavLink
                to="/main/login"
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
              >
                Log In
              </NavLink>
              <NavLink
                to="/main/register"
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
              >
                Register
              </NavLink>
              <select className="bg-secondary ml-2">
                <option>SR</option>
                <option>EN</option>
              </select>
            </div>
          )}
        </div>

        {localStorage.hasOwnProperty("nc_user") ? (
          <div
            className={`${
              open ? "" : "hidden"
            } dropdown absolute flex flex-col justify-center items-center top-[13%] sm:top-[10%] md:top-[9%] left-0 text-center bg-secondary w-[100%]`}
          >
            <NavLink to="/" className="m-2">
              Početna
            </NavLink>
            <NavLink to="/clubs" className="m-2">
              Ugostiteljski Objekti
            </NavLink>
            <NavLink to="/about" className="m-2">
              O Nama
            </NavLink>
            <NavLink to="/contact" className="m-2">
              Kontakt
            </NavLink>
            <NavLink
              to="/events"
              className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2"
            >
              Događaji
            </NavLink>
            {userRole !== "user" && (
              <NavLink
                to={`/dashboard`}
                className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
              >
                Dashboard
              </NavLink>
            )}
            <button
              onClick={handleLogOut}
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
            >
              Log Out
            </button>
            <select className="bg-secondary mt-2 mb-3">
              <option>SR</option>
              <option>EN</option>
            </select>
          </div>
        ) : (
          <div
            className={`${
              open ? "" : "hidden"
            } dropdown absolute flex flex-col justify-center items-center top-[13%] sm:top-[10%] md:top-[9%] left-0 text-center bg-secondary w-[100%]`}
          >
            <NavLink to="/" className="m-2">
              Početna
            </NavLink>
            <NavLink to="/clubs" className="m-2">
              Ugostiteljski Objekti
            </NavLink>
            <NavLink to="/about" className="m-2">
              O Nama
            </NavLink>
            <NavLink to="/contact" className="m-2">
              Kontakt
            </NavLink>
            <NavLink
              to="/events"
              className="m-2 border-2 border-solid text-primary hover:bg-primary hover:text-white border-primary rounded-3xl px-4 py-2"
            >
              Događaji
            </NavLink>
            <NavLink
              to="/main/login"
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
            >
              Login
            </NavLink>
            <NavLink
              to="/main/register"
              className="m-2 border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-5 py-2"
            >
              Register
            </NavLink>
            <select className="bg-secondary mt-2 mb-3">
              <option>SR</option>
              <option>EN</option>
            </select>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
