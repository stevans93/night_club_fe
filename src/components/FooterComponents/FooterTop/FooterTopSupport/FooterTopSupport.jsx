import React from 'react';
import { Link } from "react-router-dom";

function FooterTopSupport() {
  return (
    <div className='flex flex-col gap-4 mx-8 mt-4'>
      <h3>Support</h3>
      <Link to={'/'} className='text-font'>FAQ</Link>
      <Link to={'/'} className='text-font'>How it</Link>
      <Link to={'/'} className='text-font'>Features</Link>
      <Link to={'/'} className='text-font'>Contact</Link>
      <Link to={'/'} className='text-font'>Reporting</Link>
    </div>
  )
}

export default FooterTopSupport;