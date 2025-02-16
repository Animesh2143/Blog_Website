import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from "../../../services/operations/authAPI"


export const ProfileDropDown = () => {

  const user=JSON.parse(localStorage.getItem("user"));

  
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const onClickHandler=(e)=>{
      e.preventDefault();
      dispatch(logout(navigate));
  }


  return (
    <div className='relative group'>
      <Link to={'/dashboard/my-profile'} className='flex flex-row items-center w-[100%] gap-x-1'>
        <img src={user.image ? user.image : 'https://img.icons8.com/material/344/user-male-circle--v1.png'} alt='User' className='rounded-full w-9 h-9'/>
        <FaAngleDown className='text-richblack-25 w-5 h-5'/>
        <div>
          <div className='absolute w-4 h-4 bg-richblack-100 rotate-45 -translate-x-5 translate-y-4 invisible ghover:visible hover:visible transition-all duration-200 rounded'></div>
          <div className='flex flex-col text-md p-3 gap-y-2 text-semibold text-center text-richblack-500 absolute w-[8vw] h-[12vh] bg-richblack-100 -translate-x-24 translate-y-6 rounded-md invisible group-hover:visible transition-all duration-200'>
              <Link to="/dashboard/my-profile" className='flex flex-row items-center gap-x-1 justify-start' >
                <MdDashboard className='scale-150'/>
                <p>Dashboard</p>
              </Link>
              <button onClick={onClickHandler} className='flex flex-row items-center gap-x-1 -ml-1'>
                <BiLogOut />
                <p>Logout</p>
              </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
