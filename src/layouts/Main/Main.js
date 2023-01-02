import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Main = () => {
    return (
        <div className='cursor-context-menu'>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Main;