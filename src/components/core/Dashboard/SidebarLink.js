import React from 'react';
import * as Icons from "react-icons/vsc";
import { matchPath, NavLink, useLocation, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const SidebarLink = ({link, iconName}) => {

    const Icon= Icons[iconName];
    const location= useLocation();
    const dispatch= useDispatch();
    const {user}= useSelector((state)=>state.profile);

    // const isActive= useMatch(link.path);
    const matchRoute=(route)=>{
        return matchPath({path:route}, location.pathname);
    }

  return (
    <NavLink
    to={link.path}
    className={`${matchRoute(link.path) ? "bg-gradient-to-r from-yellow-300 to-pink-200  text-white font-semibold" : "bg-transparent text-richblack-100" } text-center relative`}
    >
        <span className={`absolute bg-yellow-100 h-full w-1 top-0 left-0
        ${matchRoute(link.path) ? "opacity-100" : "opacity-0" }
        `}>    
        </span>

        <div className='flex flex-row py-2 ml-4 text-md gap-x-2 text-center'>
            <Icon className="text-xl my-auto font-semibold"/>
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink