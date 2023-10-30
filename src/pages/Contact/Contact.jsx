import React from 'react';
import ContactForm from '../../components/ContactComponents/ContactForm/ContactForm';
import ContactInfoSection from '../../components/ContactComponents/ContactInfoSection/ContactInfoSection';

function Contact() {
  return (
    <div className='container mx-auto px-4'>
        <ContactForm />
        <ContactInfoSection />
    </div>
  )
}

export default Contact;