import React from 'react'
import InstructorImage from "../../../assets/Images/Instructor.jpg"
import { HighlightText } from './HightlightText'
import { Button } from './Button'
import { FaArrowRight } from 'react-icons/fa'

export const InstructorSection = () => {
  return (
    <div className='mt-16 mb-10'>
        <div className='flex flex-row gap-20 items-center'>
            <div className='w-[50%]'>
                <img src={InstructorImage} className='shadow-white '/>
            </div>

            <div className='w-[50%] flex flex-col text-4xl font-semibold gap-10'>
                <div className='text-4xl font-semibold w-[50%]'>
                    Become an 
                    <HighlightText text={"Reader"}/>
                </div>
                <p className='font-medium text-[16px] w-[80%] text-richblack-300 leading-6'>
                Share your thoughts, ideas, and experiences with a global audience. Whether you're passionate about technology, lifestyle, business, or personal growth, blogging is the perfect way to inspire and connect with readers worldwide.  
                </p>
                <div className='w-fit'>
                    <Button active={true} linkto={"/signup"}>
                        <div className='flex flex-row gap-2 items-center'>
                            Start  Today
                            <FaArrowRight/>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

// import React from 'react';
// import InstructorImage from "../../../assets/Images/Instructor.jpg";
// import { HighlightText } from './HighlightText';
// import { Button } from './Button';
// import { FaArrowRight } from 'react-icons/fa';

// export const InstructorSection = () => {
//   return (
//     <div className='mt-16 mb-10 px-6'>
//       <div className='flex flex-row gap-16 items-center'>
        
//         {/* Left Section - Image */}
//         <div className='w-[45%]'>
//           <img src={InstructorImage} className='shadow-lg rounded-xl' alt="Writer at work" />
//         </div>

//         {/* Right Section - Content */}
//         <div className='w-[55%] flex flex-col text-4xl font-semibold gap-8'>
//           <h2 className='text-4xl font-semibold'>
//             Become a  
//             <HighlightText text={"Writer"} />
//           </h2>
          
//           <p className='font-medium text-[16px] w-[90%] text-richblack-300 leading-7'>
//             Share your thoughts, ideas, and experiences with a global audience.  
//             Whether you're passionate about technology, lifestyle, business, or personal growth,  
//             blogging is the perfect way to inspire and connect with readers worldwide.  
//           </p>

//           <p className='font-medium text-[16px] w-[90%] text-richblack-300 leading-7'>
//             Start your blogging journey today! Write, publish, and engage with a vibrant  
//             community while building your personal brand. Our platform provides cutting-edge  
//             tools to help you craft and share compelling content effortlessly.
//           </p>

//           {/* CTA Button */}
//           <div className='w-fit'>
//             <Button active={true} linkto={"/signup"}>
//               <div className='flex flex-row gap-2 items-center'>
//                 Start Writing Today
//                 <FaArrowRight />
//               </div>
//             </Button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };
