import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function DashboardNavbar({handleOpen}) {

  return (
    <nav className='relative w-[100%] flex right-0 bg-secondary px-4'>
      <div className='flex items-center h-[5vh]'>
        <NavLink onClick={handleOpen}><GiHamburgerMenu className='text-2xl'/></NavLink>
      </div>
    </nav>
  )
}

export default DashboardNavbar;