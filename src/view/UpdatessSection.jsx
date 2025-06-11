import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';


const updates = [
  {
    id: 1,
    title: 'कार्यसमिति बैठक',
    date: '17 अप्रैल 2024 राति 8 बजे',
    desc: 'सेजूंप लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है',
    bg: "bg-[url('/temple.jpeg')] bg-cover bg-center text-white",
  },
  {
    id: 2,
    title: 'कार्यसमिति बैठक',
    date: '17 अप्रैल 2024 राति 8 बजे',
    desc: 'सेजूंप लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है',
  },
  {
    id: 3,
    title: 'कार्यसमिति बैठक',
    date: '17 अप्रैल 2024 राति 8 बजे',
    desc: 'सेजूंप लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है',
  },
  {
    id: 3,
    title: 'कार्यसमिति बैठक',
    date: '17 अप्रैल 2024 राति 8 बजे',
    desc: 'सेजूंप लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है',
  },{
    id: 3,
    title: 'कार्यसमिति बैठक',
    date: '17 अप्रैल 2024 राति 8 बजे',
    desc: 'सेजूंप लिंक कार्यसमिति ग्रुप में पोस्ट कर दिया गया है',
  }
];

const UpdatesSection = () => {
  

  return (
    <div className="bg-white py-6 px-4">
      <div className="flex items-center gap-2 mb-4">
        <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
        <h2 className="text-black font-semibold text-xl">Updates</h2>
      </div>

      <HorizontalScrollCarousel
        items={updates}
        renderItem={(item) => (
  <div
    key={item.id}
    className={`min-w-[220px] max-w-[220px] h-[240px] rounded-2xl p-4 relative flex flex-col justify-between overflow-hidden ${
      item.bg || 'bg-gradient-to-tr from-yellow-100 to-red-100 text-black'
    }`}
  >
    {!item.bg && (
      <div
        className="absolute inset-0"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
          background: 'linear-gradient(to bottom right, #fcd34d, #fca5a5)',
        }}
      ></div>
    )}

    <div className="relative z-10">
      <h3 className="font-bold text-lg">{item.title}</h3>
      <p className="mt-2 text-sm leading-snug">{item.date}</p>
      <p className="mt-1 text-sm leading-snug">{item.desc}</p>
    </div>
    <div className="relative z-10 flex justify-between items-center mt-2">
      <span className="text-sm font-medium">More info</span>
      <div className="bg-white/80 text-red-700 rounded-full p-2">
        <FaArrowRight size={12} />
      </div>
    </div>
  </div>
)}

        viewAllCard={
          <div className="min-w-[220px] max-w-[220px] h-[240px] rounded-2xl bg-red-100 flex flex-col justify-center items-center p-4 text-black font-medium text-lg">
            <span>View All</span>
            <div className="mt-3 bg-white rounded-full p-2">
              <FaArrowRight size={12} />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default UpdatesSection;