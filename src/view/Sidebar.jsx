import React from 'react';
import { IoClose } from 'react-icons/io5';
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaTasks, FaUsers, FaChartBar, FaComments, FaBook, FaRegLightbulb, FaPoll, FaHandHoldingHeart, FaClipboardList, FaSync, FaDownload, FaBullhorn, FaQuestionCircle, FaCog } from 'react-icons/fa';

const Sidebar = ({onClose}) => {
  return (
    <div className="w-72 h-screen bg-white shadow-lg flex flex-col justify-between p-4 rounded-tr-3xl z-50 overflow-auto">
      
      <div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <img src="/image.png" alt="Profile" className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h2 className="font-bold text-lg">Vikki Jain</h2>
              <div className="flex items-center justify-center text-sm text-gray-500 gap-2">
                <HiOutlineBriefcase/>
                Karyasamit Sadasya
              </div>
            </div>
          </div>
          <IoClose className="text-2xl cursor-pointer text-gray-500"  onClick={onClose} />
        </div>

        <ul className="mt-6 space-y-6 text-gray-700 text-base">
          <SidebarItem icon={<FaTasks />} label="My Task" />
          <SidebarItem icon={<FaUsers />} label="My Community" />
          <SidebarItem icon={<FaChartBar />} label="Leaderboard" />
          <SidebarItem icon={<FaComments />} label="Chats" />
          <SidebarItem icon={<FaBook />} label="Courses" />
          <SidebarItem icon={<FaRegLightbulb />} label="Knowledge" />
          <SidebarItem icon={<FaPoll />} label="Polls" />
          <SidebarItem icon={<FaHandHoldingHeart />} label="Contributions" />
          <SidebarItem icon={<FaClipboardList />} label="Quizzes" />
          <SidebarItem icon={<FaSync />} label="Updates" />
          <SidebarItem icon={<FaDownload />} label="Downloads" />
          <SidebarItem icon={<FaBullhorn />} label="News" />
          <SidebarItem icon={<FaQuestionCircle />} label="FAQ’s" />
          <SidebarItem icon={<FaCog />} label="Settings" />
        </ul>
      </div>
      <hr className='mt-6 mb-3'/>

      <div className="text-center text-[#737373] text-sm mb-14">
        Version 89799.00
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <li className="flex items-center gap-3 hover:text-black cursor-pointer px-2">
    <span className="text-lg text-[#606060]">{icon}</span>
    <span className='text-[#606060] font-semibold'>{label}</span>
  </li>
);

export default Sidebar;
