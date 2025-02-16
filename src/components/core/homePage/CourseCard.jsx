import React from 'react'
import { HiUsers } from 'react-icons/hi'
import { ImTree } from 'react-icons/im'

export const CourseCard = ({cardData,currentCard,setCurrentCard}) => {
  return (
    <div className={`w-[70%] translate-y-[80%] ${
        currentCard === cardData.heading
          ? "bg-grey-25 shadow-[12px_12px_0_0] shadow-richblack-900"
          : "bg-pink-800"
      } text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData.heading)}>
        <div className='flex flex-col justify-start text-left border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 gap-3'>
            <div className={`${
                currentCard === cardData.heading && "text-richblack-800"
                } font-semibold text-[20px]`}>
                {cardData.heading}
            </div>
            <div className='text-richblack-400'> 
               {cardData.description}
            </div>
        </div>
        <div
        className={`flex justify-between ${
        currentCard === cardData.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium` }
        >

        <div className='flex items-center gap-2 text-[16px]'>
          <HiUsers />
          <p>{cardData.level}</p>
        </div>


        <div className='flex items-center gap-2 text-[16px]'>
          <ImTree />
          <p>{cardData.lessionNumber} Lessons </p>
        </div>
      </div>
    </div>
  )
}
