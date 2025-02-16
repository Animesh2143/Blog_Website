import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { IconBtn } from '../../common/IconBtn';
import { FaEdit } from 'react-icons/fa';

const MyProfile = () => {
    const { user } = useSelector((state) => state.profile);
    const navigate = useNavigate();

    return (
        <div className='w-10/12 flex flex-col mx-auto justify-center px-10 mt-20 pb-20 gap-y-10 text-richblack-900'>
            <h1 className='text-3xl text-richblack-900 font-bold text-start'>
                My Profile
            </h1>
            <div className='p-6 border-[2px] border-pink-600 bg-gradient-to-r from-pink-500 to-pink-300 flex flex-row rounded-xl justify-between items-center'>
                <div className='flex flex-row gap-x-5'>
                    <img src={user.image} alt={`profile-${user?.firstName}`}
                        className="aspect-square rounded-full w-[14%]" loading='lazy' />
                    <div className='flex flex-col my-auto'>
                        <p className='text-md text-white'>{user?.firstName}{" "}{user?.lastName}</p>
                        <p className='text-sm text-richblue-100'>{user?.email}</p>
                    </div>
                </div>
                <IconBtn onClick={() => { navigate("/dashboard/settings") }}>
                    <p>Edit</p><FaEdit />
                </IconBtn>
            </div>

            <div className='p-8 border-[2px] border-pink-600 bg-gradient-to-r from-pink-400 to-pink-200 flex flex-col rounded-xl justify-between'>
                <div className='flex flex-row justify-between mb-5'>
                    <p className='text-2xl text-white'>About</p>
                    <IconBtn onClick={() => { navigate("/dashboard/settings") }}>
                        <p>Edit</p><FaEdit />
                    </IconBtn>
                </div>
                <p className='text-sm text-richblue-100'>{user?.about ? user?.about : "Write something about yourself"}</p>
            </div>

            <div className='p-8 border-[2px] border-pink-600 bg-gradient-to-r from-pink-400 to-pink-200 flex flex-col rounded-xl justify-between'>
                <div className='flex flex-row justify-between mb-10'>
                    <p className='text-2xl text-white'>Personal Details</p>
                    <IconBtn onClick={() => { navigate("/dashboard/settings") }}>
                        <p>Edit</p><FaEdit />
                    </IconBtn>
                </div>

                <div className='flex flex-row gap-16 text-white'>
                    <div className='flex flex-col gap-y-5'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-md text-richblue-100'>First Name</p>
                            <p className='font-medium'>{user?.firstName}</p>
                        </div>
                        <div>
                            <p className='text-md text-richblue-100'>Email</p>
                            <p className='font-medium'>{user?.email}</p>
                        </div>
                        <div>
                            <p className='text-md text-richblue-100'>Gender</p>
                            <p className='font-medium'>{user?.additionalDetails?.gender ?? "Enter your Gender"}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <p className='text-md text-richblue-100'>Last Name</p>
                            <p className='font-medium'>{user?.lastName}</p>
                        </div>
                        <div>
                            <p className='text-md text-richblue-100'>Contact Number</p>
                            <p className='font-medium'>{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
                        </div>
                        <div>
                            <p className='text-md text-richblue-100'>Date of Birth</p>
                            <p className='font-medium'>{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
