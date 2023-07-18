import React from 'react';
import ContactForm from '../../components/ContactComponents/ContactForm/ContactForm';
import ContactInfoSection from '../../components/ContactComponents/ContactInfoSection/ContactInfoSection';
import ContactMap from '../../components/ContactComponents/ContactMap/ContactMap';

function Contact() {
  return (
    <div className='container mx-auto px-4'>
        <ContactForm />
        <ContactInfoSection />
        <ContactMap />
    </div>
  )
}

export default Contact;