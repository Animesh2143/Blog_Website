import React from 'react'
import { ContactUsForm } from '../components/ContactPage/ContactUsForm'
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { Footer } from '../components/common/Footer';

export const Contact = () => {
  return (
    <div className=' text-richblack-5'>
        <div className='flex flex-row gap-x-24 my-16 max-w-screen-lg mx-auto items-start'>
            <div className='rounded-xl bg-blue-700 py-10 pl-10 px-8 border-richblack-500 border pr-16'>
                <div className='text-start mb-8'>
                    <div className='flex flex-row gap-x-3 items-center text-xl'>
                        <MdOutlineMarkUnreadChatAlt />
                        <h1>Chat with us</h1>
                    </div>
                    <p className='text-sm text-richblack-100'>You can easily reach to us by just filling up a form and we will respond to you as soon as possible</p>
                </div>
                <div className='text-start mb-8'>
                    <div  className='flex flex-row gap-x-3 items-center text-xl'>
                        <IoEarth />
                        <h1>Visit us</h1>
                    </div>
                    <p className='text-sm text-richblack-100'>You can easily come to us by just visting our office at any working hours from 9-5 during daytime and get a response, on any working day of the week.</p>
                </div>
                <div className='text-start '>
                    <div className='flex flex-row gap-x-3 items-center text-xl'>
                        <IoMdCall />
                        <h1>Call us</h1>
                    </div>
                    <p className='text-sm text-richblack-100'>You can easily reach us only by a click of your Phone. We are available 24*7 to you on 1234567890.</p>
                </div>
            </div>
            <div className='border-richblack-400 border-[1px] py-16 px-9 rounded-xl'>
                <ContactUsForm/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
