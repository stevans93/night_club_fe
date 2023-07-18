import React from 'react';

function ContactInfoSection() {
  return (
    <div className='flex flex-wrap gap-12 text-center justify-center mt-[50px]'>
        <div>
            <h3>Email</h3>
            <span>example@gmail.com</span>
        </div>

        <div>
            <h3>Telefon</h3>
            <span>+381 62 000 000</span>
        </div>

        <div>
            <h3>Lokacija</h3>
            <span>Beograd, Kneza Milosa 100</span>
        </div>
    </div>
  )
}

export default ContactInfoSection;