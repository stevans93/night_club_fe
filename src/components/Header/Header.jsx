import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <>
        <header className='relative bg-primary'>
            <div className='container mx-auto px-4 flex items-center justify-center lg:justify-between text-white'>
                <div>
                    <a href="mailto:info@where2go.vip" className='lg:flex items-center justify-center hidden lg:inline-block'>
                        <FaEnvelope className='m-2'/>
                        <span className='m-2'>info@where2go.vip</span> 
                    </a>
                </div>

                <div className='flex items-center justify-center'>
                    <Link to='#' className='m-2'><BiLogoFacebook /></Link> 
                    <Link to='#' className='m-2'><BsTwitter /></Link> 
                    <Link to='#' className='m-2'><BsInstagram /></Link> 
                </div>
            </div> 
        </header>
    </>
  )
}

export default Header;