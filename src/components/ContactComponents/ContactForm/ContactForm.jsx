import React from 'react';
import { BsSend } from 'react-icons/bs';

function ContactForm() {
  return (
    <div className='flex flex-col flex-grow justify-center items-center mt-[100px] gap-4'>
        <div>
            <h2 className='text-2xl md:text-3xl font-bold text-center'>Kontaktirajte nas da biste dobili besplatnu podršku</h2>
        </div>

        <div className='mb-[40px]'>
            <form className='flex flex-col md:flex-row gap-4 mt-12'>
                <div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label>Ime i Prezime</label>
                        <input type="text" className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>

                    <div className='flex flex-col gap-2 mb-4'>
                        <label>Email</label>
                        <input type="email" className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Mobilni</label>
                        <input type="text" className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label>Poruka</label>
                    <textarea className='border border-others rounded-lg w-[300px] h-[100%]'></textarea>
                    <button className='flex items-center justify-center border border-primary bg-primary text-white hover:bg-primary rounded-[4px] mt-3 py-2 hover:text-white'>Posalji <BsSend className='ml-2' /></button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactForm;