import React from 'react';
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaUser, FaBell, FaHeart, FaEdit, FaChartBar, FaPhone, FaCommentDots, FaLifeRing, FaCog, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

const menuItems = [
    { label: 'Profile', icon: <FaUser />, description: 'Update and modify your profile' },
    { label: 'My Area', icon: <FaMapMarkerAlt />, description: 'Update and modify your profile' },
    { label: 'Notification', icon: <FaBell />, description: 'Update and modify your profile' },
    { label: 'My Contribution', icon: <FaHeart />, description: 'Update and modify your profile' },
    { label: 'My Notes', icon: <FaEdit />, description: 'Update and modify your profile' },
    { label: 'My Scores', icon: <FaChartBar />, description: 'Update and modify your profile' },
    { label: 'Contact', icon: <FaPhone />, description: 'Update and modify your profile' },
    { label: 'Feedback', icon: <FaCommentDots />, description: 'Update and modify your profile' },
    { label: 'Support', icon: <FaLifeRing />, description: 'Update and modify your profile' },
    { label: 'Settings', icon: <FaCog />, description: 'Update and modify your profile' },
];

const RightSidebar = ({ onClose }) => {
    return (
        <div className="w-80 h-full bg-[#FFF6E9] fixed top-0 z-50 shadow-lg overflow-y-auto rounded-bl-3xl p-4">
            <button onClick={onClose} className="absolute top-4 text-gray-600 text-xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                <IoIosArrowBack />
            </button>

            <div className="text-center mb-6 mt-10 relative">
                <img
                    src="/image.png"
                    alt="Profile"
                    className="mx-auto w-24 h-24 rounded-full object-cover border-4 border-white"
                />
                <p className="absolute top-20 right-[44%] bg-white p-1 rounded-full shadow">
                    ✏️
                </p>
                <h2 className="text-xl font-bold mt-3">Vikki Jain</h2>
                <span className='flex gap-2 items-center justify-center'><HiOutlineBriefcase />
                    <p className="text-gray-600 text-sm">Karyasamiti Sadasya</p></span>
            </div>
             <button className="absolute top-4 right-4 text-gray-600 text-xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                <IoMdLogOut />
            </button>

            <div className="space-y-2">
                {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-3 flex items-center justify-between shadow">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center bg-[#C01F10]/5 text-[#606060] h-10 w-10 rounded-xs text-lg">
                                {item.icon}
                            </span>
                            <div>
                                <p className={`text-[#C01F10]`}>{item.label}</p>
                                <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                        </div>
                        <span className="text-gray-400">&gt;</span>
                    </div>
                ))}
            </div>

            <button className="bg-red-600 text-white w-full py-3 mt-6 rounded-lg font-semibold">
                Log Out
            </button>
        </div>
    );
};


export default RightSidebar;
