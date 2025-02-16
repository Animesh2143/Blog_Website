import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {sidebarLinks} from "../../../data/dashboard-links";
import {logout} from "../../../services/operations/authAPI";
import SidebarLink from './SidebarLink';
import { useLocation, useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import { ConfirmationModal } from '../../common/ConfirmationModal';


const Sidebar = () => {

  const {loading: authLoading}= useSelector((state)=>state.auth);
  const {user, loading: profileLoading}= useSelector((state)=>state.profile);
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const [confirmationModal,setConfirmationModal]=useState(null);
  const [isClicked,toggleIsClicked]=useState(false);


  if(authLoading || profileLoading){
    return(
        <div className='m-auto'>
            Loading
        </div>
    )
  }

  
  return (
    <div className='w-[13%]'>
        <div className='flex flex-col min-w-[20%] border-r-[1px] border-r-richblack-700 h-full 
            bg-gradient-to-b from-yellow-600 to-pink-600 py-10'>
            <div className='flex flex-col'>
              {
                sidebarLinks.map((link)=>{
                      return(
                        <SidebarLink key={link.id} link={link} iconName={link.icon}/>
                      ) 
                })
              }
            </div>
        

        <div className='my-8 h-[3px] bg-richblack-100'></div>
 
        <div className='flex flex-col'>
          <SidebarLink className=""
          link={{name:"Settings", path:"dashboard/settings"}} iconName={'VscSettingsGear'}/>

          <button  className='text-richblack-100 text-lg'
                onClick={()=> 
                        setConfirmationModal({
                        text1:"Are you sure to logout",
                        text2:"You will have to login again to reuse",
                        btn1Text: "Log Out",
                        btn2Text: "Cancel",
                        btn1Handler: ()=> dispatch(logout(navigate)),
                        btn2Handler: ()=> setConfirmationModal(null),
                      })
                }>
              <div className='flex flex-row py-2 ml-4 text-md gap-x-2 text-center text-richblack-100 font-medium'>
                <VscSignOut className="text-xl my-auto font-semibold"/>
                <span>Logout</span>
              </div>
          </button>
        </div>
        {
          confirmationModal && <ConfirmationModal modalData={confirmationModal}/>
        }
        </div>
    </div>
  )
}

export default Sidebar