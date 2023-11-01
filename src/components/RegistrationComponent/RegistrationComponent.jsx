import React from 'react';
import logo from '../../assets/where2go.png';
import login from '../../assets/login.png';
import { BsGoogle } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthService from '../../services/authService';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { BsArrowLeftSquare } from 'react-icons/bs';

function RegistrationComponent() {

    const navigate = useNavigate();

    const [visibility, setVisibility] = useState(true);

    const handleVisibility = () => {
        setVisibility(!visibility);
    }

    const [secondVisibility, setSecondVisibility] = useState(true);

    const handlesecondVisibility = () => {
        setSecondVisibility(!secondVisibility);
    }

    const formik = useFormik({
		initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobilePhone: '',
            password: '',
            confPassword:'',
        },

        validationSchema: Yup.object({
            firstName: Yup.string().required('Field is required'),
            lastName: Yup.string().required('Field is required'),
            email: Yup.string().required('Field is required'),
            mobilePhone: Yup.string().required('Field is required'),
            password: Yup.string().required('Field is required'),
            confPassword: Yup.string().required('Field is required'),
        }),

        onSubmit: async (values) => {
            try {

                if (values.password !== values.confPassword) {
                    toast.warning('Loyinke se ne poklapaju!', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });

                    return;
                }

                const response = await AuthService.registerUser(values);
                
                if(response.status === 200) {
                    toast.success('Registracija je uspela!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,  
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    
                    setTimeout(() => {
                        navigate('/');
                    }, 3000)

                } else {
                    toast.warning('Korisnik je već registrovan!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,  
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                }
            } catch (errors) {
            }

            formik.resetForm();
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className='flex justify-between bg-white text-others flex-grow h-[100vh] lg:mt-0'>
        <div className='flex flex-col justify-center mx-auto'>
            <div className='flex flex-col items-center gap-2 m-4'>
                <Link to="/"><img src={logo} alt="login" className='w-[250px]'/></Link>
                <p className='text-xl text-center'>Registrujte se da biste pristupili svom profilu</p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit} className='flex flex-col items-center gap-2'>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col lg:flex-col gap-2'>
                            <label>Ime {' '} <span className='text-[14px] text-red-600'> {showError('firstName')} </span></label>
                            <input name='firstName' type="text" value={formik.values.firstName} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite Ime...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Prezime {' '} <span className='text-[14px] text-red-600'> {showError('lastName')} </span></label>
                            <input name='lastName' type="text" value={formik.values.lastName} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite Prezime...' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col gap-2'>
                            <label>E-mail Adresa {' '} <span className='text-[14px] text-red-600'> {showError('email')} </span></label>
                            <input name='email' type="email" value={formik.values.email} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite E-mail Adresu...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Mobilni Telefon {' '} <span className='text-[14px] text-red-600'> {showError('mobilePhone')} </span></label>
                            <input name='mobilePhone' type="text" value={formik.values.mobilePhone} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Unesite Mobilni Telefon...' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col lg:items-start relative gap-2'>
                            <label>Lozinka {' '} <span className='text-[14px] text-red-600'> {showError('password')} </span></label>
                            <input name='password' type={visibility ? "password" : "text"} value={formik.values.password} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Unesite Lozinku...' />
                            {visibility ? (
                                <MdVisibility className='absolute top-[40px] right-4 text-2xl' onClick={handleVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[40px] right-4 text-2xl' onClick={handleVisibility}/>
                            )}
                        </div>

                        <div className='flex flex-col lg:items-start relative gap-2'>
                            <label>Potvrdi Lozinka {' '} <span className='text-[14px] text-red-600'> {showError('confPassword')} </span></label>
                            <input name='confPassword' type={secondVisibility ? "password" : "text"} value={formik.values.confPassword} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Potvrdi Lozinku...' />
                            {secondVisibility ? (
                                <MdVisibility className='absolute top-[40px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[40px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            )}
                    </div>
                    </div>

                    <div className='text-center mt-[15px] lg:mt-[20px]'>
                        <button type='submit' className='border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-16 py-3'>Registrujte se</button>
                        <Link className='flex items-center gap-3 mt-4 text-primary' to={'/'}><BsArrowLeftSquare className='text-3xl'/> Vratite se na početnu</Link> 
                    </div>

                </form>
            </div>
        </div>
        <div>
            <img src={login} alt="" className='h-[100vh] w-[100%] hidden lg:block'/>
        </div>
    </div>
  )
}

export default RegistrationComponent;