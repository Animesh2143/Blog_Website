import React from 'react'
import { HighlightText } from '../homePage/HightlightText'

const LearningGridArray = [
  {
    "order": -1,
    "heading": "Elevate Your Blogging Journey with",
    "highlightText": "Expert Insights & Resources",
    "description": "Gain access to high-quality blogging resources, expert tips, and a thriving community of writers to help you succeed.",
    "BtnText": "Start Writing",
    "BtnLink": '/'
  },
  {
    "order": 1,
    "heading": "Exclusive Blogging Tips",
    "description": "Get expert blogging strategies to grow your audience and improve your content quality."
  },
  {
    "order": 2,
    "heading": "SEO Optimization Guide",
    "description": "Learn how to optimize your blogs for search engines and rank higher on Google."
  },
  {
    "order": 3,
    "heading": "Monetization Strategies",
    "description": "Discover various ways to monetize your blog through ads, sponsorships, and affiliate marketing."
  },
  {
    "order": 4,
    "heading": "Community & Networking",
    "description": "Connect with fellow bloggers, share experiences, and grow together in our engaging blogging community."
  },
  {
    "order": 5,
    "heading": "Content Planning Toolkit",
    "description": "Access content calendars, templates, and productivity tools to streamline your blogging workflow."
  },
]

const LearningGrid = () => {
  return (
    <div className='max-w-screen-lg mx-auto mb-10'>
      <div className='grid grid-cols-4 mt-20'>
        {
          LearningGridArray.map((data, index) => {
            return (
              <div key={index} className={`${index === 0 && "col-span-2"}
                  flex flex-col justify-start text-left gap-3
                  ${
                    data.order % 2 === 0 && data.order > 0 
                    ? "bg-gradient-to-r from-yellow-300 to-yellow-500" 
                    : "bg-gradient-to-r from-yellow-400 to-yellow-600"
                  }
                  ${data.order < 0 && "bg-gradient-to-r from-yellow-200 to-yellow-400"} 
                  ${data.order === 3 && "col-start-2"}
                  p-5 rounded-lg shadow-lg transition-transform hover:scale-[1.02]`
                }>
                {
                  data.order < 0 ? 
                  (
                    <div className='flex flex-col justify-start gap-3 h-fit w-fit p-5 text-left'>
                      <div className='text-3xl font-bold text-richblack-900'>
                        {data.heading}
                        <HighlightText text={data.highlightText} />
                      </div>
                      <div className='text-richblack-700'>
                        {data.description}
                      </div>
                      <div className={`px-6 py-3 rounded-md text-[13px] font-bold text-left w-fit ml-1
                      bg-richblack-900 text-richblack-25 hover:scale-95 transition-all duration-200`}>
                        {data.BtnText}
                      </div>
                    </div>
                  ) :
                  (
                    <div className='p-10'>
                      <h1 className='font-bold text-richblack-900 text-xl mb-5'>
                        {data.heading}
                      </h1>
                      <p className='text-sm text-richblack-700'>
                        {data.description}
                      </p>
                    </div>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LearningGrid
