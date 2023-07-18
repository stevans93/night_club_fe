import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/where2go.png';
import login from '../../assets/login.png';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';

function LoginComponent() {

    const [visibility, setVisibility] = useState(true);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

  return (
    <div className='flex flex-grow justify-between bg-white text-others h-[100vh]'>
    <div className='flex flex-col justify-center m-9 mx-auto'>
        <div className='flex flex-col items-center gap-2 m-4s'>
            <img src={logo} alt="login" className='w-[250px]'/>
            <p className='text-xl text-center'>Prijavite se da biste pristupili svom profilu</p>
        </div>
        <div>
            <form className='flex flex-col items-center gap-2'>
                <div className='flex flex-col items-center lg:items-start gap-2'>
                    <label>Email</label>
                    <input type="email" className='border border-others w-[300px] lg:w-[616px] focus:bg-white rounded-lg p-3' placeholder='Unesite email...' />
                </div>
                
                <div className='flex flex-col items-center lg:items-start gap-2 relative'>
                    <label>Lozinka</label>
                    <input type={visibility ? "password" : "text"} className='border border-others w-[300px] lg:w-[616px] bg-white rounded-lg p-3' placeholder='Unesite sifru...' />
                    {visibility ? (
                        <MdVisibility className='absolute top-[47px] right-4 text-2xl' onClick={handleVisibility}/>
                    ) : (
                        <MdVisibilityOff className='absolute top-[47px] right-4 text-2xl' onClick={handleVisibility}/>
                    )}
                </div>
                <div className='flex justify-center gap-3'>
                    <p>Zapamti me</p> <input type="checkbox" name="" id="" />
                </div>
                <div className='text-center'>
                    <button className='border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-16 py-2'>Prijavi se</button>
                </div>
                <div className='text-center'>
                    <Link href="/">Zaboravili ste lozinku?</Link>Zapamti me
                </div>
            </form>
            <div className='flex flex-col items-center gap-2 mt-[30px] lg:mt-[50px] mb-8'>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <button className='flex flex-row border border-primary hover:bg-primary hover:text-white justify-center items-center text-primary text-lg w-[300px] h-[55px] rounded-[4px]'><BsFacebook className='text-3xl mr-2' />Prijavite se sa Facebook</button>
                    <button className='flex flex-row border border-red-500 hover:bg-red-500 hover:text-white justify-center items-center text-red-500 text-lg w-[300px] h-[55px] rounded-[4px]'><BsGoogle className='text-3xl mr-2' />Prijavite se sa Google</button>
                </div>
                <a href="#"><p>Nemate nalog? Kreiraje ovde</p></a>
            </div>
        </div>
    </div>
    <div>
        <img src={login} alt="" className='h-[100vh] w-[100%] hidden lg:block'/>
    </div>
</div>
  )
}

export default LoginComponent;