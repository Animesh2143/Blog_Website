import React from 'react'
import { NewProfileImage } from './NewProfileImage'
import { ProfileForm } from './ProfileForm'

export const Settings = () => {
  return (
    <div className='w-10/12 max-w-screen-lg flex flex-col ml-24 gap-y-8 text-richblack-5 my-16'>
        <p className='text-3xl font-bold'>Edit Profile</p>
        <div className='flex flex-col min-w-sceen-lg align-left gap-10'>
            
            <NewProfileImage/>

            <ProfileForm/>
        </div>
    </div>
  )
}
