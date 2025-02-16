import React, { useState , useEffect } from 'react'
import { useForm } from 'react-hook-form';
import countrycode from '../../data/countrycode.json';
import { apiConnector } from '../../services/apiConnector';
import { contactusEndpoint } from "../../services/apis";
import { toast } from "react-hot-toast";

const { CONTACT_US_API } = contactusEndpoint;

export const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                firstname: "",
                lastname: "",
                email: "",
                countrycode: "+91",
                contactno: "",
                message: "",
            })
        }
    }, [errors, isSubmitSuccessful])

    const submitContactForm = async (data) => {
        setLoading(true);
        console.log({ firstName: data.firstname, lastName: data.lastname, email: data.email, contactNo: `${data.countrycode} ${data.contactno}`, message: data.message });
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", CONTACT_US_API, {
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                contactNo: `${data.countrycode} ${data.contactno}`,
                message: data.message
            });

            console.log(response);
            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Request Sent");
        }
        catch (error) {
            console.log(error);
            toast.error("Request not sent");
        }
        toast.dismiss(toastId);
        setLoading(false);
    }

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='text-richblack-5 mx-auto w-[85%] flex flex-col gap-y-4'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col w-[46%]'>
                <label htmlFor='firstname' className='text-start pl-3'>First name</label>
                <input 
                    className='bg-[#6B4F1D] px-3 h-10 rounded-md shadow-inner text-white border border-richblack-600'
                    name='firstname' id='firstname'
                    type='text'
                    placeholder='Enter first name'
                    {...register("firstname", { required: true })}
                />
                { errors.firstname && <span>First name is required</span> }
            </div>
            <div className='flex flex-col w-[46%]'>
                <label htmlFor='lastName' className='text-start pl-3'>Last name</label>
                <input 
                    name='lastName' id='lastName'
                    className='bg-[#6B4F1D] px-3 h-10 rounded-md shadow-inner text-white border border-richblack-600'
                    type='text'
                    placeholder='Enter last name'
                    {...register("lastname")}
                />
            </div>
        </div>
        
        <div className='flex flex-col'>
            <label htmlFor='email' className='text-start pl-3'>Email</label>
            <input 
                name='email' id='email'
                className='bg-[#6B4F1D] px-3 h-10 w-[100%] rounded-md shadow-inner text-white border border-richblack-600'
                type='email'
                placeholder='Enter your email'
                {...register("email", { required: true })}
            />
            { errors.email && <span>Email is required</span> }
        </div>
        
        <div className='flex flex-col'>
            <label htmlFor='contactno' className='text-start pl-3'>Phone Number</label>
            <div className='flex flex-row gap-x-3'>
                <select 
                    name='code' id='code'
                    className='bg-[#6B4F1D] px-3 h-10 w-[25%] rounded-md shadow-inner text-white border border-richblack-600'
                    {...register("countrycode", { required: true })}
                >
                    {countrycode.map((data, index) => (
                        <option key={index} value={data.code}>
                            {data.code}{" - "}{data.country}
                        </option>
                    ))}
                </select>
                { errors.countrycode && <span>Country Code required</span> }

                <div className='flex flex-col w-[100%]'>
                    <input 
                        name='contactno' id='contactno'
                        placeholder='Enter your number'
                        className='bg-[#6B4F1D] px-3 h-10 w-[100%] rounded-md shadow-inner text-white border border-richblack-600'
                        type='number'
                        {...register("contactno", {
                            required: { value: true, message: "Phone No. required" },
                            minLength: { value: 10, message: "At least 10 digits are required" },
                            maxLength: { value: 10, message: "Only 10 digits required" }
                        })}
                    />
                    { errors.contactno && <span>{errors.contactno.message}</span> }
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            <label htmlFor='message' className='text-start pl-3'>Message</label>
            <textarea 
                name='message' id='message'
                className='bg-[#6B4F1D] p-3 w-[100%] rounded-lg shadow-inner text-white border border-richblack-600'
                cols="30" rows="6"
                placeholder='Enter your message'
                {...register("message", { required: true })}
            />
            { errors.message && <span>Message is required</span> }
        </div>

        <button 
            type='submit' 
            className='bg-blue-500 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-200'
        >
            Send Message
        </button>
    </form>
  )
}
