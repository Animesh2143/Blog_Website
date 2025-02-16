import React from 'react'
import { ContactUsForm } from '../../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='max-w-screen-lg mx-auto my-28'>
        <div className='flex flex-col gap-y-2 mb-10'>
            <h1 className='font-bold text-5xl text-richblack-5'>
                Get in Touch
            </h1>
            <p className='text-richblack-300 font-sm'>
                We would love to hear from you. Please fill the form.
            </p>
        </div>
        <ContactUsForm/>
    </div>
  )
}

export default ContactFormSection