import React from 'react'

export const HighlightText = ({text}) => {
  return (
    <span className='bg-gradient-to-r from-brown-50 to-pink-500 bg-clip-text text-transparent font-bold'>
        {" "}{text}
    </span>
  )
}
