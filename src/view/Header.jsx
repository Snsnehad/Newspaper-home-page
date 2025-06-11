import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { MdSignalCellularAlt, MdWifi, MdBatteryFull } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi2';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isRightbarOpen, setIsRightbarOpen] = useState(false);
    return (
        <div className='bg-[rgb(254,235,202)]'>
            <div className="flex justify-between text-black text-sm font-medium pl-8 pt-8 pr-6">
                <span>09:41</span>
                <div className="flex gap-2 items-center text-black">
                    <MdSignalCellularAlt className="w-4 h-4" />
                    <MdWifi className="w-4 h-4" />
                    <MdBatteryFull className="w-6 h-4" />
                </div>
            </div>
            <img
                src="./lotus-corner.png"
                alt="Lotus corner"
                className="absolute top-0 left-0 w-16 h-16 object-cover z-10 m-0 p-0"
            />

            <div className='flex justify-between p-6 pl-4'>
                <span className='flex items-center justify-center bg-white rounded-full h-10 w-10' onClick={() => setIsSidebarOpen(true)}>
                    <HiMiniBars3BottomLeft className=' h-6 w-6' />
                </span>
                <span>
                    <img src='./logo.png'></img>
                </span>
                <span className='flex items-center justify-center bg-white rounded-full h-10 w-10'>
                    <CiUser className=' h-6 w-6' onClick={() => setIsRightbarOpen(true)} />
                </span>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 pl-4'>
                    <div>
                        <img src='./image.png' className='h-16 w-16 md:w-20 md:h-20'></img>
                    </div>
                    <div className='space-y-1'>
                       <p className='text-[#CF0000] font-bold text-sm'> विक्की जैन</p>
                       <div className='flex space-x-1 text-[#606060]'>
                        <HiOutlineBriefcase/>
                        <p className='text-[11.8px]'>कार्यसमिति सदस्य</p>
                       </div>
                    </div>
                    {/* <HiOutlineBriefcase/> */}
                </div>
                <div className="relative">
                    <img
                        src="/Vector6.png"
                        alt="Lotus background"
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute top-8 right-5 h-10 w-24 bg-white text-red-600 px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
                        <img src="/coin.png" className="h-5 w-5" alt="coin" />
                        <span className="font-semibold text-lg">4000</span>
                    </div>
                </div>

            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <Sidebar onClose={() => setIsSidebarOpen(false)} />
                    <div
                        className="flex-1 bg-black opacity-50"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                </div>
            )}
            {isRightbarOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <RightSidebar onClose={() => setIsRightbarOpen(false)} />
                    <div
                        className="flex-1 bg-black opacity-50"
                        onClick={() => setIsRightbarOpen(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default Header