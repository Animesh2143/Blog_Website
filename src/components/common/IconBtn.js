import React from 'react'

export const IconBtn = ({text,onClick,children,disabled,outline=false,customClasses,type}) => {


  return (
    <button className='bg-yellow-100 font-semibold px-5 py-2 rounded-lg'
    disabled={disabled ? disabled : false}
    onClick={onClick}
    type={type}>
        {
          children ? 
          (<span className='flex flex-row gap-x-2'>
              <span>
                  {text}
              </span>
              {children}
          </span>) :
          (text)
        }
    </button>
  )
}
