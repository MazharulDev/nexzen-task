import React from 'react';
import logo from '../../assets/img/logo.png'
import { IoMdNotificationsOutline } from 'react-icons/io'
import profile from '../../assets/img/profile.png'
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center'>
                <div className='ml-7'>
                    <img src={logo} alt="" />
                    <p className='font-bold text-xs text-center'>Nexzen Demo</p>
                </div>
                <h2 className='text-2xl font-bold ml-10'>Prospect</h2>
            </div>
            <div className='flex justify-center items-center mr-4'>
                <span className='relative mr-5'>
                    <IoMdNotificationsOutline className='text-4xl' />
                    <span class="absolute top-2 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full">0</span>
                </span>
                <img src={profile} alt="" />
                <p className='text-blue-500 font-bold'>superadmin</p>
                <BiChevronDown className='text-blue-500 font-bold text-xl' />
            </div>
        </div>
    );
};

export default Navbar;