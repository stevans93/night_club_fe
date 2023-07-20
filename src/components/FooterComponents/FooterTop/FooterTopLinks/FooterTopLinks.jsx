import React from 'react';
import { Link } from "react-router-dom";

function FooterTopLinks() {
  return (
    <div className='flex flex-col gap-4 mx-8 mt-4'>
      <h3>Links</h3>
      <Link to={'/'} className='text-font'>Home</Link>
      <Link to={'/'} className='text-font'>Pricing</Link>
      {/* <Link to={'/'} className='text-font'>Download</Link> */}
      <Link to={'/'} className='text-font'>About</Link>
      <Link to={'/'} className='text-font'>Service</Link>
      
    </div>
  )
}

export default FooterTopLinks;