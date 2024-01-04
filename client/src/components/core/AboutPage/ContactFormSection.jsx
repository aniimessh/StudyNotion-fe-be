import React from 'react'
import ContactUsForm from '../../common/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='w-1/3 mx-auto mb-10'>
        <h1 className='text-center'>Get in Touch</h1>
        <p className='text-center'>We&apos;d love to here for you, Please fill out this form.</p>
        <div>
            <ContactUsForm />
        </div>
    </div>
  )
}

export default ContactFormSection