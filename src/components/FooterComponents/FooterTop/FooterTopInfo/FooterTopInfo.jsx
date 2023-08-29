import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import logo from '../../../../assets/where2go.png'

function FooterTopInfo(props) {
  return (
    <div>
        <div className='flex flex-grow flex-col gap-4 text-base m-2'>
            <div className='flex justify-center lg:justify-start'>
                <img src={logo}alt="logo" className='w-[150px]'/>
            </div>

            <div className='flex justify-center items-center lg:justify-start gap-3 '>
                <MdLocationPin />
                <span className='text-font'>{props.location}</span>
            </div>

            <div className='flex justify-center items-center lg:justify-start gap-3'>
                <FaEnvelope />
                <span className='text-font'>{props.email}</span>
            </div>

            <div className='flex justify-center items-center lg:justify-start gap-3'>
                <BsFillTelephoneFill />
                <span className='text-font'>{props.mobile}</span>
            </div>

        </div>
    </div>
  )
}

export default FooterTopInfo;