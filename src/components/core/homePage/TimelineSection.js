import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimelineImage from "../../../assets/Images/TimelineImage.jpg";

const timeline=[
    {
        Logo:Logo1,
        Heading:"Dream big",
        Description:"Fully committed of the truth"
    },
    {
        Logo:Logo2,
        Heading:"Take Action",
        Description:"Fully committed of the truth"
    },
    {
        Logo:Logo3,
        Heading:"Learn and grow",
        Description:"Fully committed of the truth"
    },
{
        Logo:Logo4,
        Heading:"Inspire others",
        Description:"Fully committed of the truth"
    },
]
// const timeline = [
//     {
//         Logo: Logo1,
//         Heading: "Dream Big",
//         Description: "Believe in your dreams ."
//     },
//     {
//         Logo: Logo2,
//         Heading: "Take Action",
//         Description: "Success begins  "
//     },
//     {
//         Logo: Logo3,
//         Heading: "Learn & Grow",
//         Description: "Never stop improving yourself."
//     },
//     {
//         Logo: Logo4,
//         Heading: "Inspire Others",
//         Description: "Reach yourr full potential."
//     },
// ];


export const TimelineSection = () => {
  return (
    <div className='mx-auto w-11/12 mb-[8rem]'>
        <div className='flex flex-row gap-15 '> 
            <div className='w-[45%] flex flex-col text-blue-300 gap-5 justify-center items-center'>
                {
                    timeline.map((elements,index)=>{
                        return (
                            <div className='flex flex-row gap-6 ' key={index}>
                                <div className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center relative'>
                                    <img src={elements.Logo}/>
                                    {index !== timeline.length - 1 && (
                                            <div className="absolute top-[55px] bottom-[-55px] w-[2px] border-radius-2 border-dotted bg-richblack-500"></div>
                                        )}
                                </div>
                                

                                <div>
                                    <h2 className='font-semibold text-[18px]'>{elements.Heading}</h2>
                                    <p className='text-base'>{elements.Description}</p>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className='w-[45%] relative shadow-blue-200'>
                <img src={TimelineImage} alt="No image" className='' />
                <div className='absolute bg-caribbeangreen-600 flex flex-row text-white uppercase py-8
                                left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r-4 border-caribbeangreen-25 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-100 text-sm'>years of trust</p>
                    </div>
                    <div className='flex flex-row gap-5 items-center border-caribbeangreen-25 px-7'>
                        <p className='text-3xl font-bold'>50,000+</p>
                        <p className='text-caribbeangreen-100 text-sm'>people's trust ensured</p>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}
