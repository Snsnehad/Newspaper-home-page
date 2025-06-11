import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const events = [
  {
    id: 1,
    title: 'Terapanth Sthapna Divas',
    location: 'Ahmedabad',
    date: '17',
    month: 'December',
    year: '2024',
    image: '/event-image.png',
  },
  {
    id: 2,
    title: 'Terapanth Sthapna Divas',
    location: 'Ahmedabad',
    date: '17',
    month: 'December',
    year: '2024',
    image: '/event-image.png',
  },
];

const EventsSection = () => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
          <h2 className="text-black font-semibold text-xl">Events</h2>
        </div>
        <button className="bg-red-600 text-white px-3 py-1 text-sm rounded-lg font-medium shadow">
          View All
        </button>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {events.map(event => (
          <div
            key={event.id}
            className="relative min-w-[280px] max-w-[280px] bg-white rounded-2xl overflow-hidden shadow"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[180px] object-cover"
              />

              <div className="absolute top-3 right-3 bg-white rounded-br-xl rounded-tl-xl shadow px-3 py-2 text-center">
                <p className="text-black font-bold text-md leading-4">{event.date}</p>
                <p className="text-xs text-gray-600">{event.month}</p>
                <p className="text-[10px] text-gray-400">{event.year}</p>
              </div>

              <button className="absolute bottom-3 right-3 bg-red-600 text-white text-xs px-3 py-1 rounded shadow font-medium flex flex-col items-center justify-center leading-tight h-[40px] w-[80px]">
                <span>Register</span>
                <span>Now</span>
              </button>
            </div>

            <div className="p-3">
              <h3 className="font-semibold text-[16px] leading-tight">{event.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <IoLocationOutline className="text-[18px] mr-1" />
                {event.location}
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default EventsSection;
