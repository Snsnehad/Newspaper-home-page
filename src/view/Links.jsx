import React from 'react';
import { FaPollH, FaBookOpen, FaDownload, FaEllipsisV } from 'react-icons/fa';

const quickLinks = [
  { icon: <FaPollH size={22} />, label: 'Poll' },
  { icon: <FaBookOpen size={22} />, label: 'Knowledge' },
  { icon: <FaDownload size={22} />, label: 'Download' },
  { icon: <FaEllipsisV size={22} />, label: 'More' },
];

const Links = () => {
  return (
    <div className="bg-[#fafafa] p-6 pb-16">
      <div className="flex items-center gap-2 mb-4">
        <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
        <h2 className="text-black font-semibold text-xl">Quick Links</h2>
      </div>
      <div className="bg-white rounded-md shadow-md flex justify-around items-center p-4">
        {quickLinks.map((link, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-2  ">
              <span className="text-[#606060]">{link.icon}</span>
            </div>
            <span className="text-sm text-[#606060] font-medium">{link.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
