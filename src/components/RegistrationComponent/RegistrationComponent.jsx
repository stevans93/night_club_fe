import React from 'react';
import logo from '../../assets/where2go.png';
import login from '../../assets/login.png';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserService from '../../services/userService';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

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
                const response = await UserService.registerUser(values);
                if(response.status === 200) {
                    toast.success('Registration is successful!', {
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
                        navigate('/home');
                    }, 3000)
                } else {
                    toast.warning('The user is already registered!', {
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
                console.log(response);
            } catch (errors) {
                console.log(errors);
            }

            formik.resetForm();
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className='flex justify-between bg-white text-others flex-grow h-[100vh] mt-14 lg:mt-0'>
        <div className='flex flex-col justify-center m-9 mx-auto'>
            <div className='flex flex-col items-center gap-2 m-4'>
                <img src={logo} alt="login" className='w-[250px]'/>
                <p className='text-xl text-center'>Registrujte se da biste pristupili svom profilu</p>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit} className='flex flex-col items-center gap-2'>
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col lg:flex-col gap-2'>
                            <label>Firstname {' '} <span className='text-[14px] text-red-600'> {showError('firstName')} </span></label>
                            <input name='firstName' type="text" value={formik.values.firstName} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Insert Firstname...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Lastname {' '} <span className='text-[14px] text-red-600'> {showError('lastName')} </span></label>
                            <input name='lastName' type="text" value={formik.values.lastName} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Insert Lastname...' />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col gap-2'>
                            <label>Email {' '} <span className='text-[14px] text-red-600'> {showError('email')} </span></label>
                            <input name='email' type="email" value={formik.values.email} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Insert email...' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Mobile Phone {' '} <span className='text-[14px] text-red-600'> {showError('mobilePhone')} </span></label>
                            <input name='mobilePhone' type="text" value={formik.values.mobilePhone} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] focus:bg-white rounded-lg p-3' placeholder='Insert mobile phone...' />
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row gap-2'>
                        <div className='flex flex-col lg:items-start relative gap-2'>
                            <label>Password {' '} <span className='text-[14px] text-red-600'> {showError('password')} </span></label>
                            <input name='password' type={visibility ? "password" : "text"} value={formik.values.password} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Insert password...' />
                            {visibility ? (
                                <MdVisibility className='absolute top-[45px] right-4 text-2xl' onClick={handleVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[45px] right-4 text-2xl' onClick={handleVisibility}/>
                            )}
                        </div>

                        <div className='flex flex-col lg:items-start relative gap-2'>
                            <label>Confirm Password {' '} <span className='text-[14px] text-red-600'> {showError('confPassword')} </span></label>
                            <input name='confPassword' type={secondVisibility ? "password" : "text"} value={formik.values.confPassword} onChange={formik.handleChange} className='border border-others w-[300px] lg:w-[300px] bg-white rounded-lg p-3' placeholder='Confirm Password...' />
                            {secondVisibility ? (
                                <MdVisibility className='absolute top-[45px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            ) : (
                                <MdVisibilityOff className='absolute top-[45px] right-4 text-2xl' onClick={handlesecondVisibility}/>
                            )}
                    </div>
                    </div>

                    <div className='text-center mt-[15px] lg:mt-[20px]'>
                        <button type='submit' className='border-2 border-primary bg-primary hover:bg-secondary hover:text-primary text-white rounded-3xl px-16 py-3'>Register</button>
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