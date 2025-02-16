import React from 'react';
import {Link} from "react-router-dom";

export const Button = ({children, active, linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center px-6 py-3 rounded-md text-[13px] font-bold
                        ${active ? "bg-pink-100 text-white" : "bg-yellow-300 text-richblack-900"}
                        hover:scale-95 transition-all duration-200`}>
            {children}
        </div>
    </Link>
  )
}
