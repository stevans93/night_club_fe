import React from "react";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { RiCoupon2Line } from "react-icons/ri";
import { BiFoodMenu, BiWrench } from "react-icons/bi";
import { PiContactlessPayment } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendar2Event } from "react-icons/bs";
import avatar from "../../../assets/avatar.png";
import logo from "../../../assets/dashboard-logo.png";

function DashboardSidebar({ children, open }) {
  return (
    <div className="flex">
      <div
        className={`fixed ${
          open ? "w-20 md:w-60" : "w-60 md:w-20"
        } duration-300 h-screen p-4 py-6 bg-dashboardPrimary text-white flex items-center flex-col bg-[#181818]`}
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="my-7 w-3/4">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="flex flex-col w-full">
          <NavLink
            to="/dashboard"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <FiUsers className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Reservation
            </span>
          </NavLink>
          {/* <NavLink
            to="/dashboard/payment"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <PiContactlessPayment className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Payment History
            </span>
          </NavLink> */}
          <NavLink
            to="/dashboard/menu"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline active:text-white"
          >
            <BiFoodMenu className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Menu
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/club-config"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <BiWrench className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Club Configuration
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/coupon"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <RiCoupon2Line className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Coupon List
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/customer-list"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <HiOutlineUserGroup className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Custommer List
            </span>
          </NavLink>
          <NavLink
            to="/dashboard/staff"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <HiOutlineUserGroup className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Staff
            </span>
          </NavLink>
          {/* <NavLink
            to="/dashboard/live-order"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <MdOutlineSupportAgent className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Live Order
            </span>
          </NavLink> */}
          <NavLink
            to="/dashboard/events"
            className="flex py-3 px-2 rounded-md text-gray-500 focus:text-white focus:bg-primary hover:bg-primary hover:text-white hover:no-underline"
          >
            <BsCalendar2Event className="mr-2 text-2xl" />
            <span className={` ${open ? "hidden md:block" : "md:hidden"}`}>
              Events
            </span>
          </NavLink>
        </div>
      </div>
      <main
        className={`${
          open ? "ml-20 md:ml-60" : "ml-60 md:ml-20"
        } duration-300 w-full`}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardSidebar;