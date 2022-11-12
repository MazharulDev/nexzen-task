import React from 'react';
import './Dashboard.css'
import { FiRefreshCcw } from 'react-icons/fi'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineSpaceDashboard, MdOutlineSwapVert } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiRocket } from 'react-icons/bi'
import { BiMessageRoundedDots } from 'react-icons/bi'
import { HiShoppingCart } from 'react-icons/hi'
import cLogo from '../../assets/img/cLogo.png'
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { RiMailSettingsFill } from 'react-icons/ri';
import { GiTeamDowngrade } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBinLine } from 'react-icons/ri'

const Dashboard = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <button className='py-2 px-6 rounded-full bg-green-500 text-white hover:bg-green-700'>+ Add New</button>
                    <button className='py-2 px-6 rounded-full bg-blue-500 text-white hover:bg-blue-700 flex items-center gap-2'><FiRefreshCcw /> Refresh</button>
                    <div className=''>

                    </div>
                </div>
                <div>
                    <div>
                        <button className='py-2 px-4 bg-blue-600 rounded-lg text-white flex items-center gap-2 hover:bg-blue-700'><BiDotsVerticalRounded /> Advance Search</button>

                    </div>
                </div>

            </div>
            <div className='flex justify-end items-center gap-2 mt-4'>
                <button className='border border-black bg-slate-200 px-1 rounded hover:bg-slate-300'>Copy</button>
                <button className='border border-black bg-slate-200 px-1 rounded hover:bg-slate-300'>Excel</button>
                <button className='border border-black bg-slate-200 px-1 rounded hover:bg-slate-300'>PDF</button>
            </div>
            <p className='mt-3'>Showing 1 to 2 of 3,303 entries</p>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex justify-center items-center gap-3'>
                    <p>Show</p>
                    <input className='border w-16 px-3' type="number" value={2} />
                    <p>entries</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <p>Search:</p>
                    <input className='border w-40' type="text" />
                </div>
            </div>
            <div>
                <table className='mt-5'>
                    <tr className='bg-blue-300 text-white'>
                        <th> <p>Prospect ID <br /> Create ID </p> </th>
                        <th><div className='flex justify-between items-end'>
                            Prospect Name <br /> Zone and Indrustry <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /> </div></th>
                        <th><div className='flex justify-between items-end'>
                            Primary Contact <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                        <th><div className='flex justify-between items-end'>
                            Follwup <br /> Activity <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                        <th><div className='flex justify-between items-end'>Stage <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                        <th><div className='flex justify-between items-end'>
                            Assigned To <br />Created By <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                        <th><div className='flex justify-between items-end'>Last Followup <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                        <th><div className='flex justify-between items-end'>Action <MdOutlineSwapVert className='float-right text-slate-300 hover:text-slate-50 cursor-pointer' /></div></th>
                    </tr>
                    <tr>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <AiFillPlusCircle className='text-3xl text-green-500' />
                                <div>
                                    <p>PRO03390</p>
                                    <p>13-oct-2022</p>
                                    <p>12:09:23 PM</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <img src={cLogo} alt="" />
                                <div>
                                    <p className='text-blue-500'>test 1</p>
                                    <p>(Bogra)</p>
                                    <p>[Advertising Agencies]</p>
                                </div>
                            </div>
                        </td>
                        <td><div>
                            <p>test (01711111111)</p>
                            <p>(test@mail.com)</p>
                        </div></td>
                        <td>
                            <div className='flex justify-start items-center gap-1 text-gray-600'>
                                <p className='flex items-center'><BiRocket />0</p>
                                <p className='flex items-center'><BiMessageRoundedDots />0</p>
                                <p className='flex items-center'><HiShoppingCart />0</p>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <p className='flex items-center'><FaPhoneSquareAlt />2</p>
                                <p className='flex items-center'><RiMailSettingsFill />0</p>
                                <p className='flex items-center'><GiTeamDowngrade />0</p>
                                <p className='flex items-center'><ImLocation2 />0</p>

                            </div>

                        </td>
                        <td>
                            <div>
                                <p className='font-bold'>Already Client</p>
                                <p>12-03-2022</p>
                                <p>12:03:05 PM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>miployess name 89</p>
                                <p className='font-bold'>superadmin</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>22-07-2022</p>
                                <p>superadmin</p>
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-center items-center gap-1 text-2xl'>
                                <GrEdit />
                                <RiDeleteBinLine />
                                <MdOutlineSpaceDashboard />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <AiFillPlusCircle className='text-3xl text-green-500' />
                                <div>
                                    <p>PRO03390</p>
                                    <p>13-oct-2022</p>
                                    <p>12:09:23 PM</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <img src={cLogo} alt="" />
                                <div>
                                    <p className='text-blue-500'>test 1</p>
                                    <p>(Bogra)</p>
                                    <p>[Advertising Agencies]</p>
                                </div>
                            </div>
                        </td>
                        <td><div>
                            <p>test (01711111111)</p>
                            <p>(test@mail.com)</p>
                        </div></td>
                        <td>
                            <div className='flex justify-start items-center gap-1 text-gray-600'>
                                <p className='flex items-center'><BiRocket />0</p>
                                <p className='flex items-center'><BiMessageRoundedDots />0</p>
                                <p className='flex items-center'><HiShoppingCart />0</p>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <p className='flex items-center'><FaPhoneSquareAlt />2</p>
                                <p className='flex items-center'><RiMailSettingsFill />0</p>
                                <p className='flex items-center'><GiTeamDowngrade />0</p>
                                <p className='flex items-center'><ImLocation2 />0</p>

                            </div>

                        </td>
                        <td>
                            <div>
                                <p className='font-bold'>Already Client</p>
                                <p>12-03-2022</p>
                                <p>12:03:05 PM</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>miployess name 89</p>
                                <p className='font-bold'>superadmin</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>22-07-2022</p>
                                <p>superadmin</p>
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-center items-center gap-1 text-2xl'>
                                <GrEdit />
                                <RiDeleteBinLine />
                                <MdOutlineSpaceDashboard />
                            </div>
                        </td>
                    </tr>


                </table>
            </div>
        </div>
    );
};

export default Dashboard;