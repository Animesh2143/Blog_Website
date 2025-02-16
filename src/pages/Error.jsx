import React from 'react'
import error from "../assets/boy-and-girl-animated-characters-searching-404-Page.gif";

export const Error = () => {
  return (
    <div className='flex mt-1 justify-center items-center text-3xl text-red'>
        <img src={error} className='w-screen'/>
    </div>
  )
}
