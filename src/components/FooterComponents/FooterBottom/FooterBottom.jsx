import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

function FooterBottom() {
  return (
    <div className='text-white text-base flex flex-col lg:flex-row items-center justify-between gap-4 m-2'>
        <p>Copyright &copy; 2023 Where2go</p>

        <div className='flex items-center'>
            <Link to='#' className='m-2'><BiLogoFacebook className='fill-white' /></Link> 
            <Link to='#' className='m-2'><BsTwitter className='fill-white' /></Link> 
            <Link to='#' className='m-2'><BsInstagram className='fill-white' /></Link> 
        </div>
    </div>
  )
}

export default FooterBottom;