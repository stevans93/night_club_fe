import React from 'react';
import FooterTopInfo from './FooterTopInfo/FooterTopInfo';
import FooterTopLinks from './FooterTopLinks/FooterTopLinks';
import FooterTopSupport from './FooterTopSupport/FooterTopSupport';

function FooterTop(props) {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between'>
      <FooterTopInfo location={props.location} email={props.email} mobile={props.mobile} />
      <div className='flex flex-col lg:flex-row gap-4'>
        <FooterTopLinks />
        <FooterTopSupport />
      </div>
    </div>
  )
}

export default FooterTop;