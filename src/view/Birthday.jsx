import React, { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import CardBackground from './CardBackground';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';

const birthdayItems = [
    {
        id: 1,
        name: "विक्की जैन",
        icon: <HiOutlineBriefcase />,
        image: "/birthdayImage.jpg",
        post: "Padadhukari Prabhari"
    },
    {
        id: 2,
        name: "विक्की जैन",
        icon: <HiOutlineBriefcase />,
        image: "/birthdayImage.jpg",
        post: "Padadhukari Prabhari"
    }, 
    // {
    //     id: 3,
    //     name: "विक्की जैन",
    //     icon: <HiOutlineBriefcase />,
    //     image: "/birthdayImage.jpg",
    //     post: "mjkhiluoiw"
    // }, 
];

const Birthday = () => {
    return (
        <div className="bg-white py-6 px-4">
            <div className="flex items-center gap-2 mb-4">
                <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
                <h2 className="text-black font-semibold text-xl">Birthdays</h2>
            </div>

            <HorizontalScrollCarousel
                items={birthdayItems}
                renderItem={(item) => (
                    <div
                        key={item.id}
                        className="relative min-w-[270px] max-w-[270px] h-[420px] p-4 rounded-2xl bg-white shadow-lg overflow-hidden"
                    >
                        <CardBackground />

                        <div
                            className="w-full h-full bg-cover bg-center z-10 relative rounded-2xl"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute bottom-10 left-2 right-2 bg-white/90 rounded-md px-2 py-1 z-20 text-center">
                                <span className="text-lg font-semibold text-black">{item.name}</span>
                                <div className="flex items-center justify-center gap-2 mt-1 text-gray-700 text-lg">
                                    <span>{item.icon}</span>
                                    <span>{item.post}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

            <div className="flex justify-center mt-4">
                <button className="border border-[#CF0000] text-[#CF0000] w-full py-2 text-2xl rounded-lg font-medium md:w-auto md:p-2">
                    Upcoming Birthdays
                </button>
            </div>
        </div>
    );
};


export default Birthday;
