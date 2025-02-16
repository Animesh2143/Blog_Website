import React from 'react'
import { IconBtn } from './IconBtn'

export const ConfirmationModal = ({modalData}) => {
    console.log("qweq",modalData);
  return (
    <div className='fixed inset-0 opacity-1 backdrop-blur-xl '>
        <div className=' h-[30%] w-[34%] bg-caribbeangreen-700 mx-auto mt-56 flex flex-col rounded-2xl border-[5px] border-yellow-100 justify-center gap-y-4 text-center'>
            <p className='text-3xl text-richblack-5 font-bold -mt-2'>
                {modalData.text1}
            </p>
            <p className='text-richblack-400 text-sm -mt-4'>
                {modalData.text2}
            </p>
            <div className='mt-6   flex flex-row justify-evenly '>
                <IconBtn onClick={modalData?.btn1Handler}
                        text={modalData?.btn1Text}/>
                <button className='bg-richblack-300 text-white border-[1px] font-semibold px-5 py-2 rounded-lg' onClick={modalData?.btn2Handler}>
                    {modalData?.btn2Text}
                </button>
            </div>
        </div>
    </div>
  )
}
