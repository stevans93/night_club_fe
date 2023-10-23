import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { RiCoupon2Line } from "react-icons/ri";
import { BiFoodMenu, BiWrench } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar2Event } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../store/userSlice";
import { toast } from "react-toastify";
import avatar from "../../../assets/avatar.png";
import logo from "../../../assets/dashboard-logo.png";
import "./DashboardSidebar.css";

function DashboardSidebar({ children, open }) {
  const ncUser = JSON.parse(localStorage.getItem("nc_user"));

  const userRole = ncUser ? ncUser.role : null;

  const userPermissions = ncUser ? ncUser.permissions : null;

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="flex">
      <div
        className={`fixed ${
          open ? "w-20 md:w-60" : "w-60 md:w-20"
        } duration-300 h-screen p-4 py-6 bg-dashboardPrimary text-white flex items-center flex-col bg-[#181818] dashboard-sidebar`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="my-5 w-2/4">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="flex flex-col w-full h-full">
          {(userRole === "manager" ||
            userPermissions.includes("reservation") ||
            userRole === "admin") && (
            <NavLink
              to="/dashboard"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <FiUsers className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Reservation
              </span>
            </NavLink>
          )}
          {/* <NavLink
            to="/dashboard/payment"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <PiContactlessPayment className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Payment History
            </span>
          </NavLink> */}
          {userRole === "manager" && (
            <NavLink
              to="/dashboard/menu"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline active:text-white"
            >
              <BiFoodMenu className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Menu
              </span>
            </NavLink>
          )}
          {(userRole === "manager" || userRole === "admin") && (
            <NavLink
              to="/dashboard/club-config"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <BiWrench className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Club Configuration
              </span>
            </NavLink>
          )}
          {(userRole === "manager" || userPermissions.includes("coupons")) && (
            <NavLink
              to="/dashboard/coupon"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <RiCoupon2Line className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Coupon List
              </span>
            </NavLink>
          )}
          {userRole === "manager" && (
            <NavLink
              to="/dashboard/customer-list"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <HiOutlineUserGroup className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Custommer List
              </span>
            </NavLink>
          )}
          {userRole === "manager" && (
            <NavLink
              to="/dashboard/staff"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <HiOutlineUserGroup className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Staff
              </span>
            </NavLink>
          )}
          {/* <NavLink
            to="/dashboard/live-order"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <MdOutlineSupportAgent className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Live Order
            </span>
          </NavLink> */}
          {userRole === "manager" && (
            <NavLink
              to="/dashboard/events"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <BsCalendar2Event className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Events
              </span>
            </NavLink>
          )}
          {userRole === "admin" && (
            <NavLink
              to="/dashboard/user-list"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <HiOutlineUserGroup className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                User List
              </span>
            </NavLink>
          )}

          {userRole === "admin" && (
            <NavLink
              to="/dashboard/addClub"
              className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
            >
              <HiOutlineUserGroup className="mr-2 text-2xl" />
              <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
                Add Club
              </span>
            </NavLink>
          )}

          <button
            onClick={handleLogOut}
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline mt-auto"
          >
            <CiLogout className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Log Out
            </span>
          </button>
        </div>
      </div>
      <main
        className={`${
          open ? "ml-20 md:ml-60" : "ml-60 md:ml-20"
        } duration-300 w-[100%]`}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardSidebar;
