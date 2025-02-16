import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashboard/Sidebar';

export const Dashboard = () => {
    const {loading: authLoading}= useSelector((state)=>state.auth);
    const {loading: profileLoading}= useSelector((state)=>state.profile);

    if(authLoading || profileLoading){
        return(
            <div className='m-auto'>
                Loading
            </div>
        )
    }

  return (
    <div className='flex flex-row min-h-screen'>
        <Sidebar/>
        <div className='w-9/12 mx-auto'>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
