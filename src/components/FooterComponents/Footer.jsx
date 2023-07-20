import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

function Footer() {
  return (
    <div className='static bottom-0'>
        <div className='bg-secondary py-[60px]'>
            <div className='container mx-auto px-4'>
                <FooterTop />
            </div>
        </div>
        <div className='bg-primary py-[20px]'>
            <div className='container mx-auto px-4'>
                <FooterBottom />
            </div>
            
        </div>
    </div>
  )
}

export default Footer;