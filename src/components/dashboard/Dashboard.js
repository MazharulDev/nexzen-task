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
import { FaPencilAlt, FaPhoneSquareAlt } from 'react-icons/fa';
import { RiMailSettingsFill } from 'react-icons/ri';
import { GiTeamDowngrade } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import { RiDeleteBinLine } from 'react-icons/ri'

const Dashboard = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <button className='py-2 px-6 rounded-full bg-green-500 text-white hover:bg-green-700'>+ Add New</button>
                    <button className='py-2 px-6 rounded-full bg-blue-500 text-white hover:bg-blue-700 flex items-center gap-2'><FiRefreshCcw /> Refresh</button>
                    <div className='relative flex justify-center items-center gap-4'>
                        <p className='absolute border-b-4 border-gray-600 w-[89%] z-0'></p>
                        <div className='mt-6 z-10'>
                            <p className='p-3 w-10 h-10 rounded-full bg-red-500 flex justify-center items-center text-white'>87</p>
                            <p className='text-xs mt-2'>New Prospect</p>
                        </div>
                        <div className='mt-6 z-10'>
                            <p className='p-3 w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center text-white'>11</p>
                            <p className='text-xs mt-2'>Initial Contact</p>
                        </div>
                        <div className='mt-6 z-10'>
                            <p className='p-3 w-10 h-10 rounded-full bg-green-500 flex justify-center items-center text-white'>3</p>
                            <p className='text-xs mt-2'>On followup</p>
                        </div>
                        <div className='mt-6 z-10 ml-4'>
                            <p className='p-3 w-10 h-10 rounded-full bg-purple-500 flex justify-center items-center text-white'>1</p>
                            <p className='text-xs mt-2'>Visited</p>
                        </div>
                        <div className='mt-6 z-10 ml-8'>
                            <p className='p-3 w-10 h-10 rounded-full bg-purple-900 flex justify-center items-center text-white'>5</p>
                            <p className='text-xs mt-2'>Lead Created</p>
                        </div>
                        <div className='mt-6 z-10'>
                            <p className='p-3 w-10 h-10 rounded-full bg-purple-700 flex justify-center items-center text-white'>0</p>
                            <p className='text-xs mt-2'>Hot Lead</p>
                        </div>
                        <div className='mt-6 z-10 ml-4'>
                            <p className='p-3 w-10 h-10 rounded-full bg-orange-900 flex justify-center items-center text-white'>6</p>
                            <p className='text-xs mt-2'>Aready Client</p>
                        </div>


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
                                <FaPencilAlt className='hover:text-green-500 cursor-pointer' />
                                <RiDeleteBinLine className='hover:text-red-500 cursor-pointer' />
                                <MdOutlineSpaceDashboard className='hover:text-blue-500 cursor-pointer' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <AiFillPlusCircle className='text-3xl text-green-500' />
                                <div>
                                    <p>PRO03390</p>
                                    <p>12-oct-2022</p>
                                    <p>11:11:11 PM</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex justify-start items-center gap-3'>
                                <img src={cLogo} alt="" />
                                <div>
                                    <p className='text-blue-500'>test 2</p>
                                    <p>(Ashulia)</p>
                                    <p>[Advertising Agencies]</p>
                                </div>
                            </div>
                        </td>
                        <td><div>
                            <p>Hotline Number</p>
                            <p>01800000000</p>
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
                                <p className='font-bold'>New prospect</p>
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
                                <FaPencilAlt className='hover:text-green-500 cursor-pointer' />
                                <RiDeleteBinLine className='hover:text-red-500 cursor-pointer' />
                                <MdOutlineSpaceDashboard className='hover:text-blue-500 cursor-pointer' />
                            </div>
                        </td>
                    </tr>


                </table>
            </div>
            <div class="flex justify-end mt-3">
                <ul class="flex">
                    <li><button
                        class="h-10 px-5 text-gray-600 bg-gray-200 border border-r-0 border-blue-500 ">Previous</button>
                    </li>
                    <li><button class="h-10 px-5 text-white bg-blue-500 border border-r-0 border-blue-600 ">1</button>
                    </li>
                    <li><button
                        class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">2</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">3</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">4</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">5</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">...</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-r-0 border-blue-600 hover:bg-blue-500 hover:text-white">1652</button>
                    </li>
                    <li><button class="h-10 px-5 text-blue-600 bg-white border border-blue-600 hover:bg-blue-500 hover:text-white">Next</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;