import React from 'react';
import map from '../../../assets/map.png'

function ContactMap(props) {
  return (
    <div className={`flex justify-center py-[40px] bg-[${props.bg}]`}>
        <img src={map} alt="map" className='h-[400px] w-[80%]'/>
    </div>
  )
}

export default ContactMap;