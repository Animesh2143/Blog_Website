import React from 'react'
import { HighlightText } from '../homePage/HightlightText'

export const Quote = () => {
  return (
    <div className='text-center font-bold text-4xl w-[60%] mx-auto mt-16 mb-16'>
        Sharing ideas, sparking discussions, and shaping  
        <HighlightText text={"thoughtful narratives,"}/>  
        fostering  
        <span className='bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>
            {" "} creativity, {" "}
        </span>
        and building a  
        <span className='bg-gradient-to-r from-yellow-300 to-pink-100 bg-clip-text text-transparent'>
           {" "} vibrant blogging community.{" "}
        </span>
    </div>
  )
}
