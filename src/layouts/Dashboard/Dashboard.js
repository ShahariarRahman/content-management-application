import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashBoard = () => {
    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 cursor-context-menu">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default DashBoard;