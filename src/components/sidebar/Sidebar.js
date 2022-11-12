import React from 'react';
import { AiTwotoneSetting } from 'react-icons/ai'
import { RiDashboardFill } from 'react-icons/ri'
import { BsFillPersonFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { AiOutlineProject } from 'react-icons/ai'
import { BsListCheck } from 'react-icons/bs'
import { BiRocket } from 'react-icons/bi'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div>
            <div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400 ' >
                        <AiTwotoneSetting />
                    </div>
                    <p className='text-center'>Basic Settings</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <RiDashboardFill />
                    </div>
                    <p className='text-center'>Dashboard</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <BsFillPersonFill />
                    </div>
                    <p className='text-center'>Employees</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <HiMail />
                    </div>
                    <p className='text-center'>SMS</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <AiOutlineProject />
                    </div>
                    <p className='text-center'>Prospect</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <HiMail />
                    </div>
                    <p className='text-center'>Attendence</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <BsListCheck />
                    </div>
                    <p className='text-center'>Followup</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <BiRocket />
                    </div>
                    <p className='text-center'>Lead</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <BsFillChatQuoteFill />
                    </div>
                    <p className='text-center'>Quotation</p>
                </div>
                <div className='mt-4 w-full border-b-2 cursor-pointer hover:text-red-500'>
                    <div className='text-3xl flex justify-center text-slate-400' >
                        <FaShoppingCart />
                    </div>
                    <p className='text-center'>Order</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;