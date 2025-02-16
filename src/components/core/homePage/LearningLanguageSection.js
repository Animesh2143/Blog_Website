import React from 'react'
import { HighlightText } from './HightlightText';
import know_your_progress from "../../../assets/Images/Know_your_progress.jpg"
import compare_with_others from "../../../assets/Images/Compare_with_others.jpg";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.jpg";
import { Button } from './Button';

export const LearningLanguageSection = () => {
  return (
    <div className='w-[70%] max-w-screen-lg mx-auto mt-10 flex flex-col items-center '>
        <div className='flex flex-col gap-5 '>
            <div className='text-4xl text-blue-25  font-semibold text-center'>
                Your Swiss knife for
                <HighlightText text={"kepping up with world"}/>
            </div>
            <div className='text-center text-blue-100 mx-auto text-sm'>
                Using spin making earning multiple languages with 20+ languages realistic voice-over,
                progress tracking custom schedulw and more.
            </div>
        </div>
        <div className='flex flex-row items-center justify-center mt-7'>
        <div className="flex items-center justify-center my-20">
  <img src={know_your_progress} className='object-contain w-[19rem] h-[19rem] scale-105 rotate-[15deg] shadow-[0px_10px_40px_rgba(0,0,0,0.5)] border border-gray-300 rounded-lg z-10' />
  <img src={compare_with_others} className='object-contain w-[19rem] h-[19rem] scale-105 -ml-6 -rotate-[12deg] shadow-[0px_10px_40px_rgba(0,0,0,0.5)] border border-gray-300 rounded-lg z-20' />
  <img src={plan_your_lesson} className='object-contain w-[19rem] h-[19rem] scale-105 -ml-6 rotate-[18deg] shadow-[0px_10px_40px_rgba(0,0,0,0.5)] border border-gray-300 rounded-lg z-30' />
</div>


        </div>

        <div className='w-fit'> 
            <Button active={true} linkto={"/signup"}> 
                <div>Learn more</div>
            </Button>
        </div>
    </div>
  )
}
