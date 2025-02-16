import React, { useEffect } from 'react'
import { updateDisplayPicture } from '../../../../services/operations/SettingsAPI';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useRef } from 'react';
import { IconBtn } from '../../../common/IconBtn';
import { FiUpload } from 'react-icons/fi'
import { setUser} from '../../../../slices/profileSlice';

export const NewProfileImage = () => {

    const {token}= useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const dispatch=useDispatch();

    const [loading,setLoading]=useState(false);
    const [image,setImage]=useState(null);
    const [previewSource,setPreviewSource]=useState(null);

    const fileInputRef= useRef(null);

    const handleClick=()=>{
      fileInputRef.current.click();
    }

    const handleFileChange=(e)=>{
      const file= e.target.files[0];
      if(file){
        setImage(file);
        previewFile(file);
      }
    }

    const handleFileUpload=()=>{
        setLoading(true);

        const formData=new FormData();
        formData.append("displayPicture",image);
        dispatch(updateDisplayPicture(formData,token))
        .then(()=>{
            console.log("user",user);
            setLoading(false)
          })
        .catch((error)=>{
          console.log("Upload error");
        })
    }

    const previewFile = (file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          setPreviewSource(reader.result)
      }
    }

    useEffect(()=>{
      if(image){
        previewFile(image);
      }
    },[image]);;



  return (
    <div className='flex flex-row items-center justify-start rounded-md w-[100%] border-[1px] border-richblack-700 bg-gradient-to-r from-pink-400 to-pink-200 p-8 px-12 text-richblack-5'>
        <div className='flex items-center gap-x-8'>
            <img 
                src={previewSource || user?.image} 
                alt={`profile-${user?.firstName}`} 
                className='aspect-square w-[78px] rounded-full object-cover'
            />
            <div className='space-y-2'>
                <p className='text-lg'>Change Profile Picture</p>
                <div className='flex gap-3'>
                    <input 
                        type='file'
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className='hidden'
                        accept='image/png, image/jpeg, image/gif'
                    />
                    <button
                        onClick={handleClick}
                        disabled={loading}
                        className='cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50'
                    >
                        Select
                    </button>

                    <button
                        onClick={handleFileUpload}
                        disabled={image ? false : true}
                        className='cursor-pointer rounded-md bg-yellow-200 py-2 px-5 font-semibold text-richblack-50'
                    >
                        <div className='flex flex-row gap-x-1 text-richblack-900'>
                          Upload
                          <FiUpload className='text-lg text-richblack-900' />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
