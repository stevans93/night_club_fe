import React from 'react';
import map from '../../../assets/map.png'

function ContactMap() {
  return (
    <div className='flex justify-center my-[40px]'>
        <img src={map} alt="map" className='h-[400px] w-[80%]'/>
    </div>
  )
}

export default ContactMap;