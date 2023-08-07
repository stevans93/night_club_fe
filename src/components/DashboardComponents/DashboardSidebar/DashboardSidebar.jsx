import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { RiCoupon2Line } from 'react-icons/ri';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { BiFoodMenu, BiWrench } from 'react-icons/bi';
import { PiContactlessPayment } from 'react-icons/pi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import avatar from '../../../assets/avatar.png';

function DashboardSidebar({children, open}) {
  return (
    <div className='flex'>
      <div className={`fixed ${open ? "w-20 md:w-60" : "w-60 md:w-20"} duration-300 h-screen p-4 bg-dashboardPrimary text-white flex items-center flex-col`}>
        <div className='my-6'>
          <img src={avatar} alt="avatar" />
        </div>
        <div className='flex justify-center flex-col gap-4'>
          <NavLink to='/' className='flex'> <AiOutlineHome className='mr-2 text-2xl' /> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Home</span> </NavLink>
          <NavLink to='/' className='flex'> <LuLayoutDashboard className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Dashboard</span> </NavLink>
          <NavLink to='/' className='flex'> <FiUsers className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Customer Lis</span> </NavLink>
          <NavLink to='/' className='flex'> <HiOutlineUserGroup className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Staffs</span></NavLink>
          <NavLink to='/' className='flex'> <RiCoupon2Line className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Coupon List</span> </NavLink>
          <NavLink to='/' className='flex'> <MdOutlineManageAccounts className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Manage Features</span> </NavLink>
          <NavLink to='/' className='flex'> <BiWrench className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Shop Configuration</span> </NavLink>
          <NavLink to="/dashboard/menu" className='flex'> <BiFoodMenu className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Menu</span> </NavLink>
          <NavLink to='/' className='flex'> <PiContactlessPayment className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Payment History</span> </NavLink>
          <NavLink to='/' className='flex'> <MdOutlineSupportAgent className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Live Order</span> </NavLink>
          <NavLink to="/dashboard/settings" className='flex'> <FiSettings className='mr-2 text-2xl'/> <span className={` ${open ? 'hidden md:block' : 'md:hidden'}`}>Settings</span> </NavLink>
        </div>
      </div>
      <main className={`${open ? "ml-20 md:ml-60" : "ml-60 md:ml-20"} duration-300 w-full`}>
      { children }
      </main>
    </div>
  )
}

export default DashboardSidebar;