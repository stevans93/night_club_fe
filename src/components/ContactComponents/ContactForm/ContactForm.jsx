import React from 'react';
import { BsSend } from 'react-icons/bs';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactForm() {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobilePhone: '',
            message: '',
        },

        validationSchema: Yup.object({
            fullName: Yup.string().required('Field is required'),
            email: Yup.string().required('Field is required'),
            mobilePhone: Yup.string().required('Field is required'),
            message: Yup.string().required('Field is required'),
        }),

        onSubmit: (values) => {
            try {
                    toast.success('Message successful sent!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,  
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

            } catch (errors) {
                console.log(errors);
            }

            formik.resetForm();
        }
    });

    const showError = (name) => formik.errors[name] && formik.touched[name] && formik.errors[name];

  return (
    <div className='flex flex-col flex-grow justify-center items-center mt-[100px] gap-4'>
        <div>
            <h2 className='text-2xl md:text-3xl font-bold text-center'>Kontaktirajte nas da biste dobili besplatnu podršku</h2>
        </div>

        <div className='mb-[40px]'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col md:flex-row gap-4 mt-12'>
                <div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <label>Full Name {' '} <span className='text-[14px] text-red-600'> {showError('fullName')} </span></label>
                        <input name="fullName" type="text" value={formik.values.fullName} onChange={formik.handleChange} className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>

                    <div className='flex flex-col gap-2 mb-4'>
                        <label>Email {' '} <span className='text-[14px] text-red-600'> {showError('email')} </span></label>
                        <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange} className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Mobile Phone {' '} <span className='text-[14px] text-red-600'> {showError('mobilePhone')} </span></label>
                        <input name="mobilePhone" type="text" value={formik.values.mobilePhone} onChange={formik.handleChange} className='border border-others rounded-lg w-[300px] h-[40px]'/>
                    </div>
                </div>
                
                <div className='flex flex-col gap-2'>
                    <label>Message {' '} <span className='text-[14px] text-red-600'> {showError('message')} </span></label>
                    <textarea name="message" value={formik.values.message} onChange={formik.handleChange} className='border border-others rounded-lg w-[300px] h-[100%]'></textarea>
                    <button type='submit' className='flex items-center justify-center border border-primary bg-primary text-white hover:bg-primary rounded-[4px] mt-3 py-2 hover:text-white'>Send <BsSend className='ml-2' /></button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactForm;