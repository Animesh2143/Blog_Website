import React, { useEffect, useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore";
import { HighlightText } from './HightlightText';
import { CourseCard } from './CourseCard';

const tabsName=[
   "Inspirational",
  "Success Stories",
  "Productivity",
  "Health & Wellness",
  "Career Growth",
];

export const ExploreMore = () => {
    const [currentTab , setCurrentTab]= useState(tabsName[0]);
    const [courses, setCourses]= useState(HomePageExplore[0].courses);
    const [currentCard,setCurrrentCard]= useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(value)=>{
        setCurrentTab(value);
        const result= HomePageExplore.filter((courses)=> courses.tag===value);
        setCourses(result[0].courses);
        setCurrrentCard(result[0].courses[0].heading);
    }

    useEffect(()=>{
    },[courses]);

  return (
    <div className='flex flex-col w-11/12'>
        <div className='font-semibold text-4xl text-center text-blue-25'>
            Read the stories
            <HighlightText text={"that are real and experienced"}/>
                <p className='text-center text-white text-[16px] mt-3'>
                    Read the words of others
                </p>
        </div>
        <div className='flex flex-row rounded-full z-10 bg-pink-700 mt-8 px-2 justify-between border-richblack-100'>
            {   
                tabsName.map((element,index)=>{
                    return(
                        <div className={`text-16px flex flex-row my-2 rounded-full items-center gap-2 transition-all duration-200 cursor-pointer hover:bg-yellow-800 hover:text-richblack-5 px-7 py-2
                                ${currentTab===element ? "bg-yellow-600 text-richblack-5 font-medium": "text-richblack-200"}`}
                                key={index}
                                onClick={()=>setMyCards(element)}>
                            {element}
                        </div>
                    )
                }
            )}
        </div>
        <div className="h-60"></div>

        <div className='absolute flex flex-row gap-10 justify-between w-[100%] text-white'>
            {
                courses.map((element,index)=>{
                    return(
                        <CourseCard key={index}
                            cardData={element}
                            currentCard={currentCard}
                            setCurrentCard={setCurrrentCard}/>
                    )
                }
            )}
        </div>
        
    </div>
  )
}
