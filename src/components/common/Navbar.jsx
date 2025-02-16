import React, { useEffect, useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import logo from "../../assets/Logo/logo.png";
import {NavbarLinks} from "../../data/navbar-links";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfileDropDown } from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiConnector';
import { IoIosArrowDown } from "react-icons/io";


export const Navbar = () => {

    const {token}= useSelector( (state)=> state.auth);
    const {user}= useSelector( (state)=> state.profile);

    const location= useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route}, location.pathname);
    }

  return (
    
    <div className={`h-16 items-center justify-center border-b-[1px] w-[100%] top-0
     border-b-white mt-1 pt-3 pb-3`}>
        <div className='max-w-screen-lg w-11/12 flex flex-row items-center justify-between mx-auto'>
            <Link to='/'>
                <img src={logo} width={160} height={42} className='-mt-2' loading='lazy'/>
            </Link>

            <nav>
                <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link,index)=>(
                            <li key={index}>
                                {
                                    link.title==="Blogs" && token===null ? "" :
                                    (<Link to={link.path} >
                                        <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-white"}`}>
                                            {link.title}
                                        </p>
                                    </Link>)
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>

            <div className='flex gap-x-4'>
                    
                    {
                        token===null && (
                            <Link to="/login" className='border border-pink-700 bg-pink-50 py-[8px] px-[12px] text-pink-500 rounded-md'>
                                <button>
                                    Log in
                                </button>
                            </Link>
                        )
                    }
                    {
                        token===null && (
                            <Link to="/signup" className='border border-pink-700 bg-pink-50 py-[8px] px-[12px] text-pink-500  rounded-md'>
                                <button>
                                    Sign up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token!==null && <ProfileDropDown/>
                    }
            </div>
        </div>
    </div>
  )
}
