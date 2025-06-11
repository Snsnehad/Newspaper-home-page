import React from 'react';
import { FaHome, FaTrophy, FaUsers, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const menuItems = [
  { label: 'Home', icon: <FaHome />, active: true },
  { label: 'Leaderboard', icon: <FaTrophy /> },
  { label: 'Community', icon: <FaUsers /> },
  { label: 'My Area', icon: <FaMapMarkerAlt /> },
  { label: 'Chats', icon: <FaComments /> },
];

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg px-6  py-3  flex justify-between items-center z-40">
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col items-center justify-end w-16 h-8 cursor-pointer"
        >
          <div
            className={`
              text-xl transition-transform duration-200
              ${item.active ? 'text-red-600' : 'text-gray-500'}
              group-hover:-translate-y-2
            `}
          >
            {item.icon}
          </div>
          <span
            className={`
              absolute bottom-2 translate-y-full mt-1
              transition-all duration-200 transform
              opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
              text-xs whitespace-nowrap
              ${item.active ? 'text-red-600 font-semibold' : 'text-gray-500'}
            `}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
