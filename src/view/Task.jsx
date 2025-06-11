import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Button from '../components/Button';

const tasks = [
    {
        status: 'Completed',
        label: 'Sangathan Yatra',
        color: '#F0FFEE',
        border: '#34A853',
        icon: <FaCheckCircle />,
    },
    {
        status: 'Due',
        label: 'Sangathan Yatra',
        color: '#FFE8E8',
        border: '#FF3E30',
        icon: <FaExclamationCircle />,
    },
    {
        status: 'In progress',
        label: 'Sangathan Yatra',
        color: '#F6F9FF',
        border: '#4285F4',
        daysLeft: 25,
    },
    {
        status: 'To do',
        label: 'Sangathan Yatra',
        color: '#FFF5E4',
        border: '#FBBC05',
        daysLeft: 25,
    },
];

const TaskCard = ({ task }) => {
    return (
        <div className="bg-white rounded-xl shadow flex justify-between items-center gap-4 p-6">
            <div className="flex items-center gap-4">
                {task.daysLeft ? (
                    <div className="bg-white rounded-xl shadow w-14 h-14 flex flex-col items-center justify-center text-xs">
                        <p className="text-[10px] text-gray-500"> {task.daysLeft} </p>
                        <p className={`text-[10px] font-semibold text-${task.color}-600`}>Days Left</p>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow w-14 h-14 flex items-center justify-center text-xl">
                        {task.icon}
                    </div>
                )}

                <div>
                    <p className="font-semibold text-gray-800">{task.label}</p>
                    {/* <span className={`text-xs font-medium border rounded-full px-2 py-0.5 text-${task.color}-600 bg-${task.color}-100 border-${task.color}-300`}>
                        {task.status}
                    </span> */}
                    <Button name={task.status} color={task.color} border={task.border} />
                </div>
            </div>
            <div className="text-gray-400 text-xl">⋮</div>
        </div>
    );
};

const Task = () => {
    return (
        <div className="p-4 bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <img src="/lotusicon.png" alt="Lotus" className="h-6 w-8" />
                    <h2 className="text-[#CF0000] font-bold text-lg">Tasks</h2>
                </div>
                <button className="text-red-600 text-sm font-semibold bg-white rounded-lg px-3 py-1 shadow">
                    View All
                </button>
            </div>
            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <TaskCard key={index} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Task;
