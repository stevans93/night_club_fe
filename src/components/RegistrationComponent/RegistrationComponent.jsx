import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/where2go.png';
import login from '../../assets/login.png';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';

function RegistrationComponent() {

    const [visibility, setVisibility] = useState(true);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

    const [secondVisibility, setSecondVisibility] = useState(true);

    const handlesecondVisibility = () => {
        setSecondVisibility(!secondVisibility);
    }

  return (
    <div className='flex justify-between bg-white text-others flex-grow h-[100vh] mt-14 lg:mt-0'>
        <div className='flex flex-col justify-center m-9 mx-auto'>
            <div className='flex flex-col items-center gap-2 m-4'>
                <img src={logo} alt="login" className='w-[250px]'/>
                <p className='text-xl text-center'>Registrujte se da biste pristupili svom profilu</p>
            </div>
            <div>
                <form className='flex flex-col items-center gap-2'>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col lg:flex-col gap-2'>
                            <label>Ime</label>
                            <input type="text" className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite ime...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Prezime</label>
                            <input type="text" className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite prezime...' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input type="email" className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite email...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Mobilni</label>
                            <input type="text" className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite broj telefona...' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col items-center lg:items-start relative gap-2'>
                            <label>Lozinka</label>
                            <input type={visibility ? "password" : "text"} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Unesite lozinku...' />
                            {visibility ? (
                                <MdVisibility className='absolute top-[40px] right-4 text-2xl' onClick={handleVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[40px] right-4 text-2xl' onClick={handleVisibility}/>
                            )}
                        </div>

                        <div className='flex flex-col items-center lg:items-start relative gap-2'>
                            <label>Potvrdi lozinku</label>
                            <input type={secondVisibility ? "password" : "text"} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Potvrdite lozinku...' />
                            {secondVisibility ? (
                                <MdVisibility className='absolute top-[40px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[40px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            )}
                    </div>
                    </div>

                    <div className='text-center mt-[15px] lg:mt-[20px]'>
                        <button className='border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-16 py-3'>Registruj se</button>
                    </div>

                </form>
                <div className='flex flex-col items-center gap-2 mt-[20px] lg:mt-[20px] mb-10 lg:mb-4'>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <button className='flex flex-row border border-primary hover:bg-primary hover:text-white justify-center items-center text-primary text-lg w-[300px] h-[55px] rounded-[4px]'><BsFacebook className='text-3xl mr-2' />Prijavite se sa Facebook</button>
                        <button className='flex flex-row border border-red-500 hover:bg-red-500 hover:text-white justify-center items-center text-red-500 text-lg w-[300px] h-[55px] rounded-[4px]'><BsGoogle className='text-3xl mr-2' />Prijavite se sa Google</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <img src={login} alt="" className='h-[100vh] w-[100%] hidden lg:block'/>
        </div>
    </div>
  )
}

export default RegistrationComponent;