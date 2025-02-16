import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { login } from '../../../services/operations/authAPI';

const LoginForm = () => {

    const navigate= useNavigate();
    const dispatch= useDispatch();

    const [formData,setFormData]=useState({email:"",password:""});
    const [showPassword,setShowPassowrd]=useState(false);

    function changeHandler(event){
        setFormData((prev)=>(
        {
            ...prev,
            [event.target.name]:event.target.value
        }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        dispatch(login(formData.email,formData.password,navigate));
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            E-mail Address<sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
            required type="email" value={formData.email} name='email'
            onChange={changeHandler} placeholder='Enter E-mail Address'/>
        </label>

        <label className='w-full relative'>

            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup></p>
            <input className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] border-b border-b-richblack-25'
            required type={showPassword ? ("text") : ("password")} value={formData.password}
            onChange={changeHandler} name='password' placeholder='Enter Password'/>


            <span className='absolute right-3 top-[40px] cursor-pointer text-white'
            onClick={()=> setShowPassowrd((prev)=>!prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
            : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        
            <div className='text-xs mt-1 text-blue-100 absolute right-2'>
                <Link to='/forgot-password' >
                    <p >Forgot Password</p>
                </Link>
            </div>
            

        </label>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]
        mt-6'>Sign In</button>
    </form>
  )
}

export default LoginForm