import React from 'react'

const statsData = [
  {
    "count": "10K+",
    "label": "Active Bloggers"
  },
  {
    "count": "500+",
    "label": "Expert Contributors"
  },
  {
    "count": "2M+",
    "label": "Monthly Readers"
  },
  {
    "count": "1K+",
    "label": "Published Articles"
  }
]

export const Stats = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-400 to-yellow-600 p-10 my-5 rounded-lg shadow-lg'>
      <section>
        <div className='max-w-screen-lg mx-auto'>
          <div className='flex flex-row justify-between px-10'>
            {
              statsData.map((data, index) => {
                return (
                  <div key={index} className='text-center'>
                    <h1 className='text-3xl font-bold text-richblack-900'>{data.count}</h1>
                    <h2 className='text-lg text-richblack-700'>{data.label}</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}
